<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import { formatDate } from '$lib/utils/date';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<PageLayout>
	<header class="blog-header">
		<h1>Blog</h1>
		<p class="blog-description">
			Thoughts on software engineering, web development, and technology
		</p>
	</header>

	<div class="posts">
		{#each data.posts as post (post.slug)}
			<article class="post-card">
				<a href="/blog/{post.slug}" class="post-link">
					<h2 class="post-title">{post.title}</h2>
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
			</article>
		{/each}
	</div>
</PageLayout>

<style>
	.blog-header {
		margin-bottom: var(--space-8);
	}

	.blog-header h1 {
		margin-bottom: var(--space-2);
	}

	.blog-description {
		color: var(--text-color-secondary);
		font-size: var(--font-size-lg);
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.post-card {
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

	.post-title {
		margin-bottom: var(--space-2);
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
