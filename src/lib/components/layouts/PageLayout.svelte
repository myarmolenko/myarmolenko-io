<script lang="ts">
	type Width = 'narrow' | 'wide';

	let { children, width = 'narrow' }: { children: any; width?: Width } = $props();

	const containerClass = width === 'wide' ? 'container-wide' : 'container';
</script>

<main class={containerClass}>
	<div class="page-content">
		{@render children()}
	</div>
</main>

<style>
	.page-content {
		padding-top: var(--space-4);
		padding-bottom: var(--space-4);
	}

	@media (max-width: 767px) {
		.page-content {
			padding-top: var(--space-4);
		}
	}
</style>
