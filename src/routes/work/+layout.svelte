<script lang="ts">
        
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="work">
	{@render children?.()}
</main>


<style>
	.work {
		grid-column: main;
		display: grid;
		grid-template-columns: subgrid;
		color: var(--_theme-color-primary);
		padding-top: 10dvh;
		z-index: 1;
	}

</style>