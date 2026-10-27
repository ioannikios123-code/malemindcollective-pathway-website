DO $$ BEGIN CREATE TYPE public.app_role AS ENUM ('admin','user'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users view own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.material_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  material_id uuid NOT NULL REFERENCES public.course_materials(id) ON DELETE CASCADE,
  completed_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, material_id)
);
GRANT SELECT, INSERT, DELETE ON public.material_progress TO authenticated;
GRANT ALL ON public.material_progress TO service_role;
ALTER TABLE public.material_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own progress read" ON public.material_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Own progress add" ON public.material_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own progress remove" ON public.material_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.coaching_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_user_id uuid NOT NULL,
  title text NOT NULL,
  body text NOT NULL,
  session_date date,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.coaching_notes TO authenticated;
GRANT ALL ON public.coaching_notes TO service_role;
ALTER TABLE public.coaching_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Client reads own notes" ON public.coaching_notes FOR SELECT TO authenticated USING (auth.uid() = client_user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write notes" ON public.coaching_notes FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update notes" ON public.coaching_notes FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins delete notes" ON public.coaching_notes FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));