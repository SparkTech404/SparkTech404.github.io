import { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { StatisticsSection } from "@/components/statistics/StatisticsSection";
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
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 sm:gap-16 pb-12">
      <HeroSection />
      <StatisticsSection />
      <WhyChooseSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaBanner />
    </div>
  );
}
