<script lang="ts">
	let { children } = $props();
</script>

<span class="pill">{@render children()}</span>

<style>
	.pill {
		border: 1px solid currentColor;
		border-radius: 1em;
		font-size: 0.75em;
		padding: 0.125em 0.75em;
	}
</style>
