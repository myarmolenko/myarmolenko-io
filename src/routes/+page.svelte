<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const STORAGE_KEY = 'myarmolenko-io-favorites';

	let favorites = $state<Set<string>>(new Set());

	onMount(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) favorites = new Set(JSON.parse(stored));
		} catch {
			// ignore parse errors
		}
	});

	function toggleFavorite(slug: string) {
		const next = new Set(favorites);
		if (next.has(slug)) next.delete(slug);
		else next.add(slug);
		favorites = next;
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
		} catch {
			// ignore storage errors (private browsing, quota, etc.)
		}
	}
</script>

<svelte:head>
	<title>Maksym Yarmolenko - Software Engineer</title>
	<meta name="description" content="Personal blog and portfolio of Maksym Yarmolenko, covering software engineering, web development, and technology" />
	<meta property="og:title" content="Maksym Yarmolenko - Software Engineer" />
	<meta property="og:description" content="Personal blog and portfolio of Maksym Yarmolenko, covering software engineering, web development, and technology" />
</svelte:head>

<PageLayout>
	<PageHeader
		title="Hi there! I'm Maks. 👋"
		subtitle="And this is my tech blog dump"
		marginBottom="var(--space-5)"
	/>

	{#if data.posts.length > 0}
		<div class="posts">
			{#each data.posts as post (post.slug)}
				<PostCard {post} favorited={favorites.has(post.slug)} ontoggle={toggleFavorite} />
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<p>Nothing here yet.<br />Writing takes time.</p>
		</div>
	{/if}
</PageLayout>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.empty-state {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		text-align: center;
		color: var(--text-color-secondary);
		font-size: var(--font-size-lg);
		line-height: var(--line-height-relaxed);
	}
</style>
