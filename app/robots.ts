import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://portfolio-genaro.razak-faoma-1718.chatgpt.site/sitemap.xml' }; }
