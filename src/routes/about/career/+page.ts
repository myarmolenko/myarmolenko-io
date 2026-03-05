import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

export const load: PageLoad = async ({ data }) => {
	const module = await import('../../../content/career/career.md');
	return {
		hasCv: data.hasCv,
		content: module.default as ComponentType
	};
};
