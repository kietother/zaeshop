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

const routeVietnameseMapper: Array<{ key: string, value: string }> = [
  { key: 'truyen-tranh', value: 'comics' }
]

export default async function middleware(request: NextRequest) {
  const pathNameIsInMapper = routeVietnameseMapper.find(route => request.nextUrl.pathname.includes(route.key));
  if (pathNameIsInMapper) {
    const uriStandardized = request.nextUrl.pathname?.replace(pathNameIsInMapper.key, pathNameIsInMapper.value);
    return NextResponse.rewrite(new URL(uriStandardized, request.url));
  }

  return NextResponse.next();
}