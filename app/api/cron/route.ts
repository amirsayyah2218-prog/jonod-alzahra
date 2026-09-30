import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
export const dynamic='force-dynamic';
export async function GET(req:Request){
  const secret=req.headers.get('x-cron-secret');
  if(!process.env.CRON_SECRET || secret!==process.env.CRON_SECRET) return NextResponse.json({ok:false},{status:401});
  const [contentCount,sourceCount]=await Promise.all([db.content.count(),db.source.count({where:{allowed:true}})]);
  return NextResponse.json({ok:true,contentCount,sourceCount,ranAt:new Date().toISOString(),note:'Only approved connectors should be added here.'});
}
