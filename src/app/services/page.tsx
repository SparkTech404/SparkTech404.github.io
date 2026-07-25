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
  alternates: {
    canonical: "/services",
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
    "SparkTech Web Solution FAQ",
    "hire web developer",
    "custom web design company",
    "freelance frontend developer react",
    "nextjs web development services",
    "hire react coder",
    "affordable landing page design",
    "best web development agency",
    "software development company",
    "ecommerce website developer",
    "SaaS interface designer",
    "hire UI UX engineer",
    "hire nodejs developer",
    "custom web app building"
  ]
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <ServicesSection />
    </div>
  );
}
