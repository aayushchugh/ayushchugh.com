function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-rule bg-paper-dark px-1.5 py-0.5 text-sm inline-flex items-center leading-4 text-ink no-underline font-serif hover:border-accent hover:text-accent transition-colors"
    />
  );
}

export default Badge;
