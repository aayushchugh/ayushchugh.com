import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Footer from "./components/footer";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: {
		default: "Ayush Chugh - Full Stack Developer from India",
		template: "%s | Ayush Chugh",
	},
	description:
		"Ayush Chugh is a Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
	alternates: {
		types: {
			"application/rss+xml": "https://ayushchugh.com/rss",
		},
	},
	openGraph: {
		title: "Ayush Chugh - Full Stack Developer from India",
		description:
			"Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
		url: "https://ayushchugh.com",
		siteName: "Ayush Chugh's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh - Full Stack Developer Portfolio",
			},
		],
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
	twitter: {
		title: "Ayush Chugh - Full Stack Developer from India",
		card: "summary_large_image",
		creator: "@aayushchugh",
		site: "@aayushchugh",
		description:
			"Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
		images: ["/ogs/ogs-bg.png"],
	},
	icons: {
		// Safari ignores media queries on <link rel="icon"> and picks the first
		// icon, so keep an ungated light PNG/ICO fallback first. Theme switching
		// for Chrome/Firefox comes from favicon.svg (prefers-color-scheme inside).
		icon: [
			{
				url: "/favicon/favicon.ico",
				sizes: "48x48",
			},
			{
				url: "/favicon/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
			},
			{
				url: "/favicon/favicon.svg",
				type: "image/svg+xml",
			},
		],
		shortcut: "/favicon/favicon.ico",
		apple: [
			{
				url: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cx(
				"text-black bg-white dark:text-white dark:bg-[#111010]",
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Ayush Chugh",
							url: "https://ayushchugh.com",
							description:
								"Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js.",
							author: {
								"@type": "Person",
								name: "Ayush Chugh",
								url: "https://ayushchugh.com",
							},
						}),
					}}
				/>
			</head>
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-auto px-4 mt-8">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black dark:focus:bg-neutral-900 dark:focus:text-white"
				>
					Skip to main content
				</a>
				<main
					id="main-content"
					className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
				>
					<Cmdk />
					<Navbar />
					{children}
					<Footer />
					<PreloadResources />
				</main>
			</body>
			{process.env.GOOGLE_ANALYTICS_ID &&
				process.env.NODE_ENV === "production" && (
					<GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
				)}
		</html>
	);
}
