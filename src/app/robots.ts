import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/admin/'],
      },
      {
        // Allow AI crawlers to access key pages for citation
        userAgent: 'GPTBot',
        allow: ['/worldcup', '/features', '/about', '/enterprise'],
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/worldcup', '/features', '/about'],
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/worldcup', '/features', '/about'],
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/private/'],
      },
    ],
    sitemap: 'https://thepolyhistor.com/sitemap.xml',
    // Crawl delay for rate limiting (optional)
    // crawlDelay: 1,
  };
}
