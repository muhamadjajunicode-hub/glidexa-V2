import type { APIRoute } from 'astro';
import { getPublishedArticles } from '../lib/api';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://glidexavpn.com';
  const articles = await getPublishedArticles();

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'monthly' },
    { url: '/terms-and-conditions', priority: '0.3', changefreq: 'monthly' },
  ];

  const staticUrls = staticPages
    .map(
      (p) => `
    <url>
      <loc>${baseUrl}${p.url}</loc>
      <changefreq>${p.changefreq}</changefreq>
      <priority>${p.priority}</priority>
    </url>`
    )
    .join('');

  const articleUrls = articles
    .map((art) => {
      const date = art.published_at ? new Date(art.published_at).toISOString() : new Date().toISOString();
      return `
    <url>
      <loc>${baseUrl}/blog/${art.slug}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${articleUrls}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

