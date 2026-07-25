import { Metadata } from "next";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = {
  title: "Interactive Portfolio & Live Demos",
  description:
    "Directly interact with live work demos built by Spark Tech. Explore custom dashboard interfaces, iOS applications, custom e-commerce product designers, and landing pages.",
  openGraph: {
    title: "Interactive Portfolio & Live Demos | Spark Tech Web Solution",
    description:
      "Directly interact with live work demos built by Spark Tech. Explore custom dashboard interfaces, iOS applications, custom e-commerce product designers, and landing pages.",
    url: "https://sparktech404.github.io/portfolio",
  },
  alternates: {
    canonical: "/portfolio",
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

export default function PortfolioPage() {
  return (
    <div className="pb-12">
      {/* Off-screen or visually integrated page h1 for SEO */}
      <h1 className="sr-only">Spark Tech Web Solution Interactive Work Portfolio</h1>
      
      <PortfolioSection />
      
      <CtaBanner />
    </div>
  );
}
