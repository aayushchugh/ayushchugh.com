import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import Separator from "../components/separator";
import Badge from "../components/Badge";
import { config } from "../config/config";

const storyDescription =
	"From Jalalabad, Punjab to Team Lead at Avenue Ticketing — Ayush Chugh on learning to code at 13 during COVID, building side projects, and supporting his family.";

const ogImage = {
	url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
	width: 1200,
	height: 630,
	alt: "Ayush Chugh — Full Stack Developer and Team Lead",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "My Story",
	description: storyDescription,
	keywords: [
		"Ayush Chugh",
		"Ayush Chugh Story",
		"Ayush Chugh Biography",
		"Self-taught Developer India",
		"Developer from Punjab",
		"Chandigarh Developer",
		"Learn to Code Story",
		"Full Stack Developer Journey",
		"Team Lead Developer India",
		"Avenue Ticketing",
		"Software Engineer Biography",
	],
	alternates: {
		canonical: "/story",
	},
	openGraph: {
		type: "article",
		locale: "en_US",
		url: "https://ayushchugh.com/story",
		title: "My Story — Self-Taught Developer from Punjab to Team Lead",
		siteName: "Ayush Chugh's Portfolio",
		description: storyDescription,
		images: [ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "My Story — Self-Taught Developer from Punjab to Team Lead",
		description: storyDescription,
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

export default function StoryPage() {
	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://ayushchugh.com" },
		{ name: "My Story", url: "https://ayushchugh.com/story" },
	]);

	const articleJsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "My Story",
		name: "My Story — Ayush Chugh",
		description: storyDescription,
		url: "https://ayushchugh.com/story",
		image: ogImage.url,
		inLanguage: "en-US",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://ayushchugh.com/story",
		},
		author: {
			"@type": "Person",
			name: "Ayush Chugh",
			url: "https://ayushchugh.com",
			jobTitle: "Team Lead / Full Stack Developer",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Chandigarh",
				addressRegion: "Punjab",
				addressCountry: "IN",
			},
		},
		publisher: {
			"@type": "Person",
			name: "Ayush Chugh",
			url: "https://ayushchugh.com",
		},
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(articleJsonLd),
				}}
			/>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				My Story 📖
			</h1>
			<p className="sr-only">{storyDescription}</p>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I'm Ayush Chugh, a full stack developer based in Chandigarh, India. I
					write code for a living and lead a team at{" "}
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
					. Right now I lead a team there. Everything below is what happened before
					that title meant anything.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>Origin</h2>
				<p>
					I grew up in Jalalabad, a small town in Punjab's Fazilka district. Middle
					class family, ordinary street, the kind of place where everyone knows
					everyone. I did my schooling at DAV Public School, and for most of that
					time I had exactly one plan for my life. I wanted to be an IPS officer.
				</p>
				<p>
					That dream is the reason I studied so hard. Good marks were not really
					about marks. They felt like the first bricks of a life my family could be
					proud of. So I studied. School, tuition, then more studying at home. Top
					three in class, almost every time.
				</p>
				<p>
					If you had met me back then, you would have seen a nerdy, slightly chubby
					kid with no hobbies and not much to say. No sports, nothing outside
					school and books. I was not unhappy about it. It simply never occurred to
					me that life could be anything else.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>Where it started</h2>
				<p>
					Then the world stopped. COVID arrived, the lockdown began, and suddenly
					all that structure disappeared. No school to go to, no tuition to rush
					for. Just a lot of empty hours and a boy who had never learned how to fill
					them.
				</p>
				<p>
					Around that time I got quietly obsessed with day in the life videos. I
					would watch IPS officers, the uniform, the routine, the weight of the job.
					In the same house, my brother was watching the same kind of videos about
					software engineers. Two completely different lives playing on two
					different screens, and both of them looked incredible to me. I just did
					not know yet which one was supposed to be mine.
				</p>
				<p>
					Mostly, though, I was playing games. One day, somewhere in the middle of a
					match, a small thought showed up and refused to leave. Maybe I should do
					something with this time. Maybe I should not waste it. I looked things up
					and landed on Python, because that is what everyone online seemed to be
					learning. My brother told me to slow down and start with the basics. Learn
					C first, he said.
				</p>
				<p>
					So there I was, thirteen years old, staring at Turbo C. That old blue
					screen with the harsh colors. The basic syntax made sense to me. Then the
					third video in the playlist was about memory management, and I understood
					absolutely nothing. It felt like a door slamming shut. I gave up and went
					straight back to PUBG.
				</p>
				<p>
					A few days later my brother was building a website for a college project.
					He turned the screen toward me and asked what I thought of the design. I
					pointed out a few things. And then he opened VS Code. After the ugliness
					of Turbo C, this looked like something from the future. The dark theme,
					the colors dancing across the syntax, the fact that you could type a few
					lines and something real would appear on the screen. That was the moment.
					He shared a few YouTube tutorials with me and I learned HTML and CSS in
					about a week.
				</p>
				<p>
					Five days into all of this, the lockdown eased a little. My family had
					been planning to move to Chandigarh whenever things settled down, and we
					decided not to wait any longer. So I landed in a new city in 9th grade,
					still stuck mostly indoors, with no friends and nothing familiar around
					me. All I had was a second hand HP laptop. Barely any RAM, a tired
					processor, the kind of machine that starts struggling the moment you open
					a few tabs. I sat with it for seven or eight hours a day and just kept
					going.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>Learning by building</h2>
				<p>
					This was before AI. There was no ChatGPT to quietly rescue you when
					something broke at midnight. When I got stuck, and I got stuck constantly,
					I would spend days digging through Stack Overflow threads, old GitHub
					issues, and random Discord servers. It was slow and it was frustrating and
					sometimes it made me feel stupid. But it also gave me something I did not
					expect. It gave me people. The strangers who answered my clumsy questions,
					the developers I kept running into in the same corners of the internet.
					When I had no friends in real life, those forums quietly became my social
					life.
				</p>
				<p>
					I never followed a proper roadmap. I just kept building whatever I was
					curious about. JavaScript came next, then Git, then SCSS, each one picked
					up on that same struggling HP laptop.
				</p>
				<p>
					In February 2021 I shipped my first real project,{" "}
					<a href={config.companies.a2infinite} target="_blank" rel="noopener noreferrer">
						a2infinite
					</a>
					, with my cousin. Plain HTML, CSS, and SCSS. It was rough around every
					edge, but it was live. A real person could open a browser and see
					something I had made. That feeling meant more to me than any marksheet
					ever had.
				</p>
				<p>
					While we were building it, we would sit at his place and dream out loud. We
					once listed out an entire Apple setup, MacBook, iPhone, iPad, all of it,
					and added up the price. Around twenty lakh rupees. On my little HP, at
					thirteen, that number felt like it belonged to another universe.
				</p>
				<p>
					Years later, a lot of that list stopped being a fantasy. I pay my own bills
					and college fees. I help out at home. We bought a car and a plot for our
					next home. The part I am proudest of is not any of those things on their
					own. It is that my family does not have to carry me anymore.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>From writing code to owning outcomes</h2>
				<p>
					Somewhere in there, coding stopped being a hobby. By 2022 I was building
					things real people used. The first time I owned a whole product end to end
					was{" "}
					<a href={config.companies.shriProperty} target="_blank" rel="noopener noreferrer">
						Shri Property
					</a>
					, a real estate platform I built for my family. Interface, backend, admin
					dashboard. It taught me what it felt like to ship something complete.
				</p>
				<p>
					The first time I did that for someone outside my family was at{" "}
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
					</span>
					, building{" "}
					<a
						href="https://www.worldtravelsonline.in/en"
						target="_blank"
						rel="noopener noreferrer"
					>
						worldtravelsonline.in
					</a>
					, a B2B flight booking platform with thousands of users every day. That was
					when it clicked for me. Code is not the point. The business and the people
					using it are the point.
				</p>
				<p>
					After that the work kept getting heavier. Investment dashboards, client
					projects, open source. Same lesson every time. Show up, take ownership,
					build things that hold.
				</p>
				<p>
					Then came{" "}
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
					. I joined as a part time full stack developer on a ticketing platform.
					Payments, authentication, events where nothing is allowed to break on the
					night of the show. By August I became team lead. Seven people look to me
					now, and I am still figuring out what kind of leader I am supposed to be.
				</p>
				<p>
					I also co-founded{" "}
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
					as CTO for a few months, building SaaS products. That chapter is paused
					now.
				</p>
				<p>
					All of this, and I am still in college. Third year. Most days I sit on the
					last bench with my laptop open, then come home and code until midnight.
					Some days I am running on very little and it is not glamorous at all. Some
					nights I lie awake wondering if I should have chased the IPS dream instead,
					or if I am exactly where I am supposed to be. I do not know yet. I just
					keep showing up the next morning anyway.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>Sharing what I learn</h2>
				<p>
					I started <Link href="/blog">writing</Link> because explaining something
					is the only way I know if I actually understand it. Lately I share more
					of that as it happens, on social media and here, while I am still figuring
					things out. Not after they are polished. If one person skips a mistake I
					already made, that is enough.
				</p>
			</div>

			<Separator />

			<div className="prose prose-neutral dark:prose-invert">
				<h2>What's next</h2>
				<p>
					I do not know where life goes from here. I know what I want, though. My
					girl, my family, building things that take care of them. Small side
					projects for the joy of it, open sourced, no pitch deck required. The boy
					from Jalalabad who wanted to be an IPS officer never fully disappeared. He
					just found a different way to be useful.
				</p>
				<p>
					If you want dates and tech stacks, that is on my{" "}
					<Link href="/resume">resume</Link>. For things I have built, see{" "}
					<Link href="/projects">projects</Link>. And if any of this felt familiar,{" "}
					<Link href="/contact">get in touch</Link>.
				</p>
			</div>
		</section>
	);
}
