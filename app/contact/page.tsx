import Image from "next/image";

const socials = [
	{
		name: "Email",
		url: "mailto:hey@ayushchugh.com",
		display: "hey@ayushchugh.com",
		logo: "/logos/mail.svg", // Path to the email logo
	},
	{
		name: "GitHub",
		url: "https://github.com/aayushchugh",
		display: "github.com/aayushchugh",
		logo: "/logos/github.svg", // Path to the GitHub logo
	},
	{
		name: "X",
		url: "https://x.com/ayushchugh2006",
		display: "x.com/ayushchugh2006",
		logo: "/logos/x.svg", // Path to the X logo
	},
	{
		name: "Peerlist",
		url: "https://peerlist.io/aayushchugh",
		display: "peerlist.io/aayushchugh",
		logo: "/logos/peerlist.svg", // Path to the Peerlist logo
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ayushchugh2006/",
		display: "linkedin.com/in/ayushchugh2006",
		logo: "/logos/linkedin.svg", // Path to the LinkedIn logo
	},
	{
		name: "Dev.to",
		url: "https://dev.to/aayushchugh",
		display: "dev.to/aayushchugh",
		logo: "/logos/dev.svg", // Path to the Dev.to logo
	},
];

export default function ContactPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
				Contact 📧
			</h1>

			{/* Social Links */}
			<div className="prose prose-neutral dark:prose-invert">
				<p>Feel free to reach out to me via any of the following platforms:</p>

				<ul className="pl-0">
					{socials.map((social, index) => (
						<li key={index} className="flex items-center mb-4">
							<Image
								src={social.logo}
								alt={social.name}
								width={24}
								height={24}
								className="!mr-2"
							/>

							<div className="flex items-center not-prose">
								<strong>{social.name}:</strong>{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={social.url}
									className="ml-2 underline"
								>
									{social.display}
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
