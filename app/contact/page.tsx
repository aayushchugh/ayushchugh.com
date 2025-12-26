// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { config } from "../config/config";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "Contact",
	description: "Get in touch with Ayush Chugh via email or schedule a meet.",
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact Ayush Chugh",
		description:
			"Find and connect with Ayush Chugh via email or book a meeting.",
		url: "https://ayushchugh.com/contact",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Contact Ayush Chugh",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Ayush Chugh",
		description: "Connect with Ayush Chugh via email or schedule a meet.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
	},
};

export default function ContactPage() {
	return (
		<section>
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
					Book a time that works for you directly through my calendar:
				</p>
				<div className="not-prose mb-8">
					<div className="relative w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm bg-white">
						<iframe
							src={config.socials.calendar}
							style={{ border: 0 }}
							width="100%"
							height="650"
							frameBorder="0"
							title="Schedule a meeting with Ayush Chugh"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
