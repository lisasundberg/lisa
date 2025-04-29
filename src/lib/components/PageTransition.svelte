<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		url: string;
		children?: import('svelte').Snippet;
	}
	let { url, children }: Props = $props();

	const duration = 200;
</script>

{#key url}
	<div
		class="page-transition"
		in:fade={{ duration: duration, delay: duration }}
		out:fade={{ duration }}
	>
		{@render children?.()}
	</div>
{/key}

<style>
	.page-transition {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
	}
</style>
