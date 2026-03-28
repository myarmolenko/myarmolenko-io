<script lang="ts">
	import BlogPostLayout from '$lib/components/layouts/BlogPostLayout.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<BlogPostLayout post={data.post}>
	<data.content />
</BlogPostLayout>
