import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Script from "next/script";

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
		siteName: "Ayush Chugh",
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
		description:
			"Passionate full stack developer from India. On the way to master programming.",
		images: ["/ogs/ogs-bg.png"],
	},
	icons: {
		shortcut: "/favicon.png",
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
					src="https://www.googletagmanager.com/gtag/js?id=G-WRQGFF6ZSV"
				></script>
				<head>
					{/* Google Analytics Script */}

					{/* <Script
						src={`https://www.googletagmanager.com/gtag/js?id=G-WRQGFF6ZSV`} // Replace with your Google Analytics ID
						strategy="afterInteractive" // Ensures it loads after the page renders
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-WRQGFF6ZSV'); // Replace with your Google Analytics ID
					`}
					</Script> */}
				</head>
			</head>
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Cmdk />
					<Navbar />
					{children}

					<PreloadResources />
				</main>
			</body>
			<GoogleAnalytics gaId="G-WRQGFF6ZSV" />
		</html>
	);
}
