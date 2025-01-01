import Link from "next/link";
import Image from "next/image";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";

export const metadata: Metadata = {
	title: "Ayush Chugh",
	description:
		"I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
	openGraph: {
		title: "Ayush Chugh",
		description:
			"I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
		url: "https://ayushchugh.com",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/home.png",
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
			"I’m a Full Stack Web Developer from India, trying to make the internet a bit cooler one website at a time.",
		images: ["https://cdn.ayushchugh.com/open-graph/home.png"],
		creator: "@aayushchugh_x",
		creatorId: "@aayushchugh_x",
		site: "@aayushchugh_x",
		siteId: "@aayushchugh_x",
	},
};

export default function Page() {
	return (
		<section>
			<header className="mb-6">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					Sup, I'm Ayush Chugh 👋
				</h1>
				<p className="text-lg prose prose-neutral dark:prose-invert">
					I’m a Full Stack Web Developer from Mohali, India, trying to make the
					internet a bit cooler one website at a time.
				</p>
			</header>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Professional Work</h2>
				<p>
					I specialize in creating user-friendly digital experiences. Currently,
					I work as a <strong>Freelance Developer</strong> with{" "}
					<span className="not-prose">
						<Badge href="https://www.linkedin.com/company/vibraniumsoft/posts/?feedView=all">
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
					where we are building a flight booking project and{" "}
					<span className="not-prose">
						<Badge href="https://www.keizerworks.com/">
							<Image
								src={"https://cdn.ayushchugh.com/logos/keizer.svg"}
								alt="Keizer Works"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Keizer Works
						</Badge>
					</span>
					, where I maintain their open-source projects and contribute to
					innovative solutions.
				</p>
				<p>
					One of my most significant achievements is developing{" "}
					<span className="not-prose">
						<Badge href="https://worldtravels.com">
							<Image
								src={"https://cdn.ayushchugh.com/logos/worldtravels.png"}
								alt="Worldtravels"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Worldtravels
						</Badge>
					</span>
					, a B2B flight booking platform for a travel agency. For more of my
					projects, visit the <Link href="/projects">Projects</Link> page.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Leadership & Community</h2>
				<p>
					As the Team Lead at the Innovation Club of{" "}
					<a href="https://ccetdiploma.edu.in/" target="_blank">
						CCET College
					</a>
					, I’ve learned how to lead a team and stay organized. I also assist in{" "}
					<a href="https://chdtechnicaleducation.gov.in/" target="_blank">
						ICT
					</a>{" "}
					training sessions, teaching government employees essential computer
					skills. Additionally, I help organize the <i>Talent Hunt</i> cultural
					program and serve as the student coordinator for <i>Jhalak</i>, our
					college’s digital newsletter.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Personal Interests</h2>
				<p>
					Outside of work, I enjoy exploring Vedic astrology, playing the
					guitar, and spending time with friends. I’m also pursuing a diploma in
					Computer Science Engineering (CSE).
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Writing</h2>
				<p>
					I’ve started writing <Link href="/blog">blogs</Link> to help others
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
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/aayushchugh_x"
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
					href="mailto:hey@ayushchugh.com?subject=Hello Ayush!"
				>
					<p className="h-7">
						<span className="mr-2 text-neutral-600">📧</span>
						hey@ayushchugh.com
					</p>
				</a>
			</div>
		</section>
	);
}
