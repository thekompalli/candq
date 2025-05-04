import React from 'react';
import { FileText } from 'lucide-react';

const TermsAndConditionsPage = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <FileText className="h-12 w-12 text-navy mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-navy mb-2">Terms and Conditions</h1>
            <p className="text-navy-light">Last updated: 4 May 2025</p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. The Fresh Batch</h2>
              <p className="text-navy-light mb-3">
                Welcome to Croissant & Questions ("<strong>C&Q</strong>," "<strong>we</strong>," "<strong>us</strong>"). By accessing our website, forum, podcast, or other services (collectively, the "<strong>Services</strong>"), you're agreeing to these Terms and Conditions ("<strong>Terms</strong>"). If these Terms seem underbaked to you, please exit the boulangerie and don't use our Services.
              </p>
              <p className="text-navy-light">
                <strong>Legal entity:</strong> C&Q SAS, 27 Rue de la Boulangerie, 75005 Paris, France. <strong>Contact:</strong> hello@croissantquestions.com
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Your Seat at the Café</h2>
              <p className="text-navy-light mb-3">
                To access certain features like submitting questions or participating in our community, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">Provide accurate information</li>
                <li className="mb-2">Keep your login details confidential (no sharing your croissant)</li>
                <li className="mb-2">Be responsible for all activity under your account</li>
                <li className="mb-2">Notify us immediately if your account is compromised</li>
              </ul>
              <p className="text-navy-light">
                We reserve the right to suspend or terminate accounts that violate these Terms or remain inactive for extended periods (3+ years).
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. Community Etiquette</h2>
              <p className="text-navy-light mb-3">
                Our forum (hosted on Reddit) and podcast platforms allow you to post content, ask questions, and engage with others. When using our Services, you agree not to:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">Post content that's illegal, harmful, misleading, or discriminatory</li>
                <li className="mb-2">Harass or bully other users</li>
                <li className="mb-2">Impersonate others or misrepresent your affiliation</li>
                <li className="mb-2">Share spam, unauthorized promotions, or malware</li>
                <li className="mb-2">Violate others' intellectual property rights</li>
                <li className="mb-2">Attempt to circumvent any security measures</li>
              </ul>
              <p className="text-navy-light">
                We may remove content or restrict users who violate these standards. Remember, a good croissant is crispy on the outside, but kind on the inside!
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Our Proprietary Pastries</h2>
              <p className="text-navy-light mb-3">
                The C&Q name, logo, podcast content, and original resources are our intellectual property. You may:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">Use our content for personal, non-commercial purposes</li>
                <li className="mb-2">Share links to our content</li>
                <li className="mb-2">Quote brief excerpts with proper attribution</li>
              </ul>
              <p className="text-navy-light mb-3">
                You may not:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">Reproduce, distribute, or modify our content without permission</li>
                <li className="mb-2">Use our trademarks in a way that suggests endorsement</li>
                <li className="mb-2">Create derivative works based on our podcast episodes</li>
              </ul>
              <p className="text-navy-light">
                By posting content on our forum or submitting questions, you grant us a non-exclusive license to share, display, and use that content in connection with our Services.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. External Bakeries</h2>
              <p className="text-navy-light mb-3">
                Our Services link to third-party platforms like Reddit, Spotify, and others. We are not responsible for:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">Content on third-party sites</li>
                <li className="mb-2">Privacy practices of third parties</li>
                <li className="mb-2">Changes to third-party terms or functionality</li>
                <li className="mb-2">Any transactions between you and third parties</li>
              </ul>
              <p className="text-navy-light">
                Your use of third-party services is subject to their terms and conditions. We recommend reviewing those terms before engaging with these platforms.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. No Perfect Pastry Guarantee</h2>
              <p className="text-navy-light mb-3">
                While we aim to provide valuable resources for international students, our Services come with some limitations:
              </p>
              <ul className="list-disc pl-5 text-navy-light mb-3">
                <li className="mb-2">We provide general information, not professional advice</li>
                <li className="mb-2">Content is provided "as is" without warranties</li>
                <li className="mb-2">We don't guarantee accuracy, completeness, or suitability for specific situations</li>
                <li className="mb-2">Service availability may vary and is not guaranteed to be uninterrupted</li>
              </ul>
              <p className="text-navy-light mb-3">
                <strong>Limitation of Liability:</strong> To the extent permitted by law, C&Q will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Services.
              </p>
              <p className="text-navy-light">
                For critical matters regarding visas, legal issues, or health concerns, please consult appropriate professionals.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. No Mini-Croissants</h2>
              <p className="text-navy-light">
                Our Services are intended for users aged 16 and older. If you're under 16, please enjoy our content with parental supervision. If we discover users under 16 have created accounts, we may terminate those accounts.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Changing the Recipe</h2>
              <p className="text-navy-light">
                We may modify these Terms from time to time. We'll notify you of significant changes via email or site announcement. Your continued use after changes constitutes acceptance. If you don't agree with updated Terms, please discontinue using our Services.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. When the Shop Closes</h2>
              <p className="text-navy-light">
                We reserve the right to suspend, modify, or discontinue any part of our Services at any time. We may also terminate or suspend your access for violations of these Terms, illegal activity, or as required by law. Upon termination, relevant provisions of these Terms will survive.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. French Recipe, French Rules</h2>
              <p className="text-navy-light">
                These Terms are governed by French law. Any disputes will be subject to the exclusive jurisdiction of courts in Paris, France, except where prohibited by applicable law.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">11. Send Us a Postcard</h2>
              <p className="text-navy-light">
                Questions about these Terms? Contact us at hello@croissantquestions.com or visit our physical address (perfect excuse to grab a real croissant) at 27 Rue de la Boulangerie, 75005 Paris, France.
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-navy-light italic">
                By using our Services, you acknowledge that you've read, understood, and agree to be bound by these Terms. Now go enjoy your virtual croissant!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;