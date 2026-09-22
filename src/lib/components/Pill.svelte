<script lang="ts">
	type Props = {
		children: import('svelte').Snippet;
		link?: string;
	};

	let { children, link }: Props = $props();
</script>

{#if link}
	<a class="pill -link -plain" href={link} target="_blank">
		{@render children()}
		<span class="visually-hidden">(opens in new tab)</span>
	</a>
{:else}
	<span class="pill">{@render children()}</span>
{/if}

<style>
	.pill {
		display: inline-block;
		outline: 1px solid currentColor;
		border-radius: 1em;
		font-size: 0.75em;
		padding: 0.125em 0.75em;

		&.-link {
			position: relative;
			z-index: 1;
			transition: all 0.15s linear;

			@media (hover: hover) {
				&:hover,
				&:focus-visible {
					background-color: var(--_theme-color-accent);
					outline-color: var(--_theme-color-accent);
					color: var(--_theme-color-bg);
				}
			}
		}
	}
</style>
