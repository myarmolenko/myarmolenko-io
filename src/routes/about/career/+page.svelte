<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ProseContainer from '$lib/components/layouts/ProseContainer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Career - Maksym Yarmolenko</title>
	<meta name="description" content="A brief overview of my journey as a software engineer" />
</svelte:head>

<PageLayout>
	<ProseContainer>
		<data.content />
	</ProseContainer>

	{#if data.hasCv}
		<div class="cv-download">
			<a href="/Maksym_Yarmolenko_CV.pdf" download class="download-button">Download CV</a>
		</div>
	{/if}
</PageLayout>

<style>
	.cv-download {
		display: flex;
		justify-content: center;
		margin-top: var(--space-8);
	}

	.download-button {
		display: inline-block;
		padding: var(--space-2) var(--space-5);
		border: 1px solid var(--text-color);
		color: var(--text-color);
		text-decoration: none;
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.download-button:hover {
		background-color: var(--text-color);
		color: var(--bg-color);
	}
</style>
