import type { Metadata } from "next";

interface SEOMetadataProps {
	title: string;
	description: string;
	canonical: string;
	keywords?: string[];
	ogImage?: string;
	type?: "website" | "article";
	publishedTime?: string;
}

export function generateSEOMetadata({
	title,
	description,
	canonical,
	keywords = [],
	ogImage = "https://cdn.ayushchugh.com/open-graph/business-card.png",
	type = "website",
	publishedTime,
}: SEOMetadataProps): Metadata {
	const baseUrl = "https://ayushchugh.com";
	const fullUrl = `${baseUrl}${canonical}`;
	const fullTitle = title === "Ayush Chugh" ? title : `${title} | Ayush Chugh`;

	const metadata: Metadata = {
		metadataBase: new URL(baseUrl),
		title: fullTitle,
		description,
		keywords,
		alternates: {
			canonical,
		},
		openGraph: {
			title: fullTitle,
			description,
			url: fullUrl,
			siteName: "Ayush Chugh's Portfolio",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			type,
			...(publishedTime && type === "article" ? { publishedTime } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description,
			images: [ogImage],
			creator: "@aayushchugh",
			site: "@aayushchugh",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};

	return metadata;
}

// Common keywords across the site
export const commonKeywords = [
	"Ayush Chugh",
	"Full Stack Developer",
	"Web Developer",
	"React",
	"Next.js",
	"TypeScript",
	"Node.js",
];
