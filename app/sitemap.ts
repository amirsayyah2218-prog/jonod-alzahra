import type { MetadataRoute } from 'next';
const routes=['/','/about','/activities','/culture','/martyrs','/daily','/duas','/quran','/madahi','/fiqh','/sources','/nahj','/sahifa','/calendar','/support'] as const;
export default function sitemap(): MetadataRoute.Sitemap {
  const base=process.env.SITE_URL||'https://jonod.alzahraa.313';
  return routes.map(path=>({url:`${base}${path}`,changeFrequency:path==='/'?'daily':'weekly',priority:path==='/'?1:0.7}));
}
