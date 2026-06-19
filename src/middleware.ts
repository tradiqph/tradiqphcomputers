import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated, SESSION_COOKIE } from "@/lib/auth";

const PUBLIC_PATHS = [
  "/admin/login",
  "/api/auth",
  "/api/webhooks",
  "/maintenance",
  "/checkout/success",
  "/checkout/failed",
  "/favicon.png",
  "/favicon.ico",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    PUBLIC_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`)
    )
  ) {
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const authenticated = isAuthenticated(session);

  if (!authenticated) {
    if (pathname !== "/maintenance") {
      return NextResponse.rewrite(new URL("/maintenance", request.url));
    }
    return NextResponse.next();
  }

  if (pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
