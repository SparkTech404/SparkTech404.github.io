"use client";

import React, { useState, useEffect, useRef } from "react";
import { FileText, Shield, CreditCard, Code, Send, Play, AlertCircle, HelpCircle, Compass, Mail } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const SECTIONS = [
  { id: "agreement", label: "1. Agreement to Terms", icon: FileText },
  { id: "intellectual-property", label: "2. Intellectual Property", icon: Code },
  { id: "fees-payment", label: "3. Fees & Payment Terms", icon: CreditCard },
  { id: "client-materials", label: "4. Client Materials", icon: Compass },
  { id: "delivery-review", label: "5. Delivery & Revisions", icon: Send },
  { id: "hosting-support", label: "6. Hosting & Maintenance", icon: Play },
  { id: "disclaimer", label: "7. Warranty Disclaimers", icon: AlertCircle },
  { id: "liability", label: "8. Limitation of Liability", icon: Shield },
  { id: "termination", label: "9. Termination", icon: HelpCircle },
  { id: "governing-law", label: "10. Governing Law", icon: Compass },
  { id: "contact", label: "11. Contact Info", icon: Mail },
];

export function TermsContent() {
  const [activeSection, setActiveSection] = useState("agreement");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    });

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="section-container py-12 md:py-20">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--volt-border)] bg-[var(--volt-dim)] text-[var(--volt)] font-mono text-xs mb-4">
          <span className="dot-volt animate-pulse" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Terms of <span className="text-volt">Service</span>
        </h1>
        <p className="text-ink-2 text-lg md:text-xl font-normal leading-relaxed">
          Please read these Terms of Service carefully before working with Spark Tech Web Solution. By utilizing our services, subscribing to maintenance, or authorizing project development, you agree to comply with these terms.
        </p>
        <p className="text-ink-3 text-sm font-mono mt-4">
          Last Updated: July 25, 2026
        </p>
      </div>

      <div className="divider mb-12" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Sticky Sidebar Navigation */}
        <aside className="sticky top-28 hidden lg:block border border-[var(--surface-border)] bg-[var(--surface-raised)] rounded-xl p-6">
          <h2 className="text-sm font-mono uppercase tracking-wider text-ink-3 mb-4">
            Navigation Index
          </h2>
          <nav className="flex flex-col gap-2">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-[var(--volt-dim)] text-[var(--volt)] border-l-2 border-[var(--volt)] pl-2.5"
                      : "text-ink-3 hover:text-ink hover:bg-[var(--surface-high)] border-l-2 border-transparent"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-[var(--volt)]" : "text-ink-3"}`} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="space-y-16">
          {/* 1. Agreement to Terms */}
          <section id="agreement" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <FileText className="w-6 h-6 text-volt" />
              <span>1. Agreement to Terms</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client," "you," or "your") and Spark Tech Web Solution ("Agency," "we," "us," or "our"), concerning your access to and use of our web development services, maintenance contracts, custom software engineering, and the agency website.
              </p>
              <p>
                By accepting a proposal, signing a Statement of Work (SOW), submitting payments, or browsing our web assets, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, you are prohibited from using our services and must discontinue use immediately.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 2. Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Code className="w-6 h-6 text-volt" />
              <span>2. Intellectual Property Rights</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Ownership and transfer of intellectual property (IP) are governed by the following guidelines:
              </p>
              <ul className="list-none space-y-3 pl-0 text-sm md:text-base text-ink-2">
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Deliverables & Custom Code:</strong> Upon complete and final payment of all outstanding invoices, the ownership of custom frontend code (HTML, CSS, JS, TS, React components), custom backend logic, and layout mockups specifically built for the Client transfers entirely to the Client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Agency Tools & Libraries:</strong> We retain all right, title, and interest in and to our pre-existing code blocks, starter templates, custom animation configurations, boilerplate configurations, and developer tools ("Pre-Existing Assets") used during the build. We grant you a perpetual, non-exclusive, royalty-free license to use these assets within the context of your specific application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Portfolio Rights:</strong> Unless explicitly restricted via a signed NDA, you grant us the right to showcase the completed website, screenshots, and visual assets on our online portfolio and marketing materials as examples of our design capabilities.</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 3. Fees & Payment Terms */}
          <section id="fees-payment" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-volt" />
              <span>3. Fees and Payment Terms</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Billing structures and parameters are established to ensure clarity and delivery commitment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-2">
                <li><strong>Milestone Structure:</strong> Projects are generally structured around designated milestones (e.g. 50% Upfront, 50% upon final sign-off prior to launch, or custom structures outlined in your contract).</li>
                <li><strong>Retainers & Subscriptions:</strong> Ongoing maintenance packages, SEO audits, and speed optimizations are billed in advance on a recurring monthly cycle.</li>
                <li><strong>Late Payments:</strong> If payments remain unpaid for more than 14 days post-due, we reserve the right to temporarily pause active development and suspend related hosting environments until outstanding balances are cleared.</li>
                <li><strong>Extra Scope:</strong> Any changes, major layout redesigns, or feature additions requested outside the agreed-upon Statement of Work will be quoted separately as "Out of Scope" modifications at our standard hourly rates or fixed fees.</li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 4. Client Materials */}
          <section id="client-materials" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Compass className="w-6 h-6 text-volt" />
              <span>4. Client Materials and Warranties</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                You represent and warrant that any content, company logos, fonts, graphics, database information, and copy provided to us for inclusion in your digital product are owned by you or you possess full licensing permissions to use them.
              </p>
              <p>
                The Client agrees to hold Spark Tech Web Solution harmless against any claims, losses, or legal costs arising from allegations of copyright infringement related to materials supplied by the Client.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 5. Delivery & Revisions */}
          <section id="delivery-review" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Send className="w-6 h-6 text-volt" />
              <span>5. Project Delivery and Revisions</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We strive for absolute design alignment and high-converting code. Revisions and timeline constraints operate as follows:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="card p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-ink">Review Period</h3>
                  <p className="text-sm text-ink-3">
                    Upon delivering mockups or staging websites, you have a period of <strong>7 business days</strong> to provide collective feedback or request adjustments. If no feedback is provided within this timeframe, the deliverable is deemed accepted.
                  </p>
                </div>
                <div className="card p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-ink font-sans">Standard Revisions</h3>
                  <p className="text-sm text-ink-3">
                    Our standard packages include <strong>2 rounds of design revisions</strong> during the layout phase. Major structural rewrites requested after a milestone has been approved will require separate invoicing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* 6. Hosting & Maintenance */}
          <section id="hosting-support" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Play className="w-6 h-6 text-volt" />
              <span>6. Hosting and Post-Launch Support</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Spark Tech Web Solution supports various cloud platforms and handles deployments efficiently:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-2">
                <li><strong>Staging & Domain SSL:</strong> We supply secure staging URLs for review prior to launching on production.</li>
                <li><strong>Third-Party Costs:</strong> The cost of domain names, hosting servers (e.g. AWS, Vercel, Hostinger), databases, API plugins, and email servers are paid directly by the Client to respective vendors. We do not markup third-party hosting fees.</li>
                <li><strong>Post-Launch Warranty:</strong> We offer a <strong>30-day post-launch warranty</strong> on custom code to address and fix any bugs, visual misalignment, or code issues that deviate from initial requirements, completely free of charge.</li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 7. Warranty Disclaimers */}
          <section id="disclaimer" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-volt" />
              <span>7. Disclaimer of Warranties</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Our services are provided on an **"AS IS"** and **"AS AVAILABLE"** basis.
              </p>
              <p>
                We do not guarantee that third-party hosting platforms, database servers, or custom code interfaces will remain completely uninterrupted, secure, or bug-free indefinitely due to browser engines evolving, APIs deprecating, or platform outages. We make no warranty that your custom website will yield a specific search ranking, conversion rate, or volume of organic traffic.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 8. Limitation of Liability */}
          <section id="liability" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Shield className="w-6 h-6 text-volt" />
              <span>8. Limitation of Liability</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                To the maximum extent permitted by applicable law, in no event shall Spark Tech Web Solution, its founders, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenues, database records, client files, or operational uptime resulting from your use of or inability to use the custom software.
              </p>
              <p>
                Our cumulative liability for any claim arising from a specific SOW is strictly limited to the actual amount paid by the Client to us for that project.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 9. Termination */}
          <section id="termination" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-volt" />
              <span>9. Termination of Services</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Either party may terminate a project agreement upon delivering <strong>14 business days' written notice</strong> under the following clauses:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-2">
                <li><strong>Termination for Convenience:</strong> If the Client terminates a project early for convenience, the Client agrees to settle all fees proportional to the development work completed up to the date of termination.</li>
                <li><strong>Material Breach:</strong> If either party commits a breach of its material obligations (such as failure to pay or failure to supply requirements) and does not remedy the breach within 14 days of receiving notice.</li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 10. Governing Law */}
          <section id="governing-law" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Compass className="w-6 h-6 text-volt" />
              <span>10. Governing Law & Dispute Resolution</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                These Terms and your use of our services shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
              <p>
                Any legal action or dispute arising out of this agreement shall be resolved through friendly consultation. If consultation fails, disputes shall be submitted to the exclusive jurisdiction of the competent courts in Noida, Uttar Pradesh, India.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 11. Contact Info */}
          <section id="contact" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Mail className="w-6 h-6 text-volt" />
              <span>11. Contact Information</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                If you have questions, inquiries, or notices regarding these Terms, please contact us at:
              </p>
              
              <GlowCard className="bg-[var(--surface-raised)] border border-[var(--surface-border)] p-8 mt-6">
                <h3 className="text-xl font-bold text-ink mb-4">Contact Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-volt font-mono w-20">Agency:</span>
                    <span className="text-ink">Spark Tech Web Solution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-volt font-mono w-20">Email:</span>
                    <a href="mailto:sparkteck404@gmail.com" className="text-ink hover:underline-volt">
                      sparkteck404@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-volt font-mono w-20">Website:</span>
                    <a href="https://sparktech404.github.io" className="text-ink hover:underline-volt">
                      sparktech404.github.io
                    </a>
                  </div>
                </div>
              </GlowCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
