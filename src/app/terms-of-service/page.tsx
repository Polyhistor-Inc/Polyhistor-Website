import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Polyhistor",
  description: "Terms and conditions for using the Polyhistor app and website. By using our services, you agree to these legal terms.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">TERMS OF SERVICE</h1>

        <div className="bg-[rgba(102,126,234,0.08)] border border-[rgba(102,126,234,0.2)] rounded-xl p-4 mb-8">
          <p className="text-sm text-white/70">
            <strong>Note:</strong> These Terms of Service apply to the <strong>Polyhistor mobile application</strong> (iOS and Android). 
            For questions about the Polyhistor Location Intelligence API or this website, please contact{' '}
            <a href="mailto:naveengali@thepolyhistor.com" className="text-[#a855f7] hover:underline">naveengali@thepolyhistor.com</a>.
          </p>
        </div>

        <div className="text-white/50 mb-8">
            <p><strong>Last Updated:</strong> March 25, 2026</p>
            <p><strong>Effective Date:</strong> March 25, 2026</p>
            <p className="mt-2">
              <Link href="/terms-of-service/versions" className="text-[#a855f7] hover:underline text-sm">
                View Version History →
              </Link>
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-white/70">

          {/* Quick Summary Box */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Eligibility:</strong> You must be 13+ to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> No harassment, hate speech, or illegal content. We ban violators immediately.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>AI Disclaimer:</strong> AI suggestions (Gemini) can be wrong. Always double-check info.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Virtual Currency:</strong> Coins have no real-world value. Cannot be exchanged for cash.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Safety:</strong> Do not use the App while driving. Traffic laws come first.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> We don&apos;t control third-party Travel Agencies. They are independent.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>As Is:</strong> The service is provided &quot;as is&quot; without warranties.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Account Deletion:</strong> Delete anytime from settings. Some data retained for legal compliance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white/[0.03] border border-white/[0.06] rounded-lg no-print">
            <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#acceptance" className="text-[#a855f7] hover:underline">1. Acceptance of Terms</a>
              <a href="#eligibility" className="text-[#a855f7] hover:underline">2. Eligibility</a>
              <a href="#account" className="text-[#a855f7] hover:underline">3. Account Registration</a>
              <a href="#ai" className="text-[#a855f7] hover:underline">4. AI Services &amp; Disclaimers</a>
              <a href="#navigation" className="text-[#a855f7] hover:underline">5. Navigation &amp; Safety</a>
              <a href="#agency" className="text-[#a855f7] hover:underline">6. Agency &amp; Group Travel</a>
              <a href="#conduct" className="text-[#a855f7] hover:underline">7. User Conduct</a>
              <a href="#gamification" className="text-[#a855f7] hover:underline">8. Gamification &amp; Virtual Currency</a>
              <a href="#referral" className="text-[#a855f7] hover:underline">9. Referral Program</a>
              <a href="#trip-expense" className="text-[#a855f7] hover:underline">10. Trip Expense Tracking</a>
              <a href="#account-deletion" className="text-[#a855f7] hover:underline">11. Account Deletion</a>
              <a href="#ip" className="text-[#a855f7] hover:underline">12. Intellectual Property</a>
              <a href="#dmca" className="text-[#a855f7] hover:underline">13. Copyright (DMCA)</a>
              <a href="#disclaimers" className="text-[#a855f7] hover:underline">14. Warranty Disclaimers</a>
              <a href="#liability" className="text-[#a855f7] hover:underline">15. Limitation of Liability</a>
              <a href="#law" className="text-[#a855f7] hover:underline">16. Governing Law</a>
              <a href="#changes" className="text-[#a855f7] hover:underline">17. Changes to Terms</a>
              <a href="#contact" className="text-[#a855f7] hover:underline">18. Contact Information</a>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8" id="acceptance">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a corporation organized under the laws of the State of Delaware.
            </p>
            <p className="mb-4">
              By accessing, downloading, installing, or using the Polyhistor mobile application (the &quot;App&quot;) and its related services, website, and backend infrastructure (collectively, the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <p className="mb-4 font-bold">
              IF you do not agree to these Terms, you must not access or use the Service.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section className="mb-8" id="eligibility">
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="mb-4">
              The Service is strictly intended for users who are <strong>13 years of age or older</strong>. By using the Service, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are at least 13 years old.</li>
              <li>You have the full right, power, and legal authority to enter into this agreement.</li>
              <li>You represent that you are not a person barred from receiving services under the laws of the United States or other applicable jurisdiction.</li>
            </ul>
          </section>

          {/* 3. Account Registration &amp; Security */}
          <section className="mb-8" id="account">
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration &amp; Security</h2>
            <p className="mb-4">To access features such as Trip Planning, Group Chat, and Navigation, you must register for an account.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information (including your name and email) during the registration process.</li>
              <li><strong>Security:</strong> You are responsible for safeguarding your login credentials. You accept responsibility for all activities that occur under your account.</li>
              <li><strong>Notification:</strong> You agree to notify us immediately at <a href="mailto:legal@thepolyhistor.com" className="text-[#a855f7] hover:underline">legal@thepolyhistor.com</a> if you suspect any unauthorized use of your account.</li>
            </ul>
          </section>

          {/* 4. AI Services &amp; Travel Disclaimers */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-white mb-4">4. AI Services &amp; Travel Disclaimers</h2>
            <p className="mb-4">The Service utilizes artificial intelligence technologies, including <strong>Google Gemini</strong>, to generate travel itineraries, place recommendations, and &quot;Magic Code&quot; trip templates.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Reliance on AI:</strong> You acknowledge that AI technologies may produce inaccurate, outdated, or &quot;hallucinated&quot; information. We do not guarantee the accuracy of opening hours, ticket prices, location data, or safety information generated by the AI.</li>
              <li><strong>Verification Required:</strong> You agree to independently verify all travel details (flights, hotels, visa requirements) before booking or traveling. Polyhistor Inc is not liable for missed connections, closed venues, or financial losses resulting from reliance on AI suggestions.</li>
            </ul>
          </section>

          {/* 5. Navigation &amp; Location Safety */}
          <section className="mb-8" id="navigation">
            <h2 className="text-2xl font-bold text-white mb-4">5. Navigation &amp; Location Safety</h2>
            <p className="mb-4">The Service includes real-time navigation and location tracking features powered by third-party providers (e.g., Mapbox, Google Places).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Driver Safety:</strong> <strong>DO NOT</strong> use the App in a manner that distracts you while driving. You must obey all traffic laws and regulations. You acknowledge that map data may be inconsistent with actual road conditions.</li>
              <li><strong>Location Sharing:</strong> The App allows you to share your real-time location with Friends and Groups (&quot;Live Tracking&quot;). This feature is voluntary. You are responsible for managing your privacy settings and &quot;Ghost Mode&quot; status.</li>
            </ul>
          </section>

          {/* 6. Agency &amp; Group Travel */}
          <section className="mb-8" id="agency">
            <h2 className="text-2xl font-bold text-white mb-4">6. Agency &amp; Group Travel</h2>
            <p className="mb-4">Users may use the App to join trips organized by third-party Travel Agencies (&quot;Agency&quot;).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Relationship:</strong> Agencies are independent third parties and are not employees, agents, or partners of Polyhistor Inc. We provide the technical platform for communication and itinerary management but do not control the Agency&apos;s operations.</li>
              <li><strong>Data Access:</strong> By joining an Agency Trip, you authorize that Agency to view your profile, trip progress, and real-time location during the active dates of that trip.</li>
              <li><strong>Liability:</strong> Polyhistor Inc is not responsible for the acts, omissions, errors, representations, warranties, breaches, or negligence of any Agency or for any personal injuries, death, property damage, or other damages or expenses resulting there from.</li>
            </ul>
          </section>

          {/* 7. User Conduct &amp; Zero Tolerance Policy */}
          <section className="mb-8" id="conduct">
            <h2 className="text-2xl font-bold text-white mb-4">7. User Conduct &amp; Zero Tolerance Policy</h2>
            <p className="mb-4">We are committed to a safe and respectful community. We enforce a <strong>Zero Tolerance Policy</strong> for objectionable content and abusive behavior.</p>
            <p className="mb-4">You agree <strong>NOT</strong> to:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Harass or Bully:</strong> Engage in harassment, intimidation, defamation, or stalking of any user.</li>
              <li><strong>Post Illegal/Harmful Content:</strong> Upload content that promotes hate speech, violence, discrimination, sexually explicit material, or illegal acts.</li>
              <li><strong>Spam:</strong> Use the Service for unauthorized commercial advertising or &quot;spamming.&quot;</li>
              <li><strong>Reverse Engineer:</strong> Attempt to decompile, reverse engineer, or hack the App&apos;s source code or encryption protocols.</li>
            </ol>
            <p className="mb-4"><strong>Enforcement:</strong> We reserve the right to monitor content (subject to our privacy and encryption standards) and take action against violations, including removing content and <strong>permanently banning</strong> accounts without prior notice.</p>
          </section>

          {/* 8. Gamification &amp; Virtual Currency */}
          <section className="mb-8" id="gamification">
            <h2 className="text-2xl font-bold text-white mb-4">8. Gamification &amp; Virtual Currency</h2>
            <p className="mb-4">The Service includes gamification features such as points, coins, badges, and leaderboards to enhance user engagement.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Real-World Value:</strong> Virtual coins, points, badges, and other gamification elements have <strong>no real-world monetary value</strong>. They are virtual items for in-app use only.</li>
              <li><strong>No Cash Exchange:</strong> Virtual currency <strong>cannot be exchanged for cash</strong>, transferred to other users for money, or redeemed for real-world goods or services outside the App.</li>
              <li><strong>Not Personal Property:</strong> Virtual currency and gamification elements are not your personal property. They are licensed to you under these Terms.</li>
              <li><strong>Modification Rights:</strong> Polyhistor Inc reserves the right to <strong>modify, suspend, revoke, or remove</strong> any virtual currency, points, badges, or leaderboard rankings at any time, with or without notice, for any reason including but not limited to: violations of these Terms, technical issues, or game balance adjustments.</li>
              <li><strong>No Guarantee of Availability:</strong> We do not guarantee that gamification features will remain available indefinitely. Features may be changed or discontinued at our sole discretion.</li>
            </ul>
          </section>

          {/* 9. Referral Program */}
          <section className="mb-8" id="referral">
            <h2 className="text-2xl font-bold text-white mb-4">9. Referral Program</h2>
            <p className="mb-4">Polyhistor may offer a referral program that rewards users for inviting friends to join the Service.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Eligibility:</strong> Referral rewards are only granted for valid referrals of new, unique users who have not previously created a Polyhistor account.</li>
              <li><strong>Fraud Prevention:</strong> Polyhistor Inc reserves the right to <strong>withhold, suspend, or revoke</strong> referral rewards if we detect spam, fraudulent referrals, self-referrals, fake accounts, or any other abuse of the referral program.</li>
              <li><strong>Program Changes:</strong> We may modify or terminate the referral program at any time without prior notice.</li>
            </ul>
          </section>

          {/* 10. Trip Expense Tracking Disclaimer */}
          <section className="mb-8" id="trip-expense">
            <h2 className="text-2xl font-bold text-white mb-4">10. Trip Expense Tracking Disclaimer</h2>
            <p className="mb-4">The Service may include features for tracking trip expenses, budgets, and financial summaries.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Not Professional Advice:</strong> The expense tracking features are provided for <strong>personal organizational purposes only</strong>. They do not constitute financial, accounting, tax, or legal advice.</li>
              <li><strong>No Liability for Errors:</strong> Polyhistor Inc is <strong>not liable</strong> for any errors, omissions, or inaccuracies in expense calculations, currency conversions, or financial summaries generated by the App.</li>
              <li><strong>User Responsibility:</strong> You are solely responsible for verifying all financial information and consulting with qualified professionals (accountants, tax advisors, financial planners) for any financial decisions or tax reporting requirements.</li>
            </ul>
          </section>

          {/* 11. Account Deletion */}
          <section className="mb-8" id="account-deletion">
            <h2 className="text-2xl font-bold text-white mb-4">11. Account Deletion</h2>
            <p className="mb-4">You have the right to delete your account at any time.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>How to Delete:</strong> You can delete your account from within the App by navigating to <strong>Settings &gt; Account &gt; Delete Account</strong>.</li>
              <li><strong>Effect of Deletion:</strong> Upon account deletion, your profile, personal information, trip data, messages, and gamification data will be permanently removed from the Service.</li>
              <li><strong>Data Retention After Deletion:</strong> Certain data may be retained for a limited period after deletion for legal compliance, fraud prevention, and dispute resolution purposes. This includes: (i) transaction records required by law, (ii) data necessary to enforce our Terms, and (iii) anonymized analytics data that cannot be linked to your identity.</li>
              <li><strong>Irreversible Action:</strong> Account deletion is <strong>permanent and irreversible</strong>. Once deleted, you cannot recover your account or any associated data.</li>
            </ul>
          </section>

          {/* 12. Intellectual Property &amp; License */}
          <section className="mb-8" id="ip">
            <h2 className="text-2xl font-bold text-white mb-4">12. Intellectual Property &amp; License</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Our IP:</strong> The Service, including its original content, code, &quot;Polyhistor&quot; trademarks, logos, and visual design, is the exclusive property of Polyhistor Inc.</li>
              <li><strong>Your Content:</strong> You retain ownership of the photos, chats, and itineraries (&quot;User Content&quot;) you post. By posting, you grant Polyhistor Inc a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content solely for the purpose of operating and improving the Service.</li>
            </ul>
          </section>

          {/* 13. Copyright Infringement (DMCA) */}
          <section className="mb-8" id="dmca">
            <h2 className="text-2xl font-bold text-white mb-4">13. Copyright Infringement (DMCA)</h2>
            <p className="mb-4">
              If you believe your copyrighted work is being infringed on the Service, please submit a notice to <a href="mailto:legal@thepolyhistor.com" className="text-[#a855f7] hover:underline">legal@thepolyhistor.com</a> including:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>A description of the copyrighted work.</li>
              <li>The location of the infringing material on the App.</li>
              <li>Your contact information.</li>
            </ol>
          </section>

          {/* 14. Disclaimers of Warranties */}
          <section className="mb-8" id="disclaimers">
            <h2 className="text-2xl font-bold text-white mb-4">14. Disclaimers of Warranties</h2>
            <p className="uppercase text-sm leading-relaxed font-bold mb-4">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
            </p>
            <p className="uppercase text-sm leading-relaxed mb-4">
              POLYHISTOR INC EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 uppercase text-sm leading-relaxed">
              <li><strong>ACCURACY:</strong> WARRANTIES REGARDING THE ACCURACY OF MAPS, NAVIGATION ROUTES, OR AI-GENERATED ITINERARIES.</li>
              <li><strong>RELIABILITY:</strong> WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.</li>
              <li><strong>THIRD PARTIES:</strong> WARRANTIES REGARDING THE QUALITY OR SAFETY OF SERVICES PROVIDED BY TRAVEL AGENCIES OR THIRD-PARTY VENDORS.</li>
            </ul>
          </section>

          {/* 15. Limitation of Liability */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-white mb-4">15. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, <strong>POLYHISTOR INC</strong>, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              <br />(A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE;
              <br />(B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE;
              <br />(C) ANY CONTENT OBTAINED FROM THE SERVICE; AND
              <br />(D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>
          </section>

          {/* 16. Governing Law and Venue */}
          <section className="mb-8" id="law">
            <h2 className="text-2xl font-bold text-white mb-4">16. Governing Law and Venue</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Delaware</strong>, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within Delaware for the resolution of any disputes.
            </p>
          </section>

          {/* 17. Changes to Terms */}
          <section className="mb-8" id="changes">
            <h2 className="text-2xl font-bold text-white mb-4">17. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes by updating the &quot;Last Updated&quot; date or sending a notification within the App. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* 18. Contact Information */}
          <section className="mb-8 border-t border-white/10 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-white mb-4">18. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-[#a855f7] hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}
