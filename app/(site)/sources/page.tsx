import Link from 'next/link';
import { ExternalLink, ShieldCheck, BookOpenCheck } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function SourcesPage() {
  const sources = await prisma.source.findMany({ where: { allowed: true }, orderBy: { name: 'asc' } });
  return <>
    <section className="pageHero"><div className="container"><span className="sectionKicker light">منابع و اعتبار محتوا</span><h1>منابع رسمی و قابل استناد</h1><p>محتوای حساس مانند احکام، قرآن و متون دینی باید با منبع مشخص، وضعیت مجوز و تاریخ بررسی وارد سامانه شود.</p></div></section>
    <section className="pageBody"><div className="container">
      <div className="contentGrid">
        {sources.map(s => <article className="miniCard" key={s.id}>
          <span className="label"><ShieldCheck size={14}/> منبع تأییدشده</span>
          <h3>{s.name}</h3>
          <p>{s.notes || 'منبع ثبت‌شده در سامانه محتوایی جُنودالزهراء.'}</p>
          <a className="textlink" href={s.url} target="_blank" rel="noreferrer">مشاهده منبع رسمی <ExternalLink size={16}/></a>
        </article>)}
      </div>
      <div className="searchPanel" style={{marginTop:24}}>
        <div className="searchTitle"><BookOpenCheck/><div><h2>قاعده انتشار</h2><p>ثبت منبع، مجوز/وضعیت انتشار و زمان آخرین بررسی برای هر محتوای واردشده در پنل مدیریت نگهداری می‌شود.</p></div></div>
        <Link href="/fiqh" className="btn btnDark">رفتن به بخش احکام</Link>
      </div>
    </div></section>
  </>;
}
