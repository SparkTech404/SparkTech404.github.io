import { PrivacyContent } from "./PrivacyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Spark Tech Web Solution collects, uses, protects, and stores your data and project credentials securely.",
  openGraph: {
    title: "Privacy Policy | Spark Tech Web Solution",
    description:
      "Learn how Spark Tech Web Solution collects, uses, protects, and stores your data and project credentials securely.",
    url: "https://sparktech404.github.io/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-8">
      <PrivacyContent />
    </div>
  );
}
