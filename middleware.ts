import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const host = request.headers.get("host") || "";
	if (host.startsWith("www.")) {
		const newUrl = new URL(request.url);
		newUrl.host = host.replace("www.", "");
		return NextResponse.redirect(newUrl, 301);
	}
}

export const config = {
	matcher: "/((?!_next/static|_next/image|favicon).*)",
};
