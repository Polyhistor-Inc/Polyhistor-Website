/**
 * Legal Document Version History Data Structure
 * 
 * This module stores version history for Polyhistor's legal documents:
 * - Privacy Policy
 * - Terms of Service
 * - End User License Agreement (EULA)
 * 
 * Each version includes the complete content and a summary of changes.
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

/**
 * Type representing the document type/category
 */
export type DocumentType = 'privacy-policy' | 'terms-of-service' | 'eula';

/**
 * Interface for a single version of a legal document
 */
export interface LegalDocumentVersion {
  /** Version number as string (e.g., "1.0", "2.0") */
  version: string;
  
  /** Date when this version became/becomes effective */
  effectiveDate: string;
  
  /** Type of legal document */
  documentType: DocumentType;
  
  /** Summary of changes from the previous version */
  summaryOfChanges: string[];
  
  /** Full HTML/JSX content of the document */
  content: string;
}

/**
 * Interface for complete version history of a single document type
 */
export interface DocumentVersionHistory {
  /** Type of document */
  documentType: DocumentType;
  
  /** Display title for the document */
  title: string;
  
  /** Array of versions in chronological order (oldest first) */
  versions: LegalDocumentVersion[];
  
  /** Current/latest version number */
  currentVersion: string;
}

/**
 * Interface for the complete legal document version registry
 */
export interface LegalDocumentRegistry {
  /** Map of document type to its version history */
  documents: Record<DocumentType, DocumentVersionHistory>;
  
  /** Last updated timestamp for the registry */
  lastUpdated: string;
}

// ============================================================================
// VERSION 1.0 CONTENT (ORIGINAL DOCUMENTS)
// ============================================================================

