import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import SectionHeader from "../components/section-header";
import OrnamentalDivider from "../components/ornamental-divider";
import { config } from "../config/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: "Resume",
  description:
    "Ayush Chugh's resume: Team Lead at Avenue Ticketing, Inc. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
  keywords: [
    "Ayush Chugh Resume",
    "Full Stack Developer Resume",
    "Web Developer CV",
    "React Developer Resume",
    "Software Engineer Resume",
    "Work Experience",
    "Hire Developer India",
    "TypeScript Developer Resume",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "article",
    url: "https://ayushchugh.com/resume",
    title: "Resume - Full Stack Developer Experience | Ayush Chugh",
    siteName: "Ayush Chugh's Portfolio",
    description:
      "Team Lead at Avenue Ticketing, Inc. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/business-card.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chugh's Full Stack Developer Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Full Stack Developer Experience | Ayush Chugh",
    description:
      "Team Lead at Avenue Ticketing, Inc. Full Stack Developer experienced in React, Next.js, TypeScript & Node.js.",
    images: ["https://cdn.ayushchugh.com/open-graph/business-card.png"],
    creator: "@aayushchugh",
    site: "@aayushchugh",
  },
};

const resumeData = {
  workExperience: [
    {
      company: "Avenue Ticketing, Inc.",
      logo: "https://cdn.ayushchugh.com/logos/avenue.jpeg",
      location: "Remote",
      website: config.companies.avenueTicketing,
      positions: [
        {
          role: "Team Lead",
          period: "Aug 2025 - Present",
          workType: "Full-time",
          technologies: [
            "NodeJS",
            "TypeScript",
            "PostgreSQL",
            "AWS",
            "Stripe",
            "Docker",
            "Railway",
          ],
          responsibilities: [
            "Developing complex end-to-end features including payment processing, event management, and user authentication systems",
            "Building advanced TypeScript modules with complex business logic for ticket validation, pricing calculations",
            "Implementing sophisticated error handling and data validation patterns across the entire application stack",
            "Creating reusable components and utilities that handle complex state management and API integrations",
            "Identifying and fixing edge cases in the codebase",
            "Implementing monitoring and logging solutions for the application",
          ],
        },
        {
          role: "Full Stack Developer",
          period: "Apr 2025 - Aug 2025",
          workType: "Part-time",
          technologies: ["NodeJS", "TypeScript", "PostgreSQL", "AWS", "Stripe"],
          responsibilities: [
            "Developing and maintaining a ticketing platform for event organizers and attendees.",
            "Implementing secure authentication and authorization systems for organizers and users.",
            "Optimizing server performance and implementing monitoring solutions for high-traffic events.",
            "Re-writing legacy code to improve code quality and maintainability.",
            "Creating and maintaining documentation for the codebase and processes.",
          ],
        },
      ],
    },
    {
      company: "Ravix Studio",
      logo: "https://cdn.ayushchugh.com/logos/ravix-dark.png",
      location: "On-site",
      website: config.companies.ravixStudio,
      positions: [
        {
          role: "Co-founder & CTO",
          period: "Nov 2025 - Present",
          workType: "Full-time",
          technologies: [
            "NextJS",
            "TypeScript",
            "NodeJS",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Railway",
          ],
          responsibilities: ["Building a lot of cool stuff."],
        },
      ],
    },
    {
      company: "Vibranium Soft",
      logo: "https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg",
      location: "Remote",
      website: config.companies.vibraniumSoft,
      positions: [
        {
          role: "Frontend Developer",
          period: "December 2023 - July 2025",
          workType: "Freelance",
          technologies: [
            "NextJS",
            "Redux",
            "TypeScript",
            "Tailwind CSS",
            "MUI",
          ],
          responsibilities: [
            "Developing and maintaining a B2B flight booking platform.",
            "Collaborating with cross-functional teams to deliver optimized solutions for the travel industry.",
            "Implementing features for flight search, booking management, and user onboarding.",
            "Building a user-friendly interface to enhance customer experience.",
            "Created responsive layouts for different screen sizes and devices.",
            "Used pooling and caching strategies to improve performance and reduce load times.",
            "Optimized SEO by implementing proper server side rendering",
          ],
        },
      ],
    },
    {
      company: "Keizer Works",
      logo: "https://cdn.ayushchugh.com/logos/keizer.svg",
      location: "Remote",
      website: config.companies.keizerWorks,
      positions: [
        {
          role: "SDE",
          period: "November 2024 - April 2025",
          workType: "Freelance",
          technologies: [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "NodeJS",
            "PostgreSQL",
            "Shadcn",
          ],
          responsibilities: [
            "Actively maintaining and contributing to open-source projects that drive innovation and collaboration within the tech community.",
            "Developing scalable and robust applications to meet client needs and deliver impactful solutions.",
            "Assisting in managing projects from inception to delivery, ensuring timelines, quality standards, and client expectations are met.",
            "Supporting the operational and strategic growth of the startup by streamlining workflows and contributing to decision-making processes.",
            "Worked with external clients of the startup and worked on internal products too",
          ],
        },
      ],
    },
    {
      company: "Tap Invest",
      logo: "https://cdn.ayushchugh.com/logos/tapico.png",
      location: "Remote",
      website: config.companies.tapInvest,
      positions: [
        {
          role: "Frontend Developer",
          period: "Apr 2024 - Nov 2024",
          workType: "Part-time",
          technologies: [
            "NextJS",
            "React",
            "TypeScript",
            "MUI",
            "Tailwind CSS",
          ],
          responsibilities: [
            "Developed internal dashboard tools for the startup using React and NextJS, improving operational efficiency",
            "Translate design concepts into dynamic and responsive web applications.",
            "Optimize performance and ensure accessibility to deliver user-centric solutions.",
            "Created complex reusable components to speed up development and reduce maintenance costs.",
          ],
        },
      ],
    },
    {
      company: "Shri Property",
      logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
      location: "Remote",
      website: config.companies.shriProperty,
      positions: [
        {
          role: "Full-Stack Developer",
          period: "Dec 2021 - May 2023",
          workType: "Freelance",
          technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "TypeScript",
          ],
          responsibilities: [
            "Developed a real estate platform that simplified the process of finding and listing properties.",
            "Led the complete development of the website, from UI/UX design to backend integrations.",
            "Created a fully-featured admin dashboard for operations and management.",
            "Each property is listed after going through a proper verification process by operations team.",
          ],
        },
      ],
    },
    {
      company: "A2INFINITE",
      logo: "https://cdn.ayushchugh.com/logos/a2infinite.png",
      location: "Remote",
      website: "https://a2infinite.com",
      positions: [
        {
          role: "Frontend Developer",
          period: "Feb 2021 - May 2021",
          workType: "Freelance",
          technologies: ["HTML", "CSS", "JavaScript", "SCSS"],
          responsibilities: [
            "Developed and maintained a platform that offers downloadable and printable practice worksheets for students.",
            "Collaborated with the design and backend teams to ensure smooth platform functionality and user experience.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "Chandigarh Group of Colleges, Landran, Punjab",
      logo: "https://cdn.ayushchugh.com/logos/cgc-landran.png",
      degree:
        "Bachelor of Technology (B.Tech), Computer Science and Engineering",
      period: "2025 - 2028",
      location: "Mohali, India",
    },
    {
      institution:
        "Chandigarh College of Engineering & Technology (Diploma Wing)",
      logo: "https://cdn.ayushchugh.com/logos/ccet.png",
      degree: "Diploma, Computer Science and Engineering",
      period: "2022 - 2025",
      location: "Chandigarh, India",
    },
    {
      institution: "Govt Model School Sector 35D Chandigarh India",
      logo: "",
      degree: "10th, School",
      period: "2021 - 2022",
      location: "Chandigarh, India",
    },
  ],
  volunteering: [
    {
      organization: "Hack With India - Chapter CEC-CGC",
      logo: "https://cdn.ayushchugh.com/logos/hwi.jpeg",
      role: "Technical Lead",
      period: "Aug 2025 - Present",
      location: "Chandigarh, India",
      responsibilities: [
        "Responsible for managing all the technical aspects of the club and helping students learn and grow in the field of technology.",
      ],
    },
    {
      organization: "Innovation Club, CCET",
      logo: "https://cdn.ayushchugh.com/logos/innovationclub.png",
      role: "Team Lead",
      period: "Oct 2023 - Nov 2024",
      location: "Chandigarh, India",
      responsibilities: [
        "Leading a team to innovate and implement technology projects in the institution.",
        "Organizing hackathons and coding competitions, encouraging student participation and skills development.",
      ],
    },
  ],
};

export default function WorkPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://ayushchugh.com" },
    { name: "Resume", url: "https://ayushchugh.com/resume" },
  ]);

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Ayush Chugh",
      url: "https://ayushchugh.com",
      jobTitle: "Full Stack Web Developer",
      worksFor: [
        {
          "@type": "Organization",
          name: "Avenue Ticketing, Inc.",
          url: config.companies.avenueTicketing,
        },
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Chandigarh Group of Colleges, Landran",
        },
        {
          "@type": "EducationalOrganization",
          name: "Chandigarh College of Engineering & Technology",
        },
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
  };

  return (
    <section className="pt-12 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd),
        }}
      />

      <div className="fade-up text-center pb-10 border-b-2 border-ink">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Volume I · The Record
        </p>
        <h1 className="mt-3 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-[-0.01em] text-ink leading-none">
          Curriculum Vit<em className="font-display italic font-normal">æ</em>
        </h1>
        <p className="mt-4 font-fell italic text-lg sm:text-xl text-ink-light max-w-2xl mx-auto">
          Where I&rsquo;ve worked, what I&rsquo;ve learned, and who I&rsquo;ve
          served along the way.
        </p>
      </div>

      <p className="sr-only">
        Professional resume of Ayush Chugh, a Full Stack Web Developer from
        Mohali, India. Currently Team Lead at Avenue Ticketing, Inc.
        Experienced in React, Next.js, TypeScript, Node.js, PostgreSQL, AWS,
        and Docker.
      </p>

      <section className="mt-12 fade-up fade-up-delay-1">
        <SectionHeader label="Section I" title="Work Experience" />
        <div>
          {resumeData.workExperience.map((job, index) => (
            <WorkExperienceItem key={index} job={job} />
          ))}
          <div className="border-t border-rule" />
        </div>
      </section>

      <OrnamentalDivider />

      <section className="fade-up fade-up-delay-2">
        <SectionHeader label="Section II" title="Education" />
        <div>
          {resumeData.education.map((edu, index) => (
            <EducationItem key={index} edu={edu} />
          ))}
          <div className="border-t border-rule" />
        </div>
      </section>

      <OrnamentalDivider />

      <section className="fade-up fade-up-delay-3">
        <SectionHeader label="Section III" title="Volunteering" />
        <div>
          {resumeData.volunteering.map((volunteer, index) => (
            <VolunteeringItem key={index} volunteer={volunteer} />
          ))}
          <div className="border-t border-rule" />
        </div>
      </section>
    </section>
  );
}
