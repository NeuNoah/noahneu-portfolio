import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const isStudio = request.nextUrl.pathname.startsWith("/studio");
  const contentSecurityPolicy = isStudio
    ? "default-src 'self'; img-src 'self' data: blob: https://cdn.sanity.io https://*.sanity.io; font-src 'self' data: https://design-system-static.sanity.io; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://core.sanity-cdn.com; connect-src 'self' https://*.sanity.io https://*.sanity.cloud wss://*.sanity.io wss://*.sanity.cloud https://sanity-cdn.com https://*.sanity-cdn.com; worker-src 'self' blob:; frame-src 'self' https://*.sanity.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
    : "default-src 'self'; img-src 'self' data: https://cdn.sanity.io; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://*.sanity.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'";
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);
  return response;
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
