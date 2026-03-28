<script lang="ts">
	import PageLayout from '$lib/components/layouts/PageLayout.svelte';
	import PageHeader from '$lib/components/layouts/PageHeader.svelte';
	import ProseContainer from '$lib/components/layouts/ProseContainer.svelte';
</script>

<svelte:head>
	<title>About - Maksym Yarmolenko</title>
	<meta name="description" content="Learn more about this blog and its author, Maksym Yarmolenko." />
	<meta property="og:title" content="About - Maksym Yarmolenko" />
	<meta property="og:description" content="Learn more about this blog and its author, Maksym Yarmolenko." />
</svelte:head>

<PageLayout>
	<PageHeader title="About" />

	<ProseContainer>
		<p>Hi there, I'm Maksym 👋</p>
		<p>I'm a software engineer, mostly focused on backend solutions.</p>
		<p>This site is my digital garden for learning and tinkering — a place to collect notes, ideas, and everything that keeps my mind busy in the technical world.</p>

</ProseContainer>
</PageLayout>
