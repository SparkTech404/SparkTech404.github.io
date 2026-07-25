import { ContactSection } from "@/components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Get Started",
  description:
    "Get in touch with Spark Tech Web Solution to kickstart your project. Request a quote or schedule a free digital strategy consultation.",
  openGraph: {
    title: "Contact Us & Get Started | Spark Tech Web Solution",
    description:
      "Get in touch with Spark Tech Web Solution to kickstart your project. Request a quote or schedule a free digital strategy consultation.",
    url: "https://sparktech404.github.io/contact",
  },
  alternates: {
    canonical: "/contact",
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

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactSection />
    </div>
  );
}
