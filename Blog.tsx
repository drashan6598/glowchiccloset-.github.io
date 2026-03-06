import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div ref={sectionRef} className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="blog-header text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
            Fashion Insights
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#111111] mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-[#6F6F6F]">
            Discover style tips, trend guides, and fashion advice curated especially for the modern Indian woman.
          </p>
        </div>

        {/* Featured Post */}
        <div className="blog-header mb-16">
          <Link to={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="category-badge mb-4 inline-block w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#111111] mb-4 group-hover:text-[#D4A5A5] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[#6F6F6F] mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#6F6F6F] mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-2 text-[#D4A5A5] font-medium">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="blog-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#D4A5A5]">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#111111] mt-2 mb-3 group-hover:text-[#D4A5A5] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6F6F6F] line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#6F6F6F]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-[#111111] rounded-3xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-[#F6F4F2] mb-4">
              Never Miss a Style Update
            </h2>
            <p className="text-[#F6F4F2]/70 mb-8">
              Subscribe to our newsletter for the latest fashion trends, style tips, and exclusive deals delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-[#F6F4F2]/10 border border-[#F6F4F2]/20 rounded-full text-[#F6F4F2] placeholder-[#F6F4F2]/50 focus:outline-none focus:border-[#D4A5A5] transition-colors"
              />
              <button type="submit" className="btn-accent">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
