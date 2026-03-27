<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ProseContainer from '$lib/components/layouts/ProseContainer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Career - Maksym Yarmolenko</title>
	<meta name="description" content="A brief overview of my journey as a software engineer" />
</svelte:head>

<PageLayout>
	<ProseContainer>
		<data.content />
	</ProseContainer>
</PageLayout>
