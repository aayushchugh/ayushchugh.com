import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import SectionHeader from "../components/section-header";
import Badge from "../components/Badge";
import { config } from "../config/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Community",
  description:
    "Join the Ravix Studio Discord community. Collaborate on open-source projects, share ideas, and connect with developers led by Ayush Chugh.",
  keywords: [
    "Ravix Studio Community",
    "Developer Discord",
    "Open Source Community",
    "Ayush Chugh Discord",
    "Web Developer Community India",
    "Collaborate on Projects",
  ],
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "Join the Ravix Studio Developer Community",
    description:
      "Collaborate on open-source projects, share ideas, and connect with developers led by Ayush Chugh on Discord.",
    url: "https://ayushchugh.com/community",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Ravix Studio Developer Community",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Ravix Studio Developer Community",
    description:
      "Collaborate on open-source projects, share ideas, and connect with developers led by Ayush Chugh on Discord.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

const benefits = [
  {
    label: "Direct access",
    body: "Talk shop with me and a small circle of builders, in real time.",
  },
  {
    label: "Collaboration",
    body: "Pair on open projects and contribute to the SaaS we&rsquo;re shipping at Ravix.",
  },
  {
    label: "Knowledge sharing",
    body: "Trade notes on TypeScript, infra, design — whatever you&rsquo;re currently stuck on.",
  },
  {
    label: "Project updates",
    body: "Get the dispatches before anyone else when we ship something new.",
  },
];

export default function CommunityPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Community", url: "https://ayushchugh.com/community" },
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
          Volume I · The Round Table
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] text-ink leading-none">
          Community
        </h1>
        <p className="mt-4 font-fell italic text-lg sm:text-xl text-ink-light max-w-2xl mx-auto">
          A small Discord, a few good builders, and a standing invitation.
        </p>
      </div>

      <p className="sr-only">
        Join the Ravix Studio developer community on Discord led by Ayush Chugh.
        Collaborate on open-source web development projects, share knowledge
        about React, Next.js, TypeScript, and Node.js, and connect with
        developers from around the world.
      </p>

      <section className="mt-12 fade-up fade-up-delay-1">
        <SectionHeader label="The Invitation" title="Why join" />
        <div className="prose">
          <p>
            Want to collaborate, ship, or just talk shop? Join the{" "}
            <Badge href={config.companies.ravixStudio}>Ravix Studio</Badge>{" "}
            Discord — a small server for developers, designers, and the
            stubbornly curious.
          </p>
        </div>
      </section>

      <section className="mt-10 fade-up fade-up-delay-2">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-rule">
          {benefits.map((item) => (
            <div key={item.label} className="p-6 border-r border-b border-rule">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                {item.label}
              </p>
              <p
                className="mt-3 font-serif text-sm leading-[1.85] text-ink-light"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 fade-up fade-up-delay-3 text-center">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight">
          Ready to <em className="font-display italic font-normal">join</em>?
        </h2>
        <p className="mt-3 font-serif text-base text-ink-light max-w-xl mx-auto">
          One click away. The link below opens an invite to the server.
        </p>
        <div className="mt-6">
          <a
            href={config.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-paper font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-accent transition-colors"
          >
            Join the Discord →
          </a>
        </div>
      </section>
    </section>
  );
}
