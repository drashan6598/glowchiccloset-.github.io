const Privacy = () => {
  return (
    <div className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4A5A5] block mb-4">
              Legal
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#6F6F6F]">
              Last updated: March 1, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                At GlowChic Closet, we take your privacy seriously. This Privacy Policy describes how we collect, 
                use, and protect your personal information when you visit our website. By using our website, 
                you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-[#6F6F6F] space-y-2 mb-6">
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our contact form</li>
                <li>Participate in surveys or promotions</li>
                <li>Browse our website (through cookies and analytics)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#6F6F6F] space-y-2 mb-6">
                <li>Send you newsletters and promotional materials (if you\'ve subscribed)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small text files stored on your device that help us understand how you use our website. 
                You can control cookies through your browser settings, but disabling cookies may affect your experience.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Third-Party Services
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                We use third-party services to help us operate our website, including:
              </p>
              <ul className="list-disc pl-6 text-[#6F6F6F] space-y-2 mb-6">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Amazon Associates:</strong> For affiliate product linking</li>
                <li><strong>Email service providers:</strong> For newsletter delivery</li>
              </ul>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                These third-party services have their own privacy policies. We recommend reviewing their policies 
                to understand how they handle your data.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Your Rights
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-[#6F6F6F] space-y-2 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Children\'s Privacy
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="font-display text-2xl font-bold text-[#111111] mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-[#6F6F6F] leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-[#F6F4F2] rounded-xl p-6">
                <p className="text-[#111111] font-medium">GlowChic Closet</p>
                <p className="text-[#6F6F6F]">Email: hello@glowchiccloset.com</p>
                <p className="text-[#6F6F6F]">Address: Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
