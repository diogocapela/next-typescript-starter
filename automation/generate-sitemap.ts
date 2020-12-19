import fs from 'fs';
import path from 'path';

import metadata from '../config/metadata';

(async () => {
  const filePath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  const links = [
    {
      loc: metadata.website.url,
      priority: '1.00',
      changefreq: 'daily',
    },
    {
      loc: `${metadata.website.url}/conferences`,
      priority: '1.00',
      changefreq: 'daily',
    },
    {
      loc: `${metadata.website.url}/about`,
      priority: '0.20',
      changefreq: 'monthly',
    },
    {
      loc: `${metadata.website.url}/submit`,
      priority: '0.20',
      changefreq: 'monthly',
    },
    {
      loc: `${metadata.website.url}/changelog`,
      priority: '0.10',
      changefreq: 'monthly',
    },
    {
      loc: `${metadata.website.url}/privacy`,
      priority: '0.10',
      changefreq: 'monthly',
    },
  ];

  const timestamp = new Date().toISOString();
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n\n';

  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '\txsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '\thttp://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

  links.forEach((link) => {
    xml += '\t<url>\n';
    xml += `\t\t<loc>${link.loc}</loc>\n`;
    // xml += `\t\t<lastmod>${timestamp}</lastmod>\n`;
    xml += `\t\t<changefreq>${link.changefreq || 'monthly'}</changefreq>\n`;
    xml += `\t\t<priority>${link.priority || '1.00'}</priority>\n`;
    xml += '\t</url>\n';
  });

  xml += '\n</urlset>\n';

  fs.writeFileSync(filePath, xml);
})();
