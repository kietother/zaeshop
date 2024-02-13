import ComicSitemap, { ERegion } from '@/app/models/comics/ComicSitemap';
import { MetadataRoute } from 'next'

export async function generateSitemaps() {
    return [{ id: 'vi' }, { id: 'en' }]
}

export default async function sitemap({
    id,
}: {
    id: string
}): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_BASE_URL!;
    // Google's limit is 50,000 URLs per sitemap
    const comicSitemap: Array<ComicSitemap> | null | undefined = await fetch(process.env.PORTAL_API_URL + `/api/client/ComicApp/sitemap`).then(res => res.json());
    if (!comicSitemap || comicSitemap.length === 0) {
        return [];
    }

    // Build sitemap, from static to dynamic contents
    let sitemap: MetadataRoute.Sitemap = [];

    if (id === 'vi') {
        sitemap = [
            // Home Page
            {
                url: baseUrl,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Search
            {
                url: `${baseUrl}/tim-kiem`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Comics (Equals to Search)
            {
                url: `${baseUrl}/truyen-tranh`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Login
            {
                url: `${baseUrl}/dang-nhap`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Top
            {
                url: `${baseUrl}/xep-hang`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Following
            {
                url: `${baseUrl}/theo-doi`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            }
        ];
    }
    else if (id === 'en') {
        sitemap = [
            // Home Page
            {
                url: `${baseUrl}/en`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Search
            {
                url: `${baseUrl}/en/search`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Comics (Equals to Search)
            {
                url: `${baseUrl}/en/comics`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Login
            {
                url: `${baseUrl}/en/login`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Top
            {
                url: `${baseUrl}/en/top-page`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
            // Following
            {
                url: `${baseUrl}/en/following`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            },
        ];
    }

    comicSitemap.forEach(comic => {
        const comicRegion = comic.region === ERegion.en ? 'en' : 'vi';
        if (id === comicRegion) {
            // Comics
            sitemap.push({
                url: `${baseUrl}/${id}/${comic.friendlyName}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: 0.7,
            });

            // Contents
            comic.contentFriendlyNames?.forEach(content => {
                sitemap.push({
                    url: `${baseUrl}/${id}/${comic.friendlyName}/${content}`,
                    lastModified: new Date(),
                    changeFrequency: 'daily',
                    priority: 0.7,
                });
            });
        }
    });

    return sitemap;
}