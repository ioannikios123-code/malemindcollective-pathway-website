-- Allow anonymous users to insert into intake_forms (public-facing form)
CREATE POLICY "Anyone can submit intake forms"
ON public.intake_forms
FOR INSERT
WITH CHECK (true);
