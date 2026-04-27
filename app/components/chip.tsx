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
      className={`inline-flex items-center border border-rule-heavy text-ink font-mono text-[10px] tracking-[0.18em] uppercase px-2 py-[3px] ${
        onClick
          ? "hover:border-accent hover:text-accent transition-colors cursor-pointer"
          : ""
      } ${className}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      {children || tech}
    </Component>
  );
};

export default Chip;
