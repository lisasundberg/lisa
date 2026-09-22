<script lang="ts">
	import Case from '$lib/components/layouts/Case.svelte';
	import Button from '$lib/components/Button.svelte';
	import ah1 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import ah2 from '$lib/assets/akademiskahus/ah-mockup-2.jpg?enhanced';
	import ah3 from '$lib/assets/akademiskahus/ah-mockup-3.png?enhanced';
	import ah4 from '$lib/assets/akademiskahus/ah-mockup-4.jpg?enhanced';
	import ah5 from '$lib/assets/akademiskahus/ah-mockup-5.jpg?enhanced';
	import ah6 from '$lib/assets/akademiskahus/ah-mockup-6.jpg?enhanced';

	const images = [ah1, ah2, ah3, ah4, ah5, ah6];
</script>

<Case {images} alt="Akademiska Hus" previousLink="/work/homage" nextLink="/work/envolve">
	{#snippet title()}Akademiska Hus{/snippet}

	{#snippet info()}
		<p class="label">Project at Alster 2024</p>
		<p class="label">My responsibility: design system development</p>
		<p class="label">Technologies: Optimizely, Stimulus.js, CSS</p>
	{/snippet}

	{#snippet body()}
		<p class="p-small">
			Fully redesigned web ecosystem for Akademiska Hus, leading owner of university campuses in
			Sweden.
		</p>
		<p class="p-small">
			The CMS based platform includes multiple editorial formats, a system for error reporting, and
			a logged-in experience where users can track campus news and their submitted reports.
		</p>
		<p class="p-small">
			In a team of five developers, design and project lead, I was responsible for translating the
			new design system from Figma into code, and ensuring a consistentent and scalable
			implementation.
		</p>
	{/snippet}

	{#snippet cta()}
		<Button href="https://akademiskahus.se/" target="_blank">Visit page</Button>
	{/snippet}
</Case>
