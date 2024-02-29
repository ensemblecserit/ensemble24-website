import { kv } from "@vercel/kv";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// Config to match the routes that the middleware should be run for
export const config = {
  // Only run the middleware for the root path
  matcher: [
    {
      source: "/",
      // Ignore prefetch requests
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export default async function middleware(
  _req: NextRequest,
  event: NextFetchEvent
) {
  // Run the increment in the background
  event.waitUntil(
    (async () => {
      try {
        await kv.incr("visitor-count");
      } catch (error) {
        console.log("Error incrementing visitor count:", error);
      }
    })()
  );
  return NextResponse.next();
}
