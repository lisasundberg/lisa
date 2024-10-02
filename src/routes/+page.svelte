<script lang="ts" type="module">
	import { onMount } from	'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import gsap from "gsap/dist/gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";

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

	let lenis;
	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', (e) => {
			console.log(e)
		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time)=>{
			lenis.raf(time * 1000);
		})

		gsap.ticker.lagSmoothing(0)
	})
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<main on:mousemove={handleMousemove} style="--hue: {value}">
	<!-- <input type="range" name="hue" id="hue" min="0" max="100" bind:value /> -->
	<section class="intro">
		<div class="content">
			<header>
			<h2>Hi, I'm Lisa</h2>
			<p>
				Frontend developer based in Stockholm, Sweden, with a passion for beautiful and brand building user experiences.
			</p>
		</header>
		</div>
	</section>

	<CV />
</main>


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

<Footer />

<style>
	main {
		text-align: left;
		/* background-color: hsl(var(--hue), 50%, 70%); */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: var(--color-text-primary);
		width: var(--content-width);
		margin: auto;
		padding-top: 10dvh;
	}


	header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	header p {
		max-width: 29ch;
    text-wrap: pretty;
	}

	svg {
		width: 100vw;
		height: 100dvh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	section {
		min-height: 100dvh;
	}


	.column {
		height: 100%;
		grid-row: 2 / 3;
	}

	.list {
		list-style: none;
    padding-inline-start: 0;
	}

	.item {
		display: grid;
		gap: 0.25em;
		justify-content: space-between;
		margin-top: 2em;
		padding-top: 1em;
		border-top: 1px solid var(--color-text-primary);

	}

	.place {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.activity {
		margin-top: 0.125em;
	}
	
	.year {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	

</style>
