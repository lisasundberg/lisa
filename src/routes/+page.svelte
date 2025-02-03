<script lang="ts">
	import { onMount } from 'svelte';
	// import { fade } from 'svelte/transition';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	// import { currentTheme } from '$lib/stores/app';
	// import { headingMaskY } from '$lib/actions/animations';
	// import { split } from '$lib/actions/splitting';
	import { headingHeight } from '$lib/stores/app';
	import Nav from '$lib/components/Nav.svelte';
	// import ThemeNav from '$lib/components/ThemeNav.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Work from '$lib/components/Work.svelte';
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/index.css';

	let lenis: Lenis;
	let heading: HTMLElement;
	let timeline: gsap.core.Timeline;

	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		// timeline = gsap
		// 	.timeline({
		// 		scrollTrigger: {
		// 			trigger: '.heading',
		// 			start: 'bottom bottom',
		// 			end: 'bottom center',
		// 			scrub: 1
		// 			// markers: true
		// 		}
		// 	})
		// 	.to(heading, {
		// 		yPercent: 100,
		// 		scale: 0.2,
		// 		// ease: 'power4.out',
		// 		transformOrigin: 'top center'
		// 	});

		let mm = gsap.matchMedia();
		mm.add("(max-width: 768px)", () => {
			gsap.to(heading, {
				autoAlpha: 0.1,
				scrollTrigger: {
					trigger: heading,
					start: "top top+=10%",
					end: "top top",
					toggleActions: "play resume resume reverse",
				},
			});
		});

	});
</script>

<h1 class="heading" bind:this={heading} bind:clientHeight={$headingHeight}>Lisa Sundberg</h1>
<!-- <h1
	class="heading display"
	bind:this={heading}
	bind:clientHeight={$headingHeight}
	use:split
	use:headingMaskY
>
	Lisa Sundberg
</h1> -->

<Background />
<header>
	<Nav />
</header>
<main>
	<Intro />
	<Work />
	<About />
	<!-- <CV /> -->
</main>
<Footer />
<!-- <ThemeNav /> -->

<style>
	.heading {
		grid-column: full;
		position: sticky;
		top: 0;
		bottom: 0;
		margin: 0;
		order: 3;
		line-height: 1;
		font-family: var(--font-heading);
		font-weight: 100;
		font-size: 17.8vw;
		text-align: center;
		text-box-trim: trim-both;
		text-box-edge: cap alphabetic;
	}

	header {
		grid-column: full;
		position: sticky;
		top: 0;
		z-index: 2;
	}

	main {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		overflow: hidden;
		color: var(--_theme-color-primary);
		padding-top: 10dvh;
		z-index: 1;
	}
</style>
