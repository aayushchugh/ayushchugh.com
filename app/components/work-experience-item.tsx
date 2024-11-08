import Image from "next/image";
import type { FC } from "react";
import Chip from "./chip";

interface WorkExperienceItemProps {
  job: {
    company: string;
    logo: string;
    role: string;
    period: string;
    location: string;
    workType?: string;
    website?: string;
    technologies?: string[];
    responsibilities: string[];
  };
}

const WorkExperienceItem: FC<WorkExperienceItemProps> = ({ job }) => {
  return (
    <div>
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
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {job.role} | {job.period} | {job.location}
        {job.workType && ` | ${job.workType}`}
      </p>

      {/* Technologies with Chip components */}
      {job.technologies && (
        <div className="flex gap-2 flex-wrap mt-2">
          {job.technologies.map((tech, index) => (
            <Chip key={index} tech={tech} />
          ))}
        </div>
      )}
      <ul>
        {job.responsibilities.map((responsibility, rIndex) => (
          <li key={rIndex}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceItem;
