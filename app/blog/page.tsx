import { getBlogPosts } from "app/db/blog";
import Link from "next/link";

export const metadata = {
	title: "Blog",
	description: "Read my thoughts on engineering, design and product.",
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
							{/* <p className="text-neutral-500 dark:text-neutral-400">
								{"Dev.to"}
							</p> */}
						</Link>
					</>
				))}
			<hr className={`text-neutral-400`} />
			<p className={"mt-4"}>
				i try to write time to time about something or someone that helped me
				grow.
				<br /> follow along on{" "}
				<Link
					className={
						"underline hover:text-orange-400 transition-all duration-300"
					}
					href={"https://dev.to/aayushchugh"}
					target="_blank"
				>
					{"my dev.to"}
				</Link>
			</p>
		</section>
	);
}
