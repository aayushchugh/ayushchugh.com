import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";

export const metadata: Metadata = {
	title: "Resume",
	description:
		"A summary of Ayush Chugh’s corporate contributions, skills, and experience as a Full-Stack Developer, including work with Tap Invest, Shri Property, and A2INFINITE.",
	openGraph: {
		type: "article",
		url: `https://ayushchugh.com/resume`,
		title: "Ayush Chugh’s Resume",
		siteName: "Ayush Chugh's Portfolio",
		description:
			"Detailed resume of Ayush Chugh, Full-Stack Developer, with work experience, projects, and educational background.",
		images: [
			{
				url: `https://cdn.ayushchugh.com/open-graph/resume.png`,
				width: 1200,
				height: 630,
				alt: "Ayush Chugh's Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ayush Chugh's Resume",
		description:
			"Check out Ayush Chugh’s Full-Stack Developer resume, showcasing professional contributions and achievements.",
		images: ["https://cdn.ayushchugh.com/open-graph/resume.png"],
		creator: "@aayushchugh_x",
		creatorId: "@aayushchugh_x",
		site: "@aayushchugh_x",
		siteId: "@aayushchugh_x",
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Keizer Works",
			logo: "https://cdn.ayushchugh.com/logos/keizer.svg",
			role: "SDE",
			period: "November 2024 - Present",
			location: "Remote",
			workType: "Freelance",
			website: "https://www.keizerworks.com/",
			technologies: [
				"NextJS",
				"TypeScript",
				"Tailwind CSS",
				"NodeJS",
				"PostgreSQL",
				"DevOps",
			],
			responsibilities: [
				"Actively maintaining and contributing to open-source projects that drive innovation and collaboration within the tech community.",
				"Developing scalable and robust applications to meet client needs and deliver impactful solutions.",
				"Assisting in managing projects from inception to delivery, ensuring timelines, quality standards, and client expectations are met.",
				"Supporting the operational and strategic growth of the startup by streamlining workflows and contributing to decision-making processes.",
			],
		},
		{
			company: "Vibranium Soft",
			logo: "https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg",
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
			company: "Tap Invest",
			logo: "https://cdn.ayushchugh.com/logos/tapico.png",
			role: "Consultant",
			period: "Apr 2024 - Nov 2024",
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
			company: "Shri Property",
			logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
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
			logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
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
			logo: "https://cdn.ayushchugh.com/logos/ccet.png",
			degree: "High School Diploma, Computer Science",
			period: "2022 - 2025",
			location: "Chandigarh, India",
		},
		{
			institution: "Govt Model School Sector 35D Chandigarh India",
			logo: "",
			degree: "10th, School",
			period: "2021 - 2022",
			location: "Chandigarh, India",
		},
	],
	volunteering: [
		{
			organization: "Innovation Club, CCET",
			logo: "https://cdn.ayushchugh.com/logos/innovationclub.png",
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
