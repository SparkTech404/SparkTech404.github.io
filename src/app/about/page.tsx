import { AboutSection } from "@/components/about/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spark Tech Web Solution, our mission, vision, and how our experienced team builds premium digital solutions to empower your business.",
  openGraph: {
    title: "About Us | Spark Tech Web Solution",
    description:
      "Learn about Spark Tech Web Solution, our mission, vision, and how our experienced team builds premium digital solutions to empower your business.",
    url: "https://sparktech404.github.io/about",
  },
  alternates: {
    canonical: "/about",
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

export default function AboutPage() {
  return (
    <div className="py-8">
      <AboutSection />
    </div>
  );
}
