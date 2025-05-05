<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Body } from 'svelte-body';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import { currentTheme, INVERTED_CLASSNAME } from '$lib/stores/theme';

	import Meta from '$lib/components/Meta.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageReveal from '$lib/components/PageReveal.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import '$lib/styles/index.css';

	interface Props {
		children?: import('svelte').Snippet;
		data: {
			pathname: string;
		};
	}

	let { children, data }: Props = $props();

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

	afterNavigate(() => {
		if (document.body.classList.contains(INVERTED_CLASSNAME)) {
			document.body.classList.remove(INVERTED_CLASSNAME);
		}
	});
</script>

<Body class={$currentTheme} />
<Meta />
<header>
	<Nav />
</header>

<!-- <PageTransition url={data.pathname}> -->
<main>
	{@render children?.()}
</main>
<Footer />

<!-- </PageTransition> -->

<PageReveal />

<style>
	header {
		grid-column: full;
		position: sticky;
		top: 0;
		z-index: 8;
	}
</style>
