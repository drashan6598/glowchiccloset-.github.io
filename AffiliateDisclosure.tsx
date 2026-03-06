import { ExternalLink, ShoppingBag, HelpCircle, CheckCircle } from 'lucide-react';

const AffiliateDisclosure = () => {
  return (
    <div className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
              Transparency
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-[#6F6F6F]">
              Our commitment to transparency with our readers
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-8">
            {/* Disclosure Banner */}
            <div className="bg-[#D4A5A5]/10 border border-[#D4A5A5]/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A5A5] rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[#111111]" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#111111] mb-2">
                    We Earn Commissions from Amazon
                  </h2>
                  <p className="text-[#6F6F6F] leading-relaxed">
                    GlowChic Closet is a participant in the Amazon Associates Program. When you purchase 
                    through our links, we earn a commission at no extra cost to you. This helps us keep 
                    our website running and continue providing valuable fashion content.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                What is the Amazon Associates Program?
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                The Amazon Associates Program is an affiliate marketing program that allows website owners 
                and bloggers to earn advertising fees by linking to Amazon.in products. When you click on 
                an affiliate link and make a purchase within a certain timeframe, we receive a small 
                percentage of the sale as a commission.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                How Does It Work?
              </h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#F6F4F2] rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-display font-bold text-[#111111]">1</span>
                  </div>
                  <h3 className="font-semibold text-[#111111] mb-2">You Browse</h3>
                  <p className="text-sm text-[#6F6F6F]">Explore our curated collections and find products you love</p>
                </div>
                <div className="bg-[#F6F4F2] rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-display font-bold text-[#111111]">2</span>
                  </div>
                  <h3 className="font-semibold text-[#111111] mb-2">You Click</h3>
                  <p className="text-sm text-[#6F6F6F]">Click "Buy on Amazon" to visit the product page</p>
                </div>
                <div className="bg-[#F6F4F2] rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-display font-bold text-[#111111]">3</span>
                  </div>
                  <h3 className="font-semibold text-[#111111] mb-2">You Purchase</h3>
                  <p className="text-sm text-[#6F6F6F]">Complete your purchase on Amazon - we earn a commission</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Does This Affect You?
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-4">
                <strong className="text-[#111111]">Absolutely not!</strong> Here\'s what you need to know:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6F6F6F]">You pay the same price whether you use our link or go directly to Amazon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6F6F6F]">Amazon handles all payments, shipping, and customer service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6F6F6F]">Your Amazon Prime benefits still apply</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#6F6F6F]">All Amazon return and refund policies apply</span>
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Our Promise to You
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                At GlowChic Closet, our readers\' trust is our most valuable asset. We want you to know that:
              </p>
              <div className="bg-[#F6F4F2] rounded-xl p-6 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block">We Only Recommend Products We Believe In</strong>
                      <span className="text-[#6F6F6F] text-sm">We carefully curate every product featured on our website based on quality, reviews, and value.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block">Editorial Independence</strong>
                      <span className="text-[#6F6F6F] text-sm">Our product selections are based on research and merit, not commission rates.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block">Transparency First</strong>
                      <span className="text-[#6F6F6F] text-sm">We clearly disclose our affiliate relationships on every relevant page.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4A5A5] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block">Honest Reviews</strong>
                      <span className="text-[#6F6F6F] text-sm">We share both pros and cons of products to help you make informed decisions.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                How We Use Commissions
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                The commissions we earn help us:
              </p>
              <ul className="list-disc pl-6 text-[#6F6F6F] space-y-2 mb-6">
                <li>Maintain and improve our website</li>
                <li>Create valuable fashion content and style guides</li>
                <li>Research and test new products</li>
                <li>Provide responsive customer support</li>
                <li>Continue offering our services for free</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Questions?
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                If you have any questions about our affiliate relationships or how we operate, please don\'t 
                hesitate to reach out. We\'re always happy to provide more information.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:hello@glowchiccloset.com" 
                  className="btn-primary"
                >
                  Contact Us
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://affiliate-program.amazon.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#111111] rounded-full font-medium text-[#111111] hover:bg-[#111111] hover:text-[#F6F4F2] transition-colors inline-flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  About Amazon Associates
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-[#6F6F6F]">
              This disclosure is provided in accordance with the Federal Trade Commission\'s 16 CFR, Part 255: 
              "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
