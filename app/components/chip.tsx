import type { FC } from "react";

interface ChipProps {
  tech: string;
}

const Chip: FC<ChipProps> = ({ tech }) => {
  return (
    <span className="bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 border text-sm text-gray-700 dark:text-gray-200 px-2 py-1 rounded-xl">
      {tech}
    </span>
  );
};

export default Chip;
