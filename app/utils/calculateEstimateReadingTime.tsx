const calculateEstimateReadingTime = (content: string): string => {
	const wordsPerMinute = 200;
	const textLength = content.split(" ").length;
	const minutes = textLength / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return `${readTime} min`;
};

export default calculateEstimateReadingTime;
