import { GetServerSideProps } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://codpal.com';
  
  const staticPages = [
    '',
    '/about',
    '/products',
    '/solutions',
    '/market',
    '/investment',
    '/news',
    '/contact',
  ];

  const locales = ['zh', 'en'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${staticPages
        .map((page) => {
          return locales
            .map((locale) => {
              return `
        <url>
          <loc>${baseUrl}/${locale}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
          ${locales
            .map((altLocale) => {
              return `
            <xhtml:link
              rel="alternate"
              hreflang="${altLocale}"
              href="${baseUrl}/${altLocale}${page}"
            />`;
            })
            .join('')}
        </url>`;
            })
            .join('');
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
