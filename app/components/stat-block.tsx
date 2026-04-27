import type { FC } from "react";

interface StatBlockProps {
  value: string | number;
  label: string;
  suffix?: string;
}

const StatBlock: FC<StatBlockProps> = ({ value, label, suffix }) => {
  return (
    <div className="py-2">
      <div className="font-display font-black text-5xl sm:text-6xl text-ink leading-none">
        {value}
        {suffix && (
          <span className="font-display font-normal text-3xl text-ink-light align-top ml-1">
            {suffix}
          </span>
        )}
      </div>
      <div className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
        {label}
      </div>
    </div>
  );
};

export default StatBlock;
