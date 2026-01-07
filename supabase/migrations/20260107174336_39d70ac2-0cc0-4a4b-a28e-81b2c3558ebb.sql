-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'articles',
  featured_image TEXT,
  author_name TEXT NOT NULL DEFAULT 'Male Mind Collective',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create FAQs table
CREATE TABLE public.faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create lead surveys table for ad landing page responses
CREATE TABLE public.lead_surveys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Contact Info
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  -- Current Situation
  age_range TEXT,
  relationship_status TEXT,
  current_income TEXT,
  health_fitness_level TEXT,
  -- Goals & Struggles
  biggest_goals TEXT NOT NULL,
  biggest_struggles TEXT NOT NULL,
  what_tried_before TEXT,
  -- Program Fit
  why_interested TEXT NOT NULL,
  investment_ready TEXT,
  commitment_level TEXT,
  how_heard_about_us TEXT,
  -- Tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_surveys ENABLE ROW LEVEL SECURITY;

-- Blog posts: Anyone can view published posts
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts FOR SELECT 
USING (is_published = true);

-- FAQs: Anyone can view active FAQs
CREATE POLICY "Anyone can view active FAQs" 
ON public.faqs FOR SELECT 
USING (is_active = true);

-- Lead surveys: Anyone can submit (no auth required for leads)
CREATE POLICY "Anyone can submit lead surveys" 
ON public.lead_surveys FOR INSERT 
WITH CHECK (true);

-- Add update triggers
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_faqs_updated_at
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert default FAQs
INSERT INTO public.faqs (question, answer, category, display_order, is_active) VALUES
('What is Male Mind Collective?', 'Male Mind Collective is a transformational coaching program designed specifically for men who want to unlock their full potential across all areas of life—mindset, physical health, wealth building, relationships, and spiritual growth.', 'general', 1, true),
('Who is this program for?', 'Our programs are designed for men who are ready to stop settling and start building the life they truly deserve. Whether you''re feeling stuck, overwhelmed, or simply know there''s more to life—this is for you.', 'general', 2, true),
('What makes your coaching different?', 'We focus on the complete man—not just one area of life. Our Five Pillars framework ensures you develop holistically: Mindset, Physical, Wealth, Masculinity, and Spiritual. We combine ancient wisdom with modern strategies.', 'programs', 3, true),
('How long are the coaching programs?', 'Our programs range from 8-week intensive courses to ongoing mastermind memberships. The right duration depends on your goals and current situation—we''ll help you choose during your consultation.', 'programs', 4, true),
('What results can I expect?', 'Our clients typically experience increased confidence, better relationships, improved physical health, clearer purpose, and often significant income growth. Results vary based on your commitment and starting point.', 'results', 5, true),
('Do you offer one-on-one coaching?', 'Yes! We offer personalized one-on-one coaching for men who want individualized attention and accelerated results. Book a free consultation to learn more.', 'programs', 6, true),
('What is the investment?', 'Investment varies by program. We offer options ranging from self-paced digital courses to premium mastermind experiences. Complete our application to discuss which option fits your budget and goals.', 'pricing', 7, true),
('Can I join if I''m not in the US?', 'Absolutely! We work with men globally. All our coaching calls and content are delivered online, making it accessible no matter where you are in the world.', 'general', 8, true);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, author_name, is_published, published_at) VALUES
('5 Morning Habits That Will Transform Your Mindset', '5-morning-habits-transform-mindset', 'Discover the five powerful morning rituals that successful men use to dominate their day and achieve peak mental performance.', 'The way you start your morning sets the tone for your entire day. Here are five habits that will revolutionize your mindset...

## 1. Wake Up Before the World
Rising at 5 AM gives you sacred time before the chaos begins. Use this time for yourself—no emails, no social media.

## 2. Cold Exposure
A cold shower or ice bath activates your nervous system, builds mental resilience, and releases dopamine naturally.

## 3. Movement Before Screens
Get your body moving before you touch your phone. Even 10 minutes of exercise primes your brain for peak performance.

## 4. Journaling Your Intentions
Write down your goals, gratitude, and the three most important tasks for the day. Clarity breeds confidence.

## 5. Fuel Your Body Right
Protein-rich breakfast, hydration, and quality supplements set the foundation for sustained energy throughout the day.

Start implementing these habits one at a time, and watch your life transform.', 'articles', 'Male Mind Collective', true, now()),

('From Broke to Building Wealth: Michael''s Story', 'michael-transformation-story', 'How Michael went from $50K in debt to building a six-figure business in just 18 months through the Male Mind Collective program.', 'When Michael first joined Male Mind Collective, he was drowning in debt, stuck in a dead-end job, and his relationship was falling apart...

## The Turning Point
Michael realized that his external circumstances were a reflection of his internal state. Through our Mindset and Wealth pillars, he began transforming from the inside out.

## The Journey
Over 18 months, Michael:
- Paid off $50,000 in debt
- Launched a successful consulting business
- Rebuilt his relationship with his wife
- Lost 30 pounds and got in the best shape of his life

## His Advice
"Stop waiting for the perfect moment. The best investment I ever made was in myself. The Male Mind Collective didn''t just teach me skills—they helped me become the man I was meant to be."

Ready to write your own transformation story?', 'success-stories', 'Male Mind Collective', true, now()),

('The Modern Man''s Guide to Building Unshakeable Confidence', 'guide-building-confidence', 'True confidence isn''t about pretending to be someone you''re not. Learn the foundational principles that create genuine, lasting self-belief.', 'Confidence is the foundation upon which all success is built. But here''s what most men get wrong...

## Confidence vs. Arrogance
True confidence comes from competence and self-awareness. It''s quiet, steady, and doesn''t need external validation.

## The Confidence Formula
1. **Competence**: Get good at things that matter to you
2. **Consistency**: Show up every single day
3. **Courage**: Take action despite fear
4. **Character**: Align your actions with your values

## Building Your Foundation
Start with small wins. Complete what you start. Keep your word—especially to yourself. Each small victory builds the evidence that you can trust yourself.

## The Physical Connection
Your body affects your mind. Stand tall. Speak clearly. Make eye contact. Move with purpose. These physical changes create psychological shifts.

Remember: You don''t need to be perfect to be confident. You just need to be progressing.', 'articles', 'Male Mind Collective', true, now());