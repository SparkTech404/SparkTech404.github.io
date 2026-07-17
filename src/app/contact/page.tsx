import { ContactSection } from "@/components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Get Started | Spark Tech Web Solution",
  description:
    "Get in touch with Spark Tech Web Solution to kickstart your project. Request a quote or schedule a free digital strategy consultation.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactSection />
    </div>
  );
}
