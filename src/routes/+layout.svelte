<script lang="ts">
	import { onMount } from 'svelte';
	import { onNavigate, afterNavigate } from '$app/navigation';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Body } from 'svelte-body';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import { currentTheme, INVERTED_CLASSNAME } from '$lib/stores/theme';

	import Meta from '$lib/components/Meta.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageReveal from '$lib/reveals/PageReveal.svelte';
	// import PageTransition from '$lib/components/PageTransition.svelte';

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

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(() => {
		if (typeof document !== 'undefined' && document.body.classList.contains(INVERTED_CLASSNAME)) {
			document.body.classList.remove(INVERTED_CLASSNAME);
		}
	});
</script>

<Body class={$currentTheme} />
<Meta />
<header>
	<Nav />
</header>

<main>
	{@render children?.()}
</main>
<Footer />

<PageReveal />

<style>
	header {
		grid-column: full;
		position: sticky;
		top: 0;
		z-index: 8;
		view-transition-name: header;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	:root {
		--page-transition-duration: 0.18s;
	}

	:root::view-transition-old(root) {
		animation: var(--page-transition-duration) linear both fade-out;
	}

	:root::view-transition-new(root) {
		animation: var(--page-transition-duration) linear var(--page-transition-duration) both fade-in;
	}

	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
</style>
