-- Create storage bucket for video uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('videos', 'videos', true);

-- Create policies for video storage
CREATE POLICY "Anyone can view videos" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'videos');

CREATE POLICY "Authenticated users can upload videos" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'videos' AND auth.uid() IS NOT NULL);

CREATE POLICY "Users can delete their own videos" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'videos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create videos table for tracking uploaded content
CREATE TABLE public.videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  video_type TEXT NOT NULL DEFAULT 'upload', -- 'upload', 'youtube', 'vimeo'
  thumbnail_url TEXT,
  duration TEXT,
  course_id UUID REFERENCES public.courses(id),
  is_free BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on videos
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Anyone can view free videos
CREATE POLICY "Anyone can view free videos" 
ON public.videos FOR SELECT 
USING (is_free = true);

-- Users who purchased can view course videos
CREATE POLICY "Purchasers can view course videos" 
ON public.videos FOR SELECT 
USING (
  course_id IS NOT NULL AND 
  EXISTS (
    SELECT 1 FROM public.purchases 
    WHERE purchases.course_id = videos.course_id 
    AND purchases.user_id = auth.uid()
    AND purchases.status = 'completed'
  )
);