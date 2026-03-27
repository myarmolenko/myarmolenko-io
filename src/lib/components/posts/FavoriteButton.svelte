<script lang="ts">
	let { slug, favorited, ontoggle }: {
		slug: string;
		favorited: boolean;
		ontoggle: () => void;
	} = $props();

	// Deterministic star shape: each post gets a unique slightly-irregular star
	// based on a seeded PRNG derived from its slug.
	function getStarPoints(s: string): string {
		let seed = 0;
		for (const char of s) seed = (seed * 31 + char.charCodeAt(0)) | 0;

		let r = seed;
		const rand = () => { r = (r * 1664525 + 1013904223) & 0xffffffff; return (r >>> 0) / 0xffffffff; };

		const cx = 12, cy = 12;
		const pts: string[] = [];
		for (let i = 0; i < 5; i++) {
			const outerR = 9 + rand() * 2.5;
			const outerAngle = (Math.PI * 2 * i / 5) - Math.PI / 2 + (rand() - 0.5) * 0.25;
			const innerR = 3.5 + rand() * 1.5;
			const innerAngle = outerAngle + Math.PI / 5 + (rand() - 0.5) * 0.2;
			pts.push(
				`${(cx + outerR * Math.cos(outerAngle)).toFixed(2)},${(cy + outerR * Math.sin(outerAngle)).toFixed(2)}`,
				`${(cx + innerR * Math.cos(innerAngle)).toFixed(2)},${(cy + innerR * Math.sin(innerAngle)).toFixed(2)}`
			);
		}
		return pts.join(' ');
	}

	const starPoints = $derived(getStarPoints(slug));
</script>

<button
	class="star-btn"
	class:filled={favorited}
	aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
	onclick={ontoggle}
>
	<svg class="star-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
		<polygon points={starPoints} />
	</svg>
</button>

<style>
	.star-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		color: #c8a020;
		transition: opacity var(--transition-base);
		filter: url(#sketchy-border);
		line-height: 0;
	}

	.star-icon {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linejoin: round;
	}

	.star-btn.filled .star-icon {
		fill: currentColor;
	}
</style>
