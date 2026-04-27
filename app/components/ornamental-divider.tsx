import type { FC } from "react";

const OrnamentalDivider: FC = () => {
  return (
    <div
      className="my-12 sm:my-16 py-4 border-t-[3px] border-b-[3px] border-double border-rule-heavy text-center"
      aria-hidden="true"
    >
      <span className="font-fell italic text-xl sm:text-2xl text-ink-light tracking-[0.4em]">
        ❧&nbsp;&nbsp;✦&nbsp;&nbsp;❧
      </span>
    </div>
  );
};

export default OrnamentalDivider;
