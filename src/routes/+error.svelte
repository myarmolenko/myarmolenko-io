<script lang="ts">
	import { page } from '$app/state';
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ProseContainer from '$lib/components/layouts/ProseContainer.svelte';
</script>

<svelte:head>
	<title>{page.status} - Maksym Yarmolenko</title>
</svelte:head>

<PageLayout>
	<ProseContainer>
		<div class="error-page">
			<h1>{page.status}</h1>
			<p class="error-message">{page.error?.message || 'Something went wrong'}</p>
			<nav class="error-nav">
				<a href="/">Go Home</a>
				<a href="/blog">View Blog</a>
			</nav>
		</div>
	</ProseContainer>
</PageLayout>

<style>
	.error-page {
		text-align: center;
		padding: var(--space-8) 0;
	}

	.error-page h1 {
		font-size: var(--font-size-4xl);
		margin-bottom: var(--space-4);
		color: var(--text-color);
	}

	.error-message {
		font-size: var(--font-size-lg);
		color: var(--text-color-secondary);
		margin-bottom: var(--space-6);
	}

	.error-nav {
		display: flex;
		gap: var(--space-3);
		justify-content: center;
		flex-wrap: wrap;
	}

	.error-nav a {
		padding: var(--space-2) var(--space-4);
		background: rgba(0, 0, 0, 0.05);
		border-radius: var(--border-radius-md);
		text-decoration: none;
		color: var(--text-color);
		font-weight: var(--font-weight-medium);
		transition: all var(--transition-fast);
	}

	.error-nav a:hover {
		background: rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	@media (max-width: 767px) {
		.error-page {
			padding: var(--space-6) 0;
		}

		.error-page h1 {
			font-size: var(--font-size-3xl);
		}
	}
</style>
