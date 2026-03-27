<script lang="ts">
	import type { PostType } from '$lib/content/loader';
	import { tagFilterIndex } from '$lib/utils/filters';

	let { type, slug }: { type: PostType; slug: string } = $props();
</script>

<span class="post-type" style="--tag-filter: url(#sketchy-tag-{tagFilterIndex(slug)})">{type}</span>

<style>
	.post-type {
		position: relative;
		display: inline-block;
		margin-left: 10px;
		padding: 2px 8px;
		background: rgba(180, 155, 120, 0.15);
		border-radius: 4px;
		color: #8b7355;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		line-height: 1;
	}

	.post-type::before {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid rgba(139, 115, 85, 0.5);
		border-radius: 4px;
		filter: var(--tag-filter, url(#sketchy-tag-0));
		pointer-events: none;
	}
</style>
