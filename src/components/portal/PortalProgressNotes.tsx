import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

interface Material { id: string; title: string }
interface Note { id: string; title: string; body: string; session_date: string | null; created_at: string }

export function progressPercent(done: number, total: number) {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

export default function PortalProgressNotes({ userId, materials }: { userId: string; materials: Material[] }) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    supabase.from("material_progress").select("material_id").eq("user_id", userId)
      .then(({ data }) => setDone(new Set((data ?? []).map((r) => r.material_id))));
    supabase.from("coaching_notes").select("id,title,body,session_date,created_at")
      .eq("client_user_id", userId).order("created_at", { ascending: false })
      .then(({ data }) => setNotes(data ?? []));
  }, [userId]);

  const toggle = async (id: string) => {
    const next = new Set(done);
    if (done.has(id)) {
      next.delete(id);
      await supabase.from("material_progress").delete().eq("user_id", userId).eq("material_id", id);
    } else {
      next.add(id);
      await supabase.from("material_progress").insert({ user_id: userId, material_id: id });
    }
    setDone(next);
  };

  const pct = progressPercent(materials.filter((m) => done.has(m.id)).length, materials.length);

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      <section className="rounded-lg border border-border bg-card/60 p-6">
        <h2 className="text-2xl mb-2">Your progress</h2>
        {materials.length === 0 ? (
          <p className="text-muted-foreground">Your progress will appear here once you're enrolled in a program.</p>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6">
              <Progress value={pct} className="flex-1" />
              <span className="text-sm tabular-nums text-muted-foreground">{pct}%</span>
            </div>
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m.id} className="flex items-center gap-3">
                  <Checkbox id={`m-${m.id}`} checked={done.has(m.id)} onCheckedChange={() => toggle(m.id)} />
                  <label htmlFor={`m-${m.id}`} className="text-sm cursor-pointer">{m.title}</label>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="rounded-lg border border-border bg-card/60 p-6">
        <h2 className="text-2xl mb-2">Coaching notes</h2>
        {notes.length === 0 ? (
          <p className="text-muted-foreground">Notes from your coaching sessions will appear here after your first session.</p>
        ) : (
          <ul className="space-y-5">
            {notes.map((n) => (
              <li key={n.id} className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs text-muted-foreground mb-1">
                  {new Date(n.session_date ?? n.created_at).toLocaleDateString()}
                </p>
                <h3 className="text-lg mb-1">{n.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{n.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
