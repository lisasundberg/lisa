<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	import { pointerFollow } from '$lib/actions/pointerFollow';
	import { isTouch } from '$lib/stores/device';

	let glow: HTMLDivElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.set(glow, {
			xPercent: -50,
			yPercent: -50,
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		});

		// Touch has no hover, so instead of following a pointer the glow drifts with page scroll:
		// down the viewport and swaying side to side over the full scroll length.
		const mm = gsap.matchMedia();

		mm.add('(hover: none) and (prefers-reduced-motion: no-preference)', () => {
			const width = () => window.innerWidth;
			const height = () => window.innerHeight;

			const scrollTrigger = {
				start: 0,
				end: 'max',
				scrub: 1,
				invalidateOnRefresh: true
			};

			const timeline = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger });

			timeline.fromTo(glow, { y: () => height() * 0.2 }, { y: () => height() * 0.8 }, 0);

			const sway = [
				{ x: () => width() * 0.3, ease: 'sine.inOut' },
				{ x: () => width() * 0.7, ease: 'sine.inOut' },
				{ x: () => width() * 0.3, ease: 'sine.inOut' },
				{ x: () => width() * 0.7, ease: 'sine.inOut' }
			];

			timeline.to(glow, { keyframes: sway }, 0);
		});

		return () => mm.revert();
	});
</script>

<div
	class="glow"
	bind:this={glow}
	aria-hidden="true"
	use:pointerFollow={{
		zone: 'window',
		duration: 0.8,
		disabled: $isTouch,
		compute: (event) => ({ x: event.clientX, y: event.clientY })
	}}
></div>

<style>
	.glow {
		position: fixed;
		top: 0;
		left: 0;
		width: min(70vw, 900px);
		aspect-ratio: 1;
		z-index: -3;
		pointer-events: none;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--color-yellow) 55%, transparent) 0%,
			transparent 70%
		);
	}
</style>
