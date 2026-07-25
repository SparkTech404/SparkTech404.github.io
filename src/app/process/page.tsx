import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Process",
  description:
    "Discover our streamlined 6-step development methodology from discovery and design to deployment and continuous growth.",
  openGraph: {
    title: "Development Process | Spark Tech Web Solution",
    description:
      "Discover our streamlined 6-step development methodology from discovery and design to deployment and continuous growth.",
    url: "https://sparktech404.github.io/process",
  },
  alternates: {
    canonical: "/process",
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

export default function ProcessPage() {
  return (
    <div className="py-8">
      <ProcessTimeline />
    </div>
  );
}
