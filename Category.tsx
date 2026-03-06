import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { getProductsByCategory, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Category = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categoryInfo = categories.find(cat => cat.slug === category);
  const products = getProductsByCategory(category);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.product-item', {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, [category, sortBy]);

  const categoryImages: Record<string, string> = {
    'party-wear': '/images/newarrivals-04.jpg',
    'casual': '/images/newarrivals-03.jpg',
    'western': '/images/look-01.jpg',
    'ethnic': '/images/final-cta-portrait.jpg',
    'summer': '/images/dresses-banner.jpg',
    'bodycon': '/images/collection-blazer.jpg',
    'maxi': '/images/collection-trench.jpg',
    'mini': '/images/newarrivals-02.jpg',
    'all': '/images/hero-portrait.jpg',
  };

  return (
    <div ref={sectionRef} className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6F6F6F] mb-6">
          <Link to="/" className="hover:text-[#D4A5A5] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/category/all" className="hover:text-[#D4A5A5] transition-colors">Shop</Link>
          {category !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#111111]">{categoryInfo?.name}</span>
            </>
          )}
        </div>

        {/* Category Header */}
        <div className="category-header mb-12">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="aspect-[21/9] lg:aspect-[3/1]">
              <img
                src={categoryImages[category] || categoryImages['all']}
                alt={categoryInfo?.name || 'All Dresses'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-2">
                  {categoryInfo?.name || 'All Dresses'}
                </h1>
                <p className="text-white/80 text-lg">
                  {products.length} products curated for you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat.slug
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#111111] hover:bg-[#D4A5A5] hover:text-[#111111]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-[#111111]/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-[#F6F4F2] transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <span className="text-sm text-[#6F6F6F]">
              Showing {sortedProducts.length} results
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[#6F6F6F]">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none px-4 py-2 pr-10 bg-white rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-[#D4A5A5] mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-[#111111] mb-2">
              No products found
            </h2>
            <p className="text-[#6F6F6F] mb-6">
              We couldn\'t find any products in this category. Check out our other categories!
            </p>
            <Link to="/category/all" className="btn-primary">
              View All Products
            </Link>
          </div>
        )}

        {/* Load More */}
        {sortedProducts.length > 0 && sortedProducts.length >= 8 && (
          <div className="text-center mt-12">
            <button className="btn-accent">
              Load More Products
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 text-[#D4A5A5]" />
            </div>
            <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
              Amazon Prime Delivery
            </h3>
            <p className="text-sm text-[#6F6F6F]">
              Get free and fast delivery on eligible items with Amazon Prime
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
              Genuine Products
            </h3>
            <p className="text-sm text-[#6F6F6F]">
              All products are sourced directly from Amazon\'s trusted sellers
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
              Secure Payments
            </h3>
            <p className="text-sm text-[#6F6F6F]">
              Your transactions are protected by Amazon\'s secure payment system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
