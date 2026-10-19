import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import ProjectCard from "../components/project-card";
import { projectsData } from "../data/projects";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "Projects",
	description:
		"Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
	keywords: [
		"Ayush Chugh Projects",
		"Web Development Projects",
		"React Projects",
		"Next.js Projects",
		"Open Source",
		"Portfolio",
		"Software Projects",
		"Full Stack Projects",
		"TypeScript Projects",
	],
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Projects - Full Stack Web Applications | Ayush Chugh",
		description:
			"Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
		url: "https://ayushchugh.com/projects",
		siteName: "Ayush Chugh's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh's Full Stack Projects Portfolio",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects - Full Stack Web Applications | Ayush Chugh",
		description:
			"Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		site: "@aayushchugh",
	},
};


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

	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://ayushchugh.com" },
		{ name: "Projects", url: "https://ayushchugh.com/projects" },
	]);

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>
			<p className="sr-only">
				A showcase of web development projects built by Ayush Chugh, including full stack applications, frontend projects, backend services, and developer tools. Projects are built using technologies like React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. Includes both freelance client work and personal open-source projects.
			</p>

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
