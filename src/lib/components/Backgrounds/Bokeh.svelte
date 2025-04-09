<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;
	let innerHeight: number;
	let innerWidth: number;

	let camera: THREE.PerspectiveCamera;
	const scene = new THREE.Scene();
	let renderer: THREE.WebGLRenderer;

	let meshes: THREE.Mesh[] = [];
	const group = new THREE.Group();
	let mouse = { x: 0, y: 0 };

	const resize = () => {
		if (renderer && camera) {
			renderer.setSize(innerWidth, innerHeight);
			camera.aspect = innerWidth / innerHeight;
			camera.updateProjectionMatrix();
		}
	};

	// Shader Material
	const shaderMaterial = new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 }
		}
	});
	const planeGeometry = new THREE.PlaneGeometry(2, 2);

	// Function to create random geometries
	const createRandomGeometries = () => {
		const geometries = [
			new THREE.BoxGeometry((0.8 * innerWidth) / 900),
			new THREE.DodecahedronGeometry((0.7 * innerWidth) / 900),
			new THREE.IcosahedronGeometry((0.8 * innerWidth) / 900),
			new THREE.TetrahedronGeometry((0.5 * innerWidth) / 900),
			new THREE.TetrahedronGeometry((0.5 * innerWidth) / 900)
		];

		for (let i = 0; i < 7; i++) {
			const geometry = geometries[Math.floor(Math.random() * geometries.length)];
			const material = new THREE.MeshStandardMaterial({
				color: new THREE.Color(Math.random() - 0.2, Math.random() - 0.7, 1)
			});
			const mesh = new THREE.Mesh(geometry, material);

			// Random position
			mesh.position.set(
				(Math.random() - 0.5) * 2, // Spread across X-axis
				(Math.random() - 0.5) * 2, // Spread across Y-axis
				Math.random() - 1 // Spread across Z-axis
			);

			// Random scale
			const scale = Math.random() * 0.8 + 0.5;
			mesh.scale.set(scale, scale, scale);

			group.add(mesh);
			meshes.push(mesh);

			gsap.to(mesh.rotation, {
				x: mesh.rotation.x + Math.random() * Math.PI * 1.2,
				y: mesh.rotation.y + Math.random() * Math.PI * 1.2,
				duration: 20 + Math.random() * 2,
				repeat: -1,
				yoyo: true,
				ease: 'power1.inOut'
			});
		}
	};

	// Handle mouse movement to tilt the group
	const handleMouseMove = (event: MouseEvent) => {
		// Normalize mouse position to range [-1, 1]
		mouse.x = (event.clientX / innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / innerHeight) * 2 + 1;

		// Tilt the group based on mouse position
		gsap.to(group.rotation, {
			x: mouse.y * 0.2, // Tilt on the X-axis
			y: mouse.x * 0.2, // Tilt on the Y-axis
			duration: 0.5,
			ease: 'power2.out'
		});
	};

	const render = (time: number) => {
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	};

	onMount(() => {
		camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 10);
		camera.position.z = 1.5;

		renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });
		renderer.setClearColor(0xeeeeee, 1);

		// LIGHTING
		// Can not catch shadows
		const ambient = new THREE.HemisphereLight(0xeeeeee, 0x999999, 1);

		// Can catch shadows
		const light = new THREE.DirectionalLight(0xeeeeee, 1);
		light.position.set(0, 6, 2);
		scene.add(ambient);
		scene.add(light);

		// Add random geometries
		createRandomGeometries();

		// Add the group to the scene
		scene.add(group);

		resize();
		render(0);
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={resize} />
<svelte:document on:mousemove={(e) => handleMouseMove(e)} />

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		filter: blur(100px);
	}
</style>
