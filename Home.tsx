import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, TrendingUp, Sparkles, Sun, Heart, Zap } from 'lucide-react';
import { getFeaturedProducts, getTrendingProducts, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);

  const featuredProducts = getFeaturedProducts(8);
  const trendingProducts = getTrendingProducts(6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-image', {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Featured section
      gsap.from('.featured-title', {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.featured-product', {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Categories section
      gsap.from('.category-card', {
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Trending section
      gsap.from('.trending-title', {
        scrollTrigger: {
          trigger: trendingRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.trending-product', {
        scrollTrigger: {
          trigger: trendingRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Promo section
      gsap.from('.promo-content', {
        scrollTrigger: {
          trigger: promoRef.current,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.promo-image', {
        scrollTrigger: {
          trigger: promoRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const categoryIcons: Record<string, React.ReactNode> = {
    'party-wear': <Sparkles className="w-6 h-6" />,
    'casual': <ShoppingBag className="w-6 h-6" />,
    'western': <TrendingUp className="w-6 h-6" />,
    'ethnic': <Heart className="w-6 h-6" />,
    'summer': <Sun className="w-6 h-6" />,
    'bodycon': <Zap className="w-6 h-6" />,
    'maxi': <Star className="w-6 h-6" />,
    'mini': <Sparkles className="w-6 h-6" />,
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen w-full bg-[#F6F4F2] pt-20">
        <div className="w-full px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="hero-title font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
                New Collection 2026
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#111111] leading-[0.95] tracking-tight">
                <span className="hero-title block">HELLO</span>
                <span className="hero-title block">NEW</span>
                <span className="hero-title block text-[#D4A5A5]">STYLE</span>
              </h1>
              
              {/* Scribble SVG */}
              <svg className="w-32 h-4 mt-2 mb-6" viewBox="0 0 120 12">
                <path
                  className="scribble-path animate"
                  d="M2 6 Q 15 2, 30 6 T 58 6 T 86 6 T 118 6"
                  fill="none"
                  stroke="#D4A5A5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <p className="hero-subtitle text-lg lg:text-xl text-[#6F6F6F] max-w-md leading-relaxed mb-8">
                Discover the latest trends in women\'s fashion. Fresh drops, soft tailoring, and pieces that move with your day.
              </p>

              <div className="hero-cta flex flex-wrap gap-4">
                <Link to="/category/all" className="btn-primary">
                  Shop New Arrivals
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/blog" className="btn-accent">
                  Read Style Guide
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-cta flex gap-8 mt-12 pt-8 border-t border-[#111111]/10">
                <div>
                  <span className="font-display text-3xl font-bold text-[#111111]">200+</span>
                  <p className="text-sm text-[#6F6F6F]">Dresses</p>
                </div>
                <div>
                  <span className="font-display text-3xl font-bold text-[#111111]">50K+</span>
                  <p className="text-sm text-[#6F6F6F]">Happy Customers</p>
                </div>
                <div>
                  <span className="font-display text-3xl font-bold text-[#111111]">4.5★</span>
                  <p className="text-sm text-[#6F6F6F]">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="hero-image fashion-card relative aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Fashion model in elegant dress"
                  className="w-full h-full object-cover"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-[#D4A5A5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#111111]">Free Delivery</p>
                      <p className="text-sm text-[#6F6F6F]">On orders above ₹499</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredRef} className="w-full bg-[#F6F4F2] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="featured-title">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-3">
                Curated For You
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#111111]">
                Featured Dresses
              </h2>
              <div className="w-24 h-1 bg-[#111111] mt-4"></div>
            </div>
            <Link 
              to="/category/all" 
              className="featured-title flex items-center gap-2 text-[#111111] font-medium hover:text-[#D4A5A5] transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-product">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="w-full bg-[#111111] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-3">
              Browse By Style
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F6F4F2]">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {categories.filter(cat => cat.id !== 'all').map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="category-card group relative bg-[#F6F4F2]/5 hover:bg-[#F6F4F2]/10 rounded-2xl p-6 lg:p-8 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4A5A5] transition-colors">
                  <span className="text-[#D4A5A5] group-hover:text-[#111111] transition-colors">
                    {categoryIcons[category.id]}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F6F4F2] mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-[#F6F4F2]/60">
                  Explore Collection
                </p>
                <ArrowRight className="w-5 h-5 text-[#D4A5A5] mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section ref={promoRef} className="w-full bg-[#F6F4F2] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="promo-content">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
                Limited Time Offer
              </span>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6">
                NEW<br />
                COLLECTION<br />
                <span className="text-[#D4A5A5]">-30% OFF</span>
              </h2>
              <p className="text-lg text-[#6F6F6F] mb-8 max-w-md">
                A limited run of tailored essentials. Clean cuts, soft textures, easy to mix. Don\'t miss out on our biggest sale of the season!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/category/party-wear" className="btn-primary">
                  Shop the Sale
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/blog" className="px-6 py-3 border-2 border-[#111111] rounded-full font-medium text-[#111111] hover:bg-[#111111] hover:text-[#F6F4F2] transition-colors">
                  Read Style Tips
                </Link>
              </div>

              {/* Countdown */}
              <div className="flex gap-6 mt-10">
                <div className="text-center">
                  <span className="font-display text-3xl font-bold text-[#111111]">02</span>
                  <p className="text-xs text-[#6F6F6F] uppercase">Days</p>
                </div>
                <div className="text-center">
                  <span className="font-display text-3xl font-bold text-[#111111]">14</span>
                  <p className="text-xs text-[#6F6F6F] uppercase">Hours</p>
                </div>
                <div className="text-center">
                  <span className="font-display text-3xl font-bold text-[#111111]">35</span>
                  <p className="text-xs text-[#6F6F6F] uppercase">Minutes</p>
                </div>
              </div>
            </div>

            <div className="promo-image">
              <div className="fashion-card aspect-[4/5] relative overflow-hidden">
                <img
                  src="/images/promo-portrait.jpg"
                  alt="Fashion collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section ref={trendingRef} className="w-full bg-[#F6F4F2] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="trending-title">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-3">
                Most Popular
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#111111]">
                Trending Now
              </h2>
              <div className="w-24 h-1 bg-[#111111] mt-4"></div>
            </div>
            <Link 
              to="/category/all" 
              className="trending-title flex items-center gap-2 text-[#111111] font-medium hover:text-[#D4A5A5] transition-colors"
            >
              View All Trending
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <div key={product.id} className="trending-product">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Grid Section */}
      <section className="w-full bg-[#F6F4F2] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-3">
              Our Picks
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#111111]">
              The Collection
            </h2>
            <div className="w-24 h-1 bg-[#111111] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fashion-card group relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/collection-blazer.jpg"
                alt="Blazer Dress"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="category-badge mb-2 inline-block">Featured</span>
                <h3 className="font-display text-xl font-semibold text-white">Blazer Dress — Ivory</h3>
                <Link to="/category/western" className="text-white/80 text-sm hover:text-white flex items-center gap-1 mt-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="fashion-card group relative aspect-square overflow-hidden md:mt-12">
              <img
                src="/images/collection-silk.jpg"
                alt="Silk Set"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="category-badge mb-2 inline-block">New</span>
                <h3 className="font-display text-xl font-semibold text-white">Silk Set — Petal</h3>
                <Link to="/category/casual" className="text-white/80 text-sm hover:text-white flex items-center gap-1 mt-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="fashion-card group relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/collection-trench.jpg"
                alt="Trench Dress"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="category-badge mb-2 inline-block">Premium</span>
                <h3 className="font-display text-xl font-semibold text-white">Trench Dress — Stone</h3>
                <Link to="/category/maxi" className="text-white/80 text-sm hover:text-white flex items-center gap-1 mt-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-[#111111] py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="fashion-card aspect-video overflow-hidden">
                <img
                  src="/images/newsletter-card.jpg"
                  alt="Fashion lifestyle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-2xl font-bold text-white">Join the list.</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#F6F4F2] mb-4">
                Get the drop.
              </h2>
              <p className="text-[#F6F4F2]/70 mb-8">
                Subscribe to our newsletter for exclusive deals, style tips, and early access to new collections. Be the first to know about our latest Amazon finds!
              </p>

              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#F6F4F2]/10 border border-[#F6F4F2]/20 rounded-full text-[#F6F4F2] placeholder-[#F6F4F2]/50 focus:outline-none focus:border-[#D4A5A5] transition-colors"
                />
                <button type="submit" className="btn-accent">
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-[#F6F4F2]/50 mt-4">
                Unsubscribe anytime. No spam, we promise!
              </p>

              <div className="flex gap-6 mt-8">
                <Link to="/shipping" className="text-sm text-[#F6F4F2]/60 hover:text-[#D4A5A5] transition-colors">
                  Shipping
                </Link>
                <Link to="/returns" className="text-sm text-[#F6F4F2]/60 hover:text-[#D4A5A5] transition-colors">
                  Returns
                </Link>
                <Link to="/faq" className="text-sm text-[#F6F4F2]/60 hover:text-[#D4A5A5] transition-colors">
                  FAQ
                </Link>
                <Link to="/contact" className="text-sm text-[#F6F4F2]/60 hover:text-[#D4A5A5] transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
