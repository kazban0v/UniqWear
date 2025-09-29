import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://uniqwear.kz' // Замени на свой домен

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Если есть админка или API
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}