<script lang="ts">
	import Case from '$lib/components/layouts/Case.svelte';
	import Button from '$lib/components/Button.svelte';
	import homage1 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import homage2 from '$lib/assets/homage/homage-mockup-2.jpg?enhanced';
	import homage3 from '$lib/assets/homage/homage-mockup-3.jpg?enhanced';
	import homage4 from '$lib/assets/homage/homage-mockup-4.jpg?enhanced';
	import homage5 from '$lib/assets/homage/homage-mockup-5.jpg?enhanced';

	const images = [homage1, homage2, homage3, homage4, homage5];
</script>

<Case {images} alt="Homage" nextLink="/work/akademiskahus">
	{#snippet title()}Homage{/snippet}

	{#snippet info()}
		<p class="label">Project at Alster 2023</p>
		<p class="label">My responsibility: co-ideation, all development</p>
		<p class="label">Technologies: SvelteKit, Sass, GSAP</p>
	{/snippet}

	{#snippet body()}
		<p class="p-small">Web presence for Stockholm based brand experience agency Homage.</p>
		<p class="p-small">
			On this short and intense project I collaborated closely with design from start to end. We
			worked in total around two-three weeks to create an unconventional website with the purpose to
			showcase work and attract new clients as well as staff.
		</p>

		<p class="p-small">
			Was awarded an <a
				href="https://www.awwwards.com/sites/homage-2"
				target="_blank"
				rel="noopener">Awwwards Honorable Mention</a
			>.
		</p>
	{/snippet}

	{#snippet cta()}
		<Button href="https://homage.se/" target="_blank">Visit page</Button>
	{/snippet}
</Case>
