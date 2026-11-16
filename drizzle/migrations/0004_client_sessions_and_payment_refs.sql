CREATE TABLE public.client_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_user_id uuid NOT NULL,
  starts_at timestamptz NOT NULL,
  duration_minutes integer NOT NULL DEFAULT 60,
  topic text,
  meeting_link text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.client_sessions TO authenticated;
GRANT ALL ON public.client_sessions TO service_role;
ALTER TABLE public.client_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Client or admin reads sessions" ON public.client_sessions FOR SELECT TO authenticated USING (auth.uid() = client_user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admin manages sessions" ON public.client_sessions FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

ALTER TABLE public.client_payments ADD COLUMN stripe_ref text;
CREATE UNIQUE INDEX client_payments_stripe_ref_key ON public.client_payments (stripe_ref) WHERE stripe_ref IS NOT NULL;
ALTER TABLE public.client_programs ADD COLUMN stripe_subscription_id text;
ALTER TABLE public.booking_requests ADD COLUMN client_email_status text NOT NULL DEFAULT 'pending';