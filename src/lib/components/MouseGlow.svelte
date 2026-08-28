<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';

	import { prefersReducedMotion } from '$lib/stores/motion';

	let glow: HTMLDivElement;

	onMount(() => {
		gsap.set(glow, {
			xPercent: -50,
			yPercent: -50,
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		});

		if ($prefersReducedMotion) return;

		const xTo = gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power3' });
		const yTo = gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power3' });

		const handlePointerMove = (event: PointerEvent) => {
			xTo(event.clientX);
			yTo(event.clientY);
		};

		window.addEventListener('pointermove', handlePointerMove);

		onDestroy(() => window.removeEventListener('pointermove', handlePointerMove));
	});
</script>

<div class="glow" bind:this={glow} aria-hidden="true"></div>

<style>
	.glow {
		position: fixed;
		top: 0;
		left: 0;
		width: min(70vw, 900px);
		aspect-ratio: 1;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--color-yellow) 55%, transparent) 0%,
			transparent 70%
		);
	}
</style>
