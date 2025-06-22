
import { useQuery } from '@tanstack/react-query';

export interface VariantOption {
  id: string;
  category: string;
  variant_name: string;
  options: string[];
  is_required: boolean;
  created_at: string;
  updated_at: string;
}

// Mock data untuk variant options
const mockVariantOptions: VariantOption[] = [
  {
    id: '1',
    category: 'Makanan Ringan',
    variant_name: 'Size',
    options: ['Small', 'Medium', 'Large'],
    is_required: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const useVariantOptions = (category?: string) => {
  return useQuery({
    queryKey: ['variant-options', category],
    queryFn: async (): Promise<VariantOption[]> => {
      // Filter mock data by category if provided
      if (category) {
        return mockVariantOptions.filter(option => option.category === category);
      }
      return mockVariantOptions;
    },
    enabled: !!category,
  });
};
