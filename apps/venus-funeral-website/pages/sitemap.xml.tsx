import { GetServerSideProps } from 'next';
import { getAllKeytomicBlogsForSitemap } from '../../lib/keytomic';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.venusfuneralservice.com';

function generateSiteMap(blogs: any[], services: any[], media: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/processes</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/knowledges</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/contact</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/flowers</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/columbarium</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/cleaning</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/services</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/media</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  ${services
    .map(({ serviceName }) => {
      return `
  <url>
    <loc>${BASE_URL}/services/${encodeURIComponent(serviceName)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
  ${media
    .map((slug) => {
      return `
  <url>
    <loc>${BASE_URL}/media/${encodeURIComponent(slug)}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    })
    .join('')}
  ${blogs
    .map(({ slug }) => {
      return `
  <url>
    <loc>${BASE_URL}/knowledges/${encodeURIComponent(slug)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('')}
</urlset>
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Fetch blogs
  let blogs: any[] = [];
  try {
    blogs = await getAllKeytomicBlogsForSitemap();
  } catch (error) {
    console.error('Error fetching blogs for sitemap', error);
  }

  // Fetch services
  let services: any[] = [];
  try {
    const servicesPath = path.resolve(process.cwd(), 'content/serviceOverviews.md');
    if (fs.existsSync(servicesPath)) {
      const fileContents = fs.readFileSync(servicesPath, 'utf8');
      const { data } = matter(fileContents);
      if (data.services) {
        services = data.services.filter((s: any) => s.serviceName);
      }
    }
  } catch (e) {
    console.error(e);
  }

  // Fetch media
  let media: string[] = [];
  try {
    const mediaDir = path.resolve(process.cwd(), '_posts/media');
    if (fs.existsSync(mediaDir)) {
      const files = fs.readdirSync(mediaDir);
      media = files.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''));
    }
  } catch (e) {
    console.error(e);
  }

  const sitemap = generateSiteMap(blogs, services, media);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return null;
}
