import type { FC } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  logo?: string;
  description: string;
  technologies: string[];
  website: string;
  category?: string;
  workType?: string;
  issueNumber?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  website,
  category,
  workType,
  issueNumber,
}) => {
  return (
    <Link
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full p-6 border-r border-b border-rule"
    >
      {(issueNumber || category) && (
        <div className="flex items-center justify-between gap-4">
          {issueNumber && (
            <p className="font-display italic text-ink-faint text-lg">
              No. {issueNumber}
            </p>
          )}
          {(category || workType) && (
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint text-right">
              {category && workType
                ? `${category} · ${workType}`
                : category || workType}
            </p>
          )}
        </div>
      )}
      <h3 className="mt-3 font-display font-bold text-2xl leading-tight text-ink group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-3 font-serif text-sm leading-relaxed text-ink-light">
        {description}
      </p>
      {technologies.length > 0 && (
        <p className="mt-5 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {technologies.join(" · ")}
        </p>
      )}
    </Link>
  );
};

export default ProjectCard;
