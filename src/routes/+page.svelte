<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import { formatDate } from '$lib/utils/date';
	import { tagFilterIndex } from '$lib/utils/filters';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const STORAGE_KEY = 'myarmolenko-io-favorites';

	function getStarPoints(slug: string): string {
		let seed = 0;
		for (const char of slug) seed = (seed * 31 + char.charCodeAt(0)) | 0;

		let s = seed;
		const rand = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };

		const cx = 12, cy = 12;
		const pts: string[] = [];
		for (let i = 0; i < 5; i++) {
			const outerR = 9 + rand() * 2.5;
			const outerAngle = (Math.PI * 2 * i / 5) - Math.PI / 2 + (rand() - 0.5) * 0.25;
			const innerR = 3.5 + rand() * 1.5;
			const innerAngle = outerAngle + Math.PI / 5 + (rand() - 0.5) * 0.2;
			pts.push(
				`${(cx + outerR * Math.cos(outerAngle)).toFixed(2)},${(cy + outerR * Math.sin(outerAngle)).toFixed(2)}`,
				`${(cx + innerR * Math.cos(innerAngle)).toFixed(2)},${(cy + innerR * Math.sin(innerAngle)).toFixed(2)}`
			);
		}
		return pts.join(' ');
	}

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
			<article class="post-card" class:favorited={favorites.has(post.slug)}>
				<a href="/blog/{post.slug}" class="post-link">
					<div class="post-title-row">
						<h2 class="post-title">{post.title}</h2>
						{#if post.type}
							<span class="post-type" style="--tag-filter: url(#sketchy-tag-{tagFilterIndex(post.slug)})">{post.type}</span>
						{/if}
					</div>
					<p class="post-description">{post.description}</p>
					<div class="post-meta">
						<time datetime={post.date} class="post-date">
							{formatDate(post.date)}
						</time>
						{#if post.tags.length > 0}
							<span class="separator">•</span>
							<div class="post-tags">
								{#each post.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						{/if}
					</div>
				</a>
				<button
					class="star-btn"
					aria-label={favorites.has(post.slug) ? 'Remove from favorites' : 'Add to favorites'}
					onclick={(e) => { e.preventDefault(); toggleFavorite(post.slug); }}
				>
					<svg class="star-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
						<polygon points={getStarPoints(post.slug)} />
					</svg>
				</button>
			</article>
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

	.post-card {
		position: relative;
		padding: var(--space-4);
		background: rgba(255, 255, 255, 0.4);
		border-radius: var(--border-radius-md);
		transition: all var(--transition-base);
	}

	.post-card:hover {
		background: rgba(255, 255, 255, 0.6);
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.post-link {
		text-decoration: none;
		color: inherit;
	}

	.post-title-row {
		display: flex;
		align-items: center;
		gap: 0;
		flex-wrap: wrap;
		margin-bottom: var(--space-2);
	}

	.post-title {
		font-size: var(--font-size-2xl);
		transition: color var(--transition-fast);
	}

	.post-card:hover .post-title {
		color: var(--link-hover-color);
	}

	.post-description {
		margin-bottom: var(--space-3);
		color: var(--text-color-secondary);
		line-height: var(--line-height-relaxed);
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
		font-size: var(--font-size-sm);
		color: var(--text-color-muted);
	}

	.post-date {
		font-weight: var(--font-weight-medium);
	}

	.separator {
		opacity: 0.5;
	}

	.post-tags {
		display: flex;
		gap: var(--space-1);
		flex-wrap: wrap;
	}

	.tag {
		padding: 4px 8px;
		background: rgba(0, 0, 0, 0.05);
		border-radius: var(--border-radius-sm);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
	}

	.post-type {
		position: relative;
		display: inline-block;
		margin-left: 10px;
		padding: 2px 8px;
		background: rgba(180, 155, 120, 0.15);
		border-radius: 4px;
		color: #8b7355;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		line-height: 1;
	}

	.post-type::before {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid rgba(139, 115, 85, 0.5);
		border-radius: 4px;
		filter: var(--tag-filter, url(#sketchy-tag-0));
		pointer-events: none;
	}

	.star-btn {
		position: absolute;
		top: var(--space-2);
		right: var(--space-2);
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		color: #c8a020;
		opacity: 0;
		transition: opacity var(--transition-base);
		filter: url(#sketchy-border);
		line-height: 0;
	}

	.post-card:hover .star-btn {
		opacity: 1;
	}

	.post-card.favorited .star-btn {
		opacity: 1;
	}

	.star-icon {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linejoin: round;
	}

	.post-card.favorited .star-icon {
		fill: currentColor;
	}

	@media (max-width: 767px) {
		.blog-header {
			margin-bottom: var(--space-6);
		}

		.posts {
			gap: var(--space-4);
		}

		.post-card {
			padding: var(--space-3);
		}
	}
</style>
