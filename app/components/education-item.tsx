import type { FC } from "react";

interface EducationItemProps {
  edu: {
    institution: string;
    logo?: string;
    degree: string;
    period: string;
    location: string;
  };
}

const EducationItem: FC<EducationItemProps> = ({ edu }) => {
  return (
    <article className="border-t border-rule py-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-2">
      <div className="md:pr-4 md:border-r md:border-rule">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {edu.period}
        </p>
        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {edu.location}
        </p>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl leading-tight text-ink">
          {edu.institution}
        </h3>
        <p className="mt-1 font-fell italic text-base text-ink-light">
          {edu.degree}
        </p>
      </div>
    </article>
  );
};

export default EducationItem;
