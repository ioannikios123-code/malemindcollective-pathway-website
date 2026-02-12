-- Drop the foreign key constraint on intake_forms.user_id since this is a public form
ALTER TABLE public.intake_forms DROP CONSTRAINT IF EXISTS intake_forms_user_id_fkey;

-- Make user_id nullable and set a default for anonymous submissions
ALTER TABLE public.intake_forms ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.intake_forms ALTER COLUMN user_id SET DEFAULT gen_random_uuid();
