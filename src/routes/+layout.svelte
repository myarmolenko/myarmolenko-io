<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte'
    import Footer from '$lib/components/footer/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<meta name="author" content="Maksym Yarmolenko" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Navbar />

<main class="main-content">
	{@render children()}
</main>

<Footer />
<BackToTop />

<style>
	.main-content {
		flex: 1 0 auto;
	}
</style>
