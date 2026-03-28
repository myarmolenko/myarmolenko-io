<script lang="ts">
	import type { PostMetadata } from '$lib/content/loader';
	import { formatDateDisplay } from '$lib/utils/date';

	let { post }: { post: PostMetadata } = $props();
</script>

<header class="post-header">
	<h1>{post.title}</h1>
	{#if post.date}<time class="post-date" datetime={post.date}>{formatDateDisplay(post.date)}</time>{/if}
</header>

<style>
	.post-header {
		text-align: center;
		padding-top: var(--space-2);
		margin-bottom: var(--space-6);
	}

	.post-date {
		display: block;
		font-size: var(--font-size-sm);
		color: var(--text-color-secondary);
	}
</style>
