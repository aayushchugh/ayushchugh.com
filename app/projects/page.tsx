import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import ProjectCard from "../components/project-card";
import SectionHeader from "../components/section-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Projects",
  description:
    "Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
  keywords: [
    "Ayush Chugh Projects",
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "Open Source",
    "Portfolio",
    "Software Projects",
    "Full Stack Projects",
    "TypeScript Projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects - Full Stack Web Applications | Ayush Chugh",
    description:
      "Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
    url: "https://ayushchugh.com/projects",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chugh's Full Stack Projects Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Full Stack Web Applications | Ayush Chugh",
    description:
      "Explore projects by Ayush Chugh: Worldtravels (2k+ daily users), Invoicen, Shriproperty, and more. Full stack web apps built with React, Next.js & Node.js.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

const projectsData = [
  {
    project: "Worldtravels (2k+ active users daily)",
    logo: "https://cdn.ayushchugh.com/logos/worldtravels.png",
    description:
      "A B2B flight booking platform for travel agencies to manage bookings and payments. I built the end-to-end frontend for the platform.",
    technologies: ["React", "Redux", "TypeScript", "NextJS"],
    website: "https://www.worldtravelsonline.in/en",
    category: "Frontend",
    workType: "Freelance",
  },
  {
    project: "Repo Command",
    logo: "https://cdn.ayushchugh.com/logos/repository-commander.svg",
    description:
      "A Github app that lets you automate tasks by adding labels and using `/` commands in comments to approve or merge pull requests.",
    technologies: ["Node.js", "TypeScript", "Probot"],
    website: "https://github.com/marketplace/repo-command",
    category: "Backend",
    workType: "Personal",
  },
  {
    project: "EJS Snippets and Color Highlighting for VS Code",
    logo: "https://cdn.ayushchugh.com/logos/ejs-language-snippets-and-color-highlighting-vscode.png",
    description:
      "Adds snippets and syntax highlighting for EJS templates. 7,000+ downloads on the VS Code marketplace.",
    technologies: ["JavaScript", "vsce"],
    website:
      "https://marketplace.visualstudio.com/items/?itemName=AyushChugh.ejs-snippets-and-color-highlighting",
    category: "Tools",
    workType: "Personal",
  },
  {
    project: "Invoicen",
    logo: "https://cdn.ayushchugh.com/logos/invoicen-icon.png",
    description:
      "A simple invoice generator for freelancers, small businesses, and enterprises.",
    technologies: ["NextJS", "shadcn", "TypeScript", "Tailwind"],
    website: "https://invoicen.ayushchugh.com",
    category: "Full Stack",
    workType: "Personal",
  },
  {
    project: "Shriproperty",
    logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
    description:
      "A real estate platform that simplifies the process of finding and listing properties.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    website: "https://www.shriproperty.com",
    category: "Full Stack",
    workType: "Freelance",
  },
  {
    project: "A2INFINITE",
    logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
    description:
      "A platform for downloadable practice worksheets for students.",
    technologies: ["HTML", "CSS", "JavaScript"],
    website: "https://a2infinite.com",
    category: "Frontend",
    workType: "Freelance",
  },
  {
    project: "FlipTimer",
    description:
      "A countdown timer that lets users set a target date and displays time left in months, weeks, days, hours, minutes, and seconds.",
    technologies: ["NextJS", "TypeScript", "shadcn", "framer-motion"],
    website: "https://fliptimer.ayushchugh.com",
    category: "Frontend",
    workType: "Personal",
  },
  {
    project: "Sky At Night",
    logo: "https://cdn.ayushchugh.com/logos/sky-at-night.png",
    description: "A dark theme for VS Code.",
    technologies: ["JavaScript", "vsce"],
    website:
      "https://marketplace.visualstudio.com/items?itemName=AyushChugh.sky-at-night",
    category: "Tools",
    workType: "Personal",
  },
];

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ayush Chugh's Projects",
    description:
      "Portfolio of projects built by Ayush Chugh, including web applications and open-source contributions.",
    url: "https://ayushchugh.com/projects",
    author: {
      "@type": "Person",
      name: "Ayush Chugh",
      url: "https://ayushchugh.com",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectsData.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.project,
          description: project.description,
          applicationCategory: "WebApplication",
          url: project.website,
        },
      })),
    },
  };

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Projects", url: "https://ayushchugh.com/projects" },
  ]);

  return (
    <section className="pt-12 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <div className="fade-up text-center pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Volume I · The Index
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] text-ink leading-none">
          Projects
        </h1>
        <p className="mt-4 font-fell italic text-lg sm:text-xl text-ink-light max-w-2xl mx-auto">
          A running ledger of work shipped — freelance, full-time, and the
          personal hours in between.
        </p>
      </div>

      <p className="sr-only">
        A showcase of web development projects built by Ayush Chugh, including
        full stack applications, frontend projects, backend services, and
        developer tools. Projects are built using technologies like React,
        Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.
      </p>

      <div className="mt-12 fade-up fade-up-delay-1">
        <SectionHeader label="Section I" title="Selected Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-rule">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.project}
              title={project.project}
              logo={project.logo}
              description={project.description}
              technologies={project.technologies}
              website={project.website}
              category={project.category}
              workType={project.workType}
              issueNumber={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
