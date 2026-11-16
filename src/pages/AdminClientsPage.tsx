import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { coachingOffer } from "@/lib/coaching-offer";

type Client = { user_id: string; full_name: string; email: string; phone: string | null };
type Program = { id: string; client_user_id: string; program: string; start_date: string | null; status: string; monthly_price: number | null };
type Payment = { id: string; client_user_id: string; amount: number; paid_on: string; method: string | null; note: string | null };
type Course = { id: string; title: string };

const AdminClientsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [status, setStatus] = useState<"loading" | "denied" | "ok">("loading");
  const [me, setMe] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selected, setSelected] = useState("");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", temp_password: "", program: "1-on-1 Coaching", start_date: "", monthly_price: String(coachingOffer.monthlyPrice) });
  const [courseIds, setCourseIds] = useState<string[]>([]);
  const [pay, setPay] = useState({ amount: String(coachingOffer.monthlyPrice), paid_on: "", method: "Stripe", note: "" });

  const load = async (uid: string) => {
    const [c, p, pm] = await Promise.all([
      supabase.from("profiles").select("user_id,full_name,email,phone").order("full_name"),
      supabase.from("client_programs").select("*").order("created_at", { ascending: false }),
      supabase.from("client_payments").select("*").order("paid_on", { ascending: false }),
    ]);
    setClients((c.data ?? []).filter((x) => x.user_id !== uid));
    setPrograms((p.data ?? []) as Program[]);
    setPayments((pm.data ?? []) as Payment[]);
  };

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return navigate("/client-login");
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (!isAdmin) return setStatus("denied");
      setMe(user.id);
      const { data } = await supabase.from("courses").select("id,title").eq("is_active", true).order("title");
      setCourses(data ?? []);
      await load(user.id);
      setStatus("ok");
    })();
  }, [navigate]);

  const createClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { data, error } = await supabase.functions.invoke("admin-create-client", {
      body: { ...form, monthly_price: form.monthly_price ? Number(form.monthly_price) : undefined, phone: form.phone || undefined, course_ids: courseIds },
    });
    setBusy(false);
    const msg = error ? (await (error as any).context?.json?.().catch(() => null))?.error ?? error.message : data?.error;
    if (msg) return toast({ title: "Could not create client", description: msg, variant: "destructive" });
    toast({ title: "Client account created", description: `Share the email and temporary password with ${form.full_name}.` });
    setForm({ ...form, full_name: "", email: "", phone: "", temp_password: "" });
    setCourseIds([]);
    await load(me);
    setSelected(data.user_id);
  };

  const addPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("client_payments").insert({
      client_user_id: selected, amount: Number(pay.amount), paid_on: pay.paid_on || undefined, method: pay.method || null, note: pay.note || null,
    });
    if (error) return toast({ title: "Could not save payment", description: error.message, variant: "destructive" });
    setPay({ ...pay, note: "" });
    load(me);
  };

  const setProgramStatus = async (id: string, s: string) => {
    await supabase.from("client_programs").update({ status: s }).eq("id", id);
    load(me);
  };

  if (status === "loading") return <main className="min-h-screen pt-28 container">Loading…</main>;
  if (status === "denied") return (
    <main className="min-h-screen pt-28 container">
      <h1 className="text-3xl mb-2">Owner access only</h1>
      <Button onClick={() => navigate("/portal")}>Go to my portal</Button>
    </main>
  );

  const client = clients.find((c) => c.user_id === selected);
  const cPrograms = programs.filter((p) => p.client_user_id === selected);
  const cPayments = payments.filter((p) => p.client_user_id === selected);
  const total = cPayments.reduce((s, p) => s + Number(p.amount), 0);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <main className="min-h-screen pt-28 pb-16 container max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <h1 className="text-3xl">Clients</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/admin/notes")}>Coaching notes</Button>
          <Button variant="outline" onClick={() => navigate("/portal")}>Portal</Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <section className="rounded-lg border border-border p-5">
          <h2 className="text-xl mb-4">Enroll a new client</h2>
          <form onSubmit={createClient} className="space-y-3">
            <Input placeholder="Full name" value={form.full_name} onChange={set("full_name")} required maxLength={120} />
            <Input type="email" placeholder="Email" value={form.email} onChange={set("email")} required />
            <Input placeholder="Phone (optional)" value={form.phone} onChange={set("phone")} maxLength={40} />
            <Input placeholder="Temporary password (8+ characters)" value={form.temp_password} onChange={set("temp_password")} minLength={8} required />
            <Input placeholder="Program" value={form.program} onChange={set("program")} required />
            <div className="grid grid-cols-2 gap-3">
              <Input type="date" aria-label="Start date" value={form.start_date} onChange={set("start_date")} />
              <Input type="number" min="0" aria-label="Monthly price" placeholder="Monthly price" value={form.monthly_price} onChange={set("monthly_price")} />
            </div>
            {courses.length > 0 && (
              <fieldset className="text-sm space-y-1">
                <legend className="mb-1 text-muted-foreground">Give access to course materials</legend>
                {courses.map((c) => (
                  <label key={c.id} className="flex items-center gap-2">
                    <input type="checkbox" checked={courseIds.includes(c.id)}
                      onChange={(e) => setCourseIds(e.target.checked ? [...courseIds, c.id] : courseIds.filter((x) => x !== c.id))} />
                    {c.title}
                  </label>
                ))}
              </fieldset>
            )}
            <Button type="submit" variant="hero" disabled={busy} className="w-full">{busy ? "Creating…" : "Create client account"}</Button>
          </form>
        </section>

        <section>
          <label className="block text-sm mb-2" htmlFor="client">Client profile</label>
          <select id="client" value={selected} onChange={(e) => setSelected(e.target.value)}
            className="w-full h-10 rounded-md border border-input bg-background px-3 mb-6">
            <option value="">{clients.length ? "Choose a client…" : "No clients yet"}</option>
            {clients.map((c) => <option key={c.user_id} value={c.user_id}>{c.full_name} — {c.email}</option>)}
          </select>

          {client && (
            <div className="space-y-6">
              <div className="rounded-lg border border-border p-5">
                <h2 className="text-2xl">{client.full_name}</h2>
                <p className="text-sm text-muted-foreground">{client.email}{client.phone ? ` · ${client.phone}` : ""}</p>
                <h3 className="mt-4 mb-2 font-semibold">Programs</h3>
                {cPrograms.length === 0 && <p className="text-sm text-muted-foreground">No program assigned.</p>}
                {cPrograms.map((p) => (
                  <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-2 border-t border-border text-sm">
                    <span>{p.program}{p.monthly_price ? ` · $${p.monthly_price}/mo` : ""}{p.start_date ? ` · from ${p.start_date}` : ""}</span>
                    <select value={p.status} onChange={(e) => setProgramStatus(p.id, e.target.value)}
                      className="h-8 rounded-md border border-input bg-background px-2">
                      <option value="active">Active</option><option value="paused">Paused</option><option value="completed">Completed</option>
                    </select>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border p-5">
                <div className="flex justify-between mb-3">
                  <h3 className="font-semibold">Payments</h3>
                  <span className="text-primary font-semibold">Total ${total.toFixed(2)}</span>
                </div>
                <form onSubmit={addPayment} className="grid grid-cols-2 gap-2 mb-4">
                  <Input type="number" min="0" step="0.01" aria-label="Amount" value={pay.amount} onChange={(e) => setPay({ ...pay, amount: e.target.value })} required />
                  <Input type="date" aria-label="Paid on" value={pay.paid_on} onChange={(e) => setPay({ ...pay, paid_on: e.target.value })} />
                  <Input placeholder="Method" value={pay.method} onChange={(e) => setPay({ ...pay, method: e.target.value })} />
                  <Input placeholder="Note" value={pay.note} onChange={(e) => setPay({ ...pay, note: e.target.value })} />
                  <Button type="submit" variant="outline" className="col-span-2">Record payment</Button>
                </form>
                {cPayments.map((p) => (
                  <div key={p.id} className="flex justify-between py-2 border-t border-border text-sm">
                    <span>{p.paid_on} · {p.method ?? "—"}{p.note ? ` · ${p.note}` : ""}</span>
                    <span>${Number(p.amount).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" onClick={() => navigate("/admin/notes")}>Write a coaching note for {client.full_name}</Button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AdminClientsPage;
