import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok:true, service:'jonod-alzahra', database:'ok', time:new Date().toISOString() });
  } catch {
    return NextResponse.json({ ok:false, service:'jonod-alzahra', database:'error' }, { status:503 });
  }
}
