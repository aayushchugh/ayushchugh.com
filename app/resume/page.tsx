import type { Metadata } from "next";
import Image from "next/image";
import tapLogo from "public/logos/tapico.png";
import ccetLogo from "public/logos/ccet.png";
import shriPropertyLogo from "public/logos/shriProperty.png";
import a2infiniteLogo from "public/logos/a2infinite.png";
import innovationClubLogo from "public/logos/innovationclub.png";
import vibraniumsoft from "public/logos/vibraniumsoft.jpeg";

export const metadata: Metadata = {
	title: "Resume - Ayush Chugh",
	description:
		"A summary of Ayush Chugh’s corporate contributions, skills, and experience as a Full-Stack Developer, including work with Tap Invest, Shri Property, and A2INFINITE.",
	openGraph: {
		type: "article",
		url: `https://ayushchugh.com/resume`,
		title: "Ayush Chugh’s Resume",
		description:
			"Detailed resume of Ayush Chugh, Full-Stack Developer, with work experience, projects, and educational background.",
		images: [
			{
				url: `/ogs/og-bg.png`,
				width: 1200,
				height: 630,
				alt: "Ayush Chugh Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume - Ayush Chugh",
		description:
			"Check out Ayush Chugh’s Full-Stack Developer resume, showcasing professional contributions and achievements.",
		images: ["/ogs/og-bg.png"],
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Tap Invest",
			logo: tapLogo,
			role: "Consultant",
			period: "Apr 2024 - Present",
			location: "Remote",
			website: "https://tapinvest.in/", // Add the website link
			technologies: ["NextJS", "React", "TypeScript", "MUI", "Tailwind CSS"],
			responsibilities: [
				"Specialize in frontend development using React JS to create seamless user experiences.",
				"Translate design concepts into dynamic and responsive web applications.",
				"Optimize performance and ensure accessibility to deliver user-centric solutions.",
				"Focus on driving user engagement and satisfaction with cutting-edge web applications.",
				"Continuously innovate and stay updated with the latest industry trends.",
			],
		},
		{
			company: "Vibranium Soft",
			logo: vibraniumsoft,
			role: "Frontend Developer",
			period: "December 2023 - Present",
			location: "Remote",
			workType: "Freelance",
			website: "https://vibraniumsoft.com",
			technologies: ["NextJS", "Redux", "TypeScript", "Tailwind CSS"],
			responsibilities: [
				"Developing and maintaining a B2B flight booking platform.",
				"Collaborating with cross-functional teams to deliver optimized solutions for the travel industry.",
				"Implementing features for flight search, booking management, and user onboarding.",
				"Ensuring scalability and performance optimization for high traffic volumes.",
				"Building a user-friendly interface to enhance customer experience.",
			],
		},
		{
			company: "Shri Property",
			logo: shriPropertyLogo,
			role: "Full-Stack Developer",
			period: "Dec 2021 - May 2023",
			location: "Remote",
			workType: "Freelance",
			website: "https://shriproperty.com", // Add the website link
			technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
			responsibilities: [
				"Developed a real estate platform that simplified the process of finding and listing properties.",
				"Led the complete development of the website, from UI/UX design to backend integrations.",
			],
		},
		{
			company: "A2INFINITE",
			logo: a2infiniteLogo,
			role: "Frontend Developer",
			period: "Feb 2021 - May 2021",
			location: "Remote",
			workType: "Freelance",
			website: "https://a2infinite.com", // Add the website link
			technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
			responsibilities: [
				"Developed and maintained a platform that offers downloadable practice worksheets for students.",
				"Collaborated with the design and backend teams to ensure smooth platform functionality and user experience.",
			],
		},
	],
	education: [
		{
			institution:
				"Chandigarh College of Engineering & Technology (Diploma Wing)",
			logo: ccetLogo,
			degree: "High School Diploma, Computer Science",
			period: "2022 - 2025",
			location: "Chandigarh, India",
		},
		{
			institution: "Govt Model School Sector 35D Chandigarh India",
			logo: null,
			degree: "10th, School",
			period: "2021 - 2022",
			location: "Chandigarh, India",
		},
	],
	volunteering: [
		{
			organization: "Innovation Club, CCET",
			logo: innovationClubLogo,
			role: "Team Lead",
			period: "Oct 2023 - Present",
			location: "Chandigarh, India",
			responsibilities: [
				"Leading a team to innovate and implement technology projects in the institution.",
				"Organizing hackathons and coding competitions, encouraging student participation and skills development.",
			],
		},
	],
};

export default function WorkPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					My Resume 📝
				</h1>
			</div>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							<Image
								src={job.logo}
								alt={job.company}
								width={20}
								height={20}
								className="mr-4"
							/>
							{/* Add website link */}
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="ml-2"
								href={job.website}
							>
								{job.company}
							</a>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{job.role} | {job.period} | {job.location}
							{job.workType && ` | ${job.workType}`}{" "}
							{/* Conditionally render Freelance */}
						</p>

						{/* Technologies used */}
						{job.technologies && (
							<p className="text-neutral-500 dark:text-neutral-400 text-sm">
								<strong>Technologies:</strong> {job.technologies.join(", ")}
							</p>
						)}

						<ul>
							{job.responsibilities.map((responsibility, rIndex) => (
								<li key={rIndex}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							{edu.logo && (
								<Image
									src={edu.logo}
									alt={edu.institution}
									width={20}
									height={20}
									className={"mr-4"}
								/>
							)}
							<span className={edu.logo ? "ml-2" : ""}>{edu.institution}</span>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{edu.degree} | {edu.period} | {edu.location}
						</p>
					</div>
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<div key={index}>
						<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
							<Image
								src={volunteer.logo}
								alt={volunteer.organization}
								width={20}
								height={20}
								className="mr-4"
							/>
							<span className={volunteer.logo && "ml-2"}>
								{volunteer.organization}
							</span>
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 text-sm">
							{volunteer.role} | {volunteer.period} | {volunteer.location}
						</p>
						<ul>
							{volunteer.responsibilities.map((responsibility, rIndex) => (
								<li key={rIndex}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
