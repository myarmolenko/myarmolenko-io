<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageLayout from './PageLayout.svelte';
	import ProseContainer from './ProseContainer.svelte';
	import TagBadge from '$lib/components/posts/TagBadge.svelte';
	import PostTypeBadge from '$lib/components/posts/PostTypeBadge.svelte';
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDate } from '$lib/utils/date';

	let { post, children }: { post: PostMetadata; children: Snippet } = $props();
</script>

<PageLayout width="narrow">
	<header class="post-header">
		<div class="post-title-row">
			<h1>{post.title}</h1>
			{#if post.type}
				<PostTypeBadge type={post.type} slug={post.slug} />
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
					<TagBadge {tag} />
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
</style>
