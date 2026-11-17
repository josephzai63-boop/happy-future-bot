ALTER TABLE public.contact_submissions ADD COLUMN request_id UUID;
ALTER TABLE public.contact_submissions ADD COLUMN notification_sent_at TIMESTAMPTZ;
CREATE UNIQUE INDEX contact_submissions_request_id_key ON public.contact_submissions (request_id);