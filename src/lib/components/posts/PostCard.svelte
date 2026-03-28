<script lang="ts">
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDate } from '$lib/utils/date';
	import TagBadge from './TagBadge.svelte';
	import PostTypeBadge from './PostTypeBadge.svelte';
	import FavoriteButton from './FavoriteButton.svelte';

	let { post, favorited, ontoggle }: {
		post: PostMetadata;
		favorited: boolean;
		ontoggle: (slug: string) => void;
	} = $props();
</script>

<article class="post-card" class:favorited>
	<a href="/blog/{post.slug}" class="post-link">
		<div class="post-title-row">
			<h2 class="post-title">{post.title}</h2>
			{#if post.type}
				<PostTypeBadge type={post.type} slug={post.slug} />
			{/if}
		</div>
		{#if post.description}<p class="post-description">{post.description}</p>{/if}
		<div class="post-meta">
			{#if post.date}<time datetime={post.date} class="post-date">{formatDate(post.date)}</time>{/if}
			<span class="separator">•</span>
			<span>{post.readingTime} min read</span>
			{#if post.tags.length > 0}
				<span class="separator">•</span>
				<div class="post-tags">
					{#each post.tags as tag}
						<TagBadge {tag} />
					{/each}
				</div>
			{/if}
		</div>
	</a>
	<FavoriteButton slug={post.slug} {favorited} ontoggle={() => ontoggle(post.slug)} />
</article>

<style>
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
		line-height: 1;
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

	/* Position the star button within the card */
	.post-card :global(.star-btn) {
		position: absolute;
		top: var(--space-2);
		right: var(--space-2);
		opacity: 0;
	}

	.post-card:hover :global(.star-btn),
	.post-card.favorited :global(.star-btn) {
		opacity: 1;
	}

	@media (max-width: 767px) {
		.post-card {
			padding: var(--space-3);
		}
	}
</style>
