-- Create leads table for demo request form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  message TEXT,
  source TEXT DEFAULT 'demo_request',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for lead capture (public form)
CREATE POLICY "Allow anonymous lead submissions"
ON public.leads
FOR INSERT
WITH CHECK (true);

-- Only allow authenticated admins to view leads (for future admin dashboard)
CREATE POLICY "No public read access to leads"
ON public.leads
FOR SELECT
USING (false);