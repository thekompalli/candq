import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-navy mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
            <p className="text-navy-light">Last updated: 4 May 2025</p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Who we are</h2>
              <p className="text-navy-light">
                Croissant & Questions ("<strong>C&Q</strong>," "<strong>we</strong>," "<strong>us</strong>") is an online community, podcast and resource hub that helps international students navigate life in France. <strong>DPO contact:</strong> croissantquestions@gmail.com
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. What data we collect & why</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-cream">
                      <th className="border border-gray-200 px-4 py-2 text-left">Category</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Examples</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Why we need it</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Legal basis (GDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Account info</td>
                      <td className="border border-gray-200 px-4 py-2">name, email, password hash, Discord handle</td>
                      <td className="border border-gray-200 px-4 py-2">create your account, send community updates</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(b) – contract</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Content you share</td>
                      <td className="border border-gray-200 px-4 py-2">forum posts, comments, podcast questions</td>
                      <td className="border border-gray-200 px-4 py-2">display & moderate content</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(b)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Podcast interactions</td>
                      <td className="border border-gray-200 px-4 py-2">episode plays, favourites</td>
                      <td className="border border-gray-200 px-4 py-2">personalise "Latest Episode" feed</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(f) – legitimate interest</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Newsletter consent</td>
                      <td className="border border-gray-200 px-4 py-2">email, opt-in timestamp</td>
                      <td className="border border-gray-200 px-4 py-2">send "Croissant Crumbs" newsletter</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(a) – consent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Usage data</td>
                      <td className="border border-gray-200 px-4 py-2">IP, device/browser, time-on-page, cookies</td>
                      <td className="border border-gray-200 px-4 py-2">improve site, spot bugs, keep hackers out</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(f)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Payment data (if you buy merch or donate)</td>
                      <td className="border border-gray-200 px-4 py-2">last 4 digits of card, billing address <em>via Stripe</em></td>
                      <td className="border border-gray-200 px-4 py-2">process transactions, VAT compliance</td>
                      <td className="border border-gray-200 px-4 py-2">Art. 6 (1)(b) & (c)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. Cookies & similar tech</h2>
              <p className="text-navy-light">
                We bake only <strong>essential cookies</strong> by default. Analytics and marketing cookies are opt-in (you'll get a banner). See our full Cookie Notice for shelf-life and ingredients.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. How we share data</h2>
              <ul className="list-disc pl-5 text-navy-light">
                <li className="mb-2">We never sell your data.</li>
                <li className="mb-2"><strong>Service providers</strong> – hosting (Vercel), email (Brevo), payments (Stripe), analytics (Matomo self-hosted). All are bound by DPA contracts.</li>
                <li className="mb-2"><strong>Legal or safety reasons</strong> – if a court or baguette-wielding regulator forces us, or to protect users from harm.</li>
                <li className="mb-2"><strong>Community highlights</strong> – with your explicit OK we may quote your forum post on social media.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. International transfers</h2>
              <p className="text-navy-light">
                Some providers run servers outside the EEA. When that happens, we rely on <strong>Standard Contractual Clauses (SCCs)</strong> or an adequacy decision (e.g., 🇨🇦).
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Data retention</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-cream">
                      <th className="border border-gray-200 px-4 py-2 text-left">Data</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Shelf life</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Account</td>
                      <td className="border border-gray-200 px-4 py-2">Until you delete it or 3 years of inactivity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Newsletter consent logs</td>
                      <td className="border border-gray-200 px-4 py-2">10 years (French CNIL rule)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Analytics</td>
                      <td className="border border-gray-200 px-4 py-2">13 months, then aggregated</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Payments</td>
                      <td className="border border-gray-200 px-4 py-2">10 years (tax law)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Your rights</h2>
              <p className="text-navy-light">
                Under GDPR you can <strong>access, correct, delete, port, restrict, or object</strong> to processing. Hit us up at privacy@croissantquestions.com and we'll respond within 30 days. You can also complain to CNIL (cnil.fr).
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Security</h2>
              <p className="text-navy-light">
                We use HTTPS everywhere, bcrypt-salted passwords, 2FA for admin, and daily backups stored encrypted at rest. Still, no web baguette is 100% crumb-proof.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Children</h2>
              <p className="text-navy-light">
                C&Q is for users <strong>16+</strong>. If you're a parent and think your mini-croissant signed up, email us and we'll delete the account.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Changes to this policy</h2>
              <p className="text-navy-light">
                If we ever change the recipe, we'll post the new policy here and email you if the changes are major. Check the "Last updated" date below to stay crunchy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;