<script lang="ts">
	import type { Snippet } from 'svelte';

	type Width = 'narrow' | 'wide';

	let { children, width = 'narrow' }: { children: Snippet; width?: Width } = $props();

	const containerClass = $derived(width === 'wide' ? 'container-wide' : 'container');
</script>

<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true">
	<defs>
		<filter id="sketchy-border">
			<feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise" seed="5" />
			<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
		</filter>
		<filter id="sketchy-tag-0"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="2" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-1"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="7" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-2"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="11" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-3"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="17" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-4"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="23" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-5"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="31" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-6"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="37" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
		<filter id="sketchy-tag-7"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="43" /><feDisplacementMap in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G" /></filter>
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
