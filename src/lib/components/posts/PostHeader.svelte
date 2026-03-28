<script lang="ts">
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDateDisplay } from '$lib/utils/date';

	let { post }: { post: PostMetadata } = $props();
</script>

<header class="post-header">
	<h1>{post.title}</h1>
	{#if post.date}
		<div class="post-meta">
			<time datetime={post.date}>{formatDateDisplay(post.date)}</time>
			<span class="separator">·</span>
			<span>{post.readingTime} min read</span>
		</div>
	{/if}
</header>

<style>
	.post-header {
		text-align: center;
		padding-top: var(--space-1);
		margin-bottom: var(--space-6);
	}

	h1 {
		margin-bottom: var(--space-2);
	}

	.post-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		color: var(--text-color-secondary);
	}

	.separator {
		opacity: 0.5;
	}
</style>
