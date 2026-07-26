import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Web development tips, SEO guides, and business insights from the Spark Tech Web Solution team. Learn how to grow your business online.",
  openGraph: {
    title: "Blog | Spark Tech Web Solution",
    description: "Web development tips, SEO guides, and business insights from the Spark Tech Web Solution team. Learn how to grow your business online.",
    url: "https://sparktech404.github.io/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
