<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import { sculptToMinimalRenderer } from 'shader-park-core';

	interface State {
		x: number;
		y: number;
		scrollProgress: number;
	}

	let innerHeight: number;
	let innerWidth: number;
	let canvas: HTMLCanvasElement;
	let state: State = {
		x: 0.0,
		y: 0.0,
		scrollProgress: 0.0
	};

	function shader() {
		// @ts-ignore
		let pointerDown = input(0);
		// @ts-ignore
		let x = input(0);
		// @ts-ignore
		let y = input(0);
		// @ts-ignore
		let scrollProgress = input(0);

		// @ts-ignore
		setMaxIterations(3);
		// @ts-ignore
		displace(x * 0.3, y * 0.3, 0);

		// @ts-ignore
		let s = getSpace();
		// @ts-ignore
		let r = getRayDirection();

		// @ts-ignore
		let n1 = noise(r * 2 + vec3(0, 0, 0));
		// @ts-ignore
		let n = noise(s + vec3(n1, 0, time * 0.02) + n1);

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
		color(normal * 0.05 + vec3(0.1, 0, 6));
		// @ts-ignore
		sphere(n * 0.5 + 0.8 + scrollProgress * 0.9, 0.3);
	}

	function ease(value: number, target: number, factor: number): number {
		return value + (target - value) * factor;
	}

	let targetMouse = { x: 0, y: 0 };
	const easingFactor = 0.2;

	function handleMouseMove(e: MouseEvent) {
		targetMouse.x = e.clientX / innerWidth;
		targetMouse.y = e.clientY / innerHeight;
	}

	function updateMousePosition() {
		state.x = ease(state.x, targetMouse.x, easingFactor);
		state.y = ease(state.y, targetMouse.y, easingFactor);
		requestAnimationFrame(updateMousePosition);
	}

	function handleScroll() {
		state.scrollProgress = window.scrollY / (document.body.scrollHeight - innerHeight);
	}

	onMount(() => {
		sculptToMinimalRenderer(canvas, shader, () => {
			return state;
		});
		requestAnimationFrame(updateMousePosition);
	});
</script>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:mousemove={handleMouseMove}
	on:scroll={handleScroll}
/>
<div class="background">
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.background {
		transition: opacity 1s linear 2s;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	/* 
	canvas {
		width: 100%;
		height: 100%;
	} */
</style>
