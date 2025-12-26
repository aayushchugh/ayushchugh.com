"use client";

import { useEffect, useState } from "react";
import { config } from "../config/config";

export default function ExperienceCounter() {
	const [codingYears, setCodingYears] = useState<number>(0);
	const [professionalYears, setProfessionalYears] = useState<number>(0);

	useEffect(() => {
		const calculateYears = () => {
			const codingStart = new Date(config.profile.codingStartDate);
			const professionalStart = new Date(config.profile.professionalStartDate);
			const now = new Date();

			const codingDiff = now.getTime() - codingStart.getTime();
			const codingYearsCalc = Math.floor(codingDiff / (1000 * 60 * 60 * 24 * 365.25));

			const professionalDiff = now.getTime() - professionalStart.getTime();
			const professionalYearsCalc = Math.floor(professionalDiff / (1000 * 60 * 60 * 24 * 365.25));

			setCodingYears(codingYearsCalc);
			setProfessionalYears(professionalYearsCalc);
		};

		calculateYears();
		// Update every day
		const interval = setInterval(calculateYears, 1000 * 60 * 60 * 24);

		return () => clearInterval(interval);
	}, []);

	return (
		<span className="font-medium text-neutral-800 dark:text-neutral-200">
			{codingYears}+ years of coding and {professionalYears}+ years of professional experience
		</span>
	);
}
