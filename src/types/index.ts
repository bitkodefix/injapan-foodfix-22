export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string; // deprecated, use images instead
  images?: string[];
  variants?: ProductVariant[];
  stock: number;
  status?: 'active' | 'inactive' | 'draft';
  created_at?: string;
  updated_at?: string;
}

export interface ProductVariant {
  name: string;
  price: number;
  stock: number;
  images?: string[];
}

export interface Order {
  id: string;
  user_id: string;
  items: OrderItem[];
  total_amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: ShippingAddress;
  payment_method: 'credit_card' | 'paypal' | 'cod';
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  product_id: string;
  quantity: number;
  price: number;
  name: string;
  image_url: string;
}

export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: 'admin' | 'customer';
  created_at?: string;
  updated_at?: string;
}

export interface AdminLog {
  id: string;
  user_id: string;
  action: string;
  target_type: string;
  target_id: string;
  details: any;
  created_at: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface RecycleBinItem {
  id: string;
  original_table: string;
  original_id: string;
  data: Product;
  deleted_at: string;
}
