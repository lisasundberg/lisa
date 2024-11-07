<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import { sculptToMinimalRenderer } from 'shader-park-core';

	interface State {
		x: number;
		y: number;
	}

	let innerHeight: number;
	let innerWidth: number;
	let canvas: HTMLCanvasElement;
	let state: State = {
		x: 0.0,
		y: 0.0
	};

	function shader() {
		// @ts-ignore
		let pointerDown = input(0);
		// @ts-ignore
		let x = input(0);
		// @ts-ignore
		let y = input(0);

		// @ts-ignore
		setMaxIterations(7);
		// @ts-ignore
		displace(x * 0.3, y * 0.3, 0);

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

	function handleMouseMove(e: MouseEvent) {
		state.x = e.clientX / innerWidth;
		state.y = e.clientY / innerHeight;
	}

	onMount(() => {
		sculptToMinimalRenderer(canvas, shader, () => {
			return state;
		});
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth on:mousemove={handleMouseMove} />
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
