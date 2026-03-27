<script lang="ts">
	let { tag }: { tag: string } = $props();
</script>

<span class="tag">{tag}</span>

<style>
	.tag {
		padding: var(--space-1) var(--space-2);
		background: rgba(0, 0, 0, 0.05);
		border-radius: var(--border-radius-sm);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
	}
</style>
