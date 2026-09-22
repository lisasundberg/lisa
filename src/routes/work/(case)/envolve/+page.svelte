<script lang="ts">
	import Case from '$lib/components/layouts/Case.svelte';
	import envolve1 from '$lib/assets/envolve/envolve-mockup-1.jpg?enhanced';
	import envolve2 from '$lib/assets/envolve/envolve-mockup-2.jpg?enhanced';
	import envolve3 from '$lib/assets/envolve/envolve-mockup-3.jpg?enhanced';
	import envolve4 from '$lib/assets/envolve/envolve-mockup-4.jpg?enhanced';
	import envolve5 from '$lib/assets/envolve/envolve-mockup-5.jpg?enhanced';
	import envolve6 from '$lib/assets/envolve/envolve-mockup-6.jpg?enhanced';
	import envolve7 from '$lib/assets/envolve/envolve-6.jpg?enhanced';
	import envolve8 from '$lib/assets/envolve/envolve-mockup-7.jpg?enhanced';
	import envolve9 from '$lib/assets/envolve/envolve-mockup-8.jpg?enhanced';

	const images = [
		envolve1,
		envolve2,
		envolve3,
		envolve4,
		envolve5,
		envolve6,
		envolve7,
		envolve8,
		envolve9
	];
</script>

<Case {images} alt="Envolve" previousLink="/work/akademiskahus">
	{#snippet title()}Envolve{/snippet}

	{#snippet info()}
		<p class="label">Project at Another State 2019</p>
		<p class="label">My responsibility: co-ideation, all development</p>
		<p class="label">Technologies: React (Next.js), GSAP, Sass</p>
	{/snippet}

	{#snippet body()}
		<p class="p-small">
			Web presence for media studio Envolve. The site features scroll-triggered animations and
			switches seamlessly between vertical- & horizontal orientation.
		</p>
		<p class="p-small">
			On this project I collaborated closely with design from start to end, being part of ideation
			and collaborating on animation ideas throughout the development process.
		</p>
	{/snippet}
</Case>
