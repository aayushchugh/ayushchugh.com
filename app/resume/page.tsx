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
				url: `https://cdn.ayushchugh.com/open-graph/business-card.png`,
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
		images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
		creator: "@aayushchugh_x",
		creatorId: "@aayushchugh_x",
		site: "@aayushchugh_x",
		siteId: "@aayushchugh_x",
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Avenue Ticketing, Inc.",
			logo: "https://cdn.ayushchugh.com/logos/avenue.jpeg",
			role: "Full Stack Developer",
			period: "April 2025 - Present",
			location: "Remote",
			workType: "Part-time",
			website: "https://avenue.tickets/",
			technologies: [
				"NodeJS",
				"TypeScript",
				"PostgreSQL",
				"Redis",
				"AWS",
				"Stripe",
			],
			responsibilities: [
				"Developing and maintaining a ticketing platform for event organizers and attendees.",
				"Implementing secure authentication and authorization systems for organizers and users.",
				"Managing DevOps workflows including CI/CD pipelines and cloud deployments.",
				"Optimizing server performance and implementing monitoring solutions for high-traffic events.",
				"Ensuring database scalability and implementing backup strategies for data integrity.",
				"Re-writing legacy code to improve code quality and maintainability.",
				"Creating and maintaining documentation for the codebase and processes.",
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
			technologies: ["NextJS", "Redux", "TypeScript", "Tailwind CSS", "MUI"],
			responsibilities: [
				"Developing and maintaining a B2B flight booking platform.",
				"Collaborating with cross-functional teams to deliver optimized solutions for the travel industry.",
				"Implementing features for flight search, booking management, and user onboarding.",
				"Building a user-friendly interface to enhance customer experience.",
				"Created responsive layouts for different screen sizes and devices.",
				"Used pooling and caching strategies to improve performance and reduce load times.",
				"Optimized SEO by implementing proper server side rendering",
			],
		},
		{
			company: "Keizer Works",
			logo: "https://cdn.ayushchugh.com/logos/keizer.svg",
			role: "SDE",
			period: "November 2024 - April 2025",
			location: "Remote",
			workType: "Freelance",
			website: "https://www.keizerworks.com/",
			technologies: [
				"NextJS",
				"TypeScript",
				"Tailwind CSS",
				"NodeJS",
				"PostgreSQL",
				"Shadcn"
			],
			responsibilities: [
				"Actively maintaining and contributing to open-source projects that drive innovation and collaboration within the tech community.",
				"Developing scalable and robust applications to meet client needs and deliver impactful solutions.",
				"Assisting in managing projects from inception to delivery, ensuring timelines, quality standards, and client expectations are met.",
				"Supporting the operational and strategic growth of the startup by streamlining workflows and contributing to decision-making processes.",
				"Worked with external clients of the startup and worked on internal products too"
			],
		},
		{
			company: "Tap Invest",
			logo: "https://cdn.ayushchugh.com/logos/tapico.png",
			role: "Frontend Developer",
			workType: "Part-time",
			period: "Apr 2024 - Nov 2024",
			location: "Remote",
			website: "https://tapinvest.in/",
			technologies: ["NextJS", "React", "TypeScript", "MUI", "Tailwind CSS"],
			responsibilities: [
				"Developed internal dashboard tools for the startup using React and NextJS, improving operational efficiency",
				"Translate design concepts into dynamic and responsive web applications.",
				"Optimize performance and ensure accessibility to deliver user-centric solutions.",
				"Created complex reusable components to speed up development and reduce maintenance costs.",
			],
		},
		{
			company: "Shri Property",
			logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
			role: "Full-Stack Developer",
			period: "Dec 2021 - May 2023",
			location: "Remote",
			workType: "Freelance",
			website: "https://shriproperty.com",
			technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
			responsibilities: [
				"Developed a real estate platform that simplified the process of finding and listing properties.",
				"Led the complete development of the website, from UI/UX design to backend integrations.",
				"Created a fully-featured admin dashboard for operations and management.",
				"Each property is listed after going throw a proper verification process by operations team.",
			],
		},
		{
			company: "A2INFINITE",
			logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
			role: "Frontend Developer",
			period: "Feb 2021 - May 2021",
			location: "Remote",
			workType: "Freelance",
			website: "https://a2infinite.com",
			technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
			responsibilities: [
				"Developed and maintained a platform that offers downloadable and printable practice worksheets for students.",
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
			period: "Oct 2023 - Nov 2024",
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
