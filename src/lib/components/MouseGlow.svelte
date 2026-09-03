<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import { pointerFollow } from '$lib/actions/pointerFollow';

	let glow: HTMLDivElement;

	onMount(() => {
		gsap.set(glow, {
			xPercent: -50,
			yPercent: -50,
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		});
	});
</script>

<div
	class="glow"
	bind:this={glow}
	aria-hidden="true"
	use:pointerFollow={{
		zone: 'window',
		duration: 0.8,
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
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--color-yellow) 55%, transparent) 0%,
			transparent 70%
		);
	}
</style>
