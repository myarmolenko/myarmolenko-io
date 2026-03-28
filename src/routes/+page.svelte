<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const STORAGE_KEY = 'myarmolenko-io-favorites';

	let favorites = $state<Set<string>>(new Set());
	let selectedTag = $state<string | null>(null);

	const allTags = $derived([...new Set(data.posts.flatMap((p) => p.tags))].sort());
	const filteredPosts = $derived(
		selectedTag ? data.posts.filter((p) => p.tags.includes(selectedTag!)) : data.posts
	);

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

	function toggleTag(tag: string) {
		selectedTag = selectedTag === tag ? null : tag;
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
		{#if allTags.length > 0}
			<div class="tag-filter">
				{#each allTags as tag}
					<button
						class="tag-btn"
						class:active={selectedTag === tag}
						onclick={() => toggleTag(tag)}
					>
						{tag}
					</button>
				{/each}
			</div>
		{/if}

		{#if filteredPosts.length > 0}
			<div class="posts">
				{#each filteredPosts as post (post.slug)}
					<PostCard {post} favorited={favorites.has(post.slug)} ontoggle={toggleFavorite} />
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<p>No posts tagged "{selectedTag}".</p>
			</div>
		{/if}
	{:else}
		<div class="empty-state">
			<p>Nothing here yet.<br />Writing takes time.</p>
		</div>
	{/if}
</PageLayout>

<style>
	.tag-filter {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-5);
	}

	.tag-btn {
		padding: var(--space-1) var(--space-2);
		background: rgba(0, 0, 0, 0.05);
		border: none;
		border-radius: var(--border-radius-sm);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all var(--transition-fast);
		color: var(--text-color);
		font-family: inherit;
	}

	.tag-btn:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.tag-btn.active {
		background: var(--text-color);
		color: var(--bg-color);
	}

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
