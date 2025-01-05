import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://oqbsoftware.com/en',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://oqbsoftware.com/id',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://oqbsoftware.com/en#services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9.5,
        },
        {
            url: 'https://oqbsoftware.com/id#services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9.5,
        },
        {
            url: 'https://oqbsoftware.com/en/insight',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9,
        },
        {
            url: 'https://oqbsoftware.com/id/insight',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 9,
        },
        {
            url: 'https://oqbsoftware.com/en/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 8.5,
        },
        {
            url: 'https://oqbsoftware.com/id/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 8.5,
        },
        {
            url: 'https://oqbsoftware.com/en/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 8,
        },
        {
            url: 'https://oqbsoftware.com/id/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 8,
        },
    ]
}