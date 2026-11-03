import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Client = { user_id: string; full_name: string; email: string };
type Note = { id: string; title: string; body: string; session_date: string | null; client_user_id: string };

const AdminNotesPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [status, setStatus] = useState<"loading" | "denied" | "ok">("loading");
  const [clients, setClients] = useState<Client[]>([]);
  const [clientId, setClientId] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return navigate("/client-login");
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (!isAdmin) return setStatus("denied");
      const { data } = await supabase.from("profiles").select("user_id,full_name,email").order("full_name");
      setClients((data ?? []).filter((c) => c.user_id !== user.id));
      setStatus("ok");
    })();
  }, [navigate]);

  const loadNotes = async (id: string) => {
    const { data } = await supabase.from("coaching_notes")
      .select("id,title,body,session_date,client_user_id").eq("client_user_id", id)
      .order("created_at", { ascending: false });
    setNotes(data ?? []);
  };

  useEffect(() => { if (clientId) loadNotes(clientId); else setNotes([]); }, [clientId]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId || !title.trim() || !body.trim()) return;
    setSaving(true);
    const { error } = await supabase.from("coaching_notes").insert({
      client_user_id: clientId, title: title.trim(), body: body.trim(), session_date: date || null,
    });
    setSaving(false);
    if (error) return toast({ title: "Could not save note", description: error.message, variant: "destructive" });
    setTitle(""); setBody(""); setDate("");
    toast({ title: "Note saved" });
    loadNotes(clientId);
  };

  const remove = async (id: string) => {
    await supabase.from("coaching_notes").delete().eq("id", id);
    loadNotes(clientId);
  };

  if (status === "loading") return <main className="min-h-screen pt-28 container">Loading…</main>;
  if (status === "denied") return (
    <main className="min-h-screen pt-28 container">
      <h1 className="text-3xl mb-2">Owner access only</h1>
      <p className="text-muted-foreground mb-4">This page is for the coach's account.</p>
      <Button onClick={() => navigate("/portal")}>Go to my portal</Button>
    </main>
  );

  return (
    <main className="min-h-screen pt-28 pb-16 container max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl">Coaching notes</h1>
        <Button variant="outline" onClick={() => navigate("/portal")}>Portal</Button>
      </div>
      <label className="block text-sm mb-2" htmlFor="client">Client</label>
      <select id="client" value={clientId} onChange={(e) => setClientId(e.target.value)}
        className="w-full h-10 rounded-md border border-input bg-background px-3 mb-8">
        <option value="">{clients.length ? "Choose a client…" : "No clients have signed up yet"}</option>
        {clients.map((c) => <option key={c.user_id} value={c.user_id}>{c.full_name} — {c.email}</option>)}
      </select>
      {clientId && (
        <>
          <form onSubmit={save} className="space-y-3 mb-10">
            <Input placeholder="Note title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={200} required />
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Session date" />
            <Textarea placeholder="What you covered and next steps" value={body} onChange={(e) => setBody(e.target.value)} rows={6} maxLength={5000} required />
            <Button type="submit" variant="hero" disabled={saving}>{saving ? "Saving…" : "Add note"}</Button>
          </form>
          <div className="space-y-4">
            {notes.map((n) => (
              <div key={n.id} className="rounded-lg border border-border p-4">
                <div className="flex justify-between gap-4">
                  <h3 className="text-lg">{n.title}</h3>
                  <Button size="sm" variant="ghost" onClick={() => remove(n.id)}>Delete</Button>
                </div>
                {n.session_date && <p className="text-xs text-muted-foreground">{n.session_date}</p>}
                <p className="mt-2 whitespace-pre-wrap text-sm">{n.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default AdminNotesPage;
