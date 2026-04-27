"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { config } from "../config/config";
import ISTClock from "./ist-clock";

export default function Masthead() {
  const currentRoute = usePathname();
  const isHome = currentRoute === "/";

  return (
    <header className="no-print pt-6 pb-0 fade-up">
      {/* Top edition strip */}
      <div className="flex items-center justify-between gap-3 flex-wrap pb-4 border-b border-rule">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
            Mohali · Full-Stack
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-rule" />
          <ISTClock />
        </div>
        {config.profile.availableForFreelance && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-paper font-mono text-[10px] tracking-[0.18em] uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-paper opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-paper" />
            </span>
            Available for Freelance
          </span>
        )}
      </div>

      {/* Nav row */}
      <nav
        aria-label="Main navigation"
        className="border-b-[3px] border-double border-ink"
        id="nav"
      >
        <ul className="flex items-center justify-center flex-wrap py-3">
          {config.navigation.map(({ path, name }, idx) => {
            const isActive = currentRoute === path;
            return (
              <Fragment key={path}>
                {idx > 0 && (
                  <li
                    aria-hidden="true"
                    className="hidden sm:inline-block w-px h-3 bg-rule"
                  />
                )}
                <li>
                  <Link
                    href={path}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-3 sm:px-5 py-1 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      isActive ? "text-accent" : "text-ink hover:text-accent"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </nav>

      {/* Centerpiece nameplate — home only */}
      {isHome && (
        <div className="text-center pt-10 pb-8 border-b-2 border-ink">
          <h1 className="font-display font-black leading-[0.95] tracking-[-0.02em] text-ink text-[56px] sm:text-[72px] md:text-[88px] lg:text-[96px]">
            Ayush{" "}
            <span className="font-display italic font-normal text-ink-light">
              Chugh
            </span>
          </h1>
          <p className="mt-3 font-mono text-[11px] tracking-[0.32em] uppercase text-ink-faint">
            The Portfolio
          </p>
        </div>
      )}
    </header>
  );
}
