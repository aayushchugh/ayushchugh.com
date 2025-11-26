import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/db/blog";
import Image from "next/image";
import { format, formatDistanceToNow } from "date-fns";

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	let post = getBlogPosts().find(post => post.slug === params.slug);
	if (!post) {
		return;
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
	} = post.metadata;
	// let ogImage = `https://ayushchugh.com/ogs/ogs-bg-blog-${post.slug}.png`;
	let ogImage = post.metadata.ogImage
		? post.metadata.ogImage
		: `https://cdn.ayushchugh.com/open-graph/business-card.png`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `https://ayushchugh.com/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
			creator: "@aayushchugh",
			creatorId: "@aayushchugh",
			site: "@aayushchugh",
			siteId: "@aayushchugh",
		},
	};
}

export default function Blog({ params }) {
	let post = getBlogPosts().find(post => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.ogImage
							? `${post.metadata.ogImage}`
							: `${post.metadata.coverImage}`,
						url: `https://ayushchugh.com/blog/${post.slug}`,
						author: {
							"@type": "Person",
							name: "Ayush Chugh",
						},
					}),
				}}
			/>
			<h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
				{post.metadata.title}
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")} (
					{formatDistanceToNow(new Date(post.metadata.publishedAt), {
						addSuffix: true,
					})}
					)
				</p>
			</div>
			{post.metadata.coverImage && (
				<div className="my-4 rounded-lg">
					<Image
						src={post.metadata.coverImage}
						alt={post.metadata.title}
						width={1200}
						height={630}
						className="rounded-lg"
					/>
				</div>
			)}
			<article className="prose prose-quoteless prose-neutral dark:prose-invert">
				<CustomMDX source={post.content} />
			</article>
		</section>
	);
}
