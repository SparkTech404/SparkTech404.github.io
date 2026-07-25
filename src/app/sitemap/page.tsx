import type { Metadata } from "next";
import Link from "next/link";
import { Compass, BookOpen, Layers, Heart, FileText, CheckCircle, ArrowRight, Activity, Cpu } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Explore the visual sitemap and complete folder structure of Spark Tech Web Solution services, process, and legal pages.",
  openGraph: {
    title: "Sitemap | Spark Tech Web Solution",
    description:
      "Explore the visual sitemap and complete folder structure of Spark Tech Web Solution services, process, and legal pages.",
    url: "https://sparktech404.github.io/sitemap",
  },
  alternates: {
    canonical: "/sitemap",
  },
};

const corePages = [
  { name: "Home Page", href: "/", desc: "Main landing gateway displaying agency showcase, features, testimonials, pricing plans, and project previews.", priority: "1.0", frequency: "Monthly" },
  { name: "About Us", href: "/about", desc: "Our core values, founding vision, and mission parameters for web engineering excellence.", priority: "0.8", frequency: "Monthly" },
  { name: "Services", href: "/services", desc: "Detailed overview of web development, landing pages, custom SaaS design, SEO optimization, and ongoing support.", priority: "0.9", frequency: "Monthly" },
  { name: "Portfolio", href: "/portfolio", desc: "Interactive display of deployed projects, real-world case studies, and engineering examples.", priority: "0.9", frequency: "Monthly" },
  { name: "Process", href: "/process", desc: "Our step-by-step design-to-deployment roadmap showing how we collaborate, build, audit, and launch client websites.", priority: "0.7", frequency: "Monthly" },
  { name: "FAQ", href: "/faq", desc: "Answers to frequently asked questions about project budgets, timelines, hosting configurations, and post-launch warranties.", priority: "0.6", frequency: "Monthly" },
  { name: "Contact", href: "/contact", desc: "Get in touch for custom quotes, technical audits, project consultation, and business inquiries.", priority: "0.8", frequency: "Monthly" },
];

const servicePages = [
  { name: "Website Development", desc: "High-speed corporate sites, custom portfolios, CMS integrations built with clean code standards." },
  { name: "Landing Pages", desc: "Conversion-optimized landing pages targeting maximum lead acquisition with modern typography." },
  { name: "Web Applications", desc: "Scalable full-stack SaaS apps, database designs, dashboard interfaces, and payment integrations." },
  { name: "UI/UX Design", desc: "Interactive mockups, visual guidelines, layout wireframing, and custom micro-animations." },
  { name: "SEO Optimization", desc: "Optimizing Core Web Vitals, speed indexes, tag structures, and keyword mapping for search engines." },
  { name: "Website Maintenance", desc: "24/7 technical support, database optimization, cloud backup scheduling, and minor updates." },
];

const legalPages = [
  { name: "Terms of Service", href: "/terms", desc: "Milestones, payment terms, copyright ownership clauses, and project timelines." },
  { name: "Privacy Policy", href: "/privacy", desc: "Personal data collection parameters, NDA guidelines, and storage security details." },
  { name: "XML Sitemap", href: "/sitemap.xml", desc: "Raw crawler-readable URL indices supporting automated search engine indexation.", external: true },
];

export default function SitemapPage() {
  return (
    <div className="section-container py-12 md:py-20">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--volt-border)] bg-[var(--volt-dim)] text-[var(--volt)] font-mono text-xs mb-4">
          <span className="dot-volt" />
          <span>Interactive Directory</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Visual <span className="text-volt">Sitemap</span>
        </h1>
        <p className="text-ink-2 text-lg md:text-xl font-normal leading-relaxed">
          Navigate through our application architecture. This dashboard displays the complete directory layout, service catalogs, legal policies, and technical XML endpoints configured for Spark Tech.
        </p>
      </div>

      <div className="divider mb-16" />

      <div className="space-y-16">
        {/* Core Pages Section */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <Compass className="w-6 h-6 text-volt" />
            <span>Core Navigation Map</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePages.map((page) => (
              <GlowCard key={page.name} className="card p-6 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-ink group-hover:text-[var(--volt)] transition-colors">
                      {page.name}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--surface-border)] bg-[var(--surface-high)] text-ink-3">
                      P: {page.priority}
                    </span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {page.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--surface-border-subtle)] flex items-center justify-between text-xs font-mono text-ink-3">
                  <span>Freq: {page.frequency}</span>
                  <Link href={page.href} className="inline-flex items-center gap-1 text-[var(--volt)] hover:underline">
                    <span>Visit Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Services Showcase Map */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <Layers className="w-6 h-6 text-volt" />
            <span>Service Capabilities Index</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service) => (
              <div key={service.name} className="bg-[var(--surface-raised)] border border-[var(--surface-border-subtle)] p-6 rounded-xl space-y-3 hover:border-[var(--surface-border)] transition-colors">
                <div className="flex items-center gap-2 text-[var(--volt)]">
                  <Cpu className="w-4 h-4" />
                  <h3 className="font-bold text-ink text-lg">{service.name}</h3>
                </div>
                <p className="text-sm text-ink-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Legal & Configuration Map */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <FileText className="w-6 h-6 text-volt" />
            <span>Legal Documents & System Files</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalPages.map((page) => (
              <GlowCard key={page.name} className="card p-6 flex flex-col justify-between group">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ink group-hover:text-[var(--volt)] transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-ink-2">
                    {page.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--surface-border-subtle)] flex justify-end">
                  {page.external ? (
                    <a href={page.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--volt)] text-xs font-mono hover:underline">
                      <span>Access Endpoint</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link href={page.href} className="inline-flex items-center gap-1 text-[var(--volt)] text-xs font-mono hover:underline">
                      <span>Read Policy</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
