import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://oqbsoftware.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://oqbsoftware.com/#services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9.5,
        },
        {
            url: 'https://oqbsoftware.com/insight',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9,
        },
        {
            url: 'https://oqbsoftware.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 8.5,
        },
        {
            url: 'https://oqbsoftware.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 8,
        },
    ]
}