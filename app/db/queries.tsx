"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getBlogViews() {
	if (!process.env.POSTGRES_URL) {
		return [];
	}

	noStore();
	let data = await sql`
    SELECT count
    FROM views
  `;

	return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount() {
	if (!process.env.POSTGRES_URL) {
		return [];
	}

	noStore();
	let data = await sql`
    SELECT slug, count
    FROM views
  `;

	return data.rows as { slug: string; count: number }[];
}

export async function getGuestbookEntries() {
	if (!process.env.POSTGRES_URL) {
		return [];
	}

	noStore();
	let entries = await sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
	return entries.rows;
}
