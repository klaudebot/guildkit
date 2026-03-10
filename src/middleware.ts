import { NextResponse } from "next/server";

export function middleware() {
  // Auth is handled client-side in the app layout
  // This middleware is a passthrough — kept for future server-side auth if needed
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
