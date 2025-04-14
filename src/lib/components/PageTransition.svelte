<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	interface Props {
		url: string;
		children?: import('svelte').Snippet;
	}
	let { url, children } = $props();

	const pageTransitionDuration = 250;
</script>

{#key url}
	<main
		class="page-transition"
		in:fade={{ duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fade={{ duration: pageTransitionDuration }}
	>
		{@render children?.()}
	</main>
{/key}
