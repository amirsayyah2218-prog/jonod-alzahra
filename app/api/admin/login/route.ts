import { NextResponse } from 'next/server';
import { makeAdminToken, COOKIE } from '@/lib/auth';
import { loginSchema } from '@/lib/validation';

export async function POST(req: Request) {
  const parsed = loginSchema.safeParse(await req.json().catch(() => ({})));
  const expected = process.env.ADMIN_PASSWORD;
  if (!parsed.success || !expected || parsed.data.password !== expected) {
    return NextResponse.json({ error: 'رمز عبور نادرست است.' }, { status: 401 });
  }
  const token = await makeAdminToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 12 });
  return res;
}
