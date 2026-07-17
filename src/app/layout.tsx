import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#030712] text-slate-100 antialiased relative min-h-screen flex flex-col`}>
        {/* Futuristic Floating Mesh Background Lights */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-blue-600/15 blur-[130px] animate-pulse" />
          <div className="absolute top-[30%] right-[-10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-purple-600/15 blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] sm:w-[700px] h-[600px] sm:h-[700px] rounded-full bg-cyan-500/15 blur-[140px]" />
        </div>

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

        <Navbar />
        
        <main className="relative z-10 flex-grow pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
