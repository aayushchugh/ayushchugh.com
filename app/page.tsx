import Link from "next/link";
import type { Metadata } from "next";
import GitHubCalendar from "react-github-calendar";

import Badge from "./components/Badge";
import SectionHeader from "./components/section-header";
import OrnamentalDivider from "./components/ornamental-divider";
import PullQuote from "./components/pull-quote";
import StatBlock from "./components/stat-block";
import Chip from "./components/chip";
import { config } from "./config/config";
import { getBlogPosts } from "./db/blog";
import { format } from "date-fns";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Ayush Chugh - Full Stack Developer from India",
  description:
    "Ayush Chugh is a Full Stack Web Developer from Mohali, India specializing in React, Next.js, TypeScript & Node.js. Team Lead at Avenue Ticketing, Inc.",
  keywords: [
    "Ayush Chugh",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Engineer",
    "India Developer",
    "Mohali Developer",
    "Freelance Developer India",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ayush Chugh - Full Stack Developer from India",
    description:
      "Full Stack Web Developer from Mohali, India specializing in React, Next.js, TypeScript & Node.js. Team Lead at Avenue Ticketing, Inc.",
    url: "https://ayushchugh.com",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chugh - Full Stack Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Chugh - Full Stack Developer from India",
    description:
      "Full Stack Web Developer from Mohali, India specializing in React, Next.js, TypeScript & Node.js. Team Lead at Avenue Ticketing, Inc.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

const calendarTheme: { light: string[]; dark: string[] } = {
	light: ["#ede9e0", "#c8c0b4", "#7a7068", "#4a4540", "#1a1714"],
	dark: ["#ede9e0", "#c8c0b4", "#7a7068", "#4a4540", "#1a1714"],
};

const featuredWork = [
  {
    label: "Full Stack Developer · Full-time",
    company: "Avenue Ticketing, Inc.",
    role: "Event ticketing platform.",
    description:
      "Leading a team of five engineers — owning payments, validation, and platform reliability for high-traffic events.",
    year: "Apr 2025 — Present",
    featured: true,
    href: config.companies.avenueTicketing,
  },
  {
    label: "Frontend Developer · Freelance",
    company: "Vibranium Soft",
    role: "B2B flight booking platform.",
    description:
      "Built the end-to-end frontend for Worldtravels, serving 2,000+ active travel agents daily across India.",
    year: "Dec 2023 — Jul 2025",
    featured: false,
    href: config.companies.vibraniumSoft,
  },
  {
    label: "Frontend Developer · Part-time",
    company: "Tap Invest",
    role: "Fintech investment platform.",
    description:
      "Built internal dashboards and reusable components that improved operational efficiency for the ops and product teams.",
    year: "Apr 2024 — Nov 2024",
    featured: false,
    href: config.companies.tapInvest,
  },
];

function yearsSince(dateString: string): number {
  const start = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export default function Page() {
  const codingYears = yearsSince(config.profile.codingStartDate);
  const professionalYears = yearsSince(config.profile.professionalStartDate);

  const latestPosts = getBlogPosts()
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ? -1
        : 1,
    )
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Chugh",
    url: "https://ayushchugh.com",
    image: "https://cdn.ayushchugh.com/open-graph/business-card.png",
    jobTitle: "Full Stack Web Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "Avenue Ticketing, Inc.",
        url: config.companies.avenueTicketing,
      },
    ],
    sameAs: [
      config.socials.github,
      config.socials.twitter,
      config.socials.linkedin,
    ],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Web Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mohali",
      addressCountry: "India",
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="sr-only">
        Ayush Chugh is a Full Stack Web Developer based in Mohali, India. He
        specializes in building modern web applications using React, Next.js,
        TypeScript, Node.js, PostgreSQL, and AWS. Currently serving as Team
        Lead at Avenue Ticketing, Inc., Ayush has professional experience
        building production applications since 2021. He is available for
        freelance web development projects and collaborations.
      </p>

      {/* Hero */}
      <section className="border-b-2 border-ink py-8 sm:py-10 fade-up fade-up-delay-1">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md:divide-x md:divide-rule">
          {/* Left column */}
          <div className="md:pr-6 pb-6 md:pb-0 border-b md:border-b-0 border-rule">
            <p className="font-fell italic text-lg text-ink-light leading-snug">
              From the desk of —
            </p>
            <div className="mt-6 space-y-4">
              <StatBlock
                value={codingYears}
                suffix="+"
                label="Years writing code"
              />
              <StatBlock
                value={professionalYears}
                suffix="+"
                label="Years shipping production"
              />
              <StatBlock value="6" label="Companies served" />
            </div>
          </div>

          {/* Center column */}
          <div className="md:px-6 lg:px-8 py-6 md:py-0 border-b md:border-b-0 border-rule">
            <h2 className="font-display font-black text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] text-ink">
              Building the modern web,{" "}
              <em className="font-display italic font-normal">
                one commit at a time.
              </em>
            </h2>
            <p className="drop-cap mt-6 font-serif text-base leading-[1.85] text-ink-light">
              A Full Stack Developer from Mohali, India — currently leading
              engineering at Avenue Ticketing, Inc. The practice is simple:
              take ownership, ship the boring details, and leave every codebase
              a little kinder than I found it. AI is a co-pilot, never a
              replacement for thinking carefully about the problem in front of
              me.
            </p>
          </div>

          {/* Right column */}
          <div className="md:pl-6 pt-6 md:pt-0 space-y-6">
            <PullQuote cite="The practice">
              Code is craft. AI is a chisel. The hand still has to know what
              it&rsquo;s carving.
            </PullQuote>
            <div className="pt-4 border-t border-rule">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-3">
                Currently
              </p>
              <ul className="space-y-3 font-serif text-sm text-ink-light leading-relaxed">
                <li>
                  <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-1">
                    Building
                  </span>
                  <Badge href={config.companies.avenueTicketing}>
                    Avenue Ticketing, Inc.
                  </Badge>
                </li>
                <li>
                  <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-1">
                    Studying
                  </span>
                  <Badge href={config.education.cgcLandran}>
                    CGC Landran · B.Tech CSE
                  </Badge>
                </li>
                <li>
                  <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-1">
                    Volunteering
                  </span>
                  <Badge href={config.volunteering.hackWithIndia}>
                    Hack With India · Technical Lead
                  </Badge>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mt-16 fade-up fade-up-delay-2">
        <SectionHeader label="Section I" title="Featured Work" />
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-rule">
          {featuredWork.map((item, i) => (
            <a
              key={item.company}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border-r border-b border-rule"
            >
              <p
                className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
                  item.featured ? "text-accent" : "text-ink-faint"
                }`}
              >
                {item.label}
              </p>
              <h3 className="mt-3 font-display font-bold text-2xl text-ink leading-tight group-hover:text-accent transition-colors">
                {item.company}
              </h3>
              <p className="mt-1 font-fell italic text-base text-ink-light">
                {item.role}
              </p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-ink-light">
                {item.description}
              </p>
              <p className="mt-5 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                {item.year}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link
            href="/resume"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink editorial-link"
          >
            Read full resume →
          </Link>
        </div>
      </section>

      <OrnamentalDivider />

      {/* Philosophy */}
      <section className="fade-up fade-up-delay-3">
        <SectionHeader label="Section II" title="The Practice" />
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
          <div className="md:pr-6 pb-6 md:pb-0">
            <h3 className="font-display font-bold text-xl text-ink pb-2 border-b border-rule">
              Ownership
            </h3>
            <p className="mt-4 font-serif text-sm leading-[1.85] text-ink-light">
              I take full ownership of every project I touch — that&rsquo;s how
              I became the youngest team lead at Avenue Ticketing. Great code is
              the floor; understanding the business problem is the ceiling.
            </p>
          </div>
          <div className="md:px-6 py-6 md:py-0 border-y md:border-y-0 border-rule">
            <h3 className="font-display font-bold text-xl text-ink pb-2 border-b border-rule">
              AI-augmented craft
            </h3>
            <p className="mt-4 font-serif text-sm leading-[1.85] text-ink-light">
              I lean on AI to ship faster, but never without supervision. Every
              pull request gets reviewed, every architecture decision gets
              argued. Speed without judgment is a liability.
            </p>
          </div>
          <div className="md:pl-6 pt-6 md:pt-0">
            <h3 className="font-display font-bold text-xl text-ink pb-2 border-b border-rule">
              Tech stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "JavaScript",
                "Next.js",
                "React",
                "Redux",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "Shadcn",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Docker",
                "Railway",
                "Stripe",
              ].map((tech) => (
                <Chip key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="mt-16 fade-up fade-up-delay-4">
        <SectionHeader label="The Ledger" title="Contributions" />
        <p className="sr-only">
          Ayush Chugh&apos;s GitHub contribution graph showing daily open-source
          coding activity.
        </p>
        <div className="contributions-calendar border-2 border-ink p-4 sm:p-6 bg-paper-dark">
          <GitHubCalendar
            username="aayushchugh"
            theme={calendarTheme}
            colorScheme="light"
            hideColorLegend={false}
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            labels={{
              totalCount: "{{count}} contributions in {{year}}",
            }}
          />
        </div>
      </section>

      <OrnamentalDivider />

      {/* Latest Writing */}
      {latestPosts.length > 0 && (
        <section className="fade-up fade-up-delay-5">
          <SectionHeader label="Section III" title="Recent Writing" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-rule">
            {latestPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 border-r border-b border-rule"
              >
                <p className="font-display italic text-ink-faint text-lg">
                  No. {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display font-bold text-xl text-ink leading-tight group-hover:text-accent transition-colors">
                  {post.metadata.title}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-ink-light">
                  {post.metadata.summary}
                </p>
                <p className="mt-4 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                  {format(new Date(post.metadata.publishedAt), "MMMM d, yyyy")}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link
              href="/blog"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink editorial-link"
            >
              All writing →
            </Link>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="mt-16 fade-up fade-up-delay-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-0">
          <div className="md:pr-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
              Let&rsquo;s make something{" "}
              <em className="font-display italic font-normal text-accent">
                worth
              </em>{" "}
              reading.
            </h2>
            <p className="mt-5 font-serif text-base leading-relaxed text-ink-light max-w-xl">
              Open for freelance and full-time. I have the bandwidth and the
              focus. Email is the fastest way through.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${config.socials.email}?subject=Hello Ayush!`}
                className="inline-block bg-ink text-paper font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-accent transition-colors"
              >
                Send an email →
              </a>
              <Link
                href="/contact"
                className="inline-block border border-ink text-ink font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                Book a call
              </Link>
            </div>
          </div>
          <div className="md:pl-10 md:border-l border-rule">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint pb-3 border-b border-rule">
              Find me elsewhere
            </p>
            <ul className="mt-4 space-y-3 font-serif text-base">
              <li>
                <a
                  href={config.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={config.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={config.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href={config.socials.community}
                  className="editorial-link"
                >
                  Community Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
