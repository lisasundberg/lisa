<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<!-- /* Gör detta med snippets */ -->
<!-- imges -->
<!-- title -->
<!-- text -->
