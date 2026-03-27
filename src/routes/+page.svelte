<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
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
</svelte:head>

<PageLayout>
	<header class="blog-header">
		<h1>Hi there! I'm Maks. 👋</h1>
		<p class="blog-description">
			And this is my tech blog dump
		</p>
	</header>

	<div class="posts">
		{#each data.posts as post (post.slug)}
			<PostCard {post} favorited={favorites.has(post.slug)} ontoggle={toggleFavorite} />
		{/each}
	</div>
</PageLayout>

<style>
	.blog-header {
		margin-bottom: var(--space-5);
		text-align: center;
	}

	.blog-header h1 {
		margin-bottom: var(--space-1);
	}

	.blog-description {
		color: var(--text-color-secondary);
		font-size: var(--font-size-lg);
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	@media (max-width: 767px) {
		.blog-header {
			margin-bottom: var(--space-6);
		}
	}
</style>