const PRIVACY_POLICY_V1_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Polyhistor",
  description: "Learn how Polyhistor collects, uses, and protects your personal data. Our commitment to your privacy and security.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">PRIVACY POLICY</h1>
        <div className="text-slate-500 mb-8">
          <p><strong>Last Updated:</strong> February 11, 2026</p>
          <p><strong>Effective Date:</strong> February 11, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Data We Collect:</strong> Account info, trip details, user content, and real-time location (for navigation).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Usage:</strong> We use Google Gemini to generate itinerary suggestions.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> If you join an Agency trip, they can see your location &amp; profile during that trip.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Privacy Controls:</strong> Use &quot;Ghost Mode&quot; to pause location sharing anytime.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Security:</strong> Direct messages are encrypted-at-rest. We auto-purge deleted messages.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Selling:</strong> We do not sell your personal data to third parties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#collect" className="text-brand-blue hover:underline">1. Information We Collect</a>
              <a href="#ai" className="text-brand-blue hover:underline">2. AI &amp; Automated Processing</a>
              <a href="#use" className="text-brand-blue hover:underline">3. How We Use Your Info</a>
              <a href="#sharing" className="text-brand-blue hover:underline">4. Data Sharing</a>
              <a href="#messaging" className="text-brand-blue hover:underline">5. Messaging &amp; Encryption</a>
              <a href="#control" className="text-brand-blue hover:underline">6. Control Over Your Data</a>
              <a href="#retention" className="text-brand-blue hover:underline">7. Data Retention</a>
              <a href="#security" className="text-brand-blue hover:underline">8. Security</a>
              <a href="#children" className="text-brand-blue hover:underline">9. Children's Privacy</a>
              <a href="#jurisdiction" className="text-brand-blue hover:underline">10. Jurisdiction</a>
              <a href="#contact" className="text-brand-blue hover:underline">11. Contact Us</a>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect data to provide accurate navigation, AI-driven recommendations, and social connectivity.</p>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Registration:</strong> When you create an account, we collect your <strong>username</strong>, <strong>email address</strong>, and <strong>password</strong> (hashed for security).</li>
              <li><strong>Profile Information:</strong> You may provide a display name, bio, date of birth, gender, hometown, language, and timezone settings.</li>
              <li><strong>Trip &amp; Itinerary Data:</strong> We collect trip details including destination, budget, start/end dates, and itinerary items (flights, hotels, activities).</li>
              <li><strong>User Content:</strong> This includes messages, photos (profile pictures, trip covers), comments on itineraries, and votes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real-Time Location &amp; Navigation History:</strong> To provide routing and &quot;Live Tracking,&quot; we collect your precise latitude, longitude, speed, and heading. We store <strong>Navigation Sessions</strong> (origin, destination, waypoints) and <strong>Location History</strong> timestamps.</li>
              <li><strong>Device &amp; Usage Data:</strong> We use analytics tools (PostHog and Sentry) to collect device models, IP addresses, operating systems, crash logs, and interaction metrics to improve App stability.</li>
              <li><strong>Media Metadata:</strong> When you upload images, we may process metadata associated with the file.</li>
            </ul>
          </section>

          {/* 2. Artificial Intelligence (AI) &amp; Automated Processing */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Artificial Intelligence (AI) &amp; Automated Processing</h2>
            <p className="mb-4">We use advanced AI to personalize your travel experience.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Generative AI (Google Gemini):</strong> We utilize Google's Gemini models to generate itinerary suggestions and travel advice. Anonymized query data is sent to our AI partners to generate responses.</li>
              <li><strong>Vector Embeddings:</strong> We process your travel preferences and historical trip data to create &quot;embeddings&quot; (mathematical vector representations). These are stored in our database to help our AI &quot;understand&quot; your travel style and find semantically similar locations.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8" id="use">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Navigation:</strong> To calculate routes, provide lane guidance, and estimate arrival times using Mapbox and Google Places.</li>
              <li><strong>Social Connectivity:</strong> To facilitate Friend requests, Group chats, and location sharing between connected users.</li>
              <li><strong>Agency Integration:</strong> If you accept an invite from a Travel Agency, we link your account to that Agency to facilitate professional trip planning.</li>
              <li><strong>Communication:</strong> To send push notifications (via Firebase) and emails (via Resend) regarding trip updates, friend requests, or security alerts.</li>
              <li><strong>Safety &amp; Moderation:</strong> We employ automated and manual moderation to detect hate speech, harassment, or unsafe content in compliance with our community standards.</li>
            </ul>
          </section>

          {/* 4. Data Sharing and Third Parties */}
          <section className="mb-8" id="sharing">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="mb-4">We do not sell your personal data. We share data only with the specific infrastructure providers necessary to run the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cloud Infrastructure:</strong> AWS (Amazon Web Services) and Supabase for secure database hosting and file storage.</li>
              <li><strong>Maps &amp; Location:</strong> Mapbox, Google Places, and OpenMeteo (weather data) to provide map interfaces and environmental context.</li>
              <li><strong>Analytics &amp; Stability:</strong> PostHog (analytics) and Sentry (error tracking).</li>
              <li><strong>Travel Agencies:</strong> <strong>Important:</strong> If you join a trip organized by an Agency or link your account to an Agency, that Agency's staff will have access to your name, profile, real-time location <em>during the trip</em>, and itinerary details.</li>
            </ul>
          </section>

          {/* 5. Messaging and Encryption */}
          <section className="mb-8" id="messaging">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Messaging and Encryption</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Encryption:</strong> We implement encryption for your direct messages. Your messages are stored with an Initialization Vector (IV) and Auth Tag, adding a layer of security to your private conversations.</li>
              <li><strong>Retention:</strong> We implement an auto-purge policy for deleted messages. While a message is removed from the user interface immediately upon deletion, a backup may be retained for up to <strong>90 days</strong> for safety and moderation auditing before being permanently erased.</li>
            </ul>
          </section>

          {/* 6. Control Over Your Data */}
          <section className="mb-8" id="control">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Control Over Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Ghost Mode:</strong> You can toggle &quot;Ghost Mode&quot; within the application to pause real-time location sharing with friends and groups.</li>
              <li><strong>Privacy Settings:</strong> You can manage notification preferences (Push/Email) and friend request settings in your User Settings.</li>
              <li><strong>Blocking:</strong> You have the right to block other users. Blocked users cannot see your location or send you messages.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-8" id="retention">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="mb-4">We retain your personal data only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Data:</strong> Retained until you request deletion.</li>
              <li><strong>Navigation History:</strong> Retained to provide your personal travel history logs. You may delete specific trips from your history.</li>
              <li><strong>Inactive Accounts:</strong> We reserve the right to delete accounts that have been inactive for an extended period.</li>
            </ul>
          </section>

          {/* 8. Security */}
          <section className="mb-8" id="security">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security</h2>
            <p className="mb-4">
              We use industry-standard security measures, including HTTPS encryption in transit and database encryption at rest. However, no method of transmission over the Internet is 100% secure. You are responsible for maintaining the secrecy of your unique password and account information.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-8" id="children">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information from our files.
            </p>
          </section>

          {/* 10. Jurisdiction and International Transfers */}
          <section className="mb-8" id="jurisdiction">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Jurisdiction and International Transfers</h2>
            <p className="mb-4">
              Polyhistor Inc is a Delaware corporation. Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>
        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

const TERMS_OF_SERVICE_V1_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Polyhistor",
  description: "Terms and conditions for using the Polyhistor app and website. By using our services, you agree to these legal terms.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">TERMS OF SERVICE</h1>
        <div className="text-slate-500 mb-8">
          <p><strong>Last Updated:</strong> February 11, 2026</p>
          <p><strong>Effective Date:</strong> February 11, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Eligibility:</strong> You must be 13+ to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> No harassment, hate speech, or illegal content. We ban violators immediately.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Disclaimer:</strong> AI suggestions (Gemini) can be wrong. Always double-check info.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Safety:</strong> Do not use the App while driving. Traffic laws come first.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> We don&apos;t control third-party Travel Agencies. They are independent.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>As Is:</strong> The service is provided &quot;as is&quot; without warranties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#acceptance" className="text-brand-blue hover:underline">1. Acceptance of Terms</a>
              <a href="#eligibility" className="text-brand-blue hover:underline">2. Eligibility</a>
              <a href="#account" className="text-brand-blue hover:underline">3. Account Registration</a>
              <a href="#ai" className="text-brand-blue hover:underline">4. AI Services &amp; Disclaimers</a>
              <a href="#navigation" className="text-brand-blue hover:underline">5. Navigation &amp; Safety</a>
              <a href="#agency" className="text-brand-blue hover:underline">6. Agency &amp; Group Travel</a>
              <a href="#conduct" className="text-brand-blue hover:underline">7. User Conduct</a>
              <a href="#ip" className="text-brand-blue hover:underline">8. Intellectual Property</a>
              <a href="#dmca" className="text-brand-blue hover:underline">9. Copyright (DMCA)</a>
              <a href="#disclaimers" className="text-brand-blue hover:underline">10. Warranty Disclaimers</a>
              <a href="#liability" className="text-brand-blue hover:underline">11. Limitation of Liability</a>
              <a href="#law" className="text-brand-blue hover:underline">12. Governing Law</a>
              <a href="#changes" className="text-brand-blue hover:underline">13. Changes to Terms</a>
              <a href="#contact" className="text-brand-blue hover:underline">14. Contact Information</a>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8" id="acceptance">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration &amp; Security</h2>
            <p className="mb-4">To access features such as Trip Planning, Group Chat, and Navigation, you must register for an account.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information (including your name and email) during the registration process.</li>
              <li><strong>Security:</strong> You are responsible for safeguarding your login credentials. You accept responsibility for all activities that occur under your account.</li>
              <li><strong>Notification:</strong> You agree to notify us immediately at <a href="mailto:legal@thepolyhistor.com" className="text-brand-blue hover:underline">legal@thepolyhistor.com</a> if you suspect any unauthorized use of your account.</li>
            </ul>
          </section>

          {/* 4. AI Services &amp; Travel Disclaimers */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. AI Services &amp; Travel Disclaimers</h2>
            <p className="mb-4">The Service utilizes artificial intelligence technologies, including <strong>Google Gemini</strong>, to generate travel itineraries, place recommendations, and &quot;Magic Code&quot; trip templates.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Reliance on AI:</strong> You acknowledge that AI technologies may produce inaccurate, outdated, or &quot;hallucinated&quot; information. We do not guarantee the accuracy of opening hours, ticket prices, location data, or safety information generated by the AI.</li>
              <li><strong>Verification Required:</strong> You agree to independently verify all travel details (flights, hotels, visa requirements) before booking or traveling. Polyhistor Inc is not liable for missed connections, closed venues, or financial losses resulting from reliance on AI suggestions.</li>
            </ul>
          </section>

          {/* 5. Navigation &amp; Location Safety */}
          <section className="mb-8" id="navigation">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Navigation &amp; Location Safety</h2>
            <p className="mb-4">The Service includes real-time navigation and location tracking features powered by third-party providers (e.g., Mapbox, Google Places).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Driver Safety:</strong> <strong>DO NOT</strong> use the App in a manner that distracts you while driving. You must obey all traffic laws and regulations. You acknowledge that map data may be inconsistent with actual road conditions.</li>
              <li><strong>Location Sharing:</strong> The App allows you to share your real-time location with Friends and Groups (&quot;Live Tracking&quot;). This feature is voluntary. You are responsible for managing your privacy settings and &quot;Ghost Mode&quot; status.</li>
            </ul>
          </section>

          {/* 6. Agency &amp; Group Travel */}
          <section className="mb-8" id="agency">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Agency &amp; Group Travel</h2>
            <p className="mb-4">Users may use the App to join trips organized by third-party Travel Agencies (&quot;Agency&quot;).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Relationship:</strong> Agencies are independent third parties and are not employees, agents, or partners of Polyhistor Inc. We provide the technical platform for communication and itinerary management but do not control the Agency's operations.</li>
              <li><strong>Data Access:</strong> By joining an Agency Trip, you authorize that Agency to view your profile, trip progress, and real-time location during the active dates of that trip.</li>
              <li><strong>Liability:</strong> Polyhistor Inc is not responsible for the acts, omissions, errors, representations, warranties, breaches, or negligence of any Agency or for any personal injuries, death, property damage, or other damages or expenses resulting there from.</li>
            </ul>
          </section>

          {/* 7. User Conduct &amp; Zero Tolerance Policy */}
          <section className="mb-8" id="conduct">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. User Conduct &amp; Zero Tolerance Policy</h2>
            <p className="mb-4">We are committed to a safe and respectful community. We enforce a <strong>Zero Tolerance Policy</strong> for objectionable content and abusive behavior.</p>
            <p className="mb-4">You agree <strong>NOT</strong> to:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Harass or Bully:</strong> Engage in harassment, intimidation, defamation, or stalking of any user.</li>
              <li><strong>Post Illegal/Harmful Content:</strong> Upload content that promotes hate speech, violence, discrimination, sexually explicit material, or illegal acts.</li>
              <li><strong>Spam:</strong> Use the Service for unauthorized commercial advertising or &quot;spamming.&quot;</li>
              <li><strong>Reverse Engineer:</strong> Attempt to decompile, reverse engineer, or hack the App's source code or encryption protocols.</li>
            </ol>
            <p className="mb-4"><strong>Enforcement:</strong> We reserve the right to monitor content (subject to our privacy and encryption standards) and take action against violations, including removing content and <strong>permanently banning</strong> accounts without prior notice.</p>
          </section>

          {/* 8. Intellectual Property &amp; License */}
          <section className="mb-8" id="ip">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property &amp; License</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Our IP:</strong> The Service, including its original content, code, &quot;Polyhistor&quot; trademarks, logos, and visual design, is the exclusive property of Polyhistor Inc.</li>
              <li><strong>Your Content:</strong> You retain ownership of the photos, chats, and itineraries (&quot;User Content&quot;) you post. By posting, you grant Polyhistor Inc a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content solely for the purpose of operating and improving the Service.</li>
            </ul>
          </section>

          {/* 9. Copyright Infringement (DMCA) */}
          <section className="mb-8" id="dmca">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Copyright Infringement (DMCA)</h2>
            <p className="mb-4">
              If you believe your copyrighted work is being infringed on the Service, please submit a notice to <a href="mailto:legal@thepolyhistor.com" className="text-brand-blue hover:underline">legal@thepolyhistor.com</a> including:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>A description of the copyrighted work.</li>
              <li>The location of the infringing material on the App.</li>
              <li>Your contact information.</li>
            </ol>
          </section>

          {/* 10. Disclaimers of Warranties */}
          <section className="mb-8" id="disclaimers">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Disclaimers of Warranties</h2>
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

          {/* 11. Limitation of Liability */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, <strong>POLYHISTOR INC</strong>, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              <br />(A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE;
              <br />(B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE;
              <br />(C) ANY CONTENT OBTAINED FROM THE SERVICE; AND
              <br />(D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
            </p>
          </section>

          {/* 12. Governing Law and Venue */}
          <section className="mb-8" id="law">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law and Venue</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Delaware</strong>, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within Delaware for the resolution of any disputes.
            </p>
          </section>

          {/* 13. Changes to Terms */}
          <section className="mb-8" id="changes">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes by updating the &quot;Last Updated&quot; date or sending a notification within the App. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

const EULA_V1_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EULA | Polyhistor",
  description: "End User License Agreement for the Polyhistor mobile application. Read about your rights and responsibilities when using our service.",
};

export default function EULA() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">END USER LICENSE AGREEMENT (EULA)</h1>
        <p className="text-slate-500 mb-8">Last Updated: February 11, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>License:</strong> You get a limited, personal, non-commercial license to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> We strictly ban hate speech, harassment, and illegal content.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Features:</strong> Verify all AI suggestions. We aren&apos;t liable for &quot;hallucinations.&quot;</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Safety First:</strong> Never use the App while driving. Focus on the road.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> Travel Agencies are independent. We don&apos;t control them.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Warranty:</strong> The App is provided &quot;as is&quot; without guarantees.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#scope" className="text-brand-blue hover:underline">1. Scope of License</a>
              <a href="#ugc" className="text-brand-blue hover:underline">2. User Generic Content &amp; Policy</a>
              <a href="#ai" className="text-brand-blue hover:underline">3. AI Disclaimer</a>
              <a href="#location" className="text-brand-blue hover:underline">4. Location &amp; Navigation</a>
              <a href="#agencies" className="text-brand-blue hover:underline">5. Agency &amp; Group Travel</a>
              <a href="#updates" className="text-brand-blue hover:underline">6. Updates &amp; Maintenance</a>
              <a href="#external" className="text-brand-blue hover:underline">7. External Services</a>
              <a href="#warranty" className="text-brand-blue hover:underline">8. No Warranty</a>
              <a href="#liability" className="text-brand-blue hover:underline">9. Limitation of Liability</a>
              <a href="#apple" className="text-brand-blue hover:underline">10. Apple iOS Terms</a>
              <a href="#legal" className="text-brand-blue hover:underline">11. Legal Compliance</a>
              <a href="#contact" className="text-brand-blue hover:underline">12. Contact Information</a>
            </div>
          </div>

          <p className="mb-6">
            This End User License Agreement (&quot;Agreement&quot;) is a binding legal contract between you (&quot;User,&quot; &quot;You,&quot; or &quot;Your&quot;) and <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;), a corporation organized under the laws of the State of Delaware. This Agreement governs your access to and use of the Polyhistor mobile application (the &quot;App&quot;) on iOS and Android platforms.
          </p>
          <p className="font-bold mb-6">
            BY DOWNLOADING, INSTALLING, OR USING THE APP, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT DOWNLOAD OR USE THE APP.
          </p>

          {/* 1. Scope of License */}
          <section className="mb-8" id="scope">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Scope of License</h2>
            <p>
              Polyhistor Inc grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the App for your personal, non-commercial purposes strictly in accordance with this Agreement and the Usage Rules set forth in the Apple Media Services Terms and Conditions and/or the Google Play Terms of Service.
            </p>
          </section>

          {/* 2. User Generated Content &amp; Zero Tolerance Policy */}
          <section className="mb-8" id="ugc">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Generated Content &amp; Zero Tolerance Policy</h2>
            <p className="mb-4">The App contains interactive features (Group Chats, Itinerary Comments, Photo Uploads) that allow users to post content. To ensure a safe community, we enforce a strict Zero Tolerance Policy for objectionable content.</p>
            <p className="mb-4"><strong>Prohibited Content:</strong> You are strictly prohibited from uploading, sharing, or transmitting content that is:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Defamatory, harassed, abusive, or threatening.</li>
              <li>Pornographic, sexually explicit, or obscene.</li>
              <li>Hateful, discriminatory, or promoting violence against any individual or group.</li>
              <li>Illegal or promotes illegal acts.</li>
            </ul>
            <p className="mb-4"><strong>Content Moderation:</strong> Polyhistor Inc employs both automated AI detection and manual review to monitor content.</p>
            <p className="mb-4"><strong>Reporting &amp; Blocking:</strong> You agree to use the in-app &quot;Report&quot; and &quot;Block&quot; features to flag inappropriate content or abusive users.</p>
            <p className="mb-4"><strong>Enforcement:</strong> We review reported content within 24 hours. We reserve the right to remove any content and immediately terminate the account of any user found violating these standards without prior notice.</p>
          </section>

          {/* 3. Artificial Intelligence (AI) Disclaimer */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Artificial Intelligence (AI) Disclaimer</h2>
            <p className="mb-4">The App utilizes Generative AI technologies, including Google Gemini, to provide travel recommendations, itinerary planning, and chat assistance.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Warranty of Accuracy:</strong> AI is experimental and may produce &quot;hallucinations,&quot; errors, or outdated information. You acknowledge that opening hours, prices, and location descriptions generated by AI may be incorrect.</li>
              <li><strong>User Responsibility:</strong> You must independently verify all AI-generated suggestions. Polyhistor Inc is not liable for missed flights, closed venues, visa issues, or financial losses resulting from reliance on AI data.</li>
              <li><strong>Prohibited AI Use:</strong> You may not use the AI features to generate harmful, fraudulent, or illegal content.</li>
            </ul>
          </section>

          {/* 4. Location Services &amp; Navigation Safety */}
          <section className="mb-8" id="location">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Location Services &amp; Navigation Safety</h2>
            <p className="mb-4">The App integrates third-party mapping services (including Mapbox and Google Places) to provide real-time navigation and location sharing.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Distracted Driving:</strong> NEVER interact with the App while driving. You agree to use the App's navigation features only when it is safe and legal to do so.</li>
              <li><strong>Data Accuracy:</strong> Navigation routes are for planning purposes only. Actual road conditions, weather, and traffic laws always take precedence over App instructions.</li>
              <li><strong>Battery Usage:</strong> You acknowledge that continued use of GPS running in the background can dramatically decrease battery life.</li>
            </ul>
          </section>

          {/* 5. Agency &amp; Group Travel */}
          <section className="mb-8" id="agencies">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Agency &amp; Group Travel</h2>
            <p className="mb-4">If you use the App to participate in a trip organized by a third-party Travel Agency (&quot;Agency&quot;):</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Entities:</strong> The Agency is an independent third party. Polyhistor Inc provides the software platform but does not control the Agency's staff, itinerary decisions, or safety protocols.</li>
              <li><strong>Data Sharing:</strong> By accepting an Agency Invite, you consent to that Agency viewing your profile, itinerary status, and real-time location during the active dates of that trip.</li>
            </ul>
          </section>

          {/* 6. Updates and Maintenance */}
          <section className="mb-8" id="updates">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Updates and Maintenance</h2>
            <p className="mb-4">
              Polyhistor Inc may generally provide updates to the App to improve performance or fix bugs. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We are under no obligation to provide support or maintenance.</li>
              <li>Apple and Google have no obligation whatsoever to furnish any maintenance and support services with respect to the App.</li>
            </ul>
          </section>

          {/* 7. External Services */}
          <section className="mb-8" id="external">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. External Services</h2>
            <p>
              The App enables access to third-party services and websites (collectively and individually, &quot;External Services&quot;), including Mapbox, Google Maps, OpenMeteo, and others. Use of External Services is at your sole risk. We are not responsible for the content, accuracy, or privacy practices of any External Service.
            </p>
          </section>

          {/* 8. NO WARRANTY */}
          <section className="mb-8" id="warranty">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. NO WARRANTY</h2>
            <p className="uppercase text-sm leading-relaxed font-bold mb-4">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.
            </p>
            <p className="uppercase text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYHISTOR INC DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE AI/NAVIGATION DATA WILL BE ACCURATE.
            </p>
          </section>

          {/* 9. LIMITATION OF LIABILITY */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. LIMITATION OF LIABILITY</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL POLYHISTOR INC BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, HOWEVER CAUSED.
            </p>
          </section>

          {/* 10. Specific Terms for Apple iOS Users */}
          <section className="mb-8" id="apple">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Specific Terms for Apple iOS Users</h2>
            <p className="mb-4">If you accessed or downloaded the App from the Apple App Store, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Parties:</strong> This Agreement is between You and Polyhistor Inc only, not Apple. Polyhistor Inc, not Apple, is solely responsible for the App and the content thereof.</li>
              <li><strong>Product Claims:</strong> Apple is not responsible for addressing any claims by you or any third party relating to the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes that third party's intellectual property rights, Polyhistor Inc, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
            </ul>
          </section>

          {/* 11. Legal Compliance */}
          <section className="mb-8" id="legal">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Legal Compliance</h2>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country.</li>
              <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
            </ul>
          </section>

          {/* 12. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the App, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

// ============================================================================
// VERSION 2.0 CONTENT (WITH NEW ADDITIONS)
// ============================================================================

const PRIVACY_POLICY_V2_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Polyhistor",
  description: "Learn how Polyhistor collects, uses, and protects your personal data. Our commitment to your privacy and security.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">PRIVACY POLICY</h1>
        <div className="text-slate-500 mb-8">
          <p><strong>Last Updated:</strong> March 25, 2026</p>
          <p><strong>Effective Date:</strong> March 25, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Data We Collect:</strong> Account info, trip details, user content, real-time location (for navigation), phone number (for SMS verification), and gamification data (points, coins, leaderboard rankings).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Usage:</strong> We use Google Gemini to generate itinerary suggestions.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> If you join an Agency trip, they can see your location &amp; profile during that trip.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Privacy Controls:</strong> Use &quot;Ghost Mode&quot; to pause location sharing anytime. iOS users can limit tracking via ATT.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Security:</strong> Direct messages are E2E encrypted. Group chat metadata is not encrypted. We auto-purge deleted messages.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Selling:</strong> We do not sell your personal data to third parties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#collect" className="text-brand-blue hover:underline">1. Information We Collect</a>
              <a href="#ai" className="text-brand-blue hover:underline">2. AI &amp; Automated Processing</a>
              <a href="#use" className="text-brand-blue hover:underline">3. How We Use Your Info</a>
              <a href="#sharing" className="text-brand-blue hover:underline">4. Data Sharing</a>
              <a href="#messaging" className="text-brand-blue hover:underline">5. Messaging &amp; Encryption</a>
              <a href="#control" className="text-brand-blue hover:underline">6. Control Over Your Data</a>
              <a href="#retention" className="text-brand-blue hover:underline">7. Data Retention</a>
              <a href="#security" className="text-brand-blue hover:underline">8. Security</a>
              <a href="#children" className="text-brand-blue hover:underline">9. Children's Privacy</a>
              <a href="#jurisdiction" className="text-brand-blue hover:underline">10. Jurisdiction</a>
              <a href="#att" className="text-brand-blue hover:underline">11. Apple App Tracking Transparency</a>
              <a href="#contact" className="text-brand-blue hover:underline">12. Contact Us</a>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect data to provide accurate navigation, AI-driven recommendations, social connectivity, and gamification features.</p>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Account Registration:</strong> When you create an account, we collect your <strong>username</strong>, <strong>email address</strong>, <strong>phone number</strong> (for SMS verification), and <strong>password</strong> (hashed for security).</li>
              <li><strong>Profile Information:</strong> You may provide a display name, bio, date of birth, gender, hometown, language, and timezone settings.</li>
              <li><strong>Trip &amp; Itinerary Data:</strong> We collect trip details including destination, budget, start/end dates, and itinerary items (flights, hotels, activities).</li>
              <li><strong>User Content:</strong> This includes messages, photos (profile pictures, trip covers), comments on itineraries, and votes.</li>
              <li><strong>Gamification Data:</strong> We collect and track your <strong>points</strong>, <strong>coin balances</strong>, <strong>leaderboard rankings</strong>, <strong>referral codes</strong>, and achievement badges earned through app engagement.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2">B. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Real-Time Location &amp; Navigation History:</strong> To provide routing and &quot;Live Tracking,&quot; we collect your precise latitude, longitude, speed, and heading. We store <strong>Navigation Sessions</strong> (origin, destination, waypoints) and <strong>Location History</strong> timestamps.</li>
              <li><strong>Device &amp; Usage Data:</strong> We use analytics tools (PostHog and Sentry) to collect device models, IP addresses, operating systems, crash logs, and interaction metrics to improve App stability.</li>
              <li><strong>Media Metadata:</strong> When you upload images, we may process metadata associated with the file.</li>
            </ul>
          </section>

          {/* 2. Artificial Intelligence (AI) &amp; Automated Processing */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Artificial Intelligence (AI) &amp; Automated Processing</h2>
            <p className="mb-4">We use advanced AI to personalize your travel experience.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Generative AI (Google Gemini):</strong> We utilize Google's Gemini models to generate itinerary suggestions and travel advice. Anonymized query data is sent to our AI partners to generate responses.</li>
              <li><strong>Vector Embeddings:</strong> We process your travel preferences and historical trip data to create &quot;embeddings&quot; (mathematical vector representations). These are stored in our database to help our AI &quot;understand&quot; your travel style and find semantically similar locations.</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-8" id="use">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Third Parties</h2>
            <p className="mb-4">We do not sell your personal data. We share data only with the specific infrastructure providers necessary to run the Service:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cloud Infrastructure &amp; Storage:</strong> <strong>AWS S3</strong> for secure file storage (images, media) and <strong>Supabase</strong> for database hosting and real-time data synchronization.</li>
              <li><strong>Maps &amp; Location:</strong> Mapbox, Google Places, and OpenMeteo (weather data) to provide map interfaces and environmental context.</li>
              <li><strong>Analytics &amp; Stability:</strong> PostHog (analytics) and Sentry (error tracking).</li>
              <li><strong>Travel Agencies:</strong> <strong>Important:</strong> If you join a trip organized by an Agency or link your account to an Agency, that Agency's staff will have access to your name, profile, real-time location <em>during the trip</em>, and itinerary details.</li>
            </ul>
          </section>

          {/* 5. Messaging and Encryption */}
          <section className="mb-8" id="messaging">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Messaging and Encryption</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>End-to-End Encryption (E2E) for Direct Messages:</strong> Your one-on-one direct messages are protected with end-to-end encryption. Messages are stored with an Initialization Vector (IV) and Auth Tag, ensuring that only you and the recipient can read the content.</li>
              <li><strong>Group Chat Encryption:</strong> Group chat messages are encrypted in transit and at rest, but <strong>group chat metadata</strong> (participant lists, group names, timestamps) is <strong>not end-to-end encrypted</strong> and may be accessible to Polyhistor for moderation and service operation purposes.</li>
              <li><strong>Retention:</strong> We implement an auto-purge policy for deleted messages. While a message is removed from the user interface immediately upon deletion, a backup may be retained for up to <strong>90 days</strong> for safety and moderation auditing before being permanently erased.</li>
            </ul>
          </section>

          {/* 6. Control Over Your Data */}
          <section className="mb-8" id="control">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Control Over Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Ghost Mode:</strong> You can toggle &quot;Ghost Mode&quot; within the application to pause real-time location sharing with friends and groups.</li>
              <li><strong>Privacy Settings:</strong> You can manage notification preferences (Push/Email/SMS) and friend request settings in your User Settings.</li>
              <li><strong>Blocking:</strong> You have the right to block other users. Blocked users cannot see your location or send you messages.</li>
              <li><strong>Apple App Tracking Transparency (ATT):</strong> iOS users will see an ATT modal requesting permission to track. You can choose to limit tracking, which affects personalized advertising and analytics data collection. See Section 11 for details.</li>
            </ul>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-8" id="retention">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security</h2>
            <p className="mb-4">
              We use industry-standard security measures, including HTTPS encryption in transit and database encryption at rest. However, no method of transmission over the Internet is 100% secure. You are responsible for maintaining the secrecy of your unique password and account information.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-8" id="children">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              The Service is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information from our files.
            </p>
          </section>

          {/* 10. Jurisdiction and International Transfers */}
          <section className="mb-8" id="jurisdiction">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Jurisdiction and International Transfers</h2>
            <p className="mb-4">
              Polyhistor Inc is a Delaware corporation. Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
            </p>
          </section>

          {/* 11. Apple App Tracking Transparency (ATT) */}
          <section className="mb-8" id="att">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Apple App Tracking Transparency (ATT)</h2>
            <p className="mb-4">
              For iOS users, Apple requires apps to request your permission before tracking your activity across other companies' apps and websites. When you first launch Polyhistor on iOS, you will see an <strong>App Tracking Transparency (ATT) modal</strong> asking for your consent.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>If You Allow Tracking:</strong> We may collect data about your app usage for personalized advertising and analytics purposes. This helps us improve the app and show you more relevant content.</li>
              <li><strong>If You Request App Not to Track:</strong> We will not collect tracking data for advertising purposes. You will still receive a fully functional app experience, but ads and recommendations may be less personalized.</li>
              <li><strong>Changing Your Choice:</strong> You can change your ATT preference at any time in your iOS device Settings &gt; Privacy &gt; Tracking.</li>
            </ul>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>
        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

const TERMS_OF_SERVICE_V2_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Polyhistor",
  description: "Terms and conditions for using the Polyhistor app and website. By using our services, you agree to these legal terms.",
};

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">TERMS OF SERVICE</h1>
        <div className="text-slate-500 mb-8">
          <p><strong>Last Updated:</strong> March 25, 2026</p>
          <p><strong>Effective Date:</strong> March 25, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Eligibility:</strong> You must be 13+ to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> No harassment, hate speech, or illegal content. We ban violators immediately.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Disclaimer:</strong> AI suggestions (Gemini) can be wrong. Always double-check info.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Virtual Currency:</strong> Coins have no real-world value. Cannot be exchanged for cash.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Safety:</strong> Do not use the App while driving. Traffic laws come first.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> We don&apos;t control third-party Travel Agencies. They are independent.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>As Is:</strong> The service is provided &quot;as is&quot; without warranties.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Account Deletion:</strong> Delete anytime from settings. Some data retained for legal compliance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#acceptance" className="text-brand-blue hover:underline">1. Acceptance of Terms</a>
              <a href="#eligibility" className="text-brand-blue hover:underline">2. Eligibility</a>
              <a href="#account" className="text-brand-blue hover:underline">3. Account Registration</a>
              <a href="#ai" className="text-brand-blue hover:underline">4. AI Services &amp; Disclaimers</a>
              <a href="#navigation" className="text-brand-blue hover:underline">5. Navigation &amp; Safety</a>
              <a href="#agency" className="text-brand-blue hover:underline">6. Agency &amp; Group Travel</a>
              <a href="#conduct" className="text-brand-blue hover:underline">7. User Conduct</a>
              <a href="#gamification" className="text-brand-blue hover:underline">8. Gamification &amp; Virtual Currency</a>
              <a href="#referral" className="text-brand-blue hover:underline">9. Referral Program</a>
              <a href="#trip-expense" className="text-brand-blue hover:underline">10. Trip Expense Tracking</a>
              <a href="#account-deletion" className="text-brand-blue hover:underline">11. Account Deletion</a>
              <a href="#ip" className="text-brand-blue hover:underline">12. Intellectual Property</a>
              <a href="#dmca" className="text-brand-blue hover:underline">13. Copyright (DMCA)</a>
              <a href="#disclaimers" className="text-brand-blue hover:underline">14. Warranty Disclaimers</a>
              <a href="#liability" className="text-brand-blue hover:underline">15. Limitation of Liability</a>
              <a href="#law" className="text-brand-blue hover:underline">16. Governing Law</a>
              <a href="#changes" className="text-brand-blue hover:underline">17. Changes to Terms</a>
              <a href="#contact" className="text-brand-blue hover:underline">18. Contact Information</a>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8" id="acceptance">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration &amp; Security</h2>
            <p className="mb-4">To access features such as Trip Planning, Group Chat, and Navigation, you must register for an account.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information (including your name and email) during the registration process.</li>
              <li><strong>Security:</strong> You are responsible for safeguarding your login credentials. You accept responsibility for all activities that occur under your account.</li>
              <li><strong>Notification:</strong> You agree to notify us immediately at <a href="mailto:legal@thepolyhistor.com" className="text-brand-blue hover:underline">legal@thepolyhistor.com</a> if you suspect any unauthorized use of your account.</li>
            </ul>
          </section>

          {/* 4. AI Services &amp; Travel Disclaimers */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. AI Services &amp; Travel Disclaimers</h2>
            <p className="mb-4">The Service utilizes artificial intelligence technologies, including <strong>Google Gemini</strong>, to generate travel itineraries, place recommendations, and &quot;Magic Code&quot; trip templates.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Reliance on AI:</strong> You acknowledge that AI technologies may produce inaccurate, outdated, or &quot;hallucinated&quot; information. We do not guarantee the accuracy of opening hours, ticket prices, location data, or safety information generated by the AI.</li>
              <li><strong>Verification Required:</strong> You agree to independently verify all travel details (flights, hotels, visa requirements) before booking or traveling. Polyhistor Inc is not liable for missed connections, closed venues, or financial losses resulting from reliance on AI suggestions.</li>
            </ul>
          </section>

          {/* 5. Navigation &amp; Location Safety */}
          <section className="mb-8" id="navigation">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Navigation &amp; Location Safety</h2>
            <p className="mb-4">The Service includes real-time navigation and location tracking features powered by third-party providers (e.g., Mapbox, Google Places).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Driver Safety:</strong> <strong>DO NOT</strong> use the App in a manner that distracts you while driving. You must obey all traffic laws and regulations. You acknowledge that map data may be inconsistent with actual road conditions.</li>
              <li><strong>Location Sharing:</strong> The App allows you to share your real-time location with Friends and Groups (&quot;Live Tracking&quot;). This feature is voluntary. You are responsible for managing your privacy settings and &quot;Ghost Mode&quot; status.</li>
            </ul>
          </section>

          {/* 6. Agency &amp; Group Travel */}
          <section className="mb-8" id="agency">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Agency &amp; Group Travel</h2>
            <p className="mb-4">Users may use the App to join trips organized by third-party Travel Agencies (&quot;Agency&quot;).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Relationship:</strong> Agencies are independent third parties and are not employees, agents, or partners of Polyhistor Inc. We provide the technical platform for communication and itinerary management but do not control the Agency's operations.</li>
              <li><strong>Data Access:</strong> By joining an Agency Trip, you authorize that Agency to view your profile, trip progress, and real-time location during the active dates of that trip.</li>
              <li><strong>Liability:</strong> Polyhistor Inc is not responsible for the acts, omissions, errors, representations, warranties, breaches, or negligence of any Agency or for any personal injuries, death, property damage, or other damages or expenses resulting there from.</li>
            </ul>
          </section>

          {/* 7. User Conduct &amp; Zero Tolerance Policy */}
          <section className="mb-8" id="conduct">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. User Conduct &amp; Zero Tolerance Policy</h2>
            <p className="mb-4">We are committed to a safe and respectful community. We enforce a <strong>Zero Tolerance Policy</strong> for objectionable content and abusive behavior.</p>
            <p className="mb-4">You agree <strong>NOT</strong> to:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li><strong>Harass or Bully:</strong> Engage in harassment, intimidation, defamation, or stalking of any user.</li>
              <li><strong>Post Illegal/Harmful Content:</strong> Upload content that promotes hate speech, violence, discrimination, sexually explicit material, or illegal acts.</li>
              <li><strong>Spam:</strong> Use the Service for unauthorized commercial advertising or &quot;spamming.&quot;</li>
              <li><strong>Reverse Engineer:</strong> Attempt to decompile, reverse engineer, or hack the App's source code or encryption protocols.</li>
            </ol>
            <p className="mb-4"><strong>Enforcement:</strong> We reserve the right to monitor content (subject to our privacy and encryption standards) and take action against violations, including removing content and <strong>permanently banning</strong> accounts without prior notice.</p>
          </section>

          {/* 8. Gamification &amp; Virtual Currency */}
          <section className="mb-8" id="gamification">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Gamification &amp; Virtual Currency</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Referral Program</h2>
            <p className="mb-4">Polyhistor may offer a referral program that rewards users for inviting friends to join the Service.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Eligibility:</strong> Referral rewards are only granted for valid referrals of new, unique users who have not previously created a Polyhistor account.</li>
              <li><strong>Fraud Prevention:</strong> Polyhistor Inc reserves the right to <strong>withhold, suspend, or revoke</strong> referral rewards if we detect spam, fraudulent referrals, self-referrals, fake accounts, or any other abuse of the referral program.</li>
              <li><strong>Program Changes:</strong> We may modify or terminate the referral program at any time without prior notice.</li>
            </ul>
          </section>

          {/* 10. Trip Expense Tracking Disclaimer */}
          <section className="mb-8" id="trip-expense">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Trip Expense Tracking Disclaimer</h2>
            <p className="mb-4">The Service may include features for tracking trip expenses, budgets, and financial summaries.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Not Professional Advice:</strong> The expense tracking features are provided for <strong>personal organizational purposes only</strong>. They do not constitute financial, accounting, tax, or legal advice.</li>
              <li><strong>No Liability for Errors:</strong> Polyhistor Inc is <strong>not liable</strong> for any errors, omissions, or inaccuracies in expense calculations, currency conversions, or financial summaries generated by the App.</li>
              <li><strong>User Responsibility:</strong> You are solely responsible for verifying all financial information and consulting with qualified professionals (accountants, tax advisors, financial planners) for any financial decisions or tax reporting requirements.</li>
            </ul>
          </section>

          {/* 11. Account Deletion */}
          <section className="mb-8" id="account-deletion">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Account Deletion</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Intellectual Property &amp; License</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Our IP:</strong> The Service, including its original content, code, &quot;Polyhistor&quot; trademarks, logos, and visual design, is the exclusive property of Polyhistor Inc.</li>
              <li><strong>Your Content:</strong> You retain ownership of the photos, chats, and itineraries (&quot;User Content&quot;) you post. By posting, you grant Polyhistor Inc a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content solely for the purpose of operating and improving the Service.</li>
            </ul>
          </section>

          {/* 13. Copyright Infringement (DMCA) */}
          <section className="mb-8" id="dmca">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Copyright Infringement (DMCA)</h2>
            <p className="mb-4">
              If you believe your copyrighted work is being infringed on the Service, please submit a notice to <a href="mailto:legal@thepolyhistor.com" className="text-brand-blue hover:underline">legal@thepolyhistor.com</a> including:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>A description of the copyrighted work.</li>
              <li>The location of the infringing material on the App.</li>
              <li>Your contact information.</li>
            </ol>
          </section>

          {/* 14. Disclaimers of Warranties */}
          <section className="mb-8" id="disclaimers">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Disclaimers of Warranties</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Limitation of Liability</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Governing Law and Venue</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Delaware</strong>, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the state and federal courts located within Delaware for the resolution of any disputes.
            </p>
          </section>

          {/* 17. Changes to Terms */}
          <section className="mb-8" id="changes">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of significant changes by updating the &quot;Last Updated&quot; date or sending a notification within the App. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* 18. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

const EULA_V2_CONTENT = `import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EULA | Polyhistor",
  description: "End User License Agreement for the Polyhistor mobile application. Read about your rights and responsibilities when using our service.",
};

export default function EULA() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-slate-900">END USER LICENSE AGREEMENT (EULA)</h1>
        <p className="text-slate-500 mb-8">Last Updated: March 25, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-700">

          {/* Quick Summary Box */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>License:</strong> You get a limited, personal, non-commercial license to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Virtual Goods:</strong> Virtual currency is licensed, not sold. No real-world value.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> We strictly ban hate speech, harassment, and illegal content.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>AI Features:</strong> Verify all AI suggestions. We aren&apos;t liable for &quot;hallucinations.&quot;</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Safety First:</strong> Never use the App while driving. You assume all liability.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Network Reliance:</strong> Live Tracking requires data/WiFi/GPS. No 100% uptime guarantee.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> Travel Agencies are independent. We don&apos;t control them.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-brand-blue font-bold flex-shrink-0">•</span>
                  <span><strong>No Warranty:</strong> The App is provided &quot;as is&quot; without guarantees.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-slate-200 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#scope" className="text-brand-blue hover:underline">1. Scope of License</a>
              <a href="#virtual-goods" className="text-brand-blue hover:underline">2. Virtual Goods License</a>
              <a href="#ugc" className="text-brand-blue hover:underline">3. User Generated Content</a>
              <a href="#ai" className="text-brand-blue hover:underline">4. AI Disclaimer</a>
              <a href="#location" className="text-brand-blue hover:underline">5. Location &amp; Navigation</a>
              <a href="#service-availability" className="text-brand-blue hover:underline">6. Service Availability</a>
              <a href="#agencies" className="text-brand-blue hover:underline">7. Agency &amp; Group Travel</a>
              <a href="#updates" className="text-brand-blue hover:underline">8. Updates &amp; Maintenance</a>
              <a href="#external" className="text-brand-blue hover:underline">9. External Services</a>
              <a href="#warranty" className="text-brand-blue hover:underline">10. No Warranty</a>
              <a href="#liability" className="text-brand-blue hover:underline">11. Limitation of Liability</a>
              <a href="#apple" className="text-brand-blue hover:underline">12. Apple iOS Terms</a>
              <a href="#legal" className="text-brand-blue hover:underline">13. Legal Compliance</a>
              <a href="#contact" className="text-brand-blue hover:underline">14. Contact Information</a>
            </div>
          </div>

          <p className="mb-6">
            This End User License Agreement (&quot;Agreement&quot;) is a binding legal contract between you (&quot;User,&quot; &quot;You,&quot; or &quot;Your&quot;) and <strong>Polyhistor Inc</strong> (&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;), a corporation organized under the laws of the State of Delaware. This Agreement governs your access to and use of the Polyhistor mobile application (the &quot;App&quot;) on iOS and Android platforms.
          </p>
          <p className="font-bold mb-6">
            BY DOWNLOADING, INSTALLING, OR USING THE APP, YOU AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT DOWNLOAD OR USE THE APP.
          </p>

          {/* 1. Scope of License */}
          <section className="mb-8" id="scope">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Scope of License</h2>
            <p className="mb-4">
              Polyhistor Inc grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the App for your personal, non-commercial purposes strictly in accordance with this Agreement and the Usage Rules set forth in the Apple Media Services Terms and Conditions and/or the Google Play Terms of Service.
            </p>
            <p className="mb-4">
              This license does not include any right to: (i) sell, resell, or commercially exploit the App; (ii) modify or create derivative works based upon the App; (iii) use the App for illegal or unauthorized purposes; or (iv) share the App with multiple devices or users.
            </p>
          </section>

          {/* 2. Virtual Goods License */}
          <section className="mb-8" id="virtual-goods">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Virtual Goods License</h2>
            <p className="mb-4">The App may include virtual currency (coins), points, badges, and other virtual items (collectively, &quot;Virtual Goods&quot;).</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Licensed, Not Sold:</strong> Virtual Goods are <strong>licensed, not sold</strong> to you. You do not acquire any ownership rights in Virtual Goods.</li>
              <li><strong>Limited Personal License:</strong> You receive a limited, personal, non-transferable, revocable license to use Virtual Goods solely within the App for your personal entertainment.</li>
              <li><strong>No Real-World Value:</strong> Virtual Goods have <strong>no real-world monetary value</strong> and cannot be redeemed for cash, transferred to other users for money, or exchanged for real-world goods or services.</li>
              <li><strong>Modification Rights:</strong> Polyhistor Inc reserves the right to modify, suspend, revoke, or remove any Virtual Goods at any time, with or without notice, for any reason including but not limited to: violations of this Agreement, technical issues, or game balance adjustments.</li>
              <li><strong>Account Termination:</strong> Upon account termination or deletion, all Virtual Goods associated with your account will be permanently forfeited without compensation.</li>
            </ul>
          </section>

          {/* 3. User Generated Content &amp; Zero Tolerance Policy */}
          <section className="mb-8" id="ugc">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Generated Content &amp; Zero Tolerance Policy</h2>
            <p className="mb-4">The App contains interactive features (Group Chats, Itinerary Comments, Photo Uploads) that allow users to post content. To ensure a safe community, we enforce a strict Zero Tolerance Policy for objectionable content.</p>
            <p className="mb-4"><strong>Prohibited Content:</strong> You are strictly prohibited from uploading, sharing, or transmitting content that is:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Defamatory, harassed, abusive, or threatening.</li>
              <li>Pornographic, sexually explicit, or obscene.</li>
              <li>Hateful, discriminatory, or promoting violence against any individual or group.</li>
              <li>Illegal or promotes illegal acts.</li>
            </ul>
            <p className="mb-4"><strong>Content Moderation:</strong> Polyhistor Inc employs both automated AI detection and manual review to monitor content.</p>
            <p className="mb-4"><strong>Reporting &amp; Blocking:</strong> You agree to use the in-app &quot;Report&quot; and &quot;Block&quot; features to flag inappropriate content or abusive users.</p>
            <p className="mb-4"><strong>Enforcement:</strong> We review reported content within 24 hours. We reserve the right to remove any content and immediately terminate the account of any user found violating these standards without prior notice.</p>
          </section>

          {/* 4. Artificial Intelligence (AI) Disclaimer */}
          <section className="mb-8" id="ai">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Artificial Intelligence (AI) Disclaimer</h2>
            <p className="mb-4">The App utilizes Generative AI technologies, including Google Gemini, to provide travel recommendations, itinerary planning, and chat assistance.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Warranty of Accuracy:</strong> AI is experimental and may produce &quot;hallucinations,&quot; errors, or outdated information. You acknowledge that opening hours, prices, and location descriptions generated by AI may be incorrect.</li>
              <li><strong>User Responsibility:</strong> You must independently verify all AI-generated suggestions. Polyhistor Inc is not liable for missed flights, closed venues, visa issues, or financial losses resulting from reliance on AI data.</li>
              <li><strong>Prohibited AI Use:</strong> You may not use the AI features to generate harmful, fraudulent, or illegal content.</li>
            </ul>
          </section>

          {/* 5. Location Services &amp; Navigation Safety */}
          <section className="mb-8" id="location">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Location Services &amp; Navigation Safety</h2>
            <p className="mb-4">The App integrates third-party mapping services (including Mapbox and Google Places) to provide real-time navigation and location sharing.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Distracted Driving - CRITICAL WARNING:</strong> <strong>NEVER</strong> interact with the App while driving. You agree to use the App's navigation features only when it is safe and legal to do so. <strong>YOU ASSUME ALL PHYSICAL AND LEGAL LIABILITY</strong> for any accidents, injuries, deaths, traffic violations, or damages resulting from use of the App while driving or operating any vehicle. Polyhistor Inc expressly disclaims any liability for such incidents.</li>
              <li><strong>Data Accuracy:</strong> Navigation routes are for planning purposes only. Actual road conditions, weather, and traffic laws always take precedence over App instructions.</li>
              <li><strong>Battery Usage:</strong> You acknowledge that continued use of GPS running in the background can dramatically decrease battery life.</li>
            </ul>
          </section>

          {/* 6. Service Availability &amp; Network Reliance */}
          <section className="mb-8" id="service-availability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Availability &amp; Network Reliance</h2>
            <p className="mb-4">The Service depends on various technical infrastructure and network connectivity to function properly.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Uptime Guarantee:</strong> Polyhistor Inc does <strong>not guarantee 100% uptime</strong> or uninterrupted availability of the Service. Server maintenance, technical failures, network outages, and force majeure events may cause temporary service interruptions.</li>
              <li><strong>Live Tracking Requirements:</strong> The &quot;Live Tracking&quot; feature requires an active <strong>data connection (cellular or WiFi)</strong> and <strong>GPS signal</strong> to function. Without these, location sharing will not work. You are responsible for ensuring you have adequate connectivity for features you wish to use.</li>
              <li><strong>Carrier Charges:</strong> You are responsible for all data charges, roaming fees, and other carrier costs associated with your use of the App. Polyhistor Inc is not liable for any charges incurred through your mobile carrier or internet service provider.</li>
              <li><strong>No Liability for Interruptions:</strong> Polyhistor Inc is <strong>not liable</strong> for any damages, losses, or inconveniences resulting from service interruptions, network failures, or inability to access the Service.</li>
            </ul>
          </section>

          {/* 7. Agency &amp; Group Travel */}
          <section className="mb-8" id="agencies">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Agency &amp; Group Travel</h2>
            <p className="mb-4">If you use the App to participate in a trip organized by a third-party Travel Agency (&quot;Agency&quot;):</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Entities:</strong> The Agency is an independent third party. Polyhistor Inc provides the software platform but does not control the Agency's staff, itinerary decisions, or safety protocols.</li>
              <li><strong>Data Sharing:</strong> By accepting an Agency Invite, you consent to that Agency viewing your profile, itinerary status, and real-time location during the active dates of that trip.</li>
            </ul>
          </section>

          {/* 8. Updates and Maintenance */}
          <section className="mb-8" id="updates">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Updates and Maintenance</h2>
            <p className="mb-4">
              Polyhistor Inc may generally provide updates to the App to improve performance or fix bugs. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We are under no obligation to provide support or maintenance.</li>
              <li>Apple and Google have no obligation whatsoever to furnish any maintenance and support services with respect to the App.</li>
            </ul>
          </section>

          {/* 9. External Services */}
          <section className="mb-8" id="external">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. External Services</h2>
            <p>
              The App enables access to third-party services and websites (collectively and individually, &quot;External Services&quot;), including Mapbox, Google Maps, OpenMeteo, and others. Use of External Services is at your sole risk. We are not responsible for the content, accuracy, or privacy practices of any External Service.
            </p>
          </section>

          {/* 10. NO WARRANTY */}
          <section className="mb-8" id="warranty">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. NO WARRANTY</h2>
            <p className="uppercase text-sm leading-relaxed font-bold mb-4">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.
            </p>
            <p className="uppercase text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYHISTOR INC DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE AI/NAVIGATION DATA WILL BE ACCURATE.
            </p>
          </section>

          {/* 11. LIMITATION OF LIABILITY */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. LIMITATION OF LIABILITY</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL POLYHISTOR INC BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, HOWEVER CAUSED.
            </p>
          </section>

          {/* 12. Specific Terms for Apple iOS Users */}
          <section className="mb-8" id="apple">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Specific Terms for Apple iOS Users</h2>
            <p className="mb-4">If you accessed or downloaded the App from the Apple App Store, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Parties:</strong> This Agreement is between You and Polyhistor Inc only, not Apple. Polyhistor Inc, not Apple, is solely responsible for the App and the content thereof.</li>
              <li><strong>Product Claims:</strong> Apple is not responsible for addressing any claims by you or any third party relating to the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes that third party's intellectual property rights, Polyhistor Inc, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and Apple's subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
            </ul>
          </section>

          {/* 13. Legal Compliance */}
          <section className="mb-8" id="legal">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Legal Compliance</h2>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country.</li>
              <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
            </ul>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-8 border-t border-slate-200 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the App, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-brand-blue hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
      </div>
      <BackToTop />
    </main>
  );
}`;

// ============================================================================
// VERSION HISTORY DATA
// ============================================================================

/**
 * Complete legal document version registry
 */
export const legalDocumentRegistry: LegalDocumentRegistry = {
  documents: {
    'privacy-policy': {
      documentType: 'privacy-policy',
      title: 'Privacy Policy',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'privacy-policy',
          summaryOfChanges: [
            'Initial version of Privacy Policy',
            'Established baseline data collection practices',
            'Defined encryption standards for direct messages',
            'Outlined third-party data sharing with infrastructure providers',
          ],
          content: PRIVACY_POLICY_V1_CONTENT,
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'privacy-policy',
          summaryOfChanges: [
            'Added Phone Number collection under Section 1.A for SMS verification',
            'Added Gamification data collection (points, coin balances, leaderboard rankings, referral codes)',
            'Added explicit AWS S3 and Supabase mentions in Section 4 as storage providers',
            'Added new subsection about E2E Encryption in Section 5 - clarified DMs are E2E encrypted but Group Chat metadata is not',
            'Added new Section 11 about Apple App Tracking Transparency (ATT) - explained iOS ATT modal and tracking preferences',
            'Updated Quick Summary Box to reflect new data collection practices',
          ],
          content: PRIVACY_POLICY_V2_CONTENT,
        },
      ],
    },
    'terms-of-service': {
      documentType: 'terms-of-service',
      title: 'Terms of Service',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'terms-of-service',
          summaryOfChanges: [
            'Initial version of Terms of Service',
            'Established user eligibility and account requirements',
            'Defined AI service disclaimers and navigation safety guidelines',
            'Outlined zero tolerance policy for user conduct',
          ],
          content: TERMS_OF_SERVICE_V1_CONTENT,
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'terms-of-service',
          summaryOfChanges: [
            'Added new Section 8 "Gamification & Virtual Currency" - coins have no real-world value, cannot be exchanged for cash, not personal property, Polyhistor can modify/suspend/revoke at any time',
            'Added new Section 9 "Referral Program" - right to withhold rewards for spam/fraudulent referrals',
            'Added new Section 10 "Trip Expense Tracking" disclaimer - not financial/accounting/tax/legal advice, not liable for errors',
            'Added new Section 11 "Account Deletion" - users can delete from within app settings, data retention period explained after deletion',
            'Updated Table of Contents to include new sections',
          ],
          content: TERMS_OF_SERVICE_V2_CONTENT,
        },
      ],
    },
    eula: {
      documentType: 'eula',
      title: 'End User License Agreement (EULA)',
      currentVersion: '2.0',
      versions: [
        {
          version: '1.0',
          effectiveDate: '2026-02-11',
          documentType: 'eula',
          summaryOfChanges: [
            'Initial version of End User License Agreement',
            'Defined scope of license for iOS and Android platforms',
            'Established user content policies and zero tolerance guidelines',
            'Included Apple-specific iOS terms and legal compliance requirements',
          ],
          content: EULA_V1_CONTENT,
        },
        {
          version: '2.0',
          effectiveDate: '2026-03-25',
          documentType: 'eula',
          summaryOfChanges: [
            'Added new Section 2 "Virtual Goods License" under Scope of License - virtual currency is licensed not sold, limited personal non-transferable revocable license',
            'Added new Section 6 "Service Availability & Network Reliance" - no 100% uptime guarantee, Live Tracking requires data/WiFi/GPS, not liable for interruptions or carrier charges',
            'Reinforced Section 5 "Distracted Driving" - explicitly stated user assumes all physical and legal liability if using app while driving',
            'Updated Table of Contents to reflect new section numbering',
          ],
          content: EULA_V2_CONTENT,
        },
      ],
    },
  },
  lastUpdated: '2026-03-25T00:00:00.000Z',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get the current version of a legal document
 * @param documentType - The type of document to retrieve
 * @returns The current version of the document, or undefined if not found
 */
export function getCurrentVersion(documentType: DocumentType): LegalDocumentVersion | undefined {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory || docHistory.versions.length === 0) {
    return undefined;
  }
  return docHistory.versions[docHistory.versions.length - 1];
}

/**
 * Get a specific version of a legal document
 * @param documentType - The type of document to retrieve
 * @param version - The version number to retrieve (e.g., "1.0", "2.0")
 * @returns The specified version of the document, or undefined if not found
 */
export function getVersion(documentType: DocumentType, version: string): LegalDocumentVersion | undefined {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory) {
    return undefined;
  }
  return docHistory.versions.find((v) => v.version === version);
}

/**
 * Get all versions of a legal document
 * @param documentType - The type of document to retrieve
 * @returns Array of all versions for the document, or empty array if not found
 */
export function getAllVersions(documentType: DocumentType): LegalDocumentVersion[] {
  const docHistory = legalDocumentRegistry.documents[documentType];
  if (!docHistory) {
    return [];
  }
  return docHistory.versions;
}

/**
 * Get the version history for a legal document
 * @param documentType - The type of document to retrieve
 * @returns The version history for the document, or undefined if not found
 */
export function getVersionHistory(documentType: DocumentType): DocumentVersionHistory | undefined {
  return legalDocumentRegistry.documents[documentType];
}

/**
 * Check if a document has multiple versions
 * @param documentType - The type of document to check
 * @returns True if the document has more than one version, false otherwise
 */
export function hasVersionHistory(documentType: DocumentType): boolean {
  const docHistory = legalDocumentRegistry.documents[documentType];
  return docHistory ? docHistory.versions.length > 1 : false;
}
