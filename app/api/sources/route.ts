import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const sources = await prisma.source.findMany({
    where: { allowed: true },
    orderBy: { name: 'asc' },
    select: { id: true, name: true, url: true, kind: true, license: true, notes: true, allowed: true },
  });
  return NextResponse.json(sources);
}
