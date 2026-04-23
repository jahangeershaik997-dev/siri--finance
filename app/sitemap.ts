import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://siri-finance-knax.vercel.app'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/loans`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/emi-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/apply`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
