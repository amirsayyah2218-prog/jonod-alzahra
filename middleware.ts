import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/session-core';
export async function middleware(req: NextRequest) {
  const res = req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login'
    ? (await verifyToken(req.cookies.get('jonod_admin')?.value) ? NextResponse.next() : NextResponse.redirect(new URL('/admin/login', req.url)))
    : NextResponse.next();
  res.headers.set('X-Content-Type-Options','nosniff');
  res.headers.set('X-Frame-Options','DENY');
  res.headers.set('Referrer-Policy','strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy','camera=(), microphone=(), geolocation=()');
  res.headers.set('X-XSS-Protection','0');
  if (process.env.NODE_ENV === 'production') res.headers.set('Strict-Transport-Security','max-age=31536000; includeSubDomains');
  return res;
}
export const config={matcher:['/admin/:path*','/api/:path*','/((?!_next/static|_next/image|favicon.ico).*)']};
