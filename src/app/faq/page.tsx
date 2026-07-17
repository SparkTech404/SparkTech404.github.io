import { FaqSection } from "@/components/faq/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our web development process, pricing, timelines, technologies, and post-launch support.",
  openGraph: {
    title: "Frequently Asked Questions | Spark Tech Web Solution",
    description:
      "Find answers to common questions about our web development process, pricing, timelines, technologies, and post-launch support.",
    url: "https://sparktech404.github.io/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a website take to build and launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard modern website or landing page typically takes 1 to 3 weeks from initial design consultation to final deployment. More complex custom web applications, SaaS platforms, or e-commerce stores with extensive integrations usually take between 4 to 8 weeks depending on exact scope and feature requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you redesign existing websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialize in revamping outdated, slow, or poorly converting websites. We modernize your UI/UX with contemporary glassmorphism and clean typography, migrate your platform to Next.js/React, and optimize Core Web Vitals to dramatically boost loading speeds and search engine rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide hosting and cloud deployment support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Whether your application is hosted on AWS, Google Cloud Platform (GCP), Microsoft Azure, Vercel, or custom dedicated VPS servers, we handle total configuration, SSL certificates, domain DNS management, automated CI/CD pipelines, and high-availability cloud architecture setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can you maintain and optimize existing websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing 24/7 technical support, security improvements, database optimization, cloud backup scheduling, and speed enhancement packages for existing websites regardless of where they are currently hosted.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom web applications and enterprise tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We build high-scale custom SaaS web applications, internal enterprise dashboards, real-time data monitoring systems, and secure API bridges using full-stack technologies like Next.js 15, React 19, TypeScript, Node.js, Express, MongoDB, and Firebase.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <div className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqSection />
    </div>
  );
}
