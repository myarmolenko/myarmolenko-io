<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageLayout from './PageLayout.svelte';
	import ProseContainer from './ProseContainer.svelte';
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDate } from '$lib/utils/date';
	import { tagFilterIndex } from '$lib/utils/filters';

	let { post, children }: { post: PostMetadata; children: Snippet } = $props();
</script>

<PageLayout width="narrow">
	<header class="post-header">
		<div class="post-title-row">
			<h1>{post.title}</h1>
			{#if post.type}
				<span class="post-type" style="--tag-filter: url(#sketchy-tag-{tagFilterIndex(post.slug)})">{post.type}</span>
			{/if}
		</div>
		<div class="post-meta">
			<time datetime={post.date}>{formatDate(post.date)}</time>
			<span class="separator">•</span>
			<span>{post.author}</span>
		</div>
		{#if post.tags.length}
			<div class="post-tags">
				{#each post.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<ProseContainer>
		{@render children()}
	</ProseContainer>
</PageLayout>

<style>
	.post-header {
		margin-bottom: var(--space-6);
	}

	.post-title-row {
		display: flex;
		align-items: center;
		gap: 0;
		flex-wrap: wrap;
		margin-bottom: var(--space-2);
	}

	.post-meta {
		margin-top: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--text-color-secondary);
	}

	.separator {
		margin: 0 var(--space-1);
	}

	.post-tags {
		display: flex;
		gap: var(--space-1);
		margin-top: var(--space-3);
		flex-wrap: wrap;
	}

	.tag {
		padding: var(--space-1) var(--space-2);
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
</style>
