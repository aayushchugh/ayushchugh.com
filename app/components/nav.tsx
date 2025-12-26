"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ISTClock from "./ist-clock";
import Chip from "./chip";

const navItems = {
	"/": {
		name: "Home",
	},
	"/projects": {
		name: "Projects",
	},
	"/resume": {
		name: "Resume",
	},
	"/community": {
		name: "Community",
	},
	"/contact": {
		name: "Contact",
	},
	"/blog": {
		name: "Blog",
	},
};

export function Navbar() {
	const handlePrint = () => {
		window.print();
	};
	const currentRoute = usePathname();

	return (
		<aside className="-ml-[8px] mb-8 tracking-tight no-print">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-wrap relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-center justify-between gap-y-3"
					id="nav"
				>
					<div className="flex flex-row space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
								>
									{name}
								</Link>
							);
						})}
					</div>
					<div className="flex items-center gap-3 flex-shrink-0">
						<ISTClock />
						{currentRoute === "/resume" && (
							<Chip onClick={handlePrint} className="flex items-center gap-1.5 whitespace-nowrap">
								print <span>🖨️</span>
							</Chip>
						)}
					</div>
				</nav>
			</div>
		</aside>
	);
}
