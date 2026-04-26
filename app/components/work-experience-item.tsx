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
    <article className="border-t border-rule py-6 md:py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-3">
      <div className="md:pr-4 md:border-r md:border-rule">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Employer
        </p>
        <h3 className="mt-2 font-display font-bold text-xl leading-tight text-ink">
          {job.website ? (
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {job.company}
            </a>
          ) : (
            job.company
          )}
        </h3>
        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {job.location}
        </p>
      </div>

      <div className={job.positions.length > 1 ? "md:border-l-0" : ""}>
        {job.positions.map((position, posIndex) => (
          <div
            key={posIndex}
            className={`${
              job.positions.length > 1
                ? "pl-4 border-l border-rule-heavy mb-6 last:mb-0"
                : ""
            }`}
          >
            <p className="font-fell italic text-lg text-ink">{position.role}</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
              {position.period}
              {position.workType ? ` · ${position.workType}` : ""}
            </p>

            {position.technologies && position.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {position.technologies.map((tech, index) => (
                  <Chip key={index} tech={tech} />
                ))}
              </div>
            )}

            <ul className="mt-3 space-y-1.5 font-serif text-sm leading-relaxed text-ink-light list-disc pl-4">
              {position.responsibilities.map((responsibility, rIndex) => (
                <li key={rIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};

export default WorkExperienceItem;
