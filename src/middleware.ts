import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedPaths = [
    "/dashboard",
    "/guilds",
    "/revenue",
    "/fans",
    "/messages",
    "/support",
    "/settings",
  ];

  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path),
  );

  if (isProtected) {
    // Check for Supabase auth cookie
    const hasAuthCookie = request.cookies.getAll().some(
      (cookie) =>
        cookie.name.startsWith("sb-") && cookie.name.endsWith("-auth-token"),
    );

    if (!hasAuthCookie) {
      const signInUrl = new URL("/sign-in", request.url);
      signInUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/guilds/:path*",
    "/revenue/:path*",
    "/fans/:path*",
    "/messages/:path*",
    "/support/:path*",
    "/settings/:path*",
  ],
};
