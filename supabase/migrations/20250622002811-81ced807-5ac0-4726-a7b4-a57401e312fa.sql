
-- Drop existing policies that might be too restrictive
DROP POLICY IF EXISTS "Anyone can view products" ON public.products;
DROP POLICY IF EXISTS "Admins can manage products" ON public.products;

-- Create new, more permissive policies for products
CREATE POLICY "Anyone can view products" 
  ON public.products 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can insert products" 
  ON public.products 
  FOR INSERT 
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update products" 
  ON public.products 
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete products" 
  ON public.products 
  FOR DELETE 
  USING (auth.uid() IS NOT NULL);
