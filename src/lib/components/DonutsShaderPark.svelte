<script lang="ts">
	import { Scene, PerspectiveCamera, WebGLRenderer, Color, Vector3 } from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	// @ts-ignore
	import { sculptToMinimalRenderer } from 'shader-park-core';
	import { onMount } from 'svelte';

	let innerHeight: number;
	let innerWidth: number;
	let canvas: HTMLCanvasElement;
	let scene: Scene;
	let params: { time: number };
	let camera: PerspectiveCamera;
	let renderer: WebGLRenderer;

	// function spCode() {
	// 	// @ts-ignore
	// 	color(normal);
	// 	// @ts-ignore
	// 	sphere(0.2);
	// }

	// onMount(() => {
	// 	scene = new Scene();
	// 	params = { time: 0 };

	// 	camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	// 	camera.position.z = 5;

	// 	renderer = new WebGLRenderer({ antialias: true });
	// 	renderer.setSize(window.innerWidth, window.innerHeight);
	// 	renderer.setPixelRatio(window.devicePixelRatio);
	// 	renderer.setClearColor(new Color(1, 1, 1), 1);

	// 	//Shader Park setup
	// 	let mesh = createSculpture(spCode, () => ({
	// 		time: params.time,
	// 		size: 12,
	// 		gyroidSteps: 0.03
	// 	}));

	// 	scene.add(mesh);

	// 	let controls = new OrbitControls(camera, renderer.domElement, {
	// 		enableDamping: true,
	// 		dampingFactor: 0.25,
	// 		zoomSpeed: 0.5,
	// 		rotateSpeed: 0.5
	// 	});

	// 	let onWindowResize = () => {
	// 		camera.aspect = window.innerWidth / window.innerHeight;
	// 		camera.updateProjectionMatrix();
	// 		renderer.setSize(window.innerWidth, window.innerHeight);
	// 	};

	// 	window.addEventListener('resize', onWindowResize);

	// 	let render = () => {
	// 		requestAnimationFrame(render);
	// 		params.time += 0.01;
	// 		controls.update();
	// 		renderer.render(scene, camera);
	// 	};

	// 	render();
	// });

	interface State {
		x: number;
		y: number;
		scrollProgress: number;
	}

	function shader() {
		// @ts-ignore
		color(normal * 0.1 + vec3(0.1, 0, 2));
		// @ts-ignore
		sphere(1.0, 0.3);
	}

	const onWindowResize = () => {
		// camera.aspect = window.innerWidth / window.innerHeight;
		// camera.updateProjectionMatrix();
		renderer.setSize(innerWidth, innerHeight);
	};

	let state: State = {
		x: 0.0,
		y: 0.0,
		scrollProgress: 0.0
	};

	onMount(() => {
		sculptToMinimalRenderer(canvas, shader, () => {
			return state;
		});
		// requestAnimationFrame(updateMousePosition);
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={onWindowResize} />

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
