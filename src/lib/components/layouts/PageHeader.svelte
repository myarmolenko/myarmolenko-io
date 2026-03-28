<script lang="ts">
	let { title, subtitle, paddingTop = 'var(--space-1)', marginBottom = 'var(--space-4)' }: {
		title: string;
		subtitle?: string;
		paddingTop?: string;
		marginBottom?: string;
	} = $props();
</script>

<header
	class="page-header"
	style:padding-top={paddingTop}
	style:margin-bottom={marginBottom}
>
	<h1 class:has-subtitle={subtitle}>{title}</h1>
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
</header>

<style>
	.page-header {
		text-align: center;
	}

	h1.has-subtitle {
		margin-bottom: var(--space-1);
	}

	.subtitle {
		color: var(--text-color-secondary);
		font-size: var(--font-size-lg);
	}

	@media (max-width: 640px) {
		h1 {
			font-size: var(--font-size-3xl);
		}

		.subtitle {
			font-size: var(--font-size-base);
		}
	}
</style>
