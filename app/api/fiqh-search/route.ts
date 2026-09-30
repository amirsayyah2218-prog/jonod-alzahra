import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get('q')?.trim() || '';
  const marja = new URL(req.url).searchParams.get('marja') || '';
  if (q.length < 2) return NextResponse.json([]);
  const where: any = { OR: [
    { question: { contains: q, mode: 'insensitive' } },
    { answer: { contains: q, mode: 'insensitive' } },
    { keywords: { contains: q, mode: 'insensitive' } },
    { category: { contains: q, mode: 'insensitive' } },
  ]};
  if (['KHAMENEI','SISTANI','MAKAREM'].includes(marja)) where.marja = marja;
  const results = await prisma.fiqhAnswer.findMany({ where, orderBy: { verifiedAt: 'desc' }, take: 30 });
  return NextResponse.json(results);
}
