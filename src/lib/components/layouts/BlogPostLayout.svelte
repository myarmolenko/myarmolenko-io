<script lang="ts">
	import PageLayout from './PageLayout.svelte';
	import ProseContainer from './ProseContainer.svelte';

	interface PostMetadata {
		title: string;
		description: string;
		date: string;
		author: string;
		tags: string[];
		published: boolean;
		slug: string;
	}

	let { post, children }: { post: PostMetadata; children: any } = $props();

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<PageLayout width="narrow">
	<header class="post-header">
		<h1>{post.title}</h1>
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

	.post-header h1 {
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
</style>
