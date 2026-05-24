"use client";

import { useEffect, useState } from "react";
import Chip from "./chip";

export default function ISTClock() {
	const [time, setTime] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			const istTime = new Date(
				now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
			);
			const hours = istTime.getHours().toString().padStart(2, "0");
			const minutes = istTime.getMinutes().toString().padStart(2, "0");
			setTime(`${hours}:${minutes}`);
		};

		// Update immediately
		updateTime();

		// Update every second
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!time) return null;

	return (
		<Chip className="flex items-center gap-2 whitespace-nowrap">
			<span>IST</span>
			<span className="font-mono tabular-nums">{time}</span>
		</Chip>
	);
}
