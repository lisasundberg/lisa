<script lang="ts" type="module">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import { headingMaskY } from '$lib/actions/animations';
	import { split } from '$lib/actions/splitting';
	import { headingHeight } from '$lib/stores/app';
	import Intro from '$lib/components/Intro.svelte';
	import Background from '$lib/components/Background.svelte';
	import CV from '$lib/components/CV.svelte';
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
	});
</script>

<h1
	class="heading display"
	bind:this={heading}
	bind:clientHeight={$headingHeight}
	use:split
	use:headingMaskY
>
	Lisa Sundberg
</h1>
<Background />
<main>
	<Intro />
	<CV />
</main>
<Footer />

<style>
	.heading {
		grid-column: full;
		position: sticky;
		top: 0;
		bottom: 0;
		order: 3;
	}

	main {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		color: var(--color-text-primary);
		padding-top: 10dvh;
	}
</style>
