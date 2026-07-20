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
