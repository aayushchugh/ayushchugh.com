import { config } from "../config/config";
import { getBlogPosts } from "../db/blog";
import { projectsData } from "../data/projects";
import { resumeData } from "../data/resume";

const SITE = "https://ayushchugh.com";

function link(name: string, url: string, note: string) {
	return `- [${name}](${url}): ${note}`;
}

function mdxToMarkdown(content: string) {
	return content
		.replace(/<Image\b[\s\S]*?\/>/g, tag => {
			const src = /src=\{?["']([^"']+)["']\}?/.exec(tag)?.[1];
			const alt = /alt=\{?["']([^"']*)["']\}?/.exec(tag)?.[1] ?? "";
			return src ? `![${alt}](${src})` : "";
		})
		.replace(/<Video\b[\s\S]*?\/>/g, tag => {
			const src = /src=\{?["']([^"']+)["']\}?/.exec(tag)?.[1];
			const caption =
				/caption=\{?["']([^"']*)["']\}?/.exec(tag)?.[1] ?? "Video";
			return src ? `[${caption}](${src})` : "";
		})
		.replace(/\n{3,}/g, "\n\n")
		.trim();
}

function pages() {
	return [
		link(
			"Home",
			`${SITE}/`,
			"Full stack web developer in Chandigarh, India. Team Lead at Avenue Ticketing (team of 7) building a ticketing platform. Co-founder and CTO at Ravix Studio from Nov 2025 to March 2026; that startup is paused. Previously built a B2B flight booking platform at Vibranium Soft and internal tools at Tap Invest. Available for freelance. Stack: React, Next.js, TypeScript, Node.js, PostgreSQL, AWS. Email hey@ayushchugh.com. GitHub aayushchugh."
		),
		link(
			"Story",
			`${SITE}/story`,
			"Grew up in Jalalabad, Fazilka, Punjab, wanted to be an IPS officer, and studied at DAV Public School. Started coding at 13 during COVID lockdown after Turbo C didn't stick and a brother opened VS Code. Learned HTML and CSS in about a week on a second-hand HP laptop after the family moved to Chandigarh in 9th grade. No roadmap: JavaScript, Git, then SCSS, mostly from Stack Overflow, GitHub issues, and Discord. First shipped project was a2infinite (Feb 2021) with a cousin. Later owned Shri Property end to end for family, then worldtravelsonline.in at Vibranium Soft. Joined Avenue Ticketing part-time, became team lead in August 2025. Co-founded Ravix Studio as CTO; that chapter is paused. Still in college (third year), codes after class. Writes to check that he understands something."
		),
		link(
			"Projects",
			`${SITE}/projects`,
			"Freelance and personal work: Worldtravels, Repo Command, an EJS VS Code extension, Invoicen, Shriproperty, A2INFINITE, FlipTimer, and the Sky At Night VS Code theme. Each project is listed below with its stack and URL."
		),
		link(
			"Resume",
			`${SITE}/resume`,
			"Work history from 2021 to present, education, and volunteering. Roles, dates, stacks, and responsibilities are listed in Work, Education, and Volunteering below."
		),
		link(
			"Blog",
			`${SITE}/blog`,
			"Essays on systems, web engineering, and things built in production. Each post below includes the full article text."
		),
		link(
			"Community",
			`${SITE}/community`,
			`Ravix Studio Discord (${config.socials.discord}). Direct access to Ayush and other developers, open-source and SaaS collaboration, and project updates.`
		),
		link(
			"Contact",
			`${SITE}/contact`,
			`Freelance, collaboration, or jobs. Email ${config.socials.email}. Book a 1:1 on Topmate: ${config.socials.topmate}.`
		),
	].join("\n");
}

function work() {
	return resumeData.workExperience
		.map(job => {
			const roles = job.positions
				.map(position => {
					const tech = position.technologies?.length
						? ` Stack: ${position.technologies.join(", ")}.`
						: "";
					const duties = position.responsibilities.join(" ");
					return `${position.role}, ${position.period}, ${position.workType}, ${job.location}.${tech} ${duties}`;
				})
				.join(" ");
			return link(job.company, job.website, roles);
		})
		.join("\n");
}

function projects() {
	return projectsData
		.map(project =>
			link(
				project.project,
				project.website,
				`${project.description} ${project.workType} ${project.category} project. Built with ${project.technologies.join(", ")}.`
			)
		)
		.join("\n");
}

function education() {
	return resumeData.education
		.map(edu => {
			const url = edu.institution.startsWith("Chandigarh Group of Colleges")
				? config.education.cgcLandran
				: `${SITE}/resume`;
			return link(
				edu.institution,
				url,
				`${edu.degree}. ${edu.period}. ${edu.location}.`
			);
		})
		.join("\n");
}

function volunteering() {
	const urls: Record<string, string> = {
		"Hack With India-Chapter CEC-CGC": config.volunteering.hackWithIndia,
	};
	return resumeData.volunteering
		.map(item =>
			link(
				item.organization,
				urls[item.organization] ?? `${SITE}/resume`,
				`${item.role}, ${item.period}, ${item.location}. ${item.responsibilities.join(" ")}`
			)
		)
		.join("\n");
}

function blog() {
	const posts = getBlogPosts().sort(
		(a, b) =>
			new Date(b.metadata.publishedAt).getTime() -
			new Date(a.metadata.publishedAt).getTime()
	);

	const index = posts
		.map(post =>
			link(
				post.metadata.title,
				`${SITE}/blog/${post.slug}`,
				`Published ${post.metadata.publishedAt.slice(0, 10)}. ${post.metadata.summary}`
			)
		)
		.join("\n");

	const articles = posts
		.map(post => {
			const body = mdxToMarkdown(post.content);
			return `### [${post.metadata.title}](${SITE}/blog/${post.slug})

Published: ${post.metadata.publishedAt.slice(0, 10)}

${post.metadata.summary}

${body}`;
		})
		.join("\n\n");

	return `${index}\n\n${articles}`;
}

function llmsTxt() {
	return `# Ayush Chugh

> Full stack web developer from Chandigarh, India. Team Lead at Avenue Ticketing. This site is his portfolio, story, resume, projects, and blog on web engineering and systems.

Ayush Chugh writes production web software with React, Next.js, TypeScript, and Node.js, and has shipped on PostgreSQL, MongoDB, AWS, Docker, Railway, and Stripe. He started coding in 2020, started professional work in 2021, and is available for freelance. He takes ownership of the product, not only the code, and uses AI with review and architectural oversight.

This file is the map. Work, projects, education, and volunteering repeat the facts on the site. The blog section lists every post, then includes the full article text so you can quote it without rendering the HTML pages.

## Pages

${pages()}

## Work

${work()}

## Projects

${projects()}

## Education

${education()}

## Volunteering

${volunteering()}

## Blog

${blog()}

## Optional

${link("RSS", `${SITE}/rss`, "Blog feed.")}
${link("Sitemap", `${SITE}/sitemap.xml`, "Every indexable URL on this site.")}
${link("GitHub", config.socials.github, "Code and open source. Username aayushchugh.")}
${link("X", config.socials.twitter, "Short updates. @aayushchugh.")}
${link("LinkedIn", config.socials.linkedin, "Work history and contact.")}
${link("Discord", config.socials.discord, "Ravix Studio community.")}
${link("Topmate", config.socials.topmate, "Book a 1:1.")}
${link("Email", `mailto:${config.socials.email}`, config.socials.email)}
`;
}

export function GET() {
	return new Response(llmsTxt(), {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
}
