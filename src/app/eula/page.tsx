import BackToTop from "@/components/BackToTop";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EULA | Polyhistor",
  description: "End User License Agreement for the Polyhistor mobile application. Read about your rights and responsibilities when using our service.",
};

export default function EULA() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">END USER LICENSE AGREEMENT (EULA)</h1>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
          <p className="text-amber-400 text-sm font-medium text-center">
            🚧 Coming Soon — This agreement is being finalized. Check back shortly.
          </p>
        </div>
        <div className="hidden">
          <p className="text-white/50 mb-8">
            Last Updated: March 25, 2026
            <br />
            <Link href="/eula/versions" className="text-[#a855f7] hover:underline text-sm">
              View Version History →
            </Link>
          </p>

          <div className="prose prose-slate max-w-none text-white/70">

          {/* Quick Summary Box */}
          <div className="bg-white/5 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 no-print">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 not-prose">
              At a Glance ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60 not-prose">
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>License:</strong> You get a limited, personal, non-commercial license to use the App.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Virtual Goods:</strong> Virtual currency is licensed, not sold. No real-world value.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Zero Tolerance:</strong> We strictly ban hate speech, harassment, and illegal content.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>AI Features:</strong> Verify all AI suggestions. We aren&apos;t liable for &quot;hallucinations.&quot;</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Safety First:</strong> Never use the App while driving. You assume all liability.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Network Reliance:</strong> Live Tracking requires data/WiFi/GPS. No 100% uptime guarantee.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>Agencies:</strong> Travel Agencies are independent. We don&apos;t control them.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#a855f7] font-bold flex-shrink-0">•</span>
                  <span><strong>No Warranty:</strong> The App is provided &quot;as is&quot; without guarantees.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-white border border-white/10 rounded-lg shadow-sm no-print">
            <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#scope" className="text-[#a855f7] hover:underline">1. Scope of License</a>
              <a href="#virtual-goods" className="text-[#a855f7] hover:underline">2. Virtual Goods License</a>
              <a href="#ugc" className="text-[#a855f7] hover:underline">3. User Generated Content</a>
              <a href="#ai" className="text-[#a855f7] hover:underline">4. AI Disclaimer</a>
              <a href="#location" className="text-[#a855f7] hover:underline">5. Location &amp; Navigation</a>
              <a href="#service-availability" className="text-[#a855f7] hover:underline">6. Service Availability</a>
              <a href="#agencies" className="text-[#a855f7] hover:underline">7. Agency &amp; Group Travel</a>
              <a href="#updates" className="text-[#a855f7] hover:underline">8. Updates &amp; Maintenance</a>
              <a href="#external" className="text-[#a855f7] hover:underline">9. External Services</a>
              <a href="#warranty" className="text-[#a855f7] hover:underline">10. No Warranty</a>
              <a href="#liability" className="text-[#a855f7] hover:underline">11. Limitation of Liability</a>
              <a href="#apple" className="text-[#a855f7] hover:underline">12. Apple iOS Terms</a>
              <a href="#legal" className="text-[#a855f7] hover:underline">13. Legal Compliance</a>
              <a href="#contact" className="text-[#a855f7] hover:underline">14. Contact Information</a>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Scope of License</h2>
            <p className="mb-4">
              Polyhistor Inc grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the App for your personal, non-commercial purposes strictly in accordance with this Agreement and the Usage Rules set forth in the Apple Media Services Terms and Conditions and/or the Google Play Terms of Service.
            </p>
            <p className="mb-4">
              This license does not include any right to: (i) sell, resell, or commercially exploit the App; (ii) modify or create derivative works based upon the App; (iii) use the App for illegal or unauthorized purposes; or (iv) share the App with multiple devices or users.
            </p>
          </section>

          {/* 2. Virtual Goods License */}
          <section className="mb-8" id="virtual-goods">
            <h2 className="text-2xl font-bold text-white mb-4">2. Virtual Goods License</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">3. User Generated Content &amp; Zero Tolerance Policy</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">4. Artificial Intelligence (AI) Disclaimer</h2>
            <p className="mb-4">The App utilizes Generative AI technologies, including Google Gemini, to provide travel recommendations, itinerary planning, and chat assistance.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>No Warranty of Accuracy:</strong> AI is experimental and may produce &quot;hallucinations,&quot; errors, or outdated information. You acknowledge that opening hours, prices, and location descriptions generated by AI may be incorrect.</li>
              <li><strong>User Responsibility:</strong> You must independently verify all AI-generated suggestions. Polyhistor Inc is not liable for missed flights, closed venues, visa issues, or financial losses resulting from reliance on AI data.</li>
              <li><strong>Prohibited AI Use:</strong> You may not use the AI features to generate harmful, fraudulent, or illegal content.</li>
            </ul>
          </section>

          {/* 5. Location Services &amp; Navigation Safety */}
          <section className="mb-8" id="location">
            <h2 className="text-2xl font-bold text-white mb-4">5. Location Services &amp; Navigation Safety</h2>
            <p className="mb-4">The App integrates third-party mapping services (including Mapbox and Google Places) to provide real-time navigation and location sharing.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Distracted Driving - CRITICAL WARNING:</strong> <strong>NEVER</strong> interact with the App while driving. You agree to use the App&apos;s navigation features only when it is safe and legal to do so. <strong>YOU ASSUME ALL PHYSICAL AND LEGAL LIABILITY</strong> for any accidents, injuries, deaths, traffic violations, or damages resulting from use of the App while driving or operating any vehicle. Polyhistor Inc expressly disclaims any liability for such incidents.</li>
              <li><strong>Data Accuracy:</strong> Navigation routes are for planning purposes only. Actual road conditions, weather, and traffic laws always take precedence over App instructions.</li>
              <li><strong>Battery Usage:</strong> You acknowledge that continued use of GPS running in the background can dramatically decrease battery life.</li>
            </ul>
          </section>

          {/* 6. Service Availability &amp; Network Reliance */}
          <section className="mb-8" id="service-availability">
            <h2 className="text-2xl font-bold text-white mb-4">6. Service Availability &amp; Network Reliance</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">7. Agency &amp; Group Travel</h2>
            <p className="mb-4">If you use the App to participate in a trip organized by a third-party Travel Agency (&quot;Agency&quot;):</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Independent Entities:</strong> The Agency is an independent third party. Polyhistor Inc provides the software platform but does not control the Agency&apos;s staff, itinerary decisions, or safety protocols.</li>
              <li><strong>Data Sharing:</strong> By accepting an Agency Invite, you consent to that Agency viewing your profile, itinerary status, and real-time location during the active dates of that trip.</li>
            </ul>
          </section>

          {/* 8. Updates and Maintenance */}
          <section className="mb-8" id="updates">
            <h2 className="text-2xl font-bold text-white mb-4">8. Updates and Maintenance</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">9. External Services</h2>
            <p>
              The App enables access to third-party services and websites (collectively and individually, &quot;External Services&quot;), including Mapbox, Google Maps, OpenMeteo, and others. Use of External Services is at your sole risk. We are not responsible for the content, accuracy, or privacy practices of any External Service.
            </p>
          </section>

          {/* 10. NO WARRANTY */}
          <section className="mb-8" id="warranty">
            <h2 className="text-2xl font-bold text-white mb-4">10. NO WARRANTY</h2>
            <p className="uppercase text-sm leading-relaxed font-bold mb-4">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.
            </p>
            <p className="uppercase text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, POLYHISTOR INC DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE AI/NAVIGATION DATA WILL BE ACCURATE.
            </p>
          </section>

          {/* 11. LIMITATION OF LIABILITY */}
          <section className="mb-8" id="liability">
            <h2 className="text-2xl font-bold text-white mb-4">11. LIMITATION OF LIABILITY</h2>
            <p className="uppercase text-sm leading-relaxed">
              TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL POLYHISTOR INC BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, HOWEVER CAUSED.
            </p>
          </section>

          {/* 12. Specific Terms for Apple iOS Users */}
          <section className="mb-8" id="apple">
            <h2 className="text-2xl font-bold text-white mb-4">12. Specific Terms for Apple iOS Users</h2>
            <p className="mb-4">If you accessed or downloaded the App from the Apple App Store, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Parties:</strong> This Agreement is between You and Polyhistor Inc only, not Apple. Polyhistor Inc, not Apple, is solely responsible for the App and the content thereof.</li>
              <li><strong>Product Claims:</strong> Apple is not responsible for addressing any claims by you or any third party relating to the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes that third party&apos;s intellectual property rights, Polyhistor Inc, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and Apple&apos;s subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
            </ul>
          </section>

          {/* 13. Legal Compliance */}
          <section className="mb-8" id="legal">
            <h2 className="text-2xl font-bold text-white mb-4">13. Legal Compliance</h2>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a &quot;terrorist supporting&quot; country.</li>
              <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
            </ul>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-8 border-t border-white/10 pt-8" id="contact">
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
            <p>
              If you have any questions, complaints, or claims with respect to the App, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Polyhistor Inc</strong><br />
              <strong>Email:</strong> <a href="mailto:naveengali@thepolyhistor.com" className="text-[#a855f7] hover:underline">naveengali@thepolyhistor.com</a>
            </p>
          </section>

        </div>
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
