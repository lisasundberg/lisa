<script lang="ts">
	import { themes, currentTheme } from '$lib/stores/app';
	import { fade } from 'svelte/transition';

	import Shader from '$lib/components/Shader.svelte';
	import TheMostBeautifulShaderEver from '$lib/components/TheMostBeautifulShaderEver.svelte';

	console.log($currentTheme);
</script>

<div class="background">
	{#if $currentTheme === themes[0].name}
		<div transition:fade>
			<Shader />
		</div>
	{/if}

	{#if $currentTheme === themes[1].name}
		<div transition:fade>
			<TheMostBeautifulShaderEver />
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
