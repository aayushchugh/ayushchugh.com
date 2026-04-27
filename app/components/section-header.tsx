import type { FC } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  label,
  title,
  className = "",
}) => {
  return (
    <div
      className={`flex items-baseline gap-4 sm:gap-6 mb-6 sm:mb-8 ${className}`}
    >
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint whitespace-nowrap">
        {label}
      </span>
      <hr className="flex-1 border-t border-rule" />
      <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-ink leading-none whitespace-nowrap">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
