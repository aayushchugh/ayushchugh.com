import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "app/components/mdx";
import RelativeTime from "app/components/relative-time";
import { getBlogPosts } from "app/db/blog";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import { format } from "date-fns";
import Image from "next/image";
import calculateEstimateReadingTime from "app/utils/calculateEstimateReadingTime";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  let ogImage = post.metadata.ogImage
    ? post.metadata.ogImage
    : "https://cdn.ayushchugh.com/open-graph/business-card.png";

  return {
    metadataBase: new URL("https://ayushchugh.com"),
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://ayushchugh.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@aayushchugh",
      site: "@aayushchugh",
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const wordCount = post.content.split(/\s+/).length;
  const readingTime = calculateEstimateReadingTime(post.content);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: post.metadata.ogImage || post.metadata.coverImage,
    url: `https://ayushchugh.com/blog/${post.slug}`,
    wordCount,
    author: {
      "@type": "Person",
      name: "Ayush Chugh",
      url: "https://ayushchugh.com",
    },
    publisher: {
      "@type": "Person",
      name: "Ayush Chugh",
      url: "https://ayushchugh.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ayushchugh.com/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Blog", url: "https://ayushchugh.com/blog" },
    {
      name: post.metadata.title,
      url: `https://ayushchugh.com/blog/${post.slug}`,
    },
  ]);

  return (
    <section className="pt-12 pb-8 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="fade-up">
        <Link
          href="/blog"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint hover:text-accent transition-colors"
        >
          ← Back to writing
        </Link>
      </div>

      <header className="mt-6 fade-up fade-up-delay-1 pb-8 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
          Dispatch
        </p>
        <h1 className="title mt-3 font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
          {post.metadata.title}
        </h1>
        <p className="sr-only">
          Written by Ayush Chugh, Full Stack Developer. This article has{" "}
          {wordCount} words and covers topics in web development and software
          engineering.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          <span>By Ayush Chugh</span>
          <span aria-hidden="true">·</span>
          <span>
            {format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <RelativeTime dateString={post.metadata.publishedAt} />
          </span>
          <span aria-hidden="true">·</span>
          <span>{readingTime} read</span>
        </div>
      </header>

      {post.metadata.coverImage && (
        <div className="my-8 fade-up fade-up-delay-2">
          <Image
            src={post.metadata.coverImage}
            alt={post.metadata.title}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>
      )}

      <article className="prose prose-quoteless prose-editorial mt-8 fade-up fade-up-delay-2">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
