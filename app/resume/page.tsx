import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import { config } from "../config/config";
import { resumeData } from "../data/resume";

export const metadata: Metadata = {
	metadataBase: new URL("https://ayushchugh.com"),
	title: "Resume",
	description:
		"Ayush Chugh's resume: Team Lead at Avenue Ticketing. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
	keywords: [
		"Ayush Chugh Resume",
		"Full Stack Developer Resume",
		"Web Developer CV",
		"React Developer Resume",
		"Software Engineer Resume",
		"Work Experience",
		"Hire Developer India",
		"TypeScript Developer Resume",
	],
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		type: "article",
		url: "https://ayushchugh.com/resume",
		title: "Resume - Full Stack Developer Experience | Ayush Chugh",
		siteName: "Ayush Chugh's Portfolio",
		description:
			"Team Lead at Avenue Ticketing. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
				width: 1200,
				height: 630,
				alt: "Ayush Chugh's Full Stack Developer Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume - Full Stack Developer Experience | Ayush Chugh",
		description:
			"Team Lead at Avenue Ticketing. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh",
		site: "@aayushchugh",
	},
};

export default function WorkPage() {
	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://ayushchugh.com" },
		{ name: "Resume", url: "https://ayushchugh.com/resume" },
	]);

	const profileJsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Ayush Chugh",
			url: "https://ayushchugh.com",
			jobTitle: "Full Stack Web Developer",
			worksFor: [
				{
					"@type": "Organization",
					name: "Avenue Ticketing",
					url: config.companies.avenueTicketing,
				},
				{
					"@type": "Organization",
					name: "Ravix Studio",
					url: config.companies.ravixStudio,
				},
			],
			alumniOf: [
				{
					"@type": "EducationalOrganization",
					name: "Chandigarh Group of Colleges, Landran",
				},
				{
					"@type": "EducationalOrganization",
					name: "Chandigarh College of Engineering & Technology",
				},
			],
			knowsAbout: [
				"React",
				"Next.js",
				"TypeScript",
				"Node.js",
				"PostgreSQL",
				"AWS",
				"Docker",
			],
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
					__html: JSON.stringify(profileJsonLd),
				}}
			/>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					My Resume 📝
				</h1>
			</div>
			<p className="sr-only">
				Professional resume of Ayush Chugh, a Full Stack Web Developer from Chandigarh, India. Currently Team Lead at Avenue Ticketing. Previously Co-founder and CTO at Ravix Studio. Experienced in React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, and Docker. Work history spans from 2021 to present, including roles at Vibranium Soft, Keizer Works, Tap Invest, Shri Property, and A2INFINITE. Education includes a B.Tech in Computer Science from Chandigarh Group of Colleges and a Diploma from CCET.
			</p>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<WorkExperienceItem key={index} job={job} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<EducationItem key={index} edu={edu} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<VolunteeringItem key={index} volunteer={volunteer} />
				))}
			</div>
		</section>
	);
}
