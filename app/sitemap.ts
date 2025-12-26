import { getBlogPosts } from "./db/blog";

export default async function sitemap() {
	const baseUrl = "https://ayushchugh.com";

	// Static routes
	const routes = [
		"",
		"/blog",
		"/resume",
		"/projects",
		"/contact",
		"/community",
	].map(route => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: "weekly" as const,
		priority: route === "" ? 1.0 : 0.8,
	}));

	// Dynamic blog post routes
	const blogs = getBlogPosts().map(post => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.metadata.publishedAt).toISOString(),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...routes, ...blogs];
}
