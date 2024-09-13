import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";

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
			<body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Cmdk />
					<Navbar />
					{children}
					<Analytics />
					<PreloadResources />
				</main>
			</body>
		</html>
	);
}
