import type { Metadata } from "next";
import { Syne, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparktech404.github.io"),
  title: {
    default: "Spark Tech Web Solution | Premium Web Development Agency",
    template: "%s | Spark Tech Web Solution",
  },
  description:
    "We build modern websites, landing pages, and scalable web applications that help businesses grow faster. From startups to enterprises, we deliver secure, high-performance digital solutions with long-term support.",
  keywords: [
    "Spark Tech Web Solution",
    "Website Development",
    "Landing Pages",
    "Web Applications",
    "UI/UX Design",
    "SEO Optimization",
    "Website Maintenance",
    "Software Agency",
    "Custom Software Development",
  ],
  authors: [{ name: "Spark Tech" }],
  creator: "Spark Tech",
  publisher: "Spark Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Spark Tech Web Solution | Premium Web Development Agency",
    description:
      "Modern websites, landing pages, and scalable web applications delivered with premium UI/UX and 24/7 technical support.",
    url: "https://sparktech404.github.io",
    siteName: "Spark Tech Web Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Tech Web Solution | Premium Web Development Agency",
    description:
      "Modern websites, landing pages, and scalable web applications delivered with premium UI/UX and 24/7 technical support.",
    creator: "@sparktech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${geist.variable} ${geistMono.variable} antialiased relative min-h-screen flex flex-col`}
        style={{ backgroundColor: "var(--surface)", color: "var(--ink)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spark Tech Web Solution",
              url: "https://sparktech404.github.io",
              logo: "https://sparktech404.github.io/favicon.ico",
              description: "Premium web development agency building modern websites and scalable web applications.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "sparktech1404@gmail.com",
              },
            }),
          }}
        />

        <ScrollProgress />
        <Navbar />
        
        <main className="relative z-10 flex-grow" style={{ paddingTop: "88px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
