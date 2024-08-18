import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_KEY } from '@/lib/constants/storageKeys';

const middleware = async (request: NextRequest) => {
  const loginPath = ['/login', '/register', '/check-email', '/forgot-password', '/set-new-password'];

  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY as string);

  if (loginPath.some((v) => v === request.nextUrl.pathname)) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};

export default middleware;
