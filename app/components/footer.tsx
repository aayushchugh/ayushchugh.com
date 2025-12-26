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
		<>
			<footer className="mt-8 flex justify-center">
				<ul className="flex gap-4">
					{socialLinks.map((social, index) => (
						<li key={index}>
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
							>
								<social.logo size={24} />
							</a>
						</li>
					))}
				</ul>
			</footer>
		</>
	);
};

export default Footer;
