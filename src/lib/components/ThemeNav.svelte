<script lang="ts">
	import { themes, currentTheme } from '$lib/stores/theme';
	import { Body } from 'svelte-body';
</script>

<div class="theme-nav">
	{#each themes as theme, i}
		<button class="label" on:click|preventDefault={() => currentTheme.set(theme.name)}>
			{i + 1}
		</button>
	{/each}
</div>
<Body class={$currentTheme} />

<style>
	.theme-nav {
		position: fixed;
		top: 50%;
		translate: 0 -50%;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		z-index: 100;
	}

	button {
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		font-size: 1rem;
	}
</style>
