import { TermsContent } from "./TermsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service and development clauses for Spark Tech Web Solution clients and digital deliverables.",
  openGraph: {
    title: "Terms of Service | Spark Tech Web Solution",
    description:
      "Review the Terms of Service and development clauses for Spark Tech Web Solution clients and digital deliverables.",
    url: "https://sparktech404.github.io/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-8">
      <TermsContent />
    </div>
  );
}
