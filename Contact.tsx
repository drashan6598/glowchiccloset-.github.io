import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@glowchiccloset.com',
      description: 'We\'ll respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      description: 'Mon-Fri, 10am - 6pm IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Mumbai, Maharashtra',
      description: 'India',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <div className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#111111] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-[#6F6F6F]">
            Have a question, suggestion, or just want to say hello? We\'d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#D4A5A5]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#111111] mb-1">
                  {info.title}
                </h3>
                <p className="text-[#111111] font-medium mb-1">{info.content}</p>
                <p className="text-sm text-[#6F6F6F]">{info.description}</p>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-[#111111] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#F6F4F2] rounded-full flex items-center justify-center hover:bg-[#D4A5A5] transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-[#111111]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-[#111111] mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F6F4F2] border border-transparent rounded-xl text-[#111111] placeholder-[#6F6F6F] focus:outline-none focus:border-[#D4A5A5] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F6F4F2] border border-transparent rounded-xl text-[#111111] placeholder-[#6F6F6F] focus:outline-none focus:border-[#D4A5A5] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#111111] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F6F4F2] border border-transparent rounded-xl text-[#111111] focus:outline-none focus:border-[#D4A5A5] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#F6F4F2] border border-transparent rounded-xl text-[#111111] placeholder-[#6F6F6F] focus:outline-none focus:border-[#D4A5A5] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
              Common Questions
            </span>
            <h2 className="font-display text-3xl font-bold text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#111111] mb-2">
                How do I purchase products?
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                Click on any "Buy on Amazon" button to be redirected to the product page on Amazon India where you can complete your purchase securely.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#111111] mb-2">
                Do you handle shipping?
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                All orders are fulfilled by Amazon India. They handle shipping, delivery, and customer service for all purchases.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#111111] mb-2">
                Are the prices accurate?
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                We display the prices as shown on Amazon at the time of curation. Prices may change, so please verify on Amazon before purchasing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#111111] mb-2">
                How do I track my order?
              </h3>
              <p className="text-sm text-[#6F6F6F]">
                Once you purchase on Amazon, you\'ll receive tracking information via email and can track your order through your Amazon account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
