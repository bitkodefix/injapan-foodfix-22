
import { useQuery } from '@tanstack/react-query';
import { Order } from '@/types';

export const usePendingOrders = () => {
  return useQuery({
    queryKey: ['pending-orders'],
    queryFn: async (): Promise<Order[]> => {
      // Mock pending orders
      return [];
    },
    staleTime: 1000,
    refetchInterval: 5000,
  });
};
