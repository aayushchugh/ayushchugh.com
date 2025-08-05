import Image from "next/image";
import type { FC } from "react";
import Chip from "./chip";

interface Position {
	role: string;
	period: string;
	workType?: string;
	technologies?: string[];
	responsibilities: string[];
}

interface WorkExperienceItemProps {
	job: {
		company: string;
		logo: string;
		location: string;
		website?: string;
		positions: Position[];
	};
}

const WorkExperienceItem: FC<WorkExperienceItemProps> = ({ job }) => {
	return (
		<div className="mb-8">
			<h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
				<Image
					src={job.logo}
					alt={job.company}
					width={20}
					height={20}
					className="mr-4"
				/>
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="ml-2"
					href={job.website}
				>
					{job.company}
				</a>
			</h3>

			{/* Render each position */}
			{job.positions.length === 1 ? (
				// Single position - no timeline
				job.positions.map((position, posIndex) => (
					<div key={posIndex} className="mb-4">
						<p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
							{position.role} | {position.period}
							{position.workType && ` | ${position.workType}`}
							{` | ${job.location}`}
						</p>

						{/* Technologies with Chip components */}
						{position.technologies && (
							<div className="flex gap-2 flex-wrap mt-2">
								{position.technologies.map((tech, index) => (
									<Chip key={index} tech={tech} />
								))}
							</div>
						)}

						<ul className="mt-2">
							{position.responsibilities.map((responsibility, rIndex) => (
								<li key={rIndex} className="text-sm">
									{responsibility}
								</li>
							))}
						</ul>
					</div>
				))
			) : (
				// Multiple positions - with timeline
				<div className="relative">
					{job.positions.map((position, posIndex) => (
						<div key={posIndex} className="relative">
							{/* Timeline line */}
							{posIndex < job.positions.length - 1 && (
								<div className="absolute left-3 top-8 w-0.5 h-full bg-neutral-300 dark:bg-neutral-600"></div>
							)}

							{/* Timeline dot */}
							<div className="absolute left-2.5 top-2 w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"></div>

							{/* Position content */}
							<div className="ml-8 mb-4">
								<p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
									{position.role} | {position.period}
									{position.workType && ` | ${position.workType}`}
									{` | ${job.location}`}
								</p>

								{/* Technologies with Chip components */}
								{position.technologies && (
									<div className="flex gap-2 flex-wrap mt-2">
										{position.technologies.map((tech, index) => (
											<Chip key={index} tech={tech} />
										))}
									</div>
								)}

								<ul className="mt-2">
									{position.responsibilities.map((responsibility, rIndex) => (
										<li key={rIndex} className="text-sm">
											{responsibility}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default WorkExperienceItem;
