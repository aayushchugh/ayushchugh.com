export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				crawlDelay: 0,
			},
		],
		sitemap: "https://ayushchugh.com/sitemap.xml",
		host: "https://ayushchugh.com",
	};
}
