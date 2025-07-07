import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const amp = url.searchParams.get('amp');
  
  // Check if the URL contains ?amp=1 parameter
  if (amp === '1') {
    console.log('AMP parameter detected, redirecting to 404');
    // Redirect to 404 page
    return NextResponse.redirect(new URL('/404', request.url));
  }
  
  return NextResponse.next();
}

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
}; 