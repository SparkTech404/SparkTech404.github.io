import { HeroSection } from "@/components/hero/HeroSection";
import { StatisticsSection } from "@/components/statistics/StatisticsSection";
import { WhyChooseSection } from "@/components/why-choose/WhyChooseSection";
import { TechnologiesSection } from "@/components/technologies/TechnologiesSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CtaBanner } from "@/components/cta/CtaBanner";

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
