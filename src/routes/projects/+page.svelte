<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
</script>

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
