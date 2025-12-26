"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ISTClock from "./ist-clock";
import Chip from "./chip";
import { config } from "../config/config";

export function Navbar() {
	const handlePrint = () => {
		window.print();
	};
	const currentRoute = usePathname();

	return (
		<aside className="-ml-[8px] mb-8 tracking-tight no-print">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-col sm:flex-row relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative gap-3 sm:gap-0 sm:items-center sm:justify-between"
					id="nav"
				>
					<div className="flex flex-row flex-wrap space-x-0">
						{config.navigation.map(({ path, name }) => {
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
					<div className="flex items-center gap-3 flex-wrap">
						<ISTClock />
						{currentRoute === "/resume" && (
							<Chip
								onClick={handlePrint}
								className="flex items-center gap-1.5 whitespace-nowrap"
							>
								print <span>🖨️</span>
							</Chip>
						)}
					</div>
				</nav>
			</div>
		</aside>
	);
}
