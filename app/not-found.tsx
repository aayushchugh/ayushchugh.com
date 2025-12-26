import Link from "next/link";
import type { Metadata } from "next";
import { config } from "./config/config";

export const metadata: Metadata = {
	title: "404 - Page Not Found",
	description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
	return (
		<section>
			<div className="mb-8">
				<h1 className='font-medium text-2xl mb-4 tracking-tight font-["monospace"]'>
					Oops! Page Not Found 🤷‍♂️
				</h1>
				<div className="prose prose-neutral dark:prose-invert">
					<p>
						Looks like you've hit a route that doesn't exist. Maybe I forgot to
						build this page, or you clicked on a broken link. Either way, here's
						where you can go instead:
					</p>
				</div>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<ul>
					{config.navigation.map(({ path, name }) => (
						<li key={path}>
							<Link href={path} className="underline hover:no-underline">
								{name}
							</Link>
						</li>
					))}
				</ul>
				<p>
					Or if you think this is a bug,{" "}
					<a
						href="https://github.com/aayushchugh/ayushchugh.com/issues"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						let me know on GitHub
					</a>
					.
				</p>
			</div>
		</section>
	);
}
