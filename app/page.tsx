import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, CalendarDays, ChevronLeft, HeartHandshake, Landmark, Mic2, Newspaper, ScrollText, Shield, Sparkles, Star, Users, HandHeart, BookMarked, Scroll, Scale } from "lucide-react";

const sections = [
  [CalendarDays,"تقویم و اوقات شرعی","تقویم شیعی و ایرانی، مناسبت‌ها و اوقات شرعی همه شهرها","/calendar","امروز و روزهای دیگر"],
  [BookOpen,"قرآن کریم","متن قرآن، ترجمه و دسترسی سریع به سوره‌ها و آیات","/quran","قرائت و مطالعه"],
  [Sparkles,"ادعیه و زیارات","مفاتیح و ادعیه و زیارات منتخب با ترجمه و دسته‌بندی","/duas","دعا و مناجات"],
  [Mic2,"مداحی و متن","مداحی‌های مناسبتی، آرشیو متن و دسته‌بندی ایام","/madahi","آرشیو صوت و متن"],
  [Shield,"پرسش‌های شرعی و رساله","جست‌وجوی پاسخ مستند و دسترسی جداگانه به رساله‌های سه مرجع منتخب","/fiqh","خامنه‌ای، سیستانی، مکارم"],
  [BookMarked,"نهج‌البلاغه","خطبه‌ها، نامه‌ها و حکمت‌ها با جست‌وجو و ترجمه","/nahj","حکمت و معارف علوی"],
  [Scroll,"صحیفه سجادیه","دعاهای صحیفه با شماره، ترجمه و دسته‌بندی موضوعی","/sahifa","مناجات و دعاهای امام سجاد(ع)"],
  [Landmark,"آشنایی با شهدا","زندگی‌نامه، تصاویر، وصیت‌نامه و خاطرات شهدای معرفی‌شده","/martyrs","یاد شهیدان"],
  [Newspaper,"داستان و درسنامه","کتاب، درسنامه، داستان و محتوای فرهنگی با ثبت منبع و مجوز","/culture","کتابخانه فرهنگی"],
  [BookMarked,"منابع و اعتبار","فهرست منابع رسمی و سیاست انتشار محتوای سایت","/sources","منابع تأییدشده"],
  [Users,"فعالیت‌های هیئت","گزارش مراسم، موکب، برنامه‌های جهادی و فعالیت‌های محلی","/activities","روایت فعالیت‌ها"],
];

export default function Home(){
  return <>
    <section className="heroHome"><div className="heroPattern"/><div className="container heroGrid">
      <div className="heroCopy"><div className="bismillah">﷽</div><div className="eyebrow"><span/> هیئت فرهنگی جهادی <span/></div><h1>جُنودالزهراء</h1><p className="heroLead">یک خانه برای <b>معرفت، خدمت، روایت و معنویت</b>؛ از محله‌های مشهد تا فضای مجازی.</p><p className="heroDesc">سابقه فعالیت‌های فرهنگی، مذهبی، جهادی و تبلیغی، اجرای مراسم مذهبی و برپایی موکب با همکاری مردم و جمعی از طلاب.</p><div className="heroActions"><Link className="btn btnGold" href="/about">آشنایی با هیئت <ArrowLeft size={18}/></Link><Link className="btn btnGhost" href="/activities">گزارش فعالیت‌ها</Link></div></div>
      <div className="heroLogo"><div className="seal"><Image src="/logo.png" alt="لوگوی جُنودالزهراء" width={310} height={310} priority/></div><div className="heroVerse">«وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى»<small>در نیکی و تقوا یکدیگر را یاری کنید.</small></div></div>
    </div></section>

    <section className="quickbar"><div className="container quickgrid"><Link href="/daily"><span className="quickicon"><Star/></span><span><b>پیام امروز</b><small>آیه، حدیث و سخن روز</small></span><ChevronLeft/></Link><Link href="/calendar"><span className="quickicon"><CalendarDays/></span><span><b>امروز در تقویم</b><small>مناسبت‌ها و اوقات شرعی</small></span><ChevronLeft/></Link><Link href="/support"><span className="quickicon"><HandHeart/></span><span><b>همراه هیئت باشید</b><small>همکاری و پشتیبانی</small></span><ChevronLeft/></Link></div></section>

    <section className="section"><div className="container"><div className="sectionHead"><div><span className="sectionKicker">پایگاه محتوایی</span><h2>هر آنچه برای یک زندگی مؤمنانه و فرهنگی نیاز داری</h2></div><Link href="/about" className="textlink">درباره هیئت <ArrowLeft size={17}/></Link></div><div className="featureGrid">{sections.map(([Icon,title,desc,url,tag],i)=><Link href={url as string} className={`featureCard ${i===0?'featureMain':''}`} key={title as string}><div className="featureTop"><span className="iconbox"><Icon size={24}/></span><span className="cardtag">{tag as string}</span></div><h3>{title as string}</h3><p>{desc as string}</p><span className="cardArrow"><ArrowLeft size={18}/></span></Link>)}</div></div></section>

    <section className="dailySection"><div className="container dailyGrid"><div><span className="sectionKicker light">هر روز یک جرعه معرفت</span><h2>پیام امروز</h2><p className="dailyQuote">«دل اگر به یاد خدا زنده باشد، در سختی‌ها راه خود را پیدا می‌کند.»</p><p className="dailySource">محتوای روزانه هیئت — با ثبت منبع و امکان مدیریت و زمان‌بندی در پنل.</p><Link className="btn btnLight" href="/daily">مشاهده آرشیو روزانه <ArrowLeft size={18}/></Link></div><div className="dailyOrnament"><div>ذِکر</div><span>﷽</span></div></div></section>

    <section className="section"><div className="container"><div className="sectionHead"><div><span className="sectionKicker">از میدان عمل</span><h2>فعالیت‌های هیئت</h2></div><Link href="/activities" className="textlink">همه فعالیت‌ها <ArrowLeft size={17}/></Link></div><div className="activityStrip"><div className="activityCard"><div className="activityPhoto photoOne"><span>موکب و خدمت‌رسانی</span></div><h3>موکب و خدمت‌رسانی</h3><p>روایت تصویری فعالیت‌های مردمی و جهادی هیئت.</p></div><div className="activityCard"><div className="activityPhoto photoTwo"><span>مراسم مذهبی</span></div><h3>مراسم و برنامه‌های مذهبی</h3><p>برگزاری مراسم و برنامه‌های مناسبتی در محلات مشهد.</p></div><div className="activityCard"><div className="activityPhoto photoThree"><span>کار فرهنگی</span></div><h3>فرهنگ و تبلیغ</h3><p>درسنامه، کتاب، تولید محتوا و فعالیت‌های تبلیغی.</p></div></div></div></section>

    <section className="supportBand"><div className="container supportInner"><div><span className="sectionKicker">یک قدم کوچک، یک اثر ماندگار</span><h2>برای ادامه مسیر، همراه ما باشید</h2><p>با همکاری، ایده، وقت، تخصص یا کمک مالی می‌توانید در فعالیت‌های فرهنگی و جهادی هیئت سهیم باشید.</p></div><Link className="btn btnDark" href="/support"><HeartHandshake size={19}/> همکاری و کمک به هیئت</Link></div></section>
  </>;
}
