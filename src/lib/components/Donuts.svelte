<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import gsap from 'gsap/dist/gsap';

	let canvas: HTMLCanvasElement;
	let innerHeight: number;
	let innerWidth: number;

	let camera: THREE.PerspectiveCamera;
	const scene = new THREE.Scene();
	const geometry = new THREE.TorusGeometry(0.1, 0.05, 32, 100);
	const material = new THREE.MeshNormalMaterial();
	let renderer: THREE.WebGLRenderer;

	let donuts: THREE.Mesh[] = [];

	const resize = () => {
		if (renderer && camera) {
			renderer.setSize(innerWidth, innerHeight);
			camera.aspect = innerWidth / innerHeight;
			camera.updateProjectionMatrix();
		}
	};

	const addDonut = (clientX: number, clientY: number) => {
		// Convert screen space (2D) to normalized device coordinates (NDC)
		const x = (clientX / innerWidth) * 2 - 1;
		const y = -(clientY / innerHeight) * 2 + 1;

		// Use a raycaster to find the 3D position on a plane
		const raycaster = new THREE.Raycaster();
		raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

		// Intersect with a plane at z = 0
		const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
		const point = new THREE.Vector3();
		raycaster.ray.intersectPlane(plane, point);

		// Create a new donut at the calculated position
		const donut = new THREE.Mesh(geometry, material);
		donut.position.copy(point);

		scene.add(donut);

		gsap.fromTo(
			donut.scale,
			{
				x: 0.0,
				y: 0.0,
				z: 0.0
			},
			{
				x: 1.0,
				y: 1.0,
				z: 1.0,
				duration: 0.2,
				ease: 'back.out'
			}
		);

		donuts.push(donut);
	};

	const render = () => {
		requestAnimationFrame(render);

		donuts.forEach((donut) => {
			gsap.to(donut.rotation, { x: donut.rotation.x + 0.05, y: donut.rotation.y + 0.05 });
		});

		renderer.render(scene, camera);
	};

	onMount(() => {
		camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 10);
		camera.position.z = 1;

		donuts.forEach((donut) => {
			gsap.to(donut, { scale: 2, duration: 1, repeat: -1, yoyo: true });
		});

		renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

		resize();
		render();
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} />
<svelte:document on:click={(e) => addDonut(e.clientX, e.clientY)} />

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
