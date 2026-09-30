import { PrismaClient, SourceKind, ContentStatus, ContentType, FaqMarja } from '@prisma/client';
const db = new PrismaClient();

async function source(name: string, url: string, notes?: string) {
  return db.source.upsert({
    where: { url },
    update: { name, kind: SourceKind.OFFICIAL, allowed: true, notes },
    create: { name, url, kind: SourceKind.OFFICIAL, allowed: true, notes },
  });
}

async function main(){
  await source('پایگاه اطلاع‌رسانی دفتر مقام معظم رهبری', 'https://www.leader.ir/fa', 'برای بازیابی و ارجاع احکام و بیانات؛ پاسخ شرعی فقط پس از بررسی منبع رسمی وارد بانک می‌شود.');
  await source('دفتر آیت‌الله سیستانی — پرسش و پاسخ', 'https://www.sistani.org/persian/qa/', 'پرسش و پاسخ و کتب فتوایی رسمی دفتر.');
  await source('دفتر آیت‌الله سیستانی — کتب فتوایی', 'https://www.sistani.org/persian/book/fatwa/', 'کتب فتوایی رسمی؛ از جمله توضیح المسائل جامع چاپ ۱۴۰۳.');
  await source('پایگاه آیت‌الله مکارم شیرازی', 'https://makarem.ir/', 'منبع رسمی برای ارجاع و بررسی محتوای فقهی.');
  await db.source.upsert({where:{url:'https://eitaa.com/jonodalzahra'},update:{},create:{name:'کانال ایتای جنودالزهراء',url:'https://eitaa.com/jonodalzahra',kind:SourceKind.MANUAL,allowed:false,notes:'تا زمان احراز مجوز بازنشر و روش رسمی دریافت محتوا، واردسازی خودکار غیرفعال است.'}});

  await db.content.upsert({where:{slug:'welcome'},update:{},create:{type:ContentType.ARTICLE,title:'جُنودالزهراء',slug:'welcome',excerpt:'هیئت فرهنگی جهادی جنودالزهراء',body:'تأسیس: عالم ذر\nسابقه فعالیت‌های فرهنگی، مذهبی، جهادی و تبلیغی، اجرای مراسم‌های مذهبی و برپایی موکب در سطح محلات مشهد با همکاری مردم و جمعی از طلاب.',status:ContentStatus.PUBLISHED,publishedAt:new Date()}});

  // بانک احکام عمداً با متن ساختگی پر نمی‌شود. ورود پاسخ‌ها باید از منبع رسمی و پس از بررسی انجام شود.
  const count = await db.fiqhAnswer.count();
  if (count === 0) {
    console.log('No fiqh answers seeded: official-source verification is required before importing answers.');
  }
}
main().finally(()=>db.$disconnect());
