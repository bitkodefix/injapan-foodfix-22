
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';

const sampleProducts = [
  {
    name: 'Kerupuk Seblak Kering',
    description: 'Kerupuk seblak kering dengan rasa pedas yang autentik',
    price: 800,
    category: 'Makanan Ringan',
    image_url: '/placeholder.svg',
    stock: 50,
    status: 'active',
    variants: []
  },
  {
    name: 'Bon Cabe Level 50',
    description: 'Bumbu cabai level pedas maksimal untuk masakan Indonesia',
    price: 600,
    category: 'Bumbu Dapur',
    image_url: '/placeholder.svg',
    stock: 30,
    status: 'active',
    variants: []
  },
  {
    name: 'Bon Cabe Level 10 & 30',
    description: 'Bumbu cabai dengan pilihan level pedas sedang',
    price: 500,
    category: 'Bumbu Dapur',
    image_url: '/placeholder.svg',
    stock: 40,
    status: 'active',
    variants: []
  },
  {
    name: 'Cuanki Baraka',
    description: 'Makanan siap saji cuanki dengan kuah gurih',
    price: 1200,
    category: 'Makanan Siap Saji',
    image_url: '/placeholder.svg',
    stock: 20,
    status: 'active',
    variants: []
  },
  {
    name: 'Seblak Baraka',
    description: 'Makanan siap saji seblak pedas ala Bandung',
    price: 1100,
    category: 'Makanan Siap Saji',
    image_url: '/placeholder.svg',
    stock: 25,
    status: 'active',
    variants: []
  },
  {
    name: 'Basreng Pedas',
    description: 'Bakso goreng pedas khas Bandung',
    price: 700,
    category: 'Makanan Ringan',
    image_url: '/placeholder.svg',
    stock: 35,
    status: 'active',
    variants: []
  },
  {
    name: 'Basreng Original',
    description: 'Bakso goreng original tanpa pedas',
    price: 650,
    category: 'Makanan Ringan',
    image_url: '/placeholder.svg',
    stock: 40,
    status: 'active',
    variants: []
  },
  {
    name: 'Nangka Muda (Gori)',
    description: 'Nangka muda beku siap olah untuk sayur asem',
    price: 900,
    category: 'Bahan Masak Beku',
    image_url: '/placeholder.svg',
    stock: 15,
    status: 'active',
    variants: []
  },
  {
    name: 'Pete Kupas Frozen',
    description: 'Pete kupas beku berkualitas tinggi',
    price: 1500,
    category: 'Bahan Masak Beku',
    image_url: '/placeholder.svg',
    stock: 10,
    status: 'active',
    variants: []
  },
  {
    name: 'Daun Kemangi',
    description: 'Daun kemangi segar untuk lalapan dan masakan',
    price: 400,
    category: 'Sayur Segar/Beku',
    image_url: '/placeholder.svg',
    stock: 60,
    status: 'active',
    variants: []
  },
  {
    name: 'Daun Singkong Frozen',
    description: 'Daun singkong beku siap masak',
    price: 600,
    category: 'Sayur Beku',
    image_url: '/placeholder.svg',
    stock: 45,
    status: 'active',
    variants: []
  },
  {
    name: 'Daun Pepaya',
    description: 'Daun pepaya segar untuk sayur dan lalapan',
    price: 450,
    category: 'Sayur Segar/Beku',
    image_url: '/placeholder.svg',
    stock: 55,
    status: 'active',
    variants: []
  }
];

export const seedFirebaseData = async () => {
  try {
    console.log('Starting Firebase data seeding...');
    
    // Check if products already exist
    const productsRef = collection(db, 'products');
    const existingProducts = await getDocs(productsRef);
    
    if (existingProducts.size > 0) {
      console.log('Products already exist, skipping seed');
      return;
    }
    
    // Add sample products
    for (const product of sampleProducts) {
      await addDoc(productsRef, {
        ...product,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }
    
    console.log('Firebase data seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding Firebase data:', error);
    throw error;
  }
};
