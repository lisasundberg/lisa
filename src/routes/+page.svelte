<script lang="ts">
	import Work from '$lib/components/Work.svelte';
	import Hero from '$lib/components/Hero.svelte';

	import '$lib/styles/index.css';
</script>

<section class="hero">
	<Hero />
</section>

<!-- <Work /> -->

<style>
	.hero {
		grid-column: main;
		margin-inline: var(--content-margin);
		min-height: 75dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
