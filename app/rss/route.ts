import { getBlogPosts } from "../db/blog";

const SITE_URL = process.env.APP_URL;
const BLOG_URL = `${SITE_URL}/blog`;

const getMimeTypeForImage = (url: string): string => {
	const extension = url.split(".").pop()?.toLowerCase();
	switch (extension) {
		case "jpg":
		case "jpeg":
			return "image/jpeg";
		case "png":
			return "image/png";
		case "gif":
			return "image/gif";
		case "webp":
			return "image/webp";
		case "svg":
			return "image/svg+xml";
		default:
			// Fallback if no known extension is found.
			// It's better to handle this case gracefully or log a warning.
			return "image/jpeg";
	}
};

const generateRSSFeed = (posts: ReturnType<typeof getBlogPosts>) => {
	const feedItems = posts
		.map(post => {
			const { metadata, slug } = post;
			const postUrl = `${BLOG_URL}/${slug}`;

			return `
        <item>
            <title><![CDATA[${metadata.title}]]></title>
            <link>${postUrl}</link>
            <guid>${postUrl}</guid>
            <pubDate>${new Date(metadata.publishedAt).toUTCString()}</pubDate>
            
            ${
							metadata.coverImage &&
							`
              <!-- Inline image in the description -->
              <description><![CDATA[
                <img src="${metadata.coverImage}" alt="${
								metadata.title
							} Cover Image"/>
                <p>${metadata.summary}</p>
              ]]></description>
              
              <!-- Enclosure for feed readers that look for enclosure tags -->
              <enclosure url="${
								metadata.coverImage
							}" length="0" type="${getMimeTypeForImage(
								metadata.coverImage
							)}" />
  
              <!-- Media RSS extension for richer media support -->
              <media:content url="${
								metadata.coverImage
							}" type="${getMimeTypeForImage(
								metadata.coverImage
							)}" medium="image">
                <media:title><![CDATA[${
									metadata.title
								} Cover Image]]></media:title>
              </media:content>
              `
						}
          </item>`;
		})
		.join("");

	return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
    <title><![CDATA[Ayush Chugh's Blog]]></title>
    <link>${BLOG_URL}</link>
    <description><![CDATA[Explore blog posts on engineering, design, and product development.]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${feedItems}
    </channel>
    </rss>`;
};

export const GET = async (req: Request) => {
	const posts = getBlogPosts();
	const rss = generateRSSFeed(posts);

	return new Response(rss, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
};
