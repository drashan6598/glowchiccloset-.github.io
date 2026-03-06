import { useEffect, useRef } from 'react';
import { Heart, ShoppingBag, TrendingUp, Users, Award, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Curated with Love',
      description: 'Every dress in our collection is handpicked by our fashion experts who understand what Indian women want.',
    },
    {
      icon: TrendingUp,
      title: 'Trending Styles',
      description: 'We stay ahead of fashion trends to bring you the latest styles before they hit the mainstream.',
    },
    {
      icon: ShoppingBag,
      title: 'Amazon Trusted',
      description: 'All our products link directly to Amazon India, ensuring secure payments and reliable delivery.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We listen to our community and curate collections based on what you actually want to wear.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We only recommend products with high ratings and positive reviews from real customers.',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      description: 'Thanks to Amazon\'s network, get your favorite dresses delivered anywhere in India.',
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="about-content text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
            Our Story
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#111111] mb-6">
            About GlowChic Closet
          </h1>
          <p className="text-lg text-[#6F6F6F] leading-relaxed">
            Your trusted destination for discovering the best women\'s dresses on Amazon India. 
            We\'re passionate about helping you find your perfect style.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-content grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fashion-card aspect-[4/3] overflow-hidden">
            <img
              src="/images/featured-dress.jpg"
              alt="Fashion collection"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111111] mb-6">
              Our Mission
            </h2>
            <p className="text-[#6F6F6F] leading-relaxed mb-4">
              At GlowChic Closet, we believe that every woman deserves to feel confident and beautiful in what she wears. 
              Our mission is to make fashion accessible, affordable, and enjoyable for women across India.
            </p>
            <p className="text-[#6F6F6F] leading-relaxed mb-4">
              We\'re not just another fashion website - we\'re your personal style curator. Our team spends hours 
              researching, testing, and reviewing products to bring you only the best dresses from Amazon India\'s 
              vast collection.
            </p>
            <p className="text-[#6F6F6F] leading-relaxed">
              Whether you\'re looking for a stunning party dress, a comfortable casual outfit, or the perfect 
              ethnic fusion wear, we\'ve got you covered. We understand the Indian fashion landscape and 
              curate collections that cater to our unique tastes and preferences.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section bg-[#111111] rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <span className="font-display text-4xl lg:text-5xl font-bold text-[#D4A5A5]">200+</span>
              <p className="text-[#F6F4F2]/70 mt-2">Dresses Curated</p>
            </div>
            <div className="stat-item text-center">
              <span className="font-display text-4xl lg:text-5xl font-bold text-[#D4A5A5]">50K+</span>
              <p className="text-[#F6F4F2]/70 mt-2">Happy Shoppers</p>
            </div>
            <div className="stat-item text-center">
              <span className="font-display text-4xl lg:text-5xl font-bold text-[#D4A5A5]">8</span>
              <p className="text-[#F6F4F2]/70 mt-2">Categories</p>
            </div>
            <div className="stat-item text-center">
              <span className="font-display text-4xl lg:text-5xl font-bold text-[#D4A5A5]">4.5★</span>
              <p className="text-[#F6F4F2]/70 mt-2">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section mb-20">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111111]">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#D4A5A5]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6F6F6F] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="about-content mb-20">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
              Simple Process
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#111111]">
              How GlowChic Closet Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-[#111111]">1</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
                We Curate
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                Our fashion experts scour Amazon India to find the best dresses across all categories.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-[#111111]">2</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
                You Discover
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                Browse our carefully organized collections and find dresses that match your style.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl font-bold text-[#111111]">3</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#111111] mb-2">
                Shop on Amazon
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                Click through to Amazon India to purchase with secure payment and fast delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="about-content bg-[#D4A5A5]/10 rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold text-[#111111] mb-4">
            Affiliate Disclosure
          </h3>
          <p className="text-[#6F6F6F] leading-relaxed">
            GlowChic Closet is a participant in the Amazon Associates Program, an affiliate advertising program 
            designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in. 
            This means that when you click on our links and make a purchase, we may earn a small commission at 
            no additional cost to you. We only recommend products we genuinely love and believe you\'ll love too. 
            Thank you for supporting our work!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
