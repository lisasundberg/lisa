<script lang="ts">
	import Intro from '$lib/components/Intro.svelte';
	import Work from '$lib/components/Work.svelte';
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ThemeNav from '$lib/components/ThemeNav.svelte';
</script>

<!-- <h1 class="heading" bind:this={heading} bind:clientHeight={$headingHeight}>Lisa Sundberg</h1> -->
<!-- 
<Heading />
<Background />
<main>
	<div>
		<h1>Lisa Sundberg</h1>
		<h2 class="label">Frontend developer</h2>
		</div>
		</main> -->

<Heading />
<ThemeNav />
<main>
	<Intro />
	<Work />
	<About />
</main>
<Background />

<style>
	main {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		overflow: hidden;
		color: var(--_theme-color-primary);
		padding-top: 10dvh;
		z-index: 1;
	}
</style>
