import Image from "next/image";
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
    <div>
      <h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
        {volunteer.logo && (
          <Image
            src={volunteer.logo}
            alt={volunteer.organization}
            width={20}
            height={20}
            className="mr-4"
          />
        )}
        <span className={volunteer.logo ? "ml-2" : ""}>
          {volunteer.organization}
        </span>
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {volunteer.role} | {volunteer.period} | {volunteer.location}
      </p>
      <ul>
        {volunteer.responsibilities.map((responsibility, rIndex) => (
          <li key={rIndex}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteeringItem;
