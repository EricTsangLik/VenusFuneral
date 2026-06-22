import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getAllKeytomicBlogsForSitemap } from '../lib/keytomic';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const BASE_URL = 'https://venusfuneralservice.com';

async function generateSitemap() {
  const staticPages = [
    '',
    '/processes',
    '/knowledges',
    '/contact',
    '/flowers',
    '/columbarium',
    '/about',
    '/cleaning',
    '/services',
    '/media',
  ];

  const urls: string[] = [];

  // Add static pages
  for (const page of staticPages) {
    urls.push(`
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`);
  }

  // Add services
  const servicesPath = path.resolve(__dirname, '../../../../content/serviceOverviews.md');
  if (fs.existsSync(servicesPath)) {
    const fileContents = fs.readFileSync(servicesPath, 'utf8');
    const { data } = matter(fileContents);
    if (data.services) {
      data.services.forEach((service: any) => {
        if (service.serviceName) {
          urls.push(`
  <url>
    <loc>${BASE_URL}/services/${encodeURIComponent(service.serviceName)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
        }
      });
    }
  }

  // Add media
  const mediaDir = path.resolve(__dirname, '../../../../_posts/media');
  if (fs.existsSync(mediaDir)) {
    const files = fs.readdirSync(mediaDir);
    files.forEach((file) => {
      if (file.endsWith('.md')) {
        const slug = file.replace('.md', '');
        urls.push(`
  <url>
    <loc>${BASE_URL}/media/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
      }
    });
  }

  // Add blogs (knowledges)
  try {
    const blogs = await getAllKeytomicBlogsForSitemap();
    blogs.forEach((blog: any) => {
      urls.push(`
  <url>
    <loc>${BASE_URL}/knowledges/${blog.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>
`;

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('Sitemap generated successfully at', sitemapPath);
}

generateSitemap();
