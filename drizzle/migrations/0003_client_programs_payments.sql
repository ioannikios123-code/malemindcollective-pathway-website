CREATE TABLE public.client_programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_user_id uuid NOT NULL,
  program text NOT NULL,
  start_date date,
  status text NOT NULL DEFAULT 'active',
  monthly_price numeric,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.client_programs TO authenticated;
GRANT ALL ON public.client_programs TO service_role;
ALTER TABLE public.client_programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Client or admin reads programs" ON public.client_programs FOR SELECT TO authenticated USING (auth.uid() = client_user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admin manages programs" ON public.client_programs FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.client_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_user_id uuid NOT NULL,
  amount numeric NOT NULL,
  paid_on date NOT NULL DEFAULT current_date,
  method text,
  note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.client_payments TO authenticated;
GRANT ALL ON public.client_payments TO service_role;
ALTER TABLE public.client_payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Client or admin reads payments" ON public.client_payments FOR SELECT TO authenticated USING (auth.uid() = client_user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admin manages payments" ON public.client_payments FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "Admins view all purchases" ON public.purchases FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
GRANT SELECT ON public.purchases TO authenticated;
GRANT ALL ON public.purchases TO service_role;