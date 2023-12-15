import { NextResponse } from 'next/server'

export function middleware(request) {
  // return Response.json({ msg: "hi, i'm a middleware" })
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/about/:path*',
  // matcher: ['/about/:path*', '/tasks/:path*'],
}
