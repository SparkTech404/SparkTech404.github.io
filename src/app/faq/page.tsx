import { FaqSection } from "@/components/faq/FaqSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Spark Tech Web Solution",
  description:
    "Find answers to common questions about our web development process, pricing, timelines, technologies, and post-launch support.",
};

export default function FaqPage() {
  return (
    <div className="py-8">
      <FaqSection />
    </div>
  );
}
