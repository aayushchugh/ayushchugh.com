import { getBlogPosts } from "app/db/blog";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import calculateEstimateReadingTime from "../utils/calculateEstimateReadingTime";
import RelativeTime from "../components/relative-time";
import SectionHeader from "../components/section-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Blog",
  description:
    "Read Ayush Chugh's blog on web development, React, Next.js, TypeScript, Node.js, and software engineering best practices.",
  keywords: [
    "Ayush Chugh Blog",
    "Web Development Blog",
    "Programming Blog",
    "Tech Blog",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Software Engineering",
    "Full Stack Developer Blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Web Development & Software Engineering | Ayush Chugh",
    description:
      "Read articles on web development, React, Next.js, TypeScript, Node.js, and software engineering best practices by Ayush Chugh.",
    url: "https://ayushchugh.com/blog",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chugh's Web Development Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Web Development & Software Engineering | Ayush Chugh",
    description:
      "Read articles on web development, React, Next.js, TypeScript, Node.js, and software engineering best practices by Ayush Chugh.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

export default function BlogPage() {
  const blogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1,
  );

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Blog", url: "https://ayushchugh.com/blog" },
  ]);

  return (
    <section className="pt-12 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="fade-up text-center pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Volume I · The Dispatch
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] text-ink leading-none">
          Writing
        </h1>
        <p className="mt-4 font-fell italic text-lg sm:text-xl text-ink-light max-w-2xl mx-auto">
          Notes from the field — engineering, craft, and the occasional rant.
        </p>
      </div>

      <p className="sr-only">
        A collection of technical blog posts by Ayush Chugh covering web
        development, JavaScript, TypeScript, React, Next.js, Node.js, and
        software engineering best practices.
      </p>

      <div className="mt-12 fade-up fade-up-delay-1">
        <SectionHeader label="The Archive" title="Recent Articles" />

        {blogs.length === 0 ? (
          <p className="font-fell italic text-lg text-ink-light text-center py-12">
            The presses are warm. New writing forthcoming.
          </p>
        ) : (
          <div>
            {blogs.map((post, idx) => (
              <article
                key={post.slug}
                className="border-t border-rule py-8 grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-8 gap-y-2"
              >
                <div className="md:pr-4 md:border-r md:border-rule">
                  <p className="font-display italic text-3xl text-ink-faint leading-none">
                    No. {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
                <div>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight text-ink group-hover:text-accent transition-colors">
                      {post.metadata.title}
                    </h3>
                  </Link>
                  <p className="mt-3 font-serif text-base leading-relaxed text-ink-light">
                    {post.metadata.summary}
                  </p>
                  <p className="mt-4 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                    {format(
                      new Date(post.metadata.publishedAt),
                      "MMMM d, yyyy",
                    )}{" "}
                    · <RelativeTime dateString={post.metadata.publishedAt} /> ·{" "}
                    {calculateEstimateReadingTime(post.content)} read
                  </p>
                </div>
              </article>
            ))}
            <div className="border-t border-rule" />
          </div>
        )}
      </div>
    </section>
  );
}
