import { getBlogPosts } from "./db/blog";

export default async function sitemap() {
	const baseUrl = "https://ayushchugh.com";

	const blogs = getBlogPosts();
	const latestBlogDate = blogs.length
		? new Date(
				Math.max(
					...blogs.map(p => new Date(p.metadata.publishedAt).getTime())
				)
			).toISOString()
		: "2025-01-01T00:00:00.000Z";

	const routes = [
		{
			url: baseUrl,
			lastModified: latestBlogDate,
			changeFrequency: "weekly" as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: latestBlogDate,
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: "2025-11-01T00:00:00.000Z",
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/resume`,
			lastModified: "2025-11-01T00:00:00.000Z",
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: "2025-01-01T00:00:00.000Z",
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/community`,
			lastModified: "2025-01-01T00:00:00.000Z",
			changeFrequency: "monthly" as const,
			priority: 0.6,
		},
	];

	const blogEntries = blogs.map(post => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.metadata.publishedAt).toISOString(),
		changeFrequency: "yearly" as const,
		priority: 0.7,
	}));

	return [...routes, ...blogEntries];
}
