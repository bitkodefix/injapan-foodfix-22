
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Order, CartItem } from '@/types';

// Mock orders data
const mockOrders: Order[] = [];

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async (): Promise<Order[]> => {
      return mockOrders;
    },
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      items,
      totalPrice,
      customerInfo,
      userId
    }: {
      items: CartItem[];
      totalPrice: number;
      customerInfo: any;
      userId?: string;
    }) => {
      // Mock order creation - in real app this would save to your preferred database
      const newOrder = {
        id: Date.now().toString(),
        user_id: userId || null,
        total_price: totalPrice,
        customer_info: customerInfo,
        items: items,
        status: 'pending' as const,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      mockOrders.push(newOrder);
      return newOrder;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};
