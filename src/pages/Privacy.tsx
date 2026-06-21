import { useEffect } from "react"

export function Privacy() {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-margin-mobile md:px-margin-desktop flex flex-col items-center">
      <div className="w-full max-w-4xl bg-[#0a0a0a] border border-surface-variant p-6 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="absolute top-0 left-0 w-full h-8 bg-surface-container-low border-b border-surface-variant flex items-center px-4 justify-between select-none">
           <span className="font-label-mono text-[10px] text-secondary-fixed-dim flex items-center gap-2">
             <span className="material-symbols-outlined text-[12px] text-primary">shield</span>
             PRIVACY_PROTOCOL.TXT
           </span>
           <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-surface-variant"></div>
             <div className="w-2 h-2 rounded-full bg-surface-variant"></div>
             <div className="w-2 h-2 rounded-full bg-primary/80"></div>
           </div>
        </div>

        {/* Content Container */}
        <div className="mt-8 relative z-10 prose prose-invert prose-p:font-body-md prose-p:text-secondary-fixed-dim prose-headings:font-label-mono prose-headings:text-on-background prose-headings:uppercase prose-a:text-primary hover:prose-a:text-primary/80 prose-li:font-body-md prose-li:text-secondary-fixed-dim max-w-none">
          <div className="mb-12 border-b border-surface-variant pb-8">
            <h1 className="text-display-md text-primary mb-2">Privacy Policy</h1>
            <p className="font-label-mono text-xs uppercase tracking-widest text-surface-variant m-0">Effective Date: June 21, 2026</p>
          </div>

          <p>
            Timeless.aex ("Timeless.aex", "we", "our", or "us") values your privacy and is committed to protecting the information you share with us.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, how it is stored, and the choices available to you when using our website or contacting us.
          </p>
          <p>
            By using this website, you agree to the practices described in this Privacy Policy.
          </p>

          <hr className="border-surface-variant my-8" />

          <h2 className="text-xl mt-8">1. About Timeless.aex</h2>
          <p>Timeless.aex is an independent Creative Technology Studio focused on:</p>
          <ul>
            <li>Branding</li>
            <li>Website Design & Development</li>
            <li>Creative Technology</li>
            <li>Digital Experiences</li>
            <li>Design Systems</li>
            <li>AI & Technology Projects</li>
          </ul>
          <p>This website serves as both:</p>
          <ul>
            <li>The official website of Timeless.aex</li>
            <li>The professional portfolio of Sternee S R</li>
          </ul>

          <h2 className="text-xl mt-8">2. Information We Collect</h2>
          <p>When you contact us through our website, we may collect information such as:</p>
          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Message Content</li>
          </ul>
          <p>Any information voluntarily submitted through contact forms, email communication, or direct inquiries may also be collected.</p>
          <p>We only collect information necessary for communication, project discussions, and service delivery.</p>

          <h2 className="text-xl mt-8">3. How We Use Your Information</h2>
          <p>Information submitted to Timeless.aex may be used to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Discuss potential projects</li>
            <li>Provide quotations and proposals</li>
            <li>Deliver services</li>
            <li>Communicate project updates</li>
            <li>Improve website functionality</li>
            <li>Maintain records of communication</li>
          </ul>
          <p>We do not sell personal information to third parties.</p>

          <h2 className="text-xl mt-8">4. Contact Forms & Email Communication</h2>
          <p>Messages submitted through the website may be processed through third-party communication tools such as EmailJS or similar services.</p>
          <p>Submitted inquiries may be forwarded to and stored within authorized email accounts, including:</p>
          <ul>
            <li><a href="mailto:hello@timelessaex.in">hello@timelessaex.in</a></li>
            <li><a href="mailto:sterneesr@gmail.com">sterneesr@gmail.com</a></li>
          </ul>
          <p>These communications are retained only for business, support, project, and record-keeping purposes.</p>

          <h2 className="text-xl mt-8">5. Analytics & Website Usage Data</h2>
          <p>Timeless.aex may use website analytics tools to better understand visitor behavior and improve website performance.</p>
          <p>Depending on future implementation, analytics tools may include:</p>
          <ul>
            <li>Google Analytics</li>
            <li>Vercel Analytics</li>
            <li>Microsoft Clarity</li>
            <li>Similar analytics platforms</li>
          </ul>
          <p>These tools may collect:</p>
          <ul>
            <li>Browser information</li>
            <li>Device information</li>
            <li>General geographic region</li>
            <li>Pages visited</li>
            <li>Session duration</li>
            <li>Referral sources</li>
          </ul>
          <p>This information is generally aggregated and used for analytical purposes.</p>

          <h2 className="text-xl mt-8">6. Cookies</h2>
          <p>This website may use cookies and similar technologies to:</p>
          <ul>
            <li>Improve website performance</li>
            <li>Enhance user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
          </ul>
          <p>You may choose to disable cookies through your browser settings.</p>
          <p>Disabling cookies may affect certain website functionality.</p>

          <h2 className="text-xl mt-8">7. Data Storage & Retention</h2>
          <p>Information provided through contact forms or direct communication may be stored for:</p>
          <ul>
            <li>Project discussions</li>
            <li>Service delivery</li>
            <li>Record keeping</li>
            <li>Business administration</li>
          </ul>
          <p>Data is retained only for as long as reasonably necessary for these purposes unless a longer retention period is required by law.</p>

          <h2 className="text-xl mt-8">8. Third-Party Services</h2>
          <p>Timeless.aex may rely on third-party services to operate portions of the website and business workflow.</p>
          <p>Examples may include:</p>
          <ul>
            <li>EmailJS</li>
            <li>Hosting Providers</li>
            <li>Domain Registrars</li>
            <li>Analytics Platforms</li>
            <li>Cloud Services</li>
            <li>Communication Platforms</li>
          </ul>
          <p>These providers may process information according to their own privacy policies.</p>
          <p>Timeless.aex is not responsible for the privacy practices of third-party services.</p>

          <h2 className="text-xl mt-8">9. Data Security</h2>
          <p>Reasonable technical and organizational measures are used to protect information submitted through the website.</p>
          <p>However, no method of online transmission or electronic storage can be guaranteed to be completely secure.</p>
          <p>While we strive to protect your information, we cannot guarantee absolute security.</p>

          <h2 className="text-xl mt-8">10. Your Rights</h2>
          <p>Subject to applicable laws, you may request:</p>
          <ul>
            <li>Access to personal information we hold about you</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of information where appropriate</li>
            <li>Clarification regarding how your information is used</li>
          </ul>
          <p>Requests may be submitted through the contact information provided below.</p>

          <h2 className="text-xl mt-8">11. Children's Privacy</h2>
          <p>Timeless.aex does not knowingly collect personal information from children under the age of 13.</p>
          <p>Individuals under the age of 18 should use this website and engage services only with the involvement or permission of a parent, guardian, or authorized representative.</p>

          <h2 className="text-xl mt-8">12. External Links</h2>
          <p>This website may contain links to external websites, portfolios, social media platforms, or third-party services.</p>
          <p>Timeless.aex is not responsible for the privacy practices, content, or policies of external websites.</p>
          <p>Users are encouraged to review the privacy policies of those websites separately.</p>

          <h2 className="text-xl mt-8">13. Changes to This Privacy Policy</h2>
          <p>Timeless.aex reserves the right to update this Privacy Policy at any time.</p>
          <p>Updated versions will be published on this website.</p>
          <p>Continued use of the website following updates constitutes acceptance of the revised Privacy Policy.</p>

          <h2 className="text-xl mt-8">14. Contact Information</h2>
          <p>For questions regarding this Privacy Policy or requests related to your information:</p>
          <p>
            Primary Email: <br />
            <a href="mailto:hello@timelessaex.in">hello@timelessaex.in</a>
          </p>
          <p>
            Alternative Email: <br />
            <a href="mailto:sterneesr@gmail.com">sterneesr@gmail.com</a>
          </p>
          <p>
            Website: <br />
            <a href="/">timelessaex.in</a>
          </p>
          <p>
            Last Updated: <br />
            June 21, 2026
          </p>

          <h2 className="text-xl mt-8">15. Disclaimer</h2>
          <p>The content displayed on this website, including but not limited to:</p>
          <ul>
            <li>Designs</li>
            <li>Artwork</li>
            <li>Branding Systems</li>
            <li>Music Concepts</li>
            <li>FL Studio Screenshots</li>
            <li>Project Showcases</li>
            <li>Creative Experiments</li>
            <li>Visual Explorations</li>
            <li>Portfolio Content</li>
          </ul>
          <p>is presented for informational, educational, and promotional purposes.</p>
          <p>Unless explicitly stated otherwise, all intellectual property remains the property of Timeless.aex and/or its respective owners.</p>
          <p>Unauthorized reproduction, redistribution, or commercial use is prohibited.</p>

          <div className="mt-12 border-t border-surface-variant pt-4 flex justify-between items-center">
             <span className="font-label-mono text-[10px] text-primary uppercase">END OF DOCUMENT</span>
             <span className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase">STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10%] w-full animate-[scan_4s_linear_infinite] pointer-events-none z-20 mix-blend-screen"></div>
        <div className="absolute inset-0 halftone-bg opacity-10 mix-blend-overlay z-20 pointer-events-none"></div>
      </div>
    </div>
  )
}
