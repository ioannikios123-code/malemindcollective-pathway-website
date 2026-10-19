import { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Send } from 'lucide-react';

const schema = z.object({
  fullName: z.string().trim().min(1, 'Enter your name.').max(100),
  email: z.string().trim().email('Enter a valid email address.').max(255),
  phone: z.string().trim().max(40),
  program: z.enum(['discovery', 'one-on-one']),
  goals: z.string().trim().min(10, 'Tell us a little more about your goals (at least 10 characters).').max(3000),
  availability: z.string().trim().min(1, 'Include your preferred times and time zone.').max(500),
});

export default function BookingInquiryForm({ initialProgram = 'discovery' }: { initialProgram?: 'discovery' | 'one-on-one' }) {
  const [data, setData] = useState({ fullName: '', email: '', phone: '', program: initialProgram, goals: '', availability: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ id: string; notificationSent: boolean } | null>(null);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    const parsed = schema.safeParse(data);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message || 'Check your details.'); return; }
    setBusy(true);
    try {
      const { data: response, error: invokeError } = await supabase.functions.invoke('booking-request', { body: parsed.data });
      if (invokeError || !response?.saved) throw new Error(response?.error || 'Your request could not be saved. Please try again.');
      setResult(response);
    } catch (e) { setError(e instanceof Error ? e.message : 'Please try again.'); }
    finally { setBusy(false); }
  };
  if (result) return <div role="status" className="py-8 space-y-4">
    <CheckCircle2 className="text-primary" size={36} />
    <h3 className="text-2xl">Your inquiry is saved</h3>
    <p className="text-muted-foreground">Your appointment is not confirmed yet. We’ll arrange a suitable time with you by email.</p>
    {!result.notificationSent && <p className="text-muted-foreground">The email alert could not be sent, but your inquiry is safely stored. You can also contact malemindcollective@gmail.com.</p>}
    <p className="text-xs text-muted-foreground break-all">Reference: {result.id}</p>
    <Button variant="outline" onClick={() => { setResult(null); setData({ fullName: '', email: '', phone: '', program: initialProgram, goals: '', availability: '' }); }}>New inquiry</Button>
  </div>;
  return <form onSubmit={submit} className="space-y-5">
    <div className="grid sm:grid-cols-2 gap-5">
      <div><label htmlFor="booking-name" className="block text-sm mb-2">Full name *</label><Input id="booking-name" autoComplete="name" required maxLength={100} value={data.fullName} onChange={e => setData({ ...data, fullName: e.target.value })} /></div>
      <div><label htmlFor="booking-email" className="block text-sm mb-2">Email address *</label><Input id="booking-email" type="email" autoComplete="email" required maxLength={255} value={data.email} onChange={e => setData({ ...data, email: e.target.value })} /></div>
    </div>
    <div><label htmlFor="booking-phone" className="block text-sm mb-2">Phone (optional)</label><Input id="booking-phone" type="tel" autoComplete="tel" maxLength={40} value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} /></div>
    <div><label id="booking-program-label" className="block text-sm mb-2">I’m interested in</label><Select value={data.program} onValueChange={value => { if (value === 'discovery' || value === 'one-on-one') setData({ ...data, program: value }); }}><SelectTrigger aria-labelledby="booking-program-label"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="discovery">Free discovery call — $0</SelectItem><SelectItem value="one-on-one">1-on-1 coaching — $297/month</SelectItem></SelectContent></Select></div>
    <div><label htmlFor="booking-goals" className="block text-sm mb-2">Your goals and current challenges *</label><Textarea id="booking-goals" required minLength={10} maxLength={3000} rows={4} value={data.goals} onChange={e => setData({ ...data, goals: e.target.value })} /></div>
    <div><label htmlFor="booking-availability" className="block text-sm mb-2">Preferred days, times and time zone *</label><Textarea id="booking-availability" required maxLength={500} rows={2} placeholder="For example: Tuesday evenings, Toronto time" value={data.availability} onChange={e => setData({ ...data, availability: e.target.value })} /></div>
    <p className="text-sm text-muted-foreground">By submitting, you agree to be contacted about this inquiry. No payment is taken and no appointment is reserved.</p>
    {error && <p role="alert" className="text-destructive text-sm">{error}</p>}
    <Button type="submit" variant="hero" className="w-full" disabled={busy}><Send size={18} className="mr-2" />{busy ? 'Saving inquiry…' : 'Request a call'}</Button>
  </form>;
}