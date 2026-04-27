import type { FC } from "react";

interface VolunteeringItemProps {
  volunteer: {
    organization: string;
    logo?: string;
    role: string;
    period: string;
    location: string;
    responsibilities: string[];
  };
}

const VolunteeringItem: FC<VolunteeringItemProps> = ({ volunteer }) => {
  return (
    <article className="border-t border-rule py-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-8 gap-y-2">
      <div className="md:pr-4 md:border-r md:border-rule">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {volunteer.period}
        </p>
        <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          {volunteer.location}
        </p>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl leading-tight text-ink">
          {volunteer.organization}
        </h3>
        <p className="mt-1 font-fell italic text-base text-ink-light">
          {volunteer.role}
        </p>
        <ul className="mt-3 space-y-1.5 font-serif text-sm leading-relaxed text-ink-light list-disc pl-4">
          {volunteer.responsibilities.map((responsibility, rIndex) => (
            <li key={rIndex}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default VolunteeringItem;
