import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(req: NextRequest) {
  const accessToken = cookies().get('access_token')
  const refreshToken = cookies().get('refresh_token')

  if (req.nextUrl.pathname === '/') {
    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  } else if (req.nextUrl.pathname === '/dashboard') {
    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
