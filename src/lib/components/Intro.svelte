<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	let title: HTMLElement | null;
	let body: HTMLDivElement | null;

	let splitTitle: SplitText;

	// onMount(() => {
	// 	if ((pageRevealFinished && !title) || !body || $prefersReducedMotion) return;

	// 	document.fonts.ready.then(() => {
	// 		const splitParams = {
	// 			type: 'lines',
	// 			smartWrap: true,
	// 			mask: 'lines' as 'lines'
	// 		};

	// 		splitTitle = SplitText.create(body, splitParams);

	// 		const tl = gsap.timeline();

	// 		tl.from(title, {
	// 			opacity: 0,
	// 			ease: 'linear',
	// 			duration: 0.7,
	// 			delay: 0.2
	// 		}).from(
	// 			splitTitle.lines,
	// 			{
	// 				yPercent: 50,
	// 				autoAlpha: 0,
	// 				stagger: 0.1,
	// 				duration: 0.7,
	// 				ease: 'power4.out'
	// 			},
	// 			'-=0.6'
	// 		);
	// 	});
	// });
</script>

<section class="section intro" id="intro">
	<header>
		<h2 class="label" bind:this={title}>Hi, I'm Lisa</h2>
		<p bind:this={body}>
			I'm a design engineer slash frontend developer based in Stockholm, Sweden.
		</p>
	</header>
</section>

<style>
	.intro {
		grid-column: main;
		display: flex;
		flex-direction: column;
		min-height: 30dvh;
		gap: 1rem;
	}

	p {
		max-width: 26ch;
		margin-top: 0.5em;
	}
</style>
