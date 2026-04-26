import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import { config } from "../config/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Contact",
  description:
    "Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
  keywords: [
    "Contact Ayush Chugh",
    "Hire Full Stack Developer",
    "Freelance Developer India",
    "Schedule Meeting Developer",
    "Web Developer for Hire",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Ayush Chugh - Hire a Full Stack Developer",
    description:
      "Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
    url: "https://ayushchugh.com/contact",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Contact Ayush Chugh - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ayush Chugh - Hire a Full Stack Developer",
    description:
      "Get in touch with Ayush Chugh for freelance projects, collaborations, or job opportunities. Reach out via email or schedule a 1:1 meeting.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Contact", url: "https://ayushchugh.com/contact" },
  ]);

  return (
    <section className="pt-12 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="fade-up text-center pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Volume I · The Letter
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] text-ink leading-none">
          Contact
        </h1>
      </div>

      <p className="sr-only">
        Contact Ayush Chugh, Full Stack Developer available for freelance web
        development projects, consulting, and collaboration. Based in Mohali,
        India.
      </p>

      <div className="mt-12 sm:mt-16 fade-up fade-up-delay-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-0">
        <div className="md:pr-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-ink">
            Let&rsquo;s make something{" "}
            <em className="font-display italic font-normal text-accent">
              worth
            </em>{" "}
            reading.
          </h2>
          <p className="mt-6 font-serif text-base leading-[1.85] text-ink-light max-w-xl">
            Whether it&rsquo;s a freelance project, a full-time conversation, or
            a quick chat about something you&rsquo;re building — the inbox is
            open. The fastest way through is email; for a real conversation,
            book a slot on Topmate.
          </p>

          <div className="mt-8 space-y-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
              Direct
            </p>
            <a
              href={`mailto:${config.socials.email}?subject=Hello Ayush!`}
              className="block font-display text-2xl sm:text-3xl text-ink hover:text-accent transition-colors editorial-link"
            >
              {config.socials.email}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${config.socials.email}?subject=Hello Ayush!`}
              className="inline-block bg-ink text-paper font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-accent transition-colors"
            >
              Send an email →
            </a>
            <a
              href={config.socials.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-ink text-ink font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              Book a 1:1 on Topmate
            </a>
          </div>
        </div>

        <div className="md:pl-12 md:border-l border-rule">
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
              <a
                href={config.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                Discord
              </a>
            </li>
          </ul>
          <p className="mt-10 pt-4 border-t border-rule font-fell italic text-base text-ink-light leading-snug">
            &ldquo;A short letter usually takes longer to write than a long
            one.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
