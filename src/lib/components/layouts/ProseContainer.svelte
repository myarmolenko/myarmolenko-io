<script lang="ts">
	let { children }: { children: any } = $props();
</script>

<article class="prose">
	{@render children()}
</article>
