<script lang="ts">
	import { themes, currentTheme } from '$lib/stores/app';
	import { fade } from 'svelte/transition';

	import Shader from '$lib/components/Backgrounds/Shader.svelte';
	import Donuts from '$lib/components/Backgrounds/Donuts.svelte';
	// import TheMostBeautifulShaderEver from '$lib/components/TheMostBeautifulShaderEver.svelte';
</script>

<div class="background">
	<!-- {#if $currentTheme === themes[1].name}
		<div transition:fade>
			<TheMostBeautifulShaderEver />
		</div>
	{/if} -->
	{#if $currentTheme === themes[1].name}
		<div transition:fade>
			<Shader />
		</div>
	{/if}
	{#if $currentTheme === themes[2].name}
		<div transition:fade>
			<Donuts />
		</div>
	{/if}
</div>

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100dvw;
		height: 100dvh;
		z-index: 0;
	}
</style>
