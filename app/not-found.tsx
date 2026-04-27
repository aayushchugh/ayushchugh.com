import Link from "next/link";
import type { Metadata } from "next";
import { config } from "./config/config";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="pt-12 pb-8 text-center">
      <div className="fade-up pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
          Errata · Issue 404
        </p>
        <h1 className="mt-3 font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-[-0.02em] text-ink leading-none">
          Page <em className="font-display italic font-normal">not found.</em>
        </h1>
        <p className="mt-6 font-fell italic text-lg sm:text-xl text-ink-light max-w-xl mx-auto">
          This route never went to print. The link may be broken, or the page
          may have been moved to the archives.
        </p>
      </div>

      <div className="mt-12 fade-up fade-up-delay-1 max-w-md mx-auto">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint pb-3 border-b border-rule">
          Try one of these instead
        </p>
        <ul className="mt-4 space-y-3 font-serif text-base">
          {config.navigation.map(({ path, name }) => (
            <li key={path}>
              <Link href={path} className="editorial-link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 pt-4 border-t border-rule font-serif text-sm text-ink-light leading-relaxed">
          Or if you think this is a bug,{" "}
          <a
            href="https://github.com/aayushchugh/ayushchugh.com/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
          >
            let me know on GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
