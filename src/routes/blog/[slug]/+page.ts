import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

export const load: PageLoad = async ({ data }) => {
	// Dynamically import the markdown component
	const module = await import(`../../../lib/content/posts/${data.post.slug}.md`);

	return {
		post: data.post,
		content: module.default as ComponentType
	};
};
