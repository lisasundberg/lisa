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

	let innerWidth: number;
	let innerHeight: number;

	let value: number = 100;
	let valueDark: number = 225;
	let valueLight: number = 70;

	let mouse = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}

	let lenis: Lenis;
	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', (e) => {
			// console.log(e)
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<h1 class="heading display" bind:clientHeight={$headingHeight} use:split use:headingMaskY>
	Lisa Sundberg
</h1>
<!-- <Background /> -->
<main on:mousemove={handleMousemove} style="--hue: {value}">
	<Intro />
	<CV />
</main>
<Footer />

<!-- <svg width="1920" height="1080" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<radialGradient
			id="GradientPad"
			cx="0.5"
			cy="0.5"
			r="0.75"
			fx={mouse.x / innerWidth}
			fy={mouse.y / innerHeight}
			spreadMethod="pad"
		>
			<stop offset="0%" stop-color="hsl({(valueLight * value) / 100}, 75%, 89%)"></stop>
			<stop offset="100%" stop-color="hsl({(valueDark * value) / 100}, 100%, 75%)"></stop>
		</radialGradient>
	</defs>
	<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" fill="url(#GradientPad)"></rect>
</svg> -->

<!-- <Canvas>
  <Scene />
</Canvas> -->

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

	/* svg {
		width: 100vw;
		height: 100dvh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	} */
</style>
