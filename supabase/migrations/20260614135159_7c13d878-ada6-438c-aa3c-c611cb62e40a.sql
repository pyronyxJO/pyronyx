
-- Revoke any SELECT/UPDATE/DELETE access from anon/authenticated; keep INSERT for the public form
REVOKE SELECT, UPDATE, DELETE ON public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

-- Explicit deny-by-default SELECT/UPDATE/DELETE policies (only service_role bypasses RLS)
DROP POLICY IF EXISTS "No client read access" ON public.contact_submissions;
CREATE POLICY "No client read access"
  ON public.contact_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "No client update access" ON public.contact_submissions;
CREATE POLICY "No client update access"
  ON public.contact_submissions
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "No client delete access" ON public.contact_submissions;
CREATE POLICY "No client delete access"
  ON public.contact_submissions
  FOR DELETE
  TO anon, authenticated
  USING (false);

-- Tighten the INSERT policy with basic validation (length limits, non-empty)
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(name)) BETWEEN 1 AND 100
    AND char_length(btrim(email)) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(btrim(message)) BETWEEN 1 AND 2000
  );
