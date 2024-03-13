import { NextResponse, NextRequest } from "next/server";
import {
  apiAuthPrefix,
  authRoutes,
  defaultForwardUrl,
  emailVerificationRoutes,
  publicRoutes,
} from "./routes";
// import { isUserAuthenticated } from "./lib/auth/authMiddleware";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isEmailVerificationRoute = emailVerificationRoutes.includes(
    nextUrl.pathname
  );

  if (isApiAuthRoute) return null;

  if (isPublicRoute) return;

  const isAuthenticated = {
    ok: true,
    emailVerified: true,
  };
  // const isAuthenticated = await isUserAuthenticated();
  const { ok, emailVerified } = isAuthenticated;

  if (isAuthRoute) {
    if (ok) {
      return NextResponse.redirect(new URL(defaultForwardUrl, nextUrl));
    }

    return null;
  }

  if (ok) {
    if (!emailVerified && !isEmailVerificationRoute) {
      return NextResponse.redirect(new URL("/verification/email/new", nextUrl));
    }
    if (isEmailVerificationRoute && emailVerified) {
      return NextResponse.redirect(new URL(defaultForwardUrl, nextUrl));
    }
    return null;
  }

  if (!ok && nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/welcome", nextUrl));
  }

  if (!ok && !isPublicRoute) {
    return Response.redirect(
      new URL(`/sign-in?forward=${nextUrl.pathname}`, nextUrl)
    );
  }

  return null;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
