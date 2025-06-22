
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllOrders, getOrdersByUser, createOrder } from '@/services/orderService';
import { Order, CartItem } from '@/types';

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });
};

export const useUserOrders = (userId: string) => {
  return useQuery({
    queryKey: ['orders', 'user', userId],
    queryFn: () => getOrdersByUser(userId),
    enabled: !!userId,
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
      return await createOrder({
        user_id: userId,
        customer_info: customerInfo,
        items: items,
        total_price: totalPrice,
        status: 'pending'
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['pending-orders'] });
    },
  });
};
