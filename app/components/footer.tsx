import {
  DiscordLogo,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  RssSimple,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { FC } from "react";
import { config } from "../config/config";

const socialLinks = [
  {
    name: "Email",
    url: `mailto:${config.socials.email}`,
    logo: EnvelopeSimple,
  },
  {
    name: "GitHub",
    url: config.socials.github,
    logo: GithubLogo,
  },
  {
    name: "X",
    url: config.socials.twitter,
    logo: XLogo,
  },
  {
    name: "LinkedIn",
    url: config.socials.linkedin,
    logo: LinkedinLogo,
  },
  {
    name: "Discord",
    url: config.socials.discord,
    logo: DiscordLogo,
  },
  {
    name: "RSS Feed",
    url: "/rss",
    logo: RssSimple,
  },
];

const Footer: FC = () => {
  return (
    <footer className="mt-16 no-print" aria-label="Footer">
      <h2 className="sr-only">Connect with Ayush Chugh on social media</h2>

      {/* Social row */}
      <nav
        aria-label="Social media links"
        className="border-t border-rule py-6"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} - Connect with Ayush Chugh`}
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-light hover:text-accent transition-colors"
              >
                <social.logo size={14} aria-hidden="true" />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Colophon */}
      <div className="border-t-[3px] border-double border-ink py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Ayush Chugh · Mohali, India
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
          Set in Playfair Display &amp; Libre Baskerville
        </span>
      </div>
    </footer>
  );
};

export default Footer;
