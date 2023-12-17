import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }

const routeMapper: { [key: string]: string } = {
    '/truyen-tranh': '/comics',
};

export default async function middleware(request: NextRequest) {
    if (routeMapper.hasOwnProperty(request.nextUrl.pathname)) {
        return NextResponse.rewrite(new URL(routeMapper[request.nextUrl.pathname], request.url));
    }

    return NextResponse.next();
}