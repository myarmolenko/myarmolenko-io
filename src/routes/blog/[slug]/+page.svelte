<script lang="ts">
	import BlogPostLayout from '$lib/components/layouts/BlogPostLayout.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<BlogPostLayout post={data.post}>
	<svelte:component this={data.content} />
</BlogPostLayout>
