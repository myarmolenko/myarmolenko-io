<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageLayout from './PageLayout.svelte';
	import ProseContainer from './ProseContainer.svelte';
	import PostHeader from '$lib/components/posts/PostHeader.svelte';
	import type { PostMetadata } from '$lib/content/loader';

	let { post, children }: { post: PostMetadata; children: Snippet } = $props();
</script>

<PageLayout width="narrow">
	<PostHeader {post} />

	<ProseContainer>
		{@render children()}
	</ProseContainer>
</PageLayout>
