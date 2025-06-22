
import { useQuery } from '@tanstack/react-query';
import { getPendingOrders } from '@/services/orderService';

export const usePendingOrders = () => {
  return useQuery({
    queryKey: ['pending-orders'],
    queryFn: getPendingOrders,
    staleTime: 1000,
    refetchInterval: 5000,
  });
};
