import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

// Config to match the routes that the middleware should be run for
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      // Ignore prefetch requests
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export default async function middleware() {
  const response = NextResponse.next();
  try {
    await kv.incr("visitor-count");
  } catch (error) {
    console.log("Error incrementing visitor count:", error);
  } finally {
    return response;
  }
}
