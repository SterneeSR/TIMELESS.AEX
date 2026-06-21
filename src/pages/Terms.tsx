import { useEffect } from "react"

export function Terms() {
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
             <span className="material-symbols-outlined text-[12px] text-primary">gavel</span>
             SYSTEM_AGREEMENT.TXT
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
            <h1 className="text-display-md text-primary mb-2">Terms & Conditions</h1>
            <p className="font-label-mono text-xs uppercase tracking-widest text-surface-variant m-0">Effective Date: June 21, 2026</p>
          </div>

          <p>
            Welcome to Timeless.aex ("Timeless.aex", "we", "our", or "us"). By accessing this website, submitting an inquiry, or engaging our services, you agree to the following Terms & Conditions.
          </p>
          <p>
            If you do not agree with these terms, please discontinue use of this website and refrain from engaging our services.
          </p>

          <hr className="border-surface-variant my-8" />

          <h2 className="text-xl mt-8">1. About Timeless.aex</h2>
          <p>Timeless.aex is an independent Creative Technology Studio founded by Sternee S R.</p>
          <p>The studio provides services including, but not limited to:</p>
          <ul>
            <li>Branding & Identity Design</li>
            <li>Website Design & Development</li>
            <li>Creative Design Services</li>
            <li>Launch Packages</li>
            <li>Custom Digital Solutions</li>
            <li>AI & Technology Consulting</li>
            <li>Creative Technology Projects</li>
          </ul>

          <h2 className="text-xl mt-8">2. Project Proposals & Scope</h2>
          <p>Every project begins with a discussion, proposal, quotation, or written agreement outlining the scope of work.</p>
          <p>Any work requested outside the agreed scope may require additional fees, revised timelines, or a separate agreement.</p>
          <p>Changes to project requirements after approval may affect both pricing and delivery schedules.</p>

          <h2 className="text-xl mt-8">3. Payments</h2>
          <p>Unless otherwise agreed in writing:</p>
          <ul>
            <li>50% of the project fee is required before work begins.</li>
            <li>The remaining balance must be paid before final delivery.</li>
            <li>Project files, website deployments, source materials, or final deliverables may be withheld until outstanding balances are settled.</li>
          </ul>
          <p>All prices are quoted in Indian Rupees (INR) unless stated otherwise.</p>

          <h2 className="text-xl mt-8">4. Revisions</h2>
          <p>Timeless.aex generally provides between four (4) and five (5) revision rounds depending on the project scope.</p>
          <p>Additional revisions beyond the agreed revision limit may incur additional charges.</p>
          <p>Revisions refer to modifications of existing approved work and do not include complete redesigns, new features, or major changes in project direction.</p>

          <h2 className="text-xl mt-8">5. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide accurate information.</li>
            <li>Supply required content, assets, and materials.</li>
            <li>Respond to requests for feedback in a timely manner.</li>
            <li>Review project milestones when requested.</li>
          </ul>
          <p>Delays in communication or content delivery may impact project timelines.</p>

          <h2 className="text-xl mt-8">6. Project Timelines</h2>
          <p>Estimated timelines are based on timely communication and delivery of required materials from the client.</p>
          <p>If the client delays approvals, feedback, content, or assets, Timeless.aex reserves the right to adjust project deadlines accordingly.</p>
          <p>Project timelines are estimates and are not guaranteed unless explicitly stated in writing.</p>

          <h2 className="text-xl mt-8">7. Project Suspension</h2>
          <p>If a project remains inactive due to lack of client communication or required materials, work may be paused until the client is able to continue.</p>
          <p>Timeless.aex reserves the right to archive inactive projects after extended periods of inactivity.</p>
          <p>Archived projects may require revised timelines or updated quotations before resuming.</p>

          <h2 className="text-xl mt-8">8. Cancellation & Refunds</h2>
          <p>Clients may request project cancellation at any time.</p>
          <p>Payments already used toward completed work, planning, research, design, development, consultations, or other project-related efforts are non-refundable.</p>
          <p>Refund requests will be assessed based on the amount of work completed at the time of cancellation.</p>
          <p>Timeless.aex reserves the right to cancel projects involving unlawful activity, plagiarism, hate speech, deceptive practices, or content that conflicts with the studio's values.</p>

          <h2 className="text-xl mt-8">9. Intellectual Property</h2>
          <p>Ownership of final approved deliverables transfers to the client only after full payment has been received.</p>
          <p>Until full payment is completed, all project materials remain the intellectual property of Timeless.aex.</p>

          <h2 className="text-xl mt-8">10. Reusable Assets & Studio Components</h2>
          <p>Clients receive ownership of the final approved deliverables created specifically for their project.</p>
          <p>However, Timeless.aex retains ownership of:</p>
          <ul>
            <li>Internal tools</li>
            <li>Frameworks</li>
            <li>Design systems</li>
            <li>Development methodologies</li>
            <li>Reusable UI components</li>
            <li>Templates</li>
            <li>Libraries</li>
            <li>Automation systems</li>
            <li>Studio processes</li>
            <li>Creative frameworks</li>
            <li>General-purpose code</li>
          </ul>
          <p>These elements may be reused in future projects.</p>

          <h2 className="text-xl mt-8">11. Portfolio Rights</h2>
          <p>Unless otherwise agreed in writing, Timeless.aex reserves the right to:</p>
          <ul>
            <li>Display completed work in its portfolio.</li>
            <li>Showcase project screenshots.</li>
            <li>Publish project case studies.</li>
            <li>Share work on social media platforms.</li>
            <li>Reference projects for promotional and educational purposes.</li>
          </ul>
          <p>Clients requiring confidentiality must communicate such requirements before project commencement.</p>

          <h2 className="text-xl mt-8">12. Third-Party Costs</h2>
          <p>Clients are responsible for costs associated with:</p>
          <ul>
            <li>Domain registration</li>
            <li>Website hosting</li>
            <li>Premium fonts</li>
            <li>Stock photography</li>
            <li>Third-party software</li>
            <li>APIs</li>
            <li>Plugins</li>
            <li>External services</li>
          </ul>
          <p>Unless explicitly included within a project quotation.</p>

          <h2 className="text-xl mt-8">13. Communication</h2>
          <p>Official communication channels may include:</p>
          <ul>
            <li>Email</li>
            <li>WhatsApp</li>
            <li>Phone calls</li>
            <li>Instagram Direct Messages</li>
          </ul>
          <p>For important project decisions, Timeless.aex may request written confirmation via email.</p>

          <h2 className="text-xl mt-8">14. Acceptable Use</h2>
          <p>Clients may not use services provided by Timeless.aex for:</p>
          <ul>
            <li>Illegal activities</li>
            <li>Fraudulent activities</li>
            <li>Hate speech</li>
            <li>Harassment</li>
            <li>Intellectual property infringement</li>
            <li>Misleading or deceptive content</li>
            <li>Malware distribution</li>
            <li>Unauthorized data collection</li>
          </ul>
          <p>Timeless.aex reserves the right to refuse service to any project that violates these principles.</p>

          <h2 className="text-xl mt-8">15. Music, Designs & Creative Works</h2>
          <p>All music, visual works, concepts, artwork, design explorations, source materials, FL Studio projects, screenshots, creative experiments, and intellectual property displayed on this website remain the property of Timeless.aex unless otherwise stated.</p>
          <p>No content may be reproduced, redistributed, sold, or reused without permission.</p>

          <h2 className="text-xl mt-8">16. Age Requirement</h2>
          <p>By engaging Timeless.aex services, you confirm that:</p>
          <ul>
            <li>You are at least 18 years old, or</li>
            <li>You have permission from a parent, guardian, or authorized representative.</li>
          </ul>

          <h2 className="text-xl mt-8">17. Limitation of Liability</h2>
          <p>Timeless.aex shall not be liable for:</p>
          <ul>
            <li>Indirect damages</li>
            <li>Consequential damages</li>
            <li>Loss of revenue</li>
            <li>Loss of business opportunities</li>
            <li>Loss of data</li>
            <li>Service interruptions caused by third-party providers</li>
          </ul>
          <p>To the fullest extent permitted under applicable law.</p>

          <h2 className="text-xl mt-8">18. Governing Law</h2>
          <p>These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.</p>
          <p>Any disputes arising from these terms shall be subject to the jurisdiction of appropriate courts within India.</p>

          <h2 className="text-xl mt-8">19. Changes to These Terms</h2>
          <p>Timeless.aex reserves the right to update these Terms & Conditions at any time.</p>
          <p>Updated versions will be published on this website and become effective immediately upon publication.</p>

          <h2 className="text-xl mt-8">20. Contact Information</h2>
          <p>For questions regarding these Terms & Conditions:</p>
          <p>
            Email: <a href="mailto:hello@timelessaex.in">hello@timelessaex.in</a><br />
            Alternative Email: <a href="mailto:sterneesr@gmail.com">sterneesr@gmail.com</a><br />
            Website: <a href="/">timelessaex.in</a>
          </p>
          
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
