import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { contentSchema } from '@/lib/validation';

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(await prisma.content.findMany({ orderBy: { updatedAt: 'desc' }, include: { source: true } }));
}

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const parsed = contentSchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: 'اطلاعات محتوا معتبر نیست.', details: parsed.error.flatten() }, { status: 400 });
  const data = parsed.data;
  const item = await prisma.content.create({ data: {
    title:data.title, slug:data.slug, type:data.type, excerpt:data.excerpt||null, body:data.body||null,
    status:data.status, sourceUrl:data.sourceUrl||null, license:data.license||null,
    publishedAt:data.status==='PUBLISHED'?(data.publishedAt?new Date(data.publishedAt):new Date()):null,
  }});
  return NextResponse.json(item, { status: 201 });
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const parsed = contentSchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: 'اطلاعات و شناسه محتوا معتبر نیست.' }, { status: 400 });
  const data = parsed.data;
  try {
    const item = await prisma.content.update({ where:{id:data.id}, data:{
      title:data.title, slug:data.slug, type:data.type, excerpt:data.excerpt||null, body:data.body||null,
      status:data.status, sourceUrl:data.sourceUrl||null, license:data.license||null,
      publishedAt:data.status==='PUBLISHED'?(data.publishedAt?new Date(data.publishedAt):new Date()):null,
    }});
    return NextResponse.json(item);
  } catch { return NextResponse.json({error:'محتوا پیدا نشد یا اسلاگ تکراری است.'},{status:409}); }
}

export async function DELETE(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const id = (await req.json().catch(()=>({}))).id;
  if (!id) return NextResponse.json({ error: 'شناسه محتوا لازم است.' }, { status: 400 });
  try { await prisma.content.delete({ where: { id } }); return NextResponse.json({ ok: true }); }
  catch { return NextResponse.json({ error:'محتوا پیدا نشد.' }, { status:404 }); }
}
