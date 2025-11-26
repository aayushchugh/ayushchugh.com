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
	metadataBase: new URL("https://ayushchugh.com/"),
	title: {
		default: "Ayush Chugh",
		template: "%s | Ayush Chugh",
	},
	description:
		"Passionate full stack developer from India. On the way to master programming",
	openGraph: {
		title: "Ayush Chugh",
		description:
			"Passionate full stack developer from India. On the way to master programming.",
		url: "https://ayushchugh.com/",
		siteName: "Ayush Chugh's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh Full Stack Developer",
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
		title: "Ayush Chugh",
		card: "summary_large_image",
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
		description:
			"Passionate full stack developer from India. On the way to master programming.",
		images: ["/ogs/ogs-bg.png"],
	},
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon-96x96.png",
				href: "/favicon/favicon-96x96.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.svg",
				type: "image/svg+xml",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-96x96-dark.png",
				href: "/favicon/favicon-96x96-dark.png",
				sizes: "96x96",
				type: "image/png",
				rel: "icon",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-dark.svg",
				type: "image/svg+xml",
				rel: "icon",
			},
		],
		shortcut: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/favicon.ico",
				href: "/favicon/favicon.ico",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/favicon-dark.ico",
				href: "/favicon/favicon-dark.ico",
			},
		],
		apple: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon/apple-touch-icon.png",
				href: "/favicon/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon/apple-touch-icon-dark.png",
				href: "/favicon/apple-touch-icon-dark.png",
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
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
				></script>
			</head>
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
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
