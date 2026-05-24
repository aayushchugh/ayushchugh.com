"use client";
import "./cmdk.css";
import CommandPalette, {
	filterItems,
	getItemIndex,
	useHandleOpenCommandPalette,
} from "react-cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { config } from "../config/config";

const Example = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState("");
	const router = useRouter();

	useHandleOpenCommandPalette(setOpen);

	const iconMap: Record<string, any> = {
		"/": "HomeIcon",
		"/projects": "CodeBracketSquareIcon",
		"/resume": "BriefcaseIcon",
		"/contact": "PhoneIcon",
		"/blog": "PencilIcon",
		"/community": "UsersIcon",
	};

	const filteredItems = filterItems(
		[
			{
				heading: "Navigate",
				id: "navigation",
				items: config.navigation.map(({ path, name }) => ({
					id: path,
					children: name,
					icon: iconMap[path] || ("DocumentIcon" as any),
					onClick: () => router.push(path),
				})),
			},
		],
		search
	);

	return (
		<CommandPalette
			onChangeSearch={setSearch}
			onChangeOpen={setOpen}
			search={search}
			isOpen={open}
			page={"root"}
			placeholder="Looking for something?"
		>
			<CommandPalette.Page id="root" onEscape={() => setOpen(false)}>
				{filteredItems.length ? (
					filteredItems.map(list => (
						<CommandPalette.List key={list.id} heading={list.heading}>
							{list.items.map(({ id, ...rest }) => (
								<CommandPalette.ListItem
									key={id}
									index={getItemIndex(filteredItems, id)}
									showType={false}
									{...rest}
								/>
							))}
						</CommandPalette.List>
					))
				) : (
					<CommandPalette.FreeSearchAction />
				)}
			</CommandPalette.Page>

			<CommandPalette.Page children id="projects">
				{/* Projects page */}
			</CommandPalette.Page>
		</CommandPalette>
	);
};

export default Example;
