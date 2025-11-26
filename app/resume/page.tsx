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
		creator: "@aayushchugh",
		creatorId: "@aayushchugh",
		site: "@aayushchugh",
		siteId: "@aayushchugh",
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Ravix Studio",
			logo: "https://cdn.ayushchugh.com/logos/ravix-dark.png",
			location: "On-site",
			website: "https://ravixstudio.com/",
			positions: [
				{
					role: "Co-founder & CTO",
					period: "Nov 2025 - Present",
					workType: "Full-time",
					technologies: [
						"NextJS",
						"TypeScript",
						"NodeJS",
						"PostgreSQL",
						"AWS",
						"Docker",
						"Railway",
					],
					responsibilities: ["Building alot of cool stuff"],
				},
			],
		},
		{
			company: "Avenue Ticketing, Inc.",
			logo: "https://cdn.ayushchugh.com/logos/avenue.jpeg",
			location: "Remote",
			website: "https://avenueticket.com/",
			positions: [
				{
					role: "Team Lead",
					period: "Aug 2025 - Present",
					workType: "Full-time",
					technologies: [
						"NodeJS",
						"TypeScript",
						"PostgreSQL",
						// "Redis",
						"AWS",
						"Stripe",
						"Docker",
						"Railway",
					],
					responsibilities: [
						"Developing complex end-to-end features including payment processing, event management, and user authentication systems",
						"Building advanced TypeScript modules with complex business logic for ticket validation, pricing calculations",
						"Implementing sophisticated error handling and data validation patterns across the entire application stack",
						"Creating reusable components and utilities that handle complex state management and API integrations",
						"Identifying and fixing edge cases in the codebase",
						"Implementing monitoring and logging solutions for the application",
					],
				},
				{
					role: "Full Stack Developer",
					period: "Apr 2025 - Aug 2025",
					workType: "Part-time",
					technologies: [
						"NodeJS",
						"TypeScript",
						"PostgreSQL",
						// "Redis",
						"AWS",
						"Stripe",
					],
					responsibilities: [
						"Developing and maintaining a ticketing platform for event organizers and attendees.",
						"Implementing secure authentication and authorization systems for organizers and users.",
						"Optimizing server performance and implementing monitoring solutions for high-traffic events.",
						"Re-writing legacy code to improve code quality and maintainability.",
						"Creating and maintaining documentation for the codebase and processes.",
					],
				},
			],
		},
		{
			company: "Vibranium Soft",
			logo: "https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg",
			location: "Remote",
			website: "https://vibraniumsoft.com",
			positions: [
				{
					role: "Frontend Developer",
					period: "December 2023 - July 2025",
					workType: "Freelance",
					technologies: [
						"NextJS",
						"Redux",
						"TypeScript",
						"Tailwind CSS",
						"MUI",
					],
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
			],
		},
		{
			company: "Keizer Works",
			logo: "https://cdn.ayushchugh.com/logos/keizer.svg",
			location: "Remote",
			website: "https://keizerworks.com/",
			positions: [
				{
					role: "SDE",
					period: "November 2024 - April 2025",
					workType: "Freelance",
					technologies: [
						"NextJS",
						"TypeScript",
						"Tailwind CSS",
						"NodeJS",
						"PostgreSQL",
						"Shadcn",
					],
					responsibilities: [
						"Actively maintaining and contributing to open-source projects that drive innovation and collaboration within the tech community.",
						"Developing scalable and robust applications to meet client needs and deliver impactful solutions.",
						"Assisting in managing projects from inception to delivery, ensuring timelines, quality standards, and client expectations are met.",
						"Supporting the operational and strategic growth of the startup by streamlining workflows and contributing to decision-making processes.",
						"Worked with external clients of the startup and worked on internal products too",
					],
				},
			],
		},
		{
			company: "Tap Invest",
			logo: "https://cdn.ayushchugh.com/logos/tapico.png",
			location: "Remote",
			website: "https://tapinvest.in/",
			positions: [
				{
					role: "Frontend Developer",
					period: "Apr 2024 - Nov 2024",
					workType: "Part-time",
					technologies: [
						"NextJS",
						"React",
						"TypeScript",
						"MUI",
						"Tailwind CSS",
					],
					responsibilities: [
						"Developed internal dashboard tools for the startup using React and NextJS, improving operational efficiency",
						"Translate design concepts into dynamic and responsive web applications.",
						"Optimize performance and ensure accessibility to deliver user-centric solutions.",
						"Created complex reusable components to speed up development and reduce maintenance costs.",
					],
				},
			],
		},
		{
			company: "Shri Property",
			logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
			location: "Remote",
			website: "https://shriproperty.com",
			positions: [
				{
					role: "Full-Stack Developer",
					period: "Dec 2021 - May 2023",
					workType: "Freelance",
					technologies: [
						"React",
						"Node.js",
						"MongoDB",
						"Express.js",
						"TypeScript",
					],
					responsibilities: [
						"Developed a real estate platform that simplified the process of finding and listing properties.",
						"Led the complete development of the website, from UI/UX design to backend integrations.",
						"Created a fully-featured admin dashboard for operations and management.",
						"Each property is listed after going throw a proper verification process by operations team.",
					],
				},
			],
		},
		{
			company: "A2INFINITE",
			logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
			location: "Remote",
			website: "https://a2infinite.com",
			positions: [
				{
					role: "Frontend Developer",
					period: "Feb 2021 - May 2021",
					workType: "Freelance",
					technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
					responsibilities: [
						"Developed and maintained a platform that offers downloadable and printable practice worksheets for students.",
						"Collaborated with the design and backend teams to ensure smooth platform functionality and user experience.",
					],
				},
			],
		},
	],
	education: [
		{
			institution: "Chandigarh Group of Colleges, Landran, Punjab",
			logo: "https://cdn.ayushchugh.com/logos/cgc-landran.png",
			degree:
				"Bachelor of Technology (B.Tech), Computer Science and Engineering",
			period: "2025 - 2028",
			location: "Mohali, India",
		},
		{
			institution:
				"Chandigarh College of Engineering & Technology (Diploma Wing)",
			logo: "https://cdn.ayushchugh.com/logos/ccet.png",
			degree: "Diploma, Computer Science and Engineering",
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
			organization: "Hack With India-Chapter CEC-CGC",
			logo: "https://cdn.ayushchugh.com/logos/hwi.jpeg",
			role: "Technical Lead",
			period: "Aug 2025 - Present",
			location: "Chandigarh, India",
			responsibilities: [
				"I am responsible to manage all the technical aspects of the club and help the students to learn and grow in the field of technology.",
			],
		},
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
