<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
</script>

<svelte:head>
	<title>Projects - Maksym Yarmolenko</title>
	<meta name="description" content="Projects by Maksym Yarmolenko." />
	<meta property="og:title" content="Projects - Maksym Yarmolenko" />
	<meta property="og:description" content="Projects by Maksym Yarmolenko." />
</svelte:head>

<PageLayout>
	<PageHeader title="Projects" />
	<div class="empty-state">
		<p>Working on it.</p>
	</div>
</PageLayout>

<style>
	.empty-state {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		text-align: center;
		color: var(--text-color-secondary);
		font-size: var(--font-size-lg);
		line-height: var(--line-height-relaxed);
	}
</style>
