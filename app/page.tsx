import Link from "next/link";
import Image from "next/image";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";
import GitHubCalendar from "react-github-calendar";
import { config } from "./config/config";
import ExperienceCounter from "./components/experience-counter";

export const metadata: Metadata = {
	title: "Ayush Chugh",
	description:
		"I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
	openGraph: {
		title: "Ayush Chugh",
		description:
			"I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
		url: "https://ayushchugh.com",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				height: 630,
				alt: "Ayush Chugh",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ayush Chugh",
		description:
			"I'm a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
	},
};

export default function Page() {
	return (
		<section>
			<header className="mb-6">
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<h1 className='font-medium text-2xl tracking-tight font-["monospace"]'>
						Sup, I'm Ayush Chugh 👋
					</h1>
					{config.profile.availableForFreelance && (
						<span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800 rounded-full">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
							Available for freelance
						</span>
					)}
				</div>
				<p className="text-lg prose prose-neutral dark:prose-invert">
					I'm a Full Stack Web Developer from Mohali, India, with{" "}
					<ExperienceCounter />, trying to make the internet a bit cooler one
					website at a time.
				</p>
			</header>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Professional Work</h2>
				<p>
					I specialize in creating user-friendly digital experiences. Currently,
					I'm the <strong>Co-founder & CTO</strong> at{" "}
					<span className="not-prose">
						<Badge href={config.companies.ravixStudio}>
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
					, a startup where I'm building a lot of SAAS products to learn new
					stuff and grow. I also work as a <strong>Team Lead</strong> at{" "}
					<span className="not-prose">
						<Badge href={config.companies.avenueTicketing}>
							<Image
								src={"https://cdn.ayushchugh.com/logos/avenue.jpeg"}
								alt="Avenue Ticketing"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Avenue Ticketing
						</Badge>
					</span>
					—proudly the youngest team leader there—where I lead a team of 5
					developers building a ticketing platform for event organizers and
					attendees.
				</p>
				<p>
					Previously, I worked with{" "}
					<span className="not-prose">
						<Badge href={config.companies.vibraniumSoft}>
							<Image
								src={"https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg"}
								alt="Vibranium Soft"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Vibranium Soft
						</Badge>
					</span>{" "}
					where we built a B2B flight booking platform for the travel industry,{" "}
					<span className="not-prose">
						<Badge href={config.companies.tapInvest}>
							<Image
								src={"https://cdn.ayushchugh.com/logos/tapico.png"}
								alt="Tap Invest"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Tap Invest
						</Badge>
					</span>
					, where I developed internal dashboard tools and created landing pages
					for their investment platform. For more details about my experience,
					check out my <Link href="/resume">resume</Link>.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>What Makes Me Different</h2>
				<p>
					I'm not just another developer. I take full ownership of every project
					I work on, which is how I became the youngest team leader at Avenue
					Ticketing. I approach problems with both a technical and business
					mindset—I understand that great code means nothing if it doesn't solve
					real problems.
				</p>
				<p>
					While I embrace AI-assisted development, I do it differently. I
					leverage AI to build powerful systems faster, but always with proper
					supervision, code review, and architectural oversight. This allows me
					to maintain quality while maximizing productivity—the best of both
					worlds.
				</p>
			</div>

			<Separator />

			{/* <div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Leadership & Community</h2>
				<p>
					As the Team Lead at the Innovation Club of{" "}
					<a href="https://ccetdiploma.edu.in/" target="_blank">
						CCET College
					</a>
					, I've learned how to lead a team and stay organized. I also assist in{" "}
					<a href="https://chdtechnicaleducation.gov.in/" target="_blank">
						ICT
					</a>{" "}
					training sessions, teaching government employees essential computer
					skills. Additionally, I help organize the <i>Talent Hunt</i> cultural
					program and serve as the student coordinator for <i>Jhalak</i>, our
					college's digital newsletter.
				</p>
			</div>

			<Separator /> */}

			{/* <div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Personal Interests</h2>
				<p>
					Outside of work, I enjoy exploring Vedic astrology, playing the
					guitar, and spending time with friends. I'm also pursuing a diploma in
					Computer Science Engineering (CSE).
				</p>
			</div>

			<Separator /> */}

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>GitHub Contributions</h2>
				<GitHubCalendar username="aayushchugh" />
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Writing</h2>
				<p>
					I've started writing <Link href="/blog">blogs</Link> to help others
					improve their engineering skills. Stay tuned for more content!
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<article className="text-xs sm:hidden lg:block">
					Press ⌘+K to navigate with your keyboard.
				</article>
			</div>

			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<Link
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						href={config.socials.community}
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Join my community</p>
					</Link>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href={config.socials.twitter}
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Follow me</p>
					</a>
				</li>
			</ul>

			<div>
				<a
					className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
					rel="noopener noreferrer"
					target="_blank"
					href={`mailto:${config.socials.email}?subject=Hello Ayush!`}
				>
					<p className="h-7">
						<span className="mr-2 text-neutral-600">📧</span>
						{config.socials.email}
					</p>
				</a>
			</div>
		</section>
	);
}
