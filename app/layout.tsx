import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, HeartHandshake, Home, Library, Menu, MoonStar, ScrollText, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://jonod.alzahraa.313'),
  title: "جُنودالزهراء | هیئت فرهنگی جهادی",
  description: "پایگاه فرهنگی، مذهبی، جهادی و تبلیغی جُنودالزهراء در مشهد",
};

const nav = [
  ["خانه", "/"], ["معرفی", "/about"], ["فعالیت‌ها", "/activities"], ["فرهنگی", "/culture"],
  ["شهدا", "/martyrs"], ["روزانه", "/daily"], ["ادعیه", "/duas"], ["قرآن", "/quran"],
  ["مداحی", "/madahi"], ["احکام و رساله", "/fiqh"], ["منابع", "/sources"], ["نهج‌البلاغه", "/nahj"], ["صحیفه سجادیه", "/sahifa"], ["تقویم", "/calendar"], ["همکاری و کمک", "/support"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>
    <div className="topline"><div className="container topin"><span>﷽</span><span>جُنودالزهراء</span><span className="topsep">•</span><span>هیئت فرهنگی جهادی</span><span className="topgrow"/><a href="https://eitaa.com/jonodalzahra" target="_blank" rel="noreferrer">کانال ایتا ↗</a></div></div>
    <header className="nav"><div className="container navin">
      <Link className="brand" href="/"><span className="brandmark"><Image src="/logo.png" alt="لوگوی جُنودالزهراء" width={52} height={52}/></span><span><strong>جُنودالزهراء</strong><small>هیئت فرهنگی جهادی</small></span></Link>
      <nav className="navlinks">{nav.map(([t,u]) => <Link key={u} href={u}>{t}</Link>)}</nav>
      <Link className="donate-mini" href="/support"><HeartHandshake size={17}/> همکاری</Link>
      <span className="menuicon"><Menu size={24}/></span>
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="container footergrid">
      <div><div className="brand footerbrand"><span className="brandmark"><Image src="/logo.png" alt="لوگو" width={58} height={58}/></span><span><strong>جُنودالزهراء</strong><small>هیئت فرهنگی جهادی</small></span></div><p>پایگاه فرهنگی، مذهبی، جهادی و تبلیغی؛ با محوریت مردم، جوانان و جمعی از طلاب در مشهد.</p></div>
      <div><h3>دسترسی سریع</h3><div className="footlinks"><Link href="/calendar"><CalendarDays size={16}/> تقویم و اوقات شرعی</Link><Link href="/quran"><ScrollText size={16}/> قرآن کریم</Link><Link href="/duas"><MoonStar size={16}/> ادعیه و زیارات</Link><Link href="/culture"><Library size={16}/> کتابخانه فرهنگی</Link></div></div>
      <div><h3>ارتباط با هیئت</h3><p className="contactline">۰۹۱۰۸۱۱۷۴۱۸</p><p className="contactline">۰۹۹۳۸۵۲۲۹۷۷</p><a href="https://eitaa.com/jonodalzahra" target="_blank" rel="noreferrer">eitaa.com/jonodalzahra ↗</a></div>
    </div><div className="container copyright">© جُنودالزهراء — تمامی حقوق این پایگاه برای هیئت محفوظ است.</div></footer>
  </body></html>;
}
