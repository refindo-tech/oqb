import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/create/',
        },
        sitemap: 'https://oqbsoftware.con/sitemap.xml',
    }
}