<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import Meta from '$lib/components/Meta.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/index.css';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time: number) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});
</script>

<Meta />
<header>
	<Nav />
</header>
<main>
	{@render children?.()}
</main>

<Footer />

<style>
	header {
		grid-column: full;
		position: sticky;
		top: 0;
		z-index: 2;
	}

	main {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: full;
		padding-block: 10vh;
	}
</style>
