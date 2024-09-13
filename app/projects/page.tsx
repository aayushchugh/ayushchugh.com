import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import shriPropertyLogo from "public/logos/shriProperty.png";
import a2infiniteLogo from "public/logos/a2infinite.png";
import wtLogo from "public/logos/wt.png";

export const metadata: Metadata = {
	title: "Projects - Ayush Chugh",
	description:
		"Explore Ayush Chugh's projects, including Shriproperty, A2INFINITE, Worldtravels, and various open-source contributions.",
	openGraph: {
		title: "Projects - Ayush Chugh",
		description:
			"Discover the latest projects built by Ayush Chugh, including web development and open-source contributions.",
		url: "https://ayushchugh.com/projects",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh Projects",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects - Ayush Chugh",
		description:
			"Explore a variety of projects and open-source contributions by Ayush Chugh.",
		images: ["/ogs/ogs-bg.png"],
	},
};

const projectsData = [
	{
		project: "Shriproperty",
		logo: shriPropertyLogo,
		description:
			"A real estate platform that simplifies the process of finding and listing properties.",
		technologies: ["React", "Node.js", "MongoDB", "Express.js"],
		website: "https://www.shriproperty.com",
	},
	{
		project: "A2INFINITE",
		logo: a2infiniteLogo,
		description:
			"A platform for downloadable practice worksheets for students.",
		technologies: ["HTML", "CSS", "JavaScript"],
		website: "https://www.a2infinite.com",
	},
	{
		project: "Worldtravels",
		logo: wtLogo,
		description:
			"A B2B flight booking platform for travel agencies to manage bookings and payments.",
		technologies: ["React", "Redux", "TypeScript", "Node.js"],
		website: "https://www.worldtravels.com",
	},
];

const openSourceData = [
	{
		project: "Maya",
		logo: "/logos/maya.png", // Path to Maya logo
		description:
			"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
		technologies: ["React", "Node.js", "Express", "TypeScript"],
		website: "https://github.com/maya-manager",
	},
	{
		project: "Multi Email",
		logo: "/logos/multiEmail.png",
		description:
			"Multi Email is a platform that allows users to connect and manage multiple email services in one place.",
		technologies: ["React", "Node.js", "Express", "OAuth", "TypeScript"],
		website: "https://github.com/MultiEmail/",
	},
];

export default function ProjectsPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					Projects 🚀
				</h1>
			</div>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">My Projects</h2>
				{projectsData.map((project, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							<Image
								src={project.logo}
								alt={project.project}
								width={20}
								height={20}
								className="mr-4"
							/>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
								href={project.website}
							>
								{project.project}
							</Link>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{project.description}
						</p>

						{/* Technologies used */}
						{project.technologies && (
							<p className="text-neutral-500 dark:text-neutral-400 text-sm">
								<strong>Technologies:</strong> {project.technologies.join(", ")}
							</p>
						)}
					</div>
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Open Source Contributions Section */}
			<div className="prose prose-neutral dark:prose-invert mt-10">
				<h2 className="font-medium text-2xl mb-4">Open Source Contributions</h2>
				{openSourceData.map((contribution, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							<Image
								src={contribution.logo}
								alt={contribution.project}
								width={20}
								height={20}
								className="mr-4"
							/>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
								href={contribution.website}
							>
								{contribution.project}
							</Link>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{contribution.description}
						</p>

						{/* Technologies used */}
						{contribution.technologies && (
							<p className="text-neutral-500 dark:text-neutral-400 text-sm">
								<strong>Technologies:</strong>{" "}
								{contribution.technologies.join(", ")}
							</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
