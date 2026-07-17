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
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <AboutSection />
    </div>
  );
}
