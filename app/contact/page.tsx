// pages/ContactPage.tsx

import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { config } from "../config/config";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "Contact",
	description:
		"Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
	keywords: [
		"Contact Ayush Chugh",
		"Hire Full Stack Developer",
		"Freelance Developer India",
		"Schedule Meeting Developer",
		"Web Developer for Hire",
	],
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact Ayush Chugh - Hire a Full Stack Developer",
		description:
			"Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
		url: "https://ayushchugh.com/contact",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Contact Ayush Chugh - Full Stack Developer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Ayush Chugh - Hire a Full Stack Developer",
		description:
			"Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		site: "@aayushchugh",
	},
};

export default function ContactPage() {
	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://ayushchugh.com" },
		{ name: "Contact", url: "https://ayushchugh.com/contact" },
	]);

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				Contact 📧
			</h1>

			{/* Email Contact */}
			<div className="prose prose-neutral dark:prose-invert">
				<p>Feel free to reach out to me via email:</p>
				<div className="flex items-center mb-4">
					<EnvelopeSimple size={24} />
					<a
						href={`mailto:${config.socials.email}`}
						className="underline text-sm ml-1"
					>
						{config.socials.email}
					</a>
				</div>

				<Separator />

				{/* Meeting Schedule Option */}
				<h2 className="font-medium text-2xl mb-6 tracking-tight font-['monospace']">
					Want to chat? Schedule a 1:1 with me!
				</h2>
				<p className="mb-6">
					Book a time that works for you directly through Topmate:
				</p>
				<div className="not-prose mb-8">
					<a
						href={config.socials.topmate}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
					>
						Schedule a meeting →
					</a>
				</div>
			</div>
		</section>
	);
}
