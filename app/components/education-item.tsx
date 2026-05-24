import Image from "next/image";
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
    <div>
      <h3 className="font-medium text-xl mb-1 tracking-tighter flex items-center">
        {edu.logo && (
          <Image
            src={edu.logo}
            alt={edu.institution}
            width={20}
            height={20}
            className="mr-4"
          />
        )}
        <span className={edu.logo ? "ml-2" : ""}>{edu.institution}</span>
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {edu.degree} | {edu.period} | {edu.location}
      </p>
    </div>
  );
};

export default EducationItem;
