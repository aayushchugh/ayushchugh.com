function Badge(props) {
	return (
		<a
			{...props}
			target="_blank"
			className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
		/>
	);
}

export default Badge;
