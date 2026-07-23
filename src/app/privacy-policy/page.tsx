import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Polyhistor",
  description: "Learn how Polyhistor collects, uses, and protects your personal data. Our commitment to your privacy and security.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">PRIVACY POLICY</h1>

        <div className="bg-[rgba(102,126,234,0.08)] border border-[rgba(102,126,234,0.2)] rounded-xl p-4 mb-8">
          <p className="text-sm text-white/70">
            <strong>Note:</strong> This Privacy Policy applies to the <strong>Polyhistor mobile application</strong> (iOS and Android). 
            For questions about the Polyhistor Location Intelligence API or this website, please contact{' '}
            <a href="mailto:naveengali@thepolyhistor.com" className="text-[#a855f7] hover:underline">naveengali@thepolyhistor.com</a>.
          </p>
        </div>

        <div className="text-white/50 mb-8">
            <p><strong>Last Updated:</strong> March 25, 2026</p>
            <p><strong>Effective Date:</strong> March 25, 2026</p>
            <p className="mt-2">
              <Link href="/privacy-policy/versions" className="text-[#a855f7] hover:underline text-sm">
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
                  <span><strong>Data We Collect:</strong> Account info, trip details, user content, real-time location (for navigation), phone number (for SMS verification), and gamification data (points, coins, leaderboard rankings).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>AI Usage:</strong> We use Google Gemini to generate itinerary suggestions.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> If you join an Agency trip, they can see your location &amp; profile during that trip.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Privacy Controls:</strong> Use &quot;Ghost Mode&quot; to pause location sharing anytime. iOS users can limit tracking via ATT.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Security:</strong> Direct messages are E2E encrypted. Group chat metadata is not encrypted. We auto-purge deleted messages.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>No Selling:</strong> We do not sell your personal data to third parties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white/[0.03] border border-white/[0.06] rounded-lg no-print">
            <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#collect" className="text-[#a855f7] hover:underline">1. Information We Collect</a>
              <a href="#ai" className="text-[#a855f7] hover:underline">2. AI &amp; Automated Processing</a>
              <a href="#use" className="text-[#a855f7] hover:underline">3. How We Use Your Info</a>
              <a href="#sharing" className="text-[#a855f7] hover:underline">4. Data Sharing</a>
              <a href="#messaging" className="text-[#a855f7] hover:underline">5. Messaging &amp; Encryption</a>
              <a href="#control" className="text-[#a855f7] hover:underline">6. Control Over Your Data</a>
              <a href="#retention" className="text-[#a855f7] hover:underline">7. Data Retention</a>
              <a href="#security" className="text-[#a855f7] hover:underline">8. Security</a>
              <a href="#children" className="text-[#a855f7] hover:underline">9. Children&apos;s Privacy</a>
              <a href="#jurisdiction" className="text-[#a855f7] hover:underline">10. Jurisdiction</a>
              <a href="#att" className="text-[#a855f7] hover:underline">11. Apple App Tracking Transparency</a>
              <a href="#contact" className="text-[#a855f7] hover:underline">12. Contact Us</a>
            </div>
          </div>

          <p className="mb-6">
            <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a corporation organized under the laws of the State of Delaware, is committed to protecting your privacy. This Privacy Policy describes how we collect, process, and safeguard your information when you use the Polyhistor mobile application and associated services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mb-6">
            By creating an account or using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-8" id="collect">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect data to provide accurate navigation, AI-driven recommendations, social connectivity, and gamification features.</p>

            <h3 className="text-xl font-semibold text-white/80 mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Registration:</strong> When you create an account, we collect your <strong>username</strong>, <strong>email address</strong>, <strong>phone number</strong> (for SMS verification), and <strong>password</strong> (hashed for security).</li>
              <li><strong>Profile Information:</strong> You may provide a display name, bio, date of birth, gender, hometown, language, and timezone settings.</li>
              <li><strong>Trip &amp; Itinerary Data:</strong> We collect trip details including destination, budget, start/end dates, and itinerary items (flights, hotels, activities).</li>
              <li><strong>User Content:</strong> This includes messages, photos (profile pictures, trip covers), comments on itineraries, and votes.</li>
              <li><strong>Gamification Data:</strong> We collect and track your <strong>points</strong>, <strong>coin balances</strong>, <strong>leaderboard rankings</strong>, <strong>referral codes</strong>, and achievement badges earned through app engagement.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/80 mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real-Time Location &amp; Navigation History:</strong> To provide routing and &quot;Live Tracking,&quot; we collect your precise latitude, longitude, speed, and heading. We store <strong>Navigation Sessions</strong> (origin, destination, waypoints) and <strong>Location History</strong> timestamps.</li>
              <li><strong>Device &amp; Usage Data:</strong> We use analytics tools (PostHog and Sentry) to collect device models, IP addresses, operating systems, crash logs, and interaction metrics to improve App stability.</li>
              <li><strong>Media Metadata:</strong> When you upload images, we may process metadata associated with the file.</li>
            </ul>
          </section>

          {/* 2. Artificial Intelligence (AI) &amp; Automated Processing */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-white mb-4">2. Artificial Intelligence (AI) &amp; Automated Processing</h2>
            <p className="mb-4">We use advanced AI to personalize your travel experience.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Generative AI (Google Gemini):</strong> We utilize Google&apos;s Gemini models to generate itinerary suggestions and travel advice. Anonymized query data is sent to our AI partners to generate responses.</li>
              <li><strong>Vector Embeddings:</strong> We process your travel preferences and historical trip data to create &quot;embeddings&quot; (mathematical vector representations). These are stored in our database to help our AI &quot;understand&quot; your travel style and find semantically similar locations.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8" id="use">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Navigation:</strong> To calculate routes, provide lane guidance, and estimate arrival times using Mapbox and Google Places.</li>
              <li><strong>Social Connectivity:</strong> To facilitate Friend requests, Group chats, and location sharing between connected users.</li>
              <li><strong>Agency Integration:</strong> If you accept an invite from a Travel Agency, we link your account to that Agency to facilitate professional trip planning.</li>
              <li><strong>Communication:</strong> To send push notifications (via Firebase) and emails (via Resend) regarding trip updates, friend requests, or security alerts. We may also send SMS messages for verification purposes.</li>
              <li><strong>Gamification:</strong> To track your points, coin balances, leaderboard rankings, and referral activity. This data is used to display your progress and enable social competition features.</li>
              <li><strong>Safety &amp; Moderation:</strong> We employ automated and manual moderation to detect hate speech, harassment, or unsafe content in compliance with our community standards.</li>
            </ul>
          </section>

          {/* 4. Data Sharing and Third Parties */}
          <section className="mb-8" id="sharing">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Third Parties</h2>
            <p className="mb-4">We do not sell your personal data. We share data only with the specific infrastructure providers necessary to run the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cloud Infrastructure &amp; Storage:</strong> <strong>AWS S3</strong> for secure file storage (images, media) and <strong>Supabase</strong> for database hosting and real-time data synchronization.</li>
              <li><strong>Maps &amp; Location:</strong> Mapbox, Google Places, and OpenMeteo (weather data) to provide map interfaces and environmental context.</li>
              <li><strong>Analytics &amp; Stability:</strong> PostHog (analytics) and Sentry (error tracking).</li>
              <li><strong>Travel Agencies:</strong> <strong>Important:</strong> If you join a trip organized by an Agency or link your account to an Agency, that Agency&apos;s staff will have access to your name, profile, real-time location <em>during the trip</em>, and itinerary details.</li>
            </ul>
          </section>

          {/* 5. Messaging and Encryption */}
          <section className="mb-8" id="messaging">
            <h2 className="text-2xl font-bold text-white mb-4">5. Messaging and Encryption</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>End-to-End Encryption (E2E) for Direct Messages:</strong> Your one-on-one direct messages are protected with end-to-end encryption. Messages are stored with an Initialization Vector (IV) and Auth Tag, ensuring that only you and the recipient can read the content.</li>
              <li><strong>Group Chat Encryption:</strong> Group chat messages are encrypted in transit and at rest, but <strong>group chat metadata</strong> (participant lists, group names, timestamps) is <strong>not end-to-end encrypted</strong> and may be accessible to Polyhistor for moderation and service operation purposes.</li>
              <li><strong>Retention:</strong> We implement an auto-purge policy for deleted messages. While a message is removed from the user interface immediately upon deletion, a backup may be retained for up to <strong>90 days</strong> for safety and moderation auditing before being permanently erased.</li>
            </ul>
          </section>

          {/* 6. Control Over Your Data */}
          <section className="mb-8" id="control">
            <h2 className="text-2xl font-bold text-white mb-4">6. Control Over Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Ghost Mode:</strong> You can toggle &quot;Ghost Mode&quot; within the application to pause real-time location sharing with friends and groups.</li>
              <li><strong>Privacy Settings:</strong> You can manage notification preferences (Push/Email/SMS) and friend request settings in your User Settings.</li>
              <li><strong>Blocking:</strong> You have the right to block other users. Blocked users cannot see your location or send you messages.</li>
              <li><strong>Apple App Tracking Transparency (ATT):</strong> iOS users will see an ATT modal requesting permission to track. You can choose to limit tracking, which affects personalized advertising and analytics data collection. See Section 11 for details.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-8" id="retention">
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p className="mb-4">We retain your personal data only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Data:</strong> Retained until you request deletion.</li>
              <li><strong>Navigation History:</strong> Retained to provide your personal travel history logs. You may delete specific trips from your history.</li>
              <li><strong>Gamification Data:</strong> Points, coins, and leaderboard data are retained as long as your account is active. Upon account deletion, this data is permanently removed.</li>
              <li><strong>Inactive Accounts:</strong> We reserve the right to delete accounts that have been inactive for an extended period.</li>
            </ul>
          </section>

          {/* 8. Security */}
          <section className="mb-8" id="security">
            <h2 className="text-2xl font-bold text-white mb-4">8. Security</h2>
            <p className="mb-4">
              We use industry-standard security measures, including HTTPS encryption in transit and database encryption at rest. However, no method of transmission over the Internet is 100% secure. You are responsible for maintaining the secrecy of your unique password and account information.
            </p>
          </section>

          {/* 9. Children&apos;s Privacy */}
          <section className="mb-8" id="children">
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p className="mb-4">
              The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information from our files.
            </p>
          </section>

          {/* 10. Jurisdiction and International Transfers */}
          <section className="mb-8" id="jurisdiction">
            <h2 className="text-2xl font-bold text-white mb-4">10. Jurisdiction and International Transfers</h2>
            <p className="mb-4">
              Polyhistor Inc is a Delaware corporation. Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
            </p>
          </section>

          {/* 11. Apple App Tracking Transparency (ATT) */}
          <section className="mb-8" id="att">
            <h2 className="text-2xl font-bold text-white mb-4">11. Apple App Tracking Transparency (ATT)</h2>
            <p className="mb-4">
              For iOS users, Apple requires apps to request your permission before tracking your activity across other companies&apos; apps and websites. When you first launch Polyhistor on iOS, you will see an <strong>App Tracking Transparency (ATT) modal</strong> asking for your consent.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>If You Allow Tracking:</strong> We may collect data about your app usage for personalized advertising and analytics purposes. This helps us improve the app and show you more relevant content.</li>
              <li><strong>If You Request App Not to Track:</strong> We will not collect tracking data for advertising purposes. You will still receive a fully functional app experience, but ads and recommendations may be less personalized.</li>
              <li><strong>Changing Your Choice:</strong> You can change your ATT preference at any time in your iOS device Settings &gt; Privacy &gt; Tracking.</li>
            </ul>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-8 border-t border-white/10 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
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
