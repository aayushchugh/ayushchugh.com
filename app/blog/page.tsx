import { getBlogPosts } from "app/db/blog";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";
import calculateEstimateReadingTime from "../utils/calculateEstimateReadingTime";
import Separator from "../components/separator";

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
	const blogs = getBlogPosts();

	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://ayushchugh.com" },
		{ name: "Blog", url: "https://ayushchugh.com/blog" },
	]);

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<h1 className="font-medium text-2xl mb-8 tracking-tight font-['monospace']">
				Writings 🧑🏻‍💻
			</h1>
			<p className="sr-only">
				A collection of technical blog posts by Ayush Chugh covering web development, JavaScript, TypeScript, React, Next.js, Node.js, and software engineering best practices. Each article includes the publication date and estimated reading time.
			</p>
			{blogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map(post => (
					<div key={post.slug} className="mb-8">
						<Link href={`/blog/${post.slug}`} className="block hover:underline">
							<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 transition-all duration-300 ease-in-out">
								&rarr; {post.metadata.title}
							</h3>
						</Link>
						<p className="text-neutral-700 dark:text-neutral-300 text-base mt-1 mb-2">
							{post.metadata.summary}
						</p>
						<div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
							<span>
								{format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")} (
								{formatDistanceToNow(new Date(post.metadata.publishedAt), {
									addSuffix: true,
								})}
								)
							</span>
							<span className="mx-2">•</span>
							<span>{calculateEstimateReadingTime(post.content)} read</span>
						</div>
						<Separator />
					</div>
				))}

			<p className="mt-6 text-neutral-600 dark:text-neutral-400">
				I try to write from time to time about topics that have helped me grow.
			</p>
		</section>
	);
}
