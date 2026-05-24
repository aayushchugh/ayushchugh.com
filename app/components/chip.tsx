import type { FC, ReactNode } from "react";

interface ChipProps {
  tech?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Chip: FC<ChipProps> = ({ tech, children, onClick, className = "" }) => {
  const Component = onClick ? "button" : "span";
  
  return (
    <Component
      className={`bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 border text-sm text-gray-700 dark:text-gray-200 px-2 py-1 rounded-xl ${onClick ? 'hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {children || tech}
    </Component>
  );
};

export default Chip;
