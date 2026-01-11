"use client";

import { useEffect, useState } from "react";

// Extend the Window interface to include Blackbox
declare global {
	interface Window {
		Blackbox?: {
			openFeedback: () => void;
		};
	}
}

export default function FeedbackButton() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Check if Blackbox widget is loaded
		const checkBlackbox = setInterval(() => {
			if (typeof window !== "undefined" && window.Blackbox) {
				setIsLoaded(true);
				clearInterval(checkBlackbox);
			}
		}, 100);

		// Cleanup interval after 10 seconds
		const timeout = setTimeout(() => {
			clearInterval(checkBlackbox);
		}, 10000);

		return () => {
			clearInterval(checkBlackbox);
			clearTimeout(timeout);
		};
	}, []);

	const handleFeedback = () => {
		if (typeof window !== "undefined" && window.Blackbox) {
			window.Blackbox.openFeedback();
		}
	};

	return (
		<button
			onClick={handleFeedback}
			disabled={!isLoaded}
			className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			aria-label="Send Feedback"
		>
			Send Feedback
		</button>
	);
}
