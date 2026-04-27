import type { FC } from "react";

interface SeparatorProps {
  weight?: "thin" | "section" | "major";
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ weight = "thin", className = "" }) => {
  if (weight === "major") {
    return (
      <hr
        className={`my-8 border-0 border-t-[3px] border-double border-ink ${className}`}
      />
    );
  }
  if (weight === "section") {
    return (
      <hr
        className={`my-6 border-0 border-t-[2px] border-solid border-ink ${className}`}
      />
    );
  }
  return <hr className={`my-6 border-0 border-t border-rule ${className}`} />;
};

export default Separator;
