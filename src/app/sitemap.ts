import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://oqbsoftware.com/id',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://oqbsoftware.com/id#services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: 'https://oqbsoftware.com/id/insight',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://oqbsoftware.com/id/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: 'https://oqbsoftware.com/id/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    ]
}