<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte'
    import Footer from '$lib/components/footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar/>

{@render children()}

<Footer/>
