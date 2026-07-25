"use client";

import React, { useState, useEffect, useRef } from "react";
import { Shield, Lock, Eye, FileText, Database, ShieldCheck, Mail, Globe } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const SECTIONS = [
  { id: "introduction", label: "1. Introduction", icon: FileText },
  { id: "information-collect", label: "2. Information We Collect", icon: Database },
  { id: "information-use", label: "3. How We Use Information", icon: Eye },
  { id: "sharing-ndas", label: "4. Information Sharing & NDAs", icon: Shield },
  { id: "data-security", label: "5. Data Security", icon: Lock },
  { id: "cookies-tracking", label: "6. Cookies & Tracking", icon: Globe },
  { id: "data-retention", label: "7. Data Retention", icon: ShieldCheck },
  { id: "your-rights", label: "8. Your Privacy Rights", icon: Shield },
  { id: "policy-updates", label: "9. Policy Updates", icon: FileText },
  { id: "contact-us", label: "10. Contact Information", icon: Mail },
];

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction");
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
          <span>Security & Transparency</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Privacy <span className="text-volt">Policy</span>
        </h1>
        <p className="text-ink-2 text-lg md:text-xl font-normal leading-relaxed">
          At Spark Tech Web Solution, transparency and client trust are our foundation. This policy describes how we collect, use, store, and protect your information when you engage our web development and design services or interact with our online assets.
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
          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <FileText className="w-6 h-6 text-volt" />
              <span>1. Introduction</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Welcome to Spark Tech Web Solution ("we," "our," "us," or the "Agency"). We are committed to protecting the privacy, confidentiality, and security of our clients, website visitors, and partners.
              </p>
              <p>
                This Privacy Policy explains what personal data and technical metadata we collect, how we process it, the measures we take to keep it confidential, and the choices available to you regarding your information. By visiting our website or hiring our agency for custom web design, landing pages, or scalable web applications, you consent to the practices described in this document.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 2. Information We Collect */}
          <section id="information-collect" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Database className="w-6 h-6 text-volt" />
              <span>2. Information We Collect</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We collect information to facilitate seamless communication, deliver premium digital products, and manage our ongoing partnerships. The data we collect generally falls under two categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="card p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-ink">Client-Provided Information</h3>
                  <p className="text-sm text-ink-2">
                    When you contact us, request a quote, or sign a contract, we collect:
                  </p>
                  <ul className="text-xs text-ink-3 space-y-2 list-disc pl-4">
                    <li>Contact Details: Name, email address, phone number, and physical billing address.</li>
                    <li>Business Information: Company name, project briefs, design guidelines, and branding files.</li>
                    <li>Credentials & Code Access: GitHub repositories, hosting credentials, or API keys shared voluntarily to execute code deployment.</li>
                  </ul>
                </div>
                <div className="card p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-ink">Automatically Collected Data</h3>
                  <p className="text-sm text-ink-2">
                    When you browse our online portfolio and website, we collect:
                  </p>
                  <ul className="text-xs text-ink-3 space-y-2 list-disc pl-4">
                    <li>Device & Browser Metadata: IP address, operating system, browser type, and screen resolutions.</li>
                    <li>Usage Statistics: Page load times, scroll depth, referrer URL, and duration of visits to help us audit site performance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* 3. How We Use Information */}
          <section id="information-use" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Eye className="w-6 h-6 text-volt" />
              <span>3. How We Use Your Information</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We use the gathered information to deliver high-performance code and dynamic layouts. Specifically, data is utilized to:
              </p>
              <ul className="list-none space-y-3 pl-0 text-sm md:text-base text-ink-2">
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Deliver Web Services:</strong> Provisioning custom frontends, backends, databases, and third-party integrations as defined in our contract.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Hosting & CI/CD Deployment:</strong> Linking repositories and configuring automated testing pipelines on secure cloud platforms like Vercel, Netlify, AWS, or custom servers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Communication & Support:</strong> Responding to development queries, delivering status updates, and offering 24/7 technical assistance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="dot-volt mt-2" />
                  <span><strong>Optimization:</strong> Monitoring and optimizing our own site performance, loading speeds, and overall visual user experience.</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 4. Information Sharing & NDAs */}
          <section id="sharing-ndas" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Shield className="w-6 h-6 text-volt" />
              <span>4. Information Sharing & Non-Disclosure Agreements (NDAs)</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                <strong>We do not sell, rent, trade, or distribute client data under any circumstances.</strong>
              </p>
              <p>
                As a premium software agency, we treat all client code, mockups, design assets, and business logic as strictly confidential. When working on projects, we gladly sign formal **Non-Disclosure Agreements (NDAs)** to ensure your trade secrets and proprietary algorithms are protected.
              </p>
              <p>
                Data is only disclosed under the following narrow situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-2">
                <li><strong>Service Providers:</strong> Sharing database or API configuration details with verified host environments (e.g. Supabase, MongoDB Atlas, Cloudflare) strictly to host and run your application.</li>
                <li><strong>Legal Requirements:</strong> If required by valid legal processes, regulations, or government agencies.</li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 5. Data Security */}
          <section id="data-security" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Lock className="w-6 h-6 text-volt" />
              <span>5. Data Security</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Security is woven directly into our development lifecycle. We utilize industry-leading physical, technical, and administrative controls to protect sensitive files and code bases:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[var(--surface-raised)] border border-[var(--surface-border)] p-4 rounded-xl">
                  <h4 className="font-mono text-sm text-volt mb-2">Encrypted Assets</h4>
                  <p className="text-xs text-ink-3">All project documentation and design raw-files are stored in secure, encrypted cloud partitions with multi-factor authentication (MFA).</p>
                </div>
                <div className="bg-[var(--surface-raised)] border border-[var(--surface-border)] p-4 rounded-xl">
                  <h4 className="font-mono text-sm text-volt mb-2">Secure Credentials</h4>
                  <p className="text-xs text-ink-3">We recommend clients share database strings and environment variables using end-to-end encrypted secret vaults.</p>
                </div>
                <div className="bg-[var(--surface-raised)] border border-[var(--surface-border)] p-4 rounded-xl">
                  <h4 className="font-mono text-sm text-volt mb-2">Secure API Bridges</h4>
                  <p className="text-xs text-ink-3">We construct applications with strict CORS policies, token authentication, and TLS 1.3 encryption for safe data transfer.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* 6. Cookies & Tracking */}
          <section id="cookies-tracking" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Globe className="w-6 h-6 text-volt" />
              <span>6. Cookies & Tracking Technologies</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We use cookies and similar identifier elements to support core site operation and aggregate visitor counts. These cookies fall under:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-2">
                <li><strong>Essential Cookies:</strong> Critical for navigation, loading CSS variables, and layout rendering.</li>
                <li><strong>Analytics Cookies:</strong> Optional statistics (such as page speed tracking) which you can opt-out of by setting your browser's "Do Not Track" header.</li>
              </ul>
            </div>
          </section>

          <div className="divider" />

          {/* 7. Data Retention */}
          <section id="data-retention" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-volt" />
              <span>7. Data Retention</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We store client contact and contract records for as long as necessary to complete your project, provide maintenance support, and satisfy accounting audit obligations.
              </p>
              <p>
                Once a partnership has officially concluded and post-launch warranty support has expired, clients can request the complete and permanent deletion of their codebases, branding source-files, and credential caches from our storage platforms.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 8. Your Privacy Rights */}
          <section id="your-rights" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Shield className="w-6 h-6 text-volt" />
              <span>8. Your Privacy Rights (GDPR / CCPA)</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                Depending on your geographical jurisdiction, you are entitled to several specific rights regarding your personal information:
              </p>
              <div className="border-l-2 border-[var(--volt)] pl-4 py-1 my-4 bg-[var(--surface-raised)]/40">
                <p className="text-sm font-semibold text-ink mb-1">Your Key Entitlements:</p>
                <p className="text-xs text-ink-3">
                  • <strong>Right to Access:</strong> Ask for a direct copy of all personal information we store about you.<br />
                  • <strong>Right to Correction:</strong> Request correction of any inaccurate or incomplete details.<br />
                  • <strong>Right to Deletion:</strong> Command us to delete your personal profile data under specific conditions.<br />
                  • <strong>Right to Restrict Processing:</strong> Limit how we process your information.
                </p>
              </div>
              <p className="text-sm text-ink-3">
                To exercise any of these privacy rights, please write to us directly at our contact email address.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 9. Policy Updates */}
          <section id="policy-updates" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <FileText className="w-6 h-6 text-volt" />
              <span>9. Updates to this Policy</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                We may periodically update our privacy policies to reflect updates in security protocols, changes in web architecture, or state/federal legislative upgrades.
              </p>
              <p>
                When modifications occur, we will adjust the "Last Updated" timestamp at the top of this page. We suggest checking this page occasionally to stay informed.
              </p>
            </div>
          </section>

          <div className="divider" />

          {/* 10. Contact Us */}
          <section id="contact-us" className="scroll-mt-28 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              <Mail className="w-6 h-6 text-volt" />
              <span>10. Contact Information</span>
            </h2>
            <div className="text-ink-2 space-y-4 text-base md:text-lg">
              <p>
                If you have any questions or security concerns regarding this Privacy Policy, please send us a direct message.
              </p>
              
              <GlowCard className="bg-[var(--surface-raised)] border border-[var(--surface-border)] p-8 mt-6">
                <h3 className="text-xl font-bold text-ink mb-4">Contact Information</h3>
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
                    <span className="text-volt font-mono w-20">Address:</span>
                    <span className="text-ink-2">Digital-first agency, offering global service</span>
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
