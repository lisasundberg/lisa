<script lang="ts">
	import Work3 from '$lib/components/Work3.svelte';
	import WorkTouch from '$lib/components/WorkTouch.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { isTouch } from '$lib/stores/device';

	import '$lib/styles/index.css';
</script>

<section class="hero">
	<Hero />
</section>
{#if $isTouch}
	<WorkTouch />
{:else}
	<Work3 />
{/if}

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
