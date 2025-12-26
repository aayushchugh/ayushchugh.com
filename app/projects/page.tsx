import type { Metadata } from "next";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "Projects",
	description:
		"Explore Ayush Chugh's projects, including Shriproperty, A2INFINITE, Worldtravels, and various open-source contributions.",
	keywords: [
		"Ayush Chugh Projects",
		"Web Development Projects",
		"React Projects",
		"Next.js Projects",
		"Open Source",
		"Portfolio",
		"Software Projects",
	],
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Ayush Chugh's Projects",
		description:
			"Discover the latest projects built by Ayush Chugh, including web development and open-source contributions.",
		url: "https://ayushchugh.com/projects",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh's Projects",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ayush Chugh's Projects",
		description:
			"Explore a variety of projects and open-source contributions by Ayush Chugh.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
	},
};

const projectsData = [
	{
		project: "Worldtravels (2k+ active users daily)",
		logo: "https://cdn.ayushchugh.com/logos/worldtravels.png",
		description:
			"A B2B flight booking platform for travel agencies to manage bookings and payments. I have built the end to end frontend for the platform.",
		technologies: ["React", "Redux", "TypeScript", "NextJS"],
		website: "https://www.worldtravelsonline.in/en",
		category: "Frontend",
		workType: "Freelance",
	},
	{
		project: "Repo Command",
		logo: "https://cdn.ayushchugh.com/logos/repository-commander.svg",
		description:
			"A Github app that lets you automate tasks by adding labels and using `/` commands in comments to approve or merge pull requests.",
		technologies: ["Node.js", "TypeScript", "Probot"],
		website: "https://github.com/marketplace/repo-command",
		category: "Backend",
		workType: "Personal",
	},
	{
		project: "EJS Snippets And Color Highlighting for VsCode (7k+ downloads)",
		logo: "https://cdn.ayushchugh.com/logos/ejs-language-snippets-and-color-highlighting-vscode.png",
		description: "Add snippets and syntax highlighting for EJS",
		technologies: ["Javascript", "vsce"],
		website:
			"https://marketplace.visualstudio.com/items/?itemName=AyushChugh.ejs-snippets-and-color-highlighting",
		category: "Tools",
		workType: "Personal",
	},
	{
		project: "Invoicen",
		logo: "https://cdn.ayushchugh.com/logos/invoicen-icon.png",
		description:
			"A Simple Invoice Generator for Freelancers and Businesses and enterprises.",
		technologies: ["NextJS", "shadcn", "TypeScript", "Tailwind"],
		website: "https://invoicen.ayushchugh.com",
		category: "Full Stack",
		workType: "Personal",
	},
	{
		project: "Shriproperty",
		logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
		description:
			"A real estate platform that simplifies the process of finding and listing properties.",
		technologies: ["React", "Node.js", "MongoDB", "Express.js"],
		website: "https://www.shriproperty.com",
		category: "Full Stack",
		workType: "Freelance",
	},
	{
		project: "A2INFINITE",
		logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
		description:
			"A platform for downloadable practice worksheets for students.",
		technologies: ["HTML", "CSS", "JavaScript"],
		website: "https://a2infinite.com",
		category: "Frontend",
		workType: "Freelance",
	},

	// {
	// 	project: "Soumya Sourav's Portfolio",
	// 	description:
	// 		"Personal portfolio website for Soumya Sourav, a Asst. Vice President",
	// 	technologies: ["NextJS", "TypeScript", "Firebase"],
	// 	website: "https://soumyasourav.com",
	// },

	{
		project: "FlipTimer",
		description:
			"A countdown timer that lets users set a target date and displays time left in months, weeks, days, hours, minutes, and seconds.",
		technologies: ["NextJS", "TypeScript", "shadcn", "framer-motion"],
		website: "https://fliptimer.ayushchugh.com",
		category: "Frontend",
		workType: "Personal",
	},
	{
		project: "Sky At Night",
		logo: "https://cdn.ayushchugh.com/logos/sky-at-night.png",
		description: "A dark theme for vscode",
		technologies: ["JavaScript", "vsce"],
		website:
			"https://marketplace.visualstudio.com/items?itemName=AyushChugh.sky-at-night",
		category: "Tools",
		workType: "Personal",
	},
];

// const openSourceData = [
// {
// 	project: "Maya",
// 	logo: "https://cdn.ayushchugh.com/logos/maya.png",
// 	description:
// 		"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
// 	technologies: ["React", "Node.js", "Express", "TypeScript"],
// 	website: "https://github.com/maya-manager",
// },
// {
// 	project: "Multi Email",
// 	logo: "https://cdn.ayushchugh.com/logos/multiEmail.png",
// 	description:
// 		"Multi Email is a platform that allows users to connect and manage multiple email services in one place.",
// 	technologies: ["React", "Node.js", "Express", "OAuth", "TypeScript"],
// 	website: "https://github.com/MultiEmail/",
// },
// ];

export default function ProjectsPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Ayush Chugh's Projects",
		description:
			"Portfolio of projects built by Ayush Chugh, including web applications and open-source contributions.",
		url: "https://ayushchugh.com/projects",
		author: {
			"@type": "Person",
			name: "Ayush Chugh",
			url: "https://ayushchugh.com",
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projectsData.map((project, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "SoftwareApplication",
					name: project.project,
					description: project.description,
					applicationCategory: "WebApplication",
					url: project.website,
				},
			})),
		},
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.project}
						logo={project.logo}
						description={project.description}
						technologies={project.technologies}
						website={project.website}
						category={project.category}
						workType={project.workType}
					/>
				))}
			</div>

			{/* Open Source Contributions Section */}
			{/* <h2 className="font-medium text-2xl mb-4">Open Source Contributions</h2>
      <p className="prose prose-neutral dark:prose-invert">
        These are various open-source projects maintained by me, as well as
        those to which I have contributed throughout my programming journey.
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        {openSourceData.map((contribution, index) => (
          <ProjectCard
            key={index}
            title={contribution.project}
            logo={contribution.logo}
            description={contribution.description}
            technologies={contribution.technologies}
            website={contribution.website}
          />
        ))}
      </div> */}
		</section>
	);
}
