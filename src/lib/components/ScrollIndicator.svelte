<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';
	import Arrow from '$lib/components/Arrow.svelte';

	// Matches Nav.svelte's SCROLL_REVEAL_OFFSET so the indicator toggles in sync with the nav.
	const NAV_REVEAL_OFFSET = 20;

	let indicator: HTMLElement;
	let ctx: gsap.Context;
	let scrollTrigger: ScrollTrigger | undefined;

	function show() {
		gsap.to(indicator, {
			autoAlpha: 1,
			yPercent: 0,
			duration: $prefersReducedMotion ? 0 : 0.8,
			ease: EASE_REVEAL
		});
	}

	function hide() {
		gsap.to(indicator, {
			autoAlpha: 0,
			yPercent: $prefersReducedMotion ? 0 : 100,
			duration: $prefersReducedMotion ? 0 : 0.8,
			ease: EASE_REVEAL
		});
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			gsap.set(indicator, { autoAlpha: 0 });
		});
	});

	$effect(() => {
		if (!$pageRevealFinished || scrollTrigger) return;

		show();

		scrollTrigger = ScrollTrigger.create({
			start: NAV_REVEAL_OFFSET,
			onEnter: hide,
			onLeaveBack: show
		});
	});

	onDestroy(() => {
		scrollTrigger?.kill();
		ctx?.revert();
	});
</script>

<div class="scroll-indicator" bind:this={indicator} aria-hidden="true">
	<Arrow down />
</div>

<style>
	.scroll-indicator {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		translate: -50% 0;
		width: 2.5rem;
		height: 2.5rem;
		display: grid;
		place-items: center;
		border: 1px solid currentColor;
		border-radius: 50%;
		visibility: hidden;
		opacity: 0;
	}
</style>
