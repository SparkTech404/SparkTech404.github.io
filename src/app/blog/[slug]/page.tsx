import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllSlugs, blogPosts } from "@/data/blogPosts";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | Spark Tech Web Solution`,
      description: post.excerpt,
      url: `https://sparktech404.github.io/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Spark Tech Web Solution"],
      tags: post.tags,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2 - relatedPosts.length);

  const suggestedPosts = [...relatedPosts, ...otherPosts];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Spark Tech Web Solution",
      url: "https://sparktech404.github.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Spark Tech Web Solution",
      logo: {
        "@type": "ImageObject",
        url: "https://sparktech404.github.io/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sparktech404.github.io/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} suggestedPosts={suggestedPosts} />
    </>
  );
}
