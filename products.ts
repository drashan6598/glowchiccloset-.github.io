export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  amazonLink: string;
  isPrime?: boolean;
  badge?: string;
}

export const categories = [
  { id: 'all', name: 'All Dresses', slug: 'all' },
  { id: 'party-wear', name: 'Party Wear Dresses', slug: 'party-wear' },
  { id: 'casual', name: 'Casual Dresses', slug: 'casual' },
  { id: 'western', name: 'Western Dresses', slug: 'western' },
  { id: 'ethnic', name: 'Ethnic Dresses', slug: 'ethnic' },
  { id: 'summer', name: 'Summer Dresses', slug: 'summer' },
  { id: 'bodycon', name: 'Bodycon Dresses', slug: 'bodycon' },
  { id: 'maxi', name: 'Maxi Dresses', slug: 'maxi' },
  { id: 'mini', name: 'Mini Dresses', slug: 'mini' },
];

export const products: Product[] = [
  // Party Wear Dresses
  {
    id: '1',
    title: 'Women\'s Floral Print Maxi Dress - Party Wear',
    price: 899,
    originalPrice: 2499,
    discount: 64,
    rating: 4.3,
    reviewCount: 2847,
    image: 'https://m.media-amazon.com/images/I/71ZQxKb0xSL._UY879_.jpg',
    category: 'party-wear',
    description: 'Stunning floral print maxi dress perfect for parties and special occasions. Flowy fabric with elegant design.',
    amazonLink: 'https://www.amazon.in/s?k=floral+maxi+dress+party+wear&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '2',
    title: 'Women\'s Sequin Bodycon Party Dress',
    price: 1299,
    originalPrice: 3499,
    discount: 63,
    rating: 4.1,
    reviewCount: 1523,
    image: 'https://m.media-amazon.com/images/I/61UdMDI0ybL._UY879_.jpg',
    category: 'party-wear',
    description: 'Dazzling sequin bodycon dress that shines at every party. Figure-hugging fit with comfortable stretch.',
    amazonLink: 'https://www.amazon.in/s?k=sequin+bodycon+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '3',
    title: 'Women\'s Velvet Evening Gown',
    price: 1599,
    originalPrice: 3999,
    discount: 60,
    rating: 4.4,
    reviewCount: 892,
    image: 'https://m.media-amazon.com/images/I/71nNjqR1jFL._UY879_.jpg',
    category: 'party-wear',
    description: 'Luxurious velvet evening gown for formal events. Rich texture with elegant silhouette.',
    amazonLink: 'https://www.amazon.in/s?k=velvet+evening+gown&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Premium'
  },
  {
    id: '4',
    title: 'Women\'s One-Shoulder Cocktail Dress',
    price: 999,
    originalPrice: 2799,
    discount: 64,
    rating: 4.2,
    reviewCount: 1234,
    image: 'https://m.media-amazon.com/images/I/61v7w0yR5FL._UY879_.jpg',
    category: 'party-wear',
    description: 'Chic one-shoulder cocktail dress for modern women. Sophisticated style for evening events.',
    amazonLink: 'https://www.amazon.in/s?k=one+shoulder+cocktail+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '5',
    title: 'Women\'s Satin Slip Dress',
    price: 799,
    originalPrice: 1999,
    discount: 60,
    rating: 4.0,
    reviewCount: 2156,
    image: 'https://m.media-amazon.com/images/I/61Q2zN1JyEL._UY879_.jpg',
    category: 'party-wear',
    description: 'Elegant satin slip dress with delicate straps. Perfect for date nights and celebrations.',
    amazonLink: 'https://www.amazon.in/s?k=satin+slip+dress&ref=nb_sb_noss',
    isPrime: true
  },

  // Casual Dresses
  {
    id: '6',
    title: 'Women\'s Cotton A-Line Dress',
    price: 599,
    originalPrice: 1499,
    discount: 60,
    rating: 4.3,
    reviewCount: 4521,
    image: 'https://m.media-amazon.com/images/I/71ZcXHsXivL._UY879_.jpg',
    category: 'casual',
    description: 'Comfortable cotton A-line dress for everyday wear. Breathable fabric with flattering fit.',
    amazonLink: 'https://www.amazon.in/s?k=cotton+a+line+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '7',
    title: 'Women\'s Denim Shirt Dress',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.2,
    reviewCount: 1876,
    image: 'https://m.media-amazon.com/images/I/71Qd0zMylxL._UY879_.jpg',
    category: 'casual',
    description: 'Classic denim shirt dress with button front. Versatile style for casual outings.',
    amazonLink: 'https://www.amazon.in/s?k=denim+shirt+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '8',
    title: 'Women\'s Striped T-Shirt Dress',
    price: 499,
    originalPrice: 1299,
    discount: 62,
    rating: 4.1,
    reviewCount: 3210,
    image: 'https://m.media-amazon.com/images/I/71KejNM5bFL._UY879_.jpg',
    category: 'casual',
    description: 'Relaxed striped t-shirt dress for effortless style. Soft cotton blend for all-day comfort.',
    amazonLink: 'https://www.amazon.in/s?k=striped+t+shirt+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '9',
    title: 'Women\'s Wrap Dress - Floral Print',
    price: 749,
    originalPrice: 1899,
    discount: 61,
    rating: 4.4,
    reviewCount: 2345,
    image: 'https://m.media-amazon.com/images/I/71Xl1msnp3L._UY879_.jpg',
    category: 'casual',
    description: 'Flattering wrap dress with beautiful floral print. Adjustable fit for all body types.',
    amazonLink: 'https://www.amazon.in/s?k=floral+wrap+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '10',
    title: 'Women\'s Jersey Midi Dress',
    price: 649,
    originalPrice: 1599,
    discount: 59,
    rating: 4.0,
    reviewCount: 1567,
    image: 'https://m.media-amazon.com/images/I/71KwGvYz9vL._UY879_.jpg',
    category: 'casual',
    description: 'Soft jersey midi dress for everyday elegance. Easy to style and comfortable to wear.',
    amazonLink: 'https://www.amazon.in/s?k=jersey+midi+dress&ref=nb_sb_noss',
    isPrime: true
  },

  // Western Dresses
  {
    id: '11',
    title: 'Women\'s Off-Shoulder Western Dress',
    price: 849,
    originalPrice: 2199,
    discount: 61,
    rating: 4.2,
    reviewCount: 1987,
    image: 'https://m.media-amazon.com/images/I/71H1zKI3qJL._UY879_.jpg',
    category: 'western',
    description: 'Trendy off-shoulder western dress with ruffled details. Perfect for brunch and outings.',
    amazonLink: 'https://www.amazon.in/s?k=off+shoulder+western+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '12',
    title: 'Women\'s Cold Shoulder Maxi Dress',
    price: 999,
    originalPrice: 2599,
    discount: 62,
    rating: 4.3,
    reviewCount: 1456,
    image: 'https://m.media-amazon.com/images/I/71XyW8L6RJL._UY879_.jpg',
    category: 'western',
    description: 'Stylish cold shoulder maxi dress with slit. Modern western design for fashion-forward women.',
    amazonLink: 'https://www.amazon.in/s?k=cold+shoulder+maxi+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Trending'
  },
  {
    id: '13',
    title: 'Women\'s Peplum Dress - Solid Color',
    price: 799,
    originalPrice: 1999,
    discount: 60,
    rating: 4.1,
    reviewCount: 1123,
    image: 'https://m.media-amazon.com/images/I/71Qd0zMylxL._UY879_.jpg',
    category: 'western',
    description: 'Elegant peplum dress that accentuates your waist. Perfect for office and after-work events.',
    amazonLink: 'https://www.amazon.in/s?k=peplum+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '14',
    title: 'Women\'s Halter Neck Dress',
    price: 699,
    originalPrice: 1799,
    discount: 61,
    rating: 4.0,
    reviewCount: 876,
    image: 'https://m.media-amazon.com/images/I/71ZcXHsXivL._UY879_.jpg',
    category: 'western',
    description: 'Chic halter neck dress for summer days. Backless design with comfortable fit.',
    amazonLink: 'https://www.amazon.in/s?k=halter+neck+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '15',
    title: 'Women\'s Shirt Dress with Belt',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.3,
    reviewCount: 2134,
    image: 'https://m.media-amazon.com/images/I/71KejNM5bFL._UY879_.jpg',
    category: 'western',
    description: 'Classic shirt dress with matching belt. Versatile piece for work and weekend.',
    amazonLink: 'https://www.amazon.in/s?k=shirt+dress+with+belt&ref=nb_sb_noss',
    isPrime: true
  },

  // Ethnic Dresses
  {
    id: '16',
    title: 'Women\'s Anarkali Kurti Dress',
    price: 1199,
    originalPrice: 2999,
    discount: 60,
    rating: 4.4,
    reviewCount: 3421,
    image: 'https://m.media-amazon.com/images/I/71nNjqR1jFL._UY879_.jpg',
    category: 'ethnic',
    description: 'Beautiful Anarkali style kurti dress with intricate embroidery. Perfect for festive occasions.',
    amazonLink: 'https://www.amazon.in/s?k=anarkali+kurti+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '17',
    title: 'Women\'s Printed Kurta Dress',
    price: 699,
    originalPrice: 1799,
    discount: 61,
    rating: 4.2,
    reviewCount: 2567,
    image: 'https://m.media-amazon.com/images/I/71ZQxKb0xSL._UY879_.jpg',
    category: 'ethnic',
    description: 'Elegant printed kurta dress with side slits. Comfortable cotton fabric for daily wear.',
    amazonLink: 'https://www.amazon.in/s?k=printed+kurta+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '18',
    title: 'Women\'s Embroidered Ethnic Dress',
    price: 1499,
    originalPrice: 3799,
    discount: 61,
    rating: 4.5,
    reviewCount: 1876,
    image: 'https://m.media-amazon.com/images/I/71Xl1msnp3L._UY879_.jpg',
    category: 'ethnic',
    description: 'Stunning embroidered ethnic dress with mirror work. Perfect for weddings and celebrations.',
    amazonLink: 'https://www.amazon.in/s?k=embroidered+ethnic+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Premium'
  },
  {
    id: '19',
    title: 'Women\'s A-Line Kurti with Palazzo',
    price: 999,
    originalPrice: 2499,
    discount: 60,
    rating: 4.3,
    reviewCount: 2234,
    image: 'https://m.media-amazon.com/images/I/71XyW8L6RJL._UY879_.jpg',
    category: 'ethnic',
    description: 'Complete ethnic set with A-line kurti and matching palazzo pants. Comfortable and stylish.',
    amazonLink: 'https://www.amazon.in/s?k=a+line+kurti+palazzo+set&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '20',
    title: 'Women\'s Long Ethnic Gown',
    price: 1799,
    originalPrice: 4499,
    discount: 60,
    rating: 4.4,
    reviewCount: 1234,
    image: 'https://m.media-amazon.com/images/I/71H1zKI3qJL._UY879_.jpg',
    category: 'ethnic',
    description: 'Floor-length ethnic gown with beautiful prints. Perfect for special occasions and festivals.',
    amazonLink: 'https://www.amazon.in/s?k=long+ethnic+gown&ref=nb_sb_noss',
    isPrime: true
  },

  // Summer Dresses
  {
    id: '21',
    title: 'Women\'s Floral Sundress',
    price: 599,
    originalPrice: 1499,
    discount: 60,
    rating: 4.3,
    reviewCount: 2876,
    image: 'https://m.media-amazon.com/images/I/71KwGvYz9vL._UY879_.jpg',
    category: 'summer',
    description: 'Light and breezy floral sundress for hot summer days. Breathable cotton fabric.',
    amazonLink: 'https://www.amazon.in/s?k=floral+sundress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Summer Pick'
  },
  {
    id: '22',
    title: 'Women\'s Linen Summer Dress',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.2,
    reviewCount: 1567,
    image: 'https://m.media-amazon.com/images/I/71Qd0zMylxL._UY879_.jpg',
    category: 'summer',
    description: 'Premium linen summer dress that keeps you cool. Natural fabric with elegant drape.',
    amazonLink: 'https://www.amazon.in/s?k=linen+summer+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '23',
    title: 'Women\'s Strappy Summer Maxi',
    price: 799,
    originalPrice: 1999,
    discount: 60,
    rating: 4.1,
    reviewCount: 1987,
    image: 'https://m.media-amazon.com/images/I/71ZcXHsXivL._UY879_.jpg',
    category: 'summer',
    description: 'Flowy strappy maxi dress perfect for beach days. Lightweight and comfortable.',
    amazonLink: 'https://www.amazon.in/s?k=strappy+summer+maxi+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '24',
    title: 'Women\'s Polka Dot Dress',
    price: 699,
    originalPrice: 1699,
    discount: 59,
    rating: 4.0,
    reviewCount: 2234,
    image: 'https://m.media-amazon.com/images/I/71KejNM5bFL._UY879_.jpg',
    category: 'summer',
    description: 'Classic polka dot dress with vintage charm. Perfect for summer picnics and outings.',
    amazonLink: 'https://www.amazon.in/s?k=polka+dot+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '25',
    title: 'Women\'s Boho Summer Dress',
    price: 849,
    originalPrice: 2099,
    discount: 60,
    rating: 4.2,
    reviewCount: 1456,
    image: 'https://m.media-amazon.com/images/I/71Xl1msnp3L._UY879_.jpg',
    category: 'summer',
    description: 'Boho-inspired summer dress with tassel details. Free-spirited style for sunny days.',
    amazonLink: 'https://www.amazon.in/s?k=boho+summer+dress&ref=nb_sb_noss',
    isPrime: true
  },

  // Bodycon Dresses
  {
    id: '26',
    title: 'Women\'s Ribbed Bodycon Dress',
    price: 699,
    originalPrice: 1799,
    discount: 61,
    rating: 4.2,
    reviewCount: 3123,
    image: 'https://m.media-amazon.com/images/I/61UdMDI0ybL._UY879_.jpg',
    category: 'bodycon',
    description: 'Sleek ribbed bodycon dress that hugs your curves. Stretchy fabric for comfortable fit.',
    amazonLink: 'https://www.amazon.in/s?k=ribbed+bodycon+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '27',
    title: 'Women\'s Long Sleeve Bodycon',
    price: 799,
    originalPrice: 1999,
    discount: 60,
    rating: 4.1,
    reviewCount: 1876,
    image: 'https://m.media-amazon.com/images/I/61v7w0yR5FL._UY879_.jpg',
    category: 'bodycon',
    description: 'Elegant long sleeve bodycon dress for evening events. Sophisticated and stylish.',
    amazonLink: 'https://www.amazon.in/s?k=long+sleeve+bodycon+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '28',
    title: 'Women\'s Mesh Panel Bodycon',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.0,
    reviewCount: 1234,
    image: 'https://m.media-amazon.com/images/I/61Q2zN1JyEL._UY879_.jpg',
    category: 'bodycon',
    description: 'Edgy mesh panel bodycon dress with cutout details. Bold style for confident women.',
    amazonLink: 'https://www.amazon.in/s?k=mesh+panel+bodycon+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '29',
    title: 'Women\'s Bandage Bodycon Dress',
    price: 1299,
    originalPrice: 3299,
    discount: 61,
    rating: 4.3,
    reviewCount: 987,
    image: 'https://m.media-amazon.com/images/I/71ZQxKb0xSL._UY879_.jpg',
    category: 'bodycon',
    description: 'Premium bandage bodycon dress for special occasions. Figure-sculpting design.',
    amazonLink: 'https://www.amazon.in/s?k=bandage+bodycon+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '30',
    title: 'Women\'s Ruched Bodycon Dress',
    price: 749,
    originalPrice: 1899,
    discount: 61,
    rating: 4.1,
    reviewCount: 1567,
    image: 'https://m.media-amazon.com/images/I/71nNjqR1jFL._UY879_.jpg',
    category: 'bodycon',
    description: 'Flattering ruched bodycon dress that smooths and shapes. Perfect for date nights.',
    amazonLink: 'https://www.amazon.in/s?k=ruched+bodycon+dress&ref=nb_sb_noss',
    isPrime: true
  },

  // Maxi Dresses
  {
    id: '31',
    title: 'Women\'s Boho Maxi Dress',
    price: 999,
    originalPrice: 2499,
    discount: 60,
    rating: 4.4,
    reviewCount: 2345,
    image: 'https://m.media-amazon.com/images/I/71XyW8L6RJL._UY879_.jpg',
    category: 'maxi',
    description: 'Flowing boho maxi dress with beautiful prints. Comfortable and effortlessly stylish.',
    amazonLink: 'https://www.amazon.in/s?k=boho+maxi+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '32',
    title: 'Women\'s Slit Maxi Dress',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.2,
    reviewCount: 1876,
    image: 'https://m.media-amazon.com/images/I/71H1zKI3qJL._UY879_.jpg',
    category: 'maxi',
    description: 'Elegant maxi dress with side slit for added movement. Perfect for summer evenings.',
    amazonLink: 'https://www.amazon.in/s?k=slit+maxi+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '33',
    title: 'Women\'s Off-Shoulder Maxi',
    price: 1099,
    originalPrice: 2799,
    discount: 61,
    rating: 4.3,
    reviewCount: 1456,
    image: 'https://m.media-amazon.com/images/I/71ZcXHsXivL._UY879_.jpg',
    category: 'maxi',
    description: 'Romantic off-shoulder maxi dress with ruffled details. Perfect for beach weddings.',
    amazonLink: 'https://www.amazon.in/s?k=off+shoulder+maxi+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '34',
    title: 'Women\'s Tiered Maxi Dress',
    price: 849,
    originalPrice: 2099,
    discount: 60,
    rating: 4.1,
    reviewCount: 1123,
    image: 'https://m.media-amazon.com/images/I/71KejNM5bFL._UY879_.jpg',
    category: 'maxi',
    description: 'Beautiful tiered maxi dress with layered skirt. Feminine and flowy design.',
    amazonLink: 'https://www.amazon.in/s?k=tiered+maxi+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '35',
    title: 'Women\'s Wrap Maxi Dress',
    price: 949,
    originalPrice: 2399,
    discount: 60,
    rating: 4.3,
    reviewCount: 1987,
    image: 'https://m.media-amazon.com/images/I/71Xl1msnp3L._UY879_.jpg',
    category: 'maxi',
    description: 'Flattering wrap maxi dress that suits all body types. Adjustable fit with tie waist.',
    amazonLink: 'https://www.amazon.in/s?k=wrap+maxi+dress&ref=nb_sb_noss',
    isPrime: true
  },

  // Mini Dresses
  {
    id: '36',
    title: 'Women\'s Skater Mini Dress',
    price: 649,
    originalPrice: 1599,
    discount: 59,
    rating: 4.2,
    reviewCount: 2876,
    image: 'https://m.media-amazon.com/images/I/71KwGvYz9vL._UY879_.jpg',
    category: 'mini',
    description: 'Fun and flirty skater mini dress with flared skirt. Perfect for casual outings.',
    amazonLink: 'https://www.amazon.in/s?k=skater+mini+dress&ref=nb_sb_noss',
    isPrime: true,
    badge: 'Best Seller'
  },
  {
    id: '37',
    title: 'Women\'s Slip Mini Dress',
    price: 599,
    originalPrice: 1499,
    discount: 60,
    rating: 4.0,
    reviewCount: 2134,
    image: 'https://m.media-amazon.com/images/I/71Qd0zMylxL._UY879_.jpg',
    category: 'mini',
    description: 'Minimalist slip mini dress for effortless style. Layer it or wear it solo.',
    amazonLink: 'https://www.amazon.in/s?k=slip+mini+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '38',
    title: 'Women\'s Puff Sleeve Mini',
    price: 799,
    originalPrice: 1999,
    discount: 60,
    rating: 4.1,
    reviewCount: 1567,
    image: 'https://m.media-amazon.com/images/I/71nNjqR1jFL._UY879_.jpg',
    category: 'mini',
    description: 'Trendy puff sleeve mini dress with square neckline. Modern and chic design.',
    amazonLink: 'https://www.amazon.in/s?k=puff+sleeve+mini+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '39',
    title: 'Women\'s Denim Mini Dress',
    price: 899,
    originalPrice: 2299,
    discount: 61,
    rating: 4.2,
    reviewCount: 1876,
    image: 'https://m.media-amazon.com/images/I/71ZQxKb0xSL._UY879_.jpg',
    category: 'mini',
    description: 'Classic denim mini dress with button front. Versatile piece for any wardrobe.',
    amazonLink: 'https://www.amazon.in/s?k=denim+mini+dress&ref=nb_sb_noss',
    isPrime: true
  },
  {
    id: '40',
    title: 'Women\'s Ruffled Mini Dress',
    price: 749,
    originalPrice: 1899,
    discount: 61,
    rating: 4.0,
    reviewCount: 1234,
    image: 'https://m.media-amazon.com/images/I/71XyW8L6RJL._UY879_.jpg',
    category: 'mini',
    description: 'Playful ruffled mini dress with tiered skirt. Perfect for summer parties.',
    amazonLink: 'https://www.amazon.in/s?k=ruffled+mini+dress&ref=nb_sb_noss',
    isPrime: true
  },
];

// Helper function to get products by category
export const getProductsByCategory = (categorySlug: string): Product[] => {
  if (categorySlug === 'all') {
    return products;
  }
  return products.filter(product => product.category === categorySlug);
};

// Helper function to get featured products
export const getFeaturedProducts = (count: number = 8): Product[] => {
  return products
    .filter(product => product.badge || product.rating >= 4.3)
    .slice(0, count);
};

// Helper function to get trending products
export const getTrendingProducts = (count: number = 6): Product[] => {
  return products
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, count);
};

// Helper function to get products under a price
export const getProductsUnderPrice = (price: number): Product[] => {
  return products.filter(product => product.price <= price);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
