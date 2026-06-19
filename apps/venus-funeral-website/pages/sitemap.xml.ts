import { GetServerSideProps } from 'next'
import { getAllKeytomicBlogsForSitemap } from '../lib/keytomic'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.venusfuneralservice.com';

function generateSiteMap(blogs: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/processes</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/knowledges</loc>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     ${blogs
       .map((blog) => {
         const lastMod = blog.updatedAt || blog.publishedAt || blog.createdAt || new Date().toISOString();
         return `
       <url>
           <loc>${SITE_URL}/knowledges/${blog.slug}</loc>
           <lastmod>${new Date(lastMod).toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Fetch blogs from keytomic
  let blogs = [];
  try {
    blogs = await getAllKeytomicBlogsForSitemap();
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
  }

  // Generate the XML sitemap
  const sitemap = generateSiteMap(blogs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
