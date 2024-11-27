<!-- <script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let innerHeight: number;
	let innerWidth: number;

	let camera: THREE.PerspectiveCamera;
	const scene = new THREE.Scene();
	// let geometry: THREE.TorusGeometry;
	// let material: THREE.MeshNormalMaterial;
	// let donut: THREE.Mesh;
	const geometry = new THREE.TorusGeometry(0.1, 0.05, 32, 100);
	const material = new THREE.MeshNormalMaterial();
	const donut = new THREE.Mesh(geometry, material);
	let renderer: THREE.WebGLRenderer;

	const resize = () => {
		renderer.setSize(innerWidth, innerHeight);
		camera.aspect = innerWidth / innerHeight;
		camera.updateProjectionMatrix();
	};

	let donuts: THREE.Mesh[] = [];

	const addDonut = (x: number, y: number, z: number = 0) => {
		let mesh = donut.clone();

		mesh.position.set(x, y, z);

		scene.add(mesh);
		donuts.push(mesh);

		console.log(donuts, mesh.position.x, mesh.position.y);
	};

	const animate = () => {
		requestAnimationFrame(animate);

		donuts.forEach((donut) => {
			donut.rotation.x += 0.01;
			donut.rotation.y += 0.01;
		});

		renderer.render(scene, camera);
	};

	onMount(() => {
		camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);
		camera.position.z = 5;
		camera.position.y = 1;
		camera.position.x = 1;
		camera.lookAt(0, 0, 0);

		renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

		scene.add(donut);
		const gridHelper = new THREE.GridHelper(3, 40);
		scene.add(gridHelper);

		resize();
		animate();
	});
</script> -->

<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

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
		donuts.push(donut);

		console.log(donuts, point.x, point.y, point.z);
	};

	const animate = () => {
		requestAnimationFrame(animate);

		donuts.forEach((donut) => {
			donut.rotation.x += 0.01;
			donut.rotation.y += 0.01;
		});

		renderer.render(scene, camera);
	};

	onMount(() => {
		camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 10);
		camera.position.z = 1;

		renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

		resize();
		animate();
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
