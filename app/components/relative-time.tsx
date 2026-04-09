"use client";

import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
	dateString: string;
};

// Compute after mount so "now" is the viewer's clock, not static/SSR build time.
export default function RelativeTime({ dateString }: Props) {
	const [label, setLabel] = useState("");

	useEffect(() => {
		setLabel(
			formatDistanceToNow(new Date(dateString), { addSuffix: true }),
		);
	}, [dateString]);

	return (
		<span suppressHydrationWarning>
			{label || "\u2026"}
		</span>
	);
}
