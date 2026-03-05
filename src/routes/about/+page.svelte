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
		<h1>About</h1>
		<p>Hi there, I’m Maksym 👋</p>
		<p>I’m a software engineer, mostly focused on backend solutions.</p>
		<!-- <p>I built this site to be kind of a digital garden for my learnings. I’m a curious person and I spend a lot of time tinkering, so I wanted a place to collect my notes, ideas, and everything that keeps my mind busy in the technical world.</p>		 -->
		<p>This site is my digital garden for learning and tinkering — a place to collect notes, ideas, and everything that keeps my mind busy in the technical world.</p>

		<h2>About Me</h2>
		<p><a href="/about/career">/career</a> - brief overview of my journey as a software engineer</p>
	</ProseContainer>
</PageLayout>

<style>
	h1 {
		text-align: center;
	}
</style>
