import { ServicesSection } from "@/components/services/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our full-stack digital services including Website Development, Landing Pages, Custom SaaS Applications, UI/UX Design, SEO, and Maintenance.",
  openGraph: {
    title: "Our Services | Spark Tech Web Solution",
    description:
      "Explore our full-stack digital services including Website Development, Landing Pages, Custom SaaS Applications, UI/UX Design, SEO, and Maintenance.",
    url: "https://sparktech404.github.io/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <ServicesSection />
    </div>
  );
}
