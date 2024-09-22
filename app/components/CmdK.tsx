"use client";
import "./cmdk.css";
import CommandPalette, {
	filterItems,
	getItemIndex,
	useHandleOpenCommandPalette,
} from "react-cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Example = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState("");
	const router = useRouter();

	useHandleOpenCommandPalette(setOpen);

	const filteredItems = filterItems(
		[
			{
				heading: "Navigate",
				id: "home",
				items: [
					{
						id: "home",
						children: "Home",
						icon: "HomeIcon",
						onClick: () => router.push("/"),
					},
					{
						id: "projects",
						children: "Projects",
						icon: "CodeBracketSquareIcon",
						onClick: () => router.push("/projects"),
					},
					{
						id: "resume",
						children: "Resume",
						icon: "BriefcaseIcon",
						// href: '/work',
						onClick: () => router.push("/resume"),
					},
					{
						id: "contact",
						children: "Contact",
						icon: "PhoneIcon",
						// href: '/work',
						onClick: () => router.push("/contact"),
					},
					{
						id: "blog",
						children: "Blog",
						icon: "PencilIcon",
						onClick: () => router.push("/blog"),
					},
				],
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
