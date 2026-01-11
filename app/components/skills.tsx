import { config } from "../config/config";

interface SkillCategoryProps {
	title: string;
	skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
	return (
		<div className="mb-6">
			<h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wide">
				{title}
			</h3>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<span
						key={skill}
						className="px-3 py-1.5 text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}

export default function Skills() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<SkillCategory title="Frontend" skills={config.skills.frontend} />
			<SkillCategory title="Backend" skills={config.skills.backend} />
			<SkillCategory title="Tools & DevOps" skills={config.skills.tools} />
			<SkillCategory title="Other Skills" skills={config.skills.other} />
		</div>
	);
}
