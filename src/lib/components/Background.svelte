<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import { sculptToMinimalRenderer } from 'shader-park-core';

	function shader() {
		// @ts-ignore
		let pointerDown = input(0);

		// @ts-ignore
		setMaxIterations(7);
		// @ts-ignore
		displace(mouse.x * 0.3, mouse.y * 0.3, 0);

		// @ts-ignore
		let s = getSpace();
		// @ts-ignore
		let r = getRayDirection();

		// @ts-ignore
		let n1 = noise(r * 4 + vec3(0, 0, 0) * 0.5);
		// @ts-ignore
		let n = noise(s + vec3(n1, 0, time * 0.05) + n1);

		// @ts-ignore
		metal(n * 0.5 + 0.5);
		// @ts-ignore
		shine(n * 0.5 + 0.5);

		// @ts-ignore
		color(normal * 0.1 + vec3(0.1, 0, 2));
		// @ts-ignore
		boxFrame(vec3(0.5), 0.1);
		// @ts-ignore
		mixGeo(pointerDown);
		// @ts-ignore
		color(normal * 0.1 + vec3(0.1, 0, 6));
		// @ts-ignore
		sphere(n * 0.5 + 0.8);
	}

	let canvas: HTMLCanvasElement;

	onMount(() => {
		sculptToMinimalRenderer(canvas, shader);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
</style>
