import { getBlogPosts } from "app/db/blog";
import { Metadata } from "next";
import Link from "next/link";
import formatDate from "../utils/formatDate";
import calculateEstimateReadingTime from "../utils/calculateEstimateReadingTime";

export const metadata: Metadata = {
	title: "Blog - Ayush Chugh",
	description:
		"Read my thoughts on engineering, design, and product development.",
	openGraph: {
		title: "Blog by Ayush Chugh",
		description:
			"Explore blog posts on engineering, design, and product development.",
		url: "https://ayushchugh.com/blog", // Replace with your actual blog URL
		siteName: "Ayush Chugh's Blog",
		images: [
			{
				url: "/ogs/ogs-bg.png", // Add the Open Graph image path
				width: 1200,
				height: 630,
				alt: "Ayush Chugh Blog",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ayush Chugh's Blog",
		description:
			"Read blog posts on engineering, design, and product development.",
		images: ["/ogs/ogs-bg.png"], // Add the Twitter card image path
	},
};

export default function BlogPage() {
	let blogs = getBlogPosts();

	return (
		<section>
			<h2 className='font-medium text-2xl mb-8 tracking-tight font-["monospace"]'>
				writings 🧑🏻‍💻
			</h2>
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
					<>
						<Link
							key={post.slug}
							className="flex flex-col space-y-1 mb-4"
							href={`/blog/${post.slug}`}
						>
							<div className="w-full flex flex-row">
								<p className={"pr-2"}>{"->"}</p>
								<p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:underline transition-all duration-300 ease-in-out">
									{post.metadata.title}
								</p>
							</div>

							<div className="flex items-center justify-between">
								<p className="text-neutral-500 dark:text-neutral-400 text-sm">
									{formatDate(post.metadata.publishedAt)}
								</p>

								<p className="text-neutral-500 dark:text-neutral-400 text-sm">
									{calculateEstimateReadingTime(post.content)} read
								</p>
							</div>
						</Link>
					</>
				))}
			<hr className={`text-neutral-400`} />
			<p className={"mt-4"}>
				i try to write time to time about something or someone that helped me
				grow.
				<br /> follow along on my{" "}
				<Link
					className={
						"underline hover:text-orange-400 transition-all duration-300"
					}
					href={"https://dev.to/aayushchugh"}
					target="_blank"
				>
					{"dev.to"}
				</Link>
			</p>
		</section>
	);
}
