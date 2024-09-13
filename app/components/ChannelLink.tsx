import Image from "next/image";
import { Suspense } from "react";
import ArrowIcon from "./ArrowIcon";

function ChannelLink({ img, link, name }) {
	return (
		<div className="group flex w-full">
			<a
				href={link}
				target="_blank"
				className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
			>
				<div className="flex items-center space-x-3">
					<div className="relative h-16">
						<Image
							alt={name}
							src={img}
							height={64}
							width={64}
							sizes="33vw"
							className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
							priority
						/>
						<div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
							<svg width="15" height="11" role="img" aria-label="YouTube logo">
								<use href="/sprite.svg#youtube" />
							</svg>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="font-medium text-neutral-900 dark:text-neutral-100">
							{name}
						</p>
						<Suspense fallback={<p className="h-6" />}></Suspense>
					</div>
				</div>
				<div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
					<ArrowIcon />
				</div>
			</a>
		</div>
	);
}

export default ChannelLink;
