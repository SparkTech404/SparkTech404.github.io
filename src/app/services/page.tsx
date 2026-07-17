import { ServicesSection } from "@/components/services/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Spark Tech Web Solution",
  description:
    "Explore our full-stack digital services including Website Development, Landing Pages, Custom SaaS Applications, UI/UX Design, SEO, and Maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <ServicesSection />
    </div>
  );
}
