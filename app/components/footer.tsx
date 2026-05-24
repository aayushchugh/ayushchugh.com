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
		<footer className="mt-8" aria-label="Footer">
			<h2 className="sr-only">Connect with Ayush Chugh on social media</h2>
			<p className="sr-only">
				Follow Ayush Chugh on GitHub, X (Twitter), LinkedIn, and Discord. Subscribe via RSS feed or send an email to get in touch about freelance web development projects.
			</p>
			<nav aria-label="Social media links" className="flex justify-center">
				<ul className="flex gap-4">
					{socialLinks.map((social, index) => (
					<li key={index}>
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${social.name} - Connect with Ayush Chugh`}
							className="inline-block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
						>
							<social.logo size={24} aria-hidden="true" />
						</a>
					</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
