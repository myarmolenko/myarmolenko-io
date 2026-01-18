<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import ProseContainer from '$lib/components/layouts/ProseContainer.svelte';
</script>

<svelte:head>
	<title>About - Maksym Yarmolenko</title>
	<meta name="description" content="Learn more about Maksym Yarmolenko and this blog" />
</svelte:head>

<PageLayout>
	<ProseContainer>
		<h1>Welcome to SvelteKit About Page</h1>
		<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
	</ProseContainer>
</PageLayout>
