import "./global.css";
import type { Metadata } from "next";
import {
  Playfair_Display,
  Libre_Baskerville,
  IM_Fell_English,
  DM_Mono,
} from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PreloadResources } from "./preload";
import Cmdk from "./components/CmdK";
import Footer from "./components/footer";
import Masthead from "./components/masthead";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const fell = IM_Fell_English({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-fell",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushchugh.com"),
  title: {
    default: "Ayush Chugh - Full Stack Developer from India",
    template: "%s | Ayush Chugh",
  },
  description:
    "Ayush Chugh is a Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
  alternates: {
    types: {
      "application/rss+xml": "https://ayushchugh.com/rss",
    },
  },
  openGraph: {
    title: "Ayush Chugh - Full Stack Developer from India",
    description:
      "Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
    url: "https://ayushchugh.com",
    siteName: "Ayush Chugh's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ogs/ogs-bg.png",
        width: 1200,
        height: 630,
        alt: "Ayush Chugh - Full Stack Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ayush Chugh - Full Stack Developer from India",
    card: "summary_large_image",
    creator: "@aayushchugh",
    site: "@aayushchugh",
    description:
      "Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js. Explore projects, blog posts, and professional experience.",
    images: ["/ogs/ogs-bg.png"],
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon-96x96.png",
        href: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-dark-96x96.png",
        href: "/favicon/favicon-dark-96x96.png",
        sizes: "96x96",
        type: "image/png",
        rel: "icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-dark.svg",
        type: "image/svg+xml",
        rel: "icon",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/favicon.ico",
        href: "/favicon/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/favicon-dark.ico",
        href: "/favicon/favicon-dark.ico",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/apple-touch-icon.png",
        href: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/apple-touch-icon-dark.png",
        href: "/favicon/apple-touch-icon-dark.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-paper text-ink",
        playfair.variable,
        libre.variable,
        fell.variable,
        dmMono.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ayush Chugh",
              url: "https://ayushchugh.com",
              description:
                "Full Stack Developer from India specializing in React, Next.js, TypeScript & Node.js.",
              author: {
                "@type": "Person",
                name: "Ayush Chugh",
                url: "https://ayushchugh.com",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-paper text-ink min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-paper focus:text-ink"
        >
          Skip to main content
        </a>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <Cmdk />
          <Masthead />
          <main id="main-content" className="pb-16">
            {children}
          </main>
          <Footer />
          <PreloadResources />
        </div>
      </body>
      {process.env.GOOGLE_ANALYTICS_ID &&
        process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
    </html>
  );
}
