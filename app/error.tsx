"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="pt-12 pb-8 text-center">
      <div className="pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
          Stop the Press
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl tracking-[-0.02em] text-ink leading-none">
          Something went{" "}
          <em className="font-display italic font-normal">wrong.</em>
        </h1>
        <p className="mt-6 font-fell italic text-lg text-ink-light max-w-xl mx-auto">
          An unexpected error occurred while setting the page. A refresh might
          do the trick.
        </p>
      </div>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-block bg-ink text-paper font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-accent transition-colors"
      >
        Try again →
      </button>
    </section>
  );
}
