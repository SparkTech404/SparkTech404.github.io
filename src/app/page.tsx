import { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutPreview } from "@/components/about/AboutPreview";
import { StatisticsSection } from "@/components/statistics/StatisticsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { WhyChooseSection } from "@/components/why-choose/WhyChooseSection";
import { TechnologiesSection } from "@/components/technologies/TechnologiesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = {
  title: "Spark Tech Web Solution | Premium Web Development Agency",
  description:
    "Spark Tech Web Solution offers premium web development, modern landing pages, and scalable web applications. Elevate your brand with our custom software solutions.",
  openGraph: {
    title: "Spark Tech Web Solution | Premium Web Development Agency",
    description:
      "Spark Tech Web Solution offers premium web development, modern landing pages, and scalable web applications. Elevate your brand with our custom software solutions.",
    url: "https://sparktech404.github.io",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Spark Tech Web Solution",
    "SparkTech Web Solution",
    "Spark Tech Web Solutions",
    "SparkTech Web Solutions",
    "Spark Tech Agency",
    "SparkTech Agency",
    "Spark Tech Web Development",
    "SparkTech Web Development",
    "Spark Tech custom website development",
    "Spark Tech Web Solution by Arnav Pundir",
    "SparkTech Developer Arnav Pundir",
    "Spark Tech software services",
    "Spark Tech software agency",
    "SparkTech portfolio",
    "SparkTech Web Solution services",
    "Spark Tech Web Solution process",
    "Spark Tech Web Solution contact",
    "SparkTech Web Solution FAQ"
  ]
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 pb-12">
      <HeroSection />
      <AboutPreview />
      <StatisticsSection />
      <ServicesSection isPreview={true} />
      <PortfolioSection isPreview={true} />
      <WhyChooseSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaBanner />
    </div>
  );
}
