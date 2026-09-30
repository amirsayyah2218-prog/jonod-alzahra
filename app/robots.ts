import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const base=process.env.SITE_URL||'https://jonod.alzahraa.313';
  return { rules:{userAgent:'*',allow:'/',disallow:['/admin/','/api/']}, sitemap:`${base}/sitemap.xml` };
}
