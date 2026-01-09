-- Create course materials table to store downloadable resources
CREATE TABLE public.course_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type TEXT DEFAULT 'pdf',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.course_materials ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view materials for courses they've purchased
CREATE POLICY "Users can view materials for purchased courses"
ON public.course_materials
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.purchases
    WHERE purchases.course_id = course_materials.course_id
    AND purchases.user_id = auth.uid()
    AND purchases.status = 'completed'
  )
);

-- Create trigger for updated_at
CREATE TRIGGER update_course_materials_updated_at
BEFORE UPDATE ON public.course_materials
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert the course materials (linking to your courses)
-- We'll link these to general course IDs - you can update the course_id values later
INSERT INTO public.course_materials (title, description, file_url, file_type, display_order) VALUES
('Reclaim Your Power: The Modern Man''s Blueprint', 'Foundation module covering the roadmap to navigate modern challenges and build the life you deserve.', '/course-materials/reclaim-your-power.pdf', 'pdf', 1),
('Mindset Mastery', 'Unlock your full potential through mental transformation. Master your mindset, and everything else follows.', '/course-materials/mindset-mastery.pdf', 'pdf', 2),
('Physical Excellence', 'Master your body, reclaim your strength. Build the foundation for unstoppable success.', '/course-materials/physical-excellence.pdf', 'pdf', 3),
('Modern Masculinity', 'Redefining strength through emotional intelligence, vulnerability, and authentic self-expression.', '/course-materials/modern-masculinity.pdf', 'pdf', 4);