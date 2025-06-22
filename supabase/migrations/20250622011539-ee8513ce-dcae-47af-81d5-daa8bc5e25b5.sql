
-- Drop semua policy yang ada untuk products
DROP POLICY IF EXISTS "Anyone can view products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can delete products" ON public.products;

-- Buat policy baru yang lebih permissive
CREATE POLICY "Public can view products" 
  ON public.products 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can insert products" 
  ON public.products 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can update products" 
  ON public.products 
  FOR UPDATE 
  USING (true);

CREATE POLICY "Anyone can delete products" 
  ON public.products 
  FOR DELETE 
  USING (true);
