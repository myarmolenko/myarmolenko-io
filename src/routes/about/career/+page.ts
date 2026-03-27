import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const prerender = true;

export const load: PageLoad = async () => {
	const module = await import('../../../content/career/career.md');
	return {
		content: module.default as Component
	};
};
