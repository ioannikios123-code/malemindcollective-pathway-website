import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.25.76';

const schema = z.object({
  fullName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  program: z.enum(['discovery', 'one-on-one']),
  goals: z.string().trim().min(10).max(3000),
  availability: z.string().trim().min(1).max(500),
});
const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return respond({ error: 'Please check your contact details, goals and availability.' }, 400);
    const data = parsed.data;
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Booking is temporarily unavailable.' }, 503);
    const client = createClient(url, key);
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${key}:${ip}`));
    const hash = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
    const { count, error: countError } = await client.from('booking_requests').select('id', { count: 'exact', head: true })
      .eq('ip_hash', hash).gte('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString());
    if (countError) return respond({ error: 'Booking is temporarily unavailable.' }, 503);
    if ((count || 0) >= 5) return respond({ error: 'Too many requests. Please try again in an hour.' }, 429);
    const { data: row, error } = await client.from('booking_requests').insert({
      full_name: data.fullName, email: data.email, phone: data.phone || null,
      program: data.program, goals: data.goals, availability: data.availability, ip_hash: hash,
    }).select('id').single();
    if (error || !row) return respond({ error: 'Could not save your request. Please try again.' }, 503);
    let notificationSent = false;
    let emailId: string | null = null;
    const resendKey = Deno.env.get('RESEND_API_KEY');
    if (resendKey) {
      try {
        const result = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `booking-${row.id}` },
          body: JSON.stringify({
            from: 'MaleMindCollective <onboarding@resend.dev>',
            to: ['malemindcollective@gmail.com'], reply_to: data.email,
            subject: `New ${data.program === 'discovery' ? 'discovery call' : 'coaching'} inquiry`,
            text: `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nProgram: ${data.program}\nGoals: ${data.goals}\nAvailability / time zone: ${data.availability}\nRequest: ${row.id}`,
          }), signal: AbortSignal.timeout(15000),
        });
        const response = await result.json();
        notificationSent = result.ok && typeof response.id === 'string';
        emailId = notificationSent ? response.id : null;
      } catch { /* Inquiry remains saved when email is unavailable. */ }
    }
    await client.from('booking_requests').update({ email_status: notificationSent ? 'accepted' : 'failed', email_id: emailId }).eq('id', row.id);
    return respond({ id: row.id, saved: true, notificationSent });
  } catch {
    return respond({ error: 'Invalid request. Please check your details.' }, 400);
  }
});