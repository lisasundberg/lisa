<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	// Matches Nav.svelte's SCROLL_REVEAL_OFFSET so the indicator toggles in sync with the nav.
	const NAV_REVEAL_OFFSET = 20;

	let indicator: HTMLElement;
	let ctx: gsap.Context;
	let unsubscribe: () => void;
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

			unsubscribe = pageRevealFinished.subscribe((finished) => {
				if (!finished) return;

				show();

				scrollTrigger ??= ScrollTrigger.create({
					start: NAV_REVEAL_OFFSET,
					onEnter: hide,
					onLeaveBack: show
				});
			});
		});
	});

	onDestroy(() => {
		unsubscribe?.();
		ctx?.revert();
	});
</script>

<div class="scroll-indicator" bind:this={indicator} aria-hidden="true">
	<svg
		class="arrow"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</div>

<style>
	.scroll-indicator {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		translate: -50% 0;
		width: 2.75rem;
		height: 2.75rem;
		display: grid;
		place-items: center;
		border: 1px solid currentColor;
		border-radius: 50%;
		visibility: hidden;
		opacity: 0;
	}

	.arrow {
		rotate: 90deg;
	}
</style>
