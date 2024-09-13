"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
					className="flex flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-center justify-between"
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
					{currentRoute === "/resume" && (
						<div
							className="border-solid border-2 border-slate-500 p-2 rounded-md hover:bg-slate-800 hover:text-white hover:cursor-pointer flex gap-1.5"
							onClick={handlePrint}
						>
							print <span>🖨️</span>
						</div>
					)}
				</nav>
			</div>
		</aside>
	);
}
