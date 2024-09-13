import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
	let routes = ['', '/blog', '/resume'].map(route => ({
		url: `https://theArpitChugh.me${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes];
}
