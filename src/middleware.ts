import { jwtDecode } from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

import { ACCESS_TOKEN_KEY } from '@/lib/constants/storageKeys';

const middleware = async (request: NextRequest) => {
  const loginPath = ['/login', '/register', '/check-email', '/forgot-password', '/set-new-password'];

  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY as string);

  if (loginPath.some((path) => path === request.nextUrl.pathname)) {
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken.value);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp && decoded.exp < currentTime) {
          return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return NextResponse.next();
  }

  if (accessToken) {
    try {
      const decoded = jwtDecode(accessToken.value);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decoded.exp && decoded.exp < currentTime) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      return NextResponse.next();
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  return NextResponse.redirect(new URL('/login', request.url));
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};

export default middleware;
