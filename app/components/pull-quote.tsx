import type { FC, ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  cite?: string;
}

const PullQuote: FC<PullQuoteProps> = ({ children, cite }) => {
  return (
    <figure className="border-l-[3px] border-ink pl-5 py-2">
      <blockquote className="font-display italic font-normal text-xl sm:text-2xl leading-snug text-ink">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          — {cite}
        </figcaption>
      )}
    </figure>
  );
};

export default PullQuote;
