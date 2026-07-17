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
};

export default function ProcessPage() {
  return (
    <div className="py-8">
      <ProcessTimeline />
    </div>
  );
}
