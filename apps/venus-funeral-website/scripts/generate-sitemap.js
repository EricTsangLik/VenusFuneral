const fs = require('fs');
const path = require('path');
const https = require('https');

const fetchBlogs = () => {
  return new Promise((resolve, reject) => {
    let allBlogs = [];
    let cursor = null;
    let hasMore = true;

    const apiKey = process.env.KEYTOMIC_API_KEY || '';

    const fetchPage = () => {
      let queryPath = '/v1/blogs?limit=50';
      if (cursor) {
        queryPath += '&cursor=' + encodeURIComponent(cursor);
      }

      const options = {
        hostname: 'api.keytomic.com',
        port: 443,
        path: queryPath,
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + apiKey
        }
      };

      const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              const result = JSON.parse(data);
              const blogs = result.data.data;
              const pageInfo = result.data.pageInfo;

              allBlogs = [...allBlogs, ...blogs];
              hasMore = pageInfo.hasMore;
              cursor = pageInfo.nextCursor || null;

              if (hasMore && cursor) {
                fetchPage();
              } else {
                resolve(allBlogs.map((blog) => ({
                  slug: blog.slug,
                  updatedAt: blog.updatedAt,
                  publishedAt: blog.publishedAt,
                  createdAt: blog.createdAt,
                })));
              }
            } catch (err) {
              reject(err);
            }
          } else {
            console.error('Failed to fetch blogs API statusCode:', res.statusCode);
            resolve([]); // return empty to avoid failing the whole build
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.end();
    };

    fetchPage();
  });
};

const generateSitemap = async () => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.venusfuneralservice.com';
  
  let blogs = [];
  try {
    blogs = await fetchBlogs();
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
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

  const publicPath = path.join(__dirname, '../public');
  // Ensure public path exists
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully in public/sitemap.xml');
};

generateSitemap();