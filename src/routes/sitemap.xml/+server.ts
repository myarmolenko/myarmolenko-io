import { getAllPosts } from '$lib/content/loader';
import type { RequestHandler } from './$types';

export const prerender = true;

const staticPages = ['/', '/about', '/projects'];

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getAllPosts();
	const base = url.origin;

	const entries = [
		...staticPages.map((path) => ({ path, date: undefined as string | undefined })),
		...posts.map((post) => ({ path: `/blog/${post.slug}`, date: post.date }))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		({ path, date }) => `\t<url>
\t\t<loc>${base}${path}</loc>${date ? `\n\t\t<lastmod>${date}</lastmod>` : ''}
\t</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
