<script lang="ts">
	import type { Snippet } from 'svelte';

	type Width = 'narrow' | 'wide';

	let { children, width = 'narrow' }: { children: Snippet; width?: Width } = $props();

	const containerClass = $derived(width === 'wide' ? 'container-wide' : 'container');

	const tagFilterSeeds = [2, 7, 11, 17, 23, 31, 37, 43];
</script>

<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true">
	<defs>
		<filter id="sketchy-border">
			<feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" seed="5" />
			<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
		</filter>
		{#each tagFilterSeeds as seed, i}
			<filter id="sketchy-tag-{i}"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" {seed} /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		{/each}
	</defs>
</svg>

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
