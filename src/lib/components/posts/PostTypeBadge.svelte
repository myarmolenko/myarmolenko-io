<script lang="ts">
	import type { PostType } from '$lib/content/loader';
	import { tagFilterIndex } from '$lib/utils/filters';

	let { type, slug, size = 'sm' }: { type: PostType; slug: string; size?: 'sm' | 'lg' } = $props();
</script>

<span
	class="post-type {type}"
	class:lg={size === 'lg'}
	style="--tag-filter: url(#sketchy-tag-{tagFilterIndex(slug)})"
>{type}</span>

<style>
	.post-type {
		position: relative;
		display: inline-block;
		margin-left: 10px;
		padding: 2px 8px;
		border-radius: 4px;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		line-height: 1;

		/* fallback — should never be visible since type is validated */
		background: rgba(0, 0, 0, 0.06);
		color: #888;
		--badge-border: rgba(0, 0, 0, 0.2);
	}

	/* note — slate blue */
	.post-type.note {
		background: rgba(74, 111, 165, 0.1);
		color: #3a5e96;
		--badge-border: rgba(74, 111, 165, 0.4);
	}

	/* post — olive green */
	.post-type.post {
		background: rgba(85, 120, 70, 0.1);
		color: #4a7038;
		--badge-border: rgba(85, 120, 70, 0.4);
	}

	.post-type.lg {
		font-size: 0.8rem;
		padding: 4px 12px;
		border-radius: 6px;
	}

	.post-type::before {
		content: '';
		position: absolute;
		inset: 0;
		border: 1px solid var(--badge-border);
		border-radius: 4px;
		filter: var(--tag-filter, url(#sketchy-tag-0));
		pointer-events: none;
	}

	.post-type.lg::before {
		border-radius: 6px;
	}
</style>
