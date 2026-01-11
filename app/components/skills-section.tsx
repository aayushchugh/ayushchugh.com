import type { FC } from "react";

interface SkillCategory {
	category: string;
	skills: string[];
}

const skillsData: SkillCategory[] = [
	{
		category: "Frontend Development",
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Redux",
			"Material-UI (MUI)",
			"Shadcn/ui",
			"HTML5",
			"CSS3",
			"SCSS",
			"Responsive Design",
			"Server-Side Rendering (SSR)",
		],
	},
	{
		category: "Backend Development",
		skills: [
			"Node.js",
			"Express.js",
			"TypeScript",
			"RESTful APIs",
			"Authentication & Authorization",
			"Payment Integration (Stripe)",
			"Error Handling",
			"Data Validation",
		],
	},
	{
		category: "Database & Storage",
		skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
	},
	{
		category: "DevOps & Cloud",
		skills: [
			"AWS",
			"Docker",
			"Railway",
			"CI/CD",
			"Monitoring & Logging",
			"Performance Optimization",
		],
	},
	{
		category: "Tools & Practices",
		skills: [
			"Git & GitHub",
			"Agile/Scrum",
			"Code Review",
			"Testing & Debugging",
			"Technical Documentation",
			"Team Leadership",
			"Project Management",
			"AI-Assisted Development",
		],
	},
	{
		category: "Soft Skills",
		skills: [
			"Problem Solving",
			"Team Collaboration",
			"Leadership",
			"Communication",
			"Ownership & Accountability",
			"Mentoring",
			"Business Mindset",
		],
	},
];

const SkillsSection: FC = () => {
	return (
		<div className="mb-8 prose prose-neutral dark:prose-invert">
			<h2>Skills & Expertise</h2>
			<div className="not-prose grid gap-6 mt-4">
				{skillsData.map((category, index) => (
					<div key={index} className="space-y-3">
						<h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
							{category.category}
						</h3>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill, skillIndex) => (
								<span
									key={skillIndex}
									className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsSection;
