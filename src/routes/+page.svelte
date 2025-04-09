<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	import Nav from '$lib/components/Nav.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Work from '$lib/components/Work.svelte';
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ThemeNav from '$lib/components/ThemeNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/index.css';
	import MaintenanceMode from '$lib/components/MaintenanceMode.svelte';

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis();
		gsap.registerPlugin(ScrollTrigger);

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});
</script>

<!-- <h1 class="heading" bind:this={heading} bind:clientHeight={$headingHeight}>Lisa Sundberg</h1> -->
<!-- <Heading /> -->

<Background />
<MaintenanceMode />
<!-- <ThemeNav /> -->

<!-- 
<main>
	<Intro />
	<Work />
	<About /> 
	</main> 
<Footer />
-->
