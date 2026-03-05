import { getPostBySlug, getAllPosts } from '$lib/content/loader';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, {
			message: 'Post not found'
		});
	}

	return { post };
};
