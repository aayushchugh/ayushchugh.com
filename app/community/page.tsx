import type { Metadata } from "next";
import Image from "next/image";
import Badge from "../components/Badge";
import { config } from "../config/config";

export const metadata: Metadata = {
	title: "Community",
	description:
		"Join the Ravix Studio community. Connect with Ayush Chugh and contribute to exciting projects.",
	openGraph: {
		title: "Community | Ayush Chugh",
		description:
			"Join the Ravix Studio community. Connect with Ayush Chugh and contribute to exciting projects.",
		url: "https://ayushchugh.com/community",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Join Ayush Chugh's Community",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Community | Ayush Chugh",
		description:
			"Join the Ravix Studio community and connect with Ayush Chugh.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
	},
};

export default function CommunityPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				Join Our Community 🚀
			</h1>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					Want to connect with me directly and contribute to exciting projects?
					Join the{" "}
					<span className="not-prose">
						<Badge href="https://ravixstudio.com/">
							<Image
								src={"https://cdn.ayushchugh.com/logos/ravix-dark.png"}
								alt="Ravix Studio"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Ravix Studio
						</Badge>
					</span>{" "}
					Discord server! It's a great place to collaborate, share ideas, and
					work together on innovative SAAS projects.
				</p>

				<h2>What You'll Find</h2>
				<ul>
					<li>
						<strong>Direct Access:</strong> Connect with me and other developers
						in real-time
					</li>
					<li>
						<strong>Collaboration Opportunities:</strong> Contribute to our open
						projects and SAAS products
					</li>
					<li>
						<strong>Knowledge Sharing:</strong> Learn from experienced
						developers and share your expertise
					</li>
					<li>
						<strong>Project Updates:</strong> Stay updated on what we're
						building at Ravix Studio
					</li>
				</ul>

				<h2>Ready to Join?</h2>
				<p>Click the button below to join our Discord community:</p>

				<div className="not-prose mt-4">
					<a
						href={config.socials.discord}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-lg transition-colors"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
						</svg>
						Join Discord Community
					</a>
				</div>
			</div>
		</section>
	);
}
