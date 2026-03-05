<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		const onScroll = () => {
			visible = window.scrollY > 200;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button class="back-to-top" onclick={scrollToTop} aria-label="Back to top" transition:fade={{ duration: 250 }}>
		<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<polyline points="18 15 12 9 6 15"></polyline>
		</svg>
	</button>
{/if}

<style>
	.back-to-top {
		position: fixed;
		bottom: var(--space-2);
		right: var(--space-2);
		width: 2.7rem;
		height: 2.7rem;
		border-radius: 50%;
		border: 2px solid var(--text-color-secondary);
		background: var(--bg-color);
		color: var(--text-color);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: var(--z-sticky);
		transition: background var(--transition-base);
		padding: 0;
	}

	.back-to-top:hover {
		background: rgba(51, 51, 51, 0.08);
	}
</style>
