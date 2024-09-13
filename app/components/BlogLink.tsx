import { Suspense } from "react";
import ArrowIcon from "./ArrowIcon";
import { getViewsCount } from "../db/queries";
import ViewCounter from "../blog/view-counter";

async function Views({ slug }: { slug: string }) {
	let views = await getViewsCount();
	return <ViewCounter allViews={views} slug={slug} />;
}

function BlogLink({ slug, name }) {
	return (
		<div className="group">
			<a
				href={`/blog/${slug}`}
				className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
			>
				<div className="flex flex-col">
					<p className="font-medium text-neutral-900 dark:text-neutral-100">
						{name}
					</p>
					<Suspense fallback={<p className="h-6" />}>
						<Views slug={slug} />
					</Suspense>
				</div>
				<div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
					<ArrowIcon />
				</div>
			</a>
		</div>
	);
}

export default BlogLink;
