import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

const Body = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  temp_password: z.string().min(8).max(72),
  program: z.string().trim().min(1).max(120),
  start_date: z.string().optional(),
  monthly_price: z.number().nonnegative().optional(),
  course_ids: z.array(z.string().uuid()).max(20).default([]),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = Deno.env.get("SUPABASE_URL")!;
  const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "");
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: "Not signed in" }, 401);
  const { data: isAdmin } = await admin.rpc("has_role", { _user_id: user.id, _role: "admin" });
  if (!isAdmin) return json({ error: "Owner access only" }, 403);

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, 400);
  const b = parsed.data;

  const { data: created, error } = await admin.auth.admin.createUser({
    email: b.email, password: b.temp_password, email_confirm: true,
    user_metadata: { full_name: b.full_name },
  });
  if (error || !created.user) return json({ error: error?.message ?? "Could not create account" }, 400);
  const id = created.user.id;

  if (b.phone) await admin.from("profiles").update({ phone: b.phone }).eq("user_id", id);
  await admin.from("client_programs").insert({
    client_user_id: id, program: b.program, start_date: b.start_date || null, monthly_price: b.monthly_price ?? null,
  });
  if (b.course_ids.length) {
    const { data: courses } = await admin.from("courses").select("id,price").in("id", b.course_ids);
    await admin.from("purchases").insert((courses ?? []).map((c) => ({
      user_id: id, course_id: c.id, amount: c.price, status: "completed", stripe_payment_id: "manual-enrollment",
    })));
  }
  return json({ user_id: id });
});
