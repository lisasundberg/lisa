<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	interface Props {
		active?: boolean;
	}

	let { active = false }: Props = $props();
</script>

<Button class="open-to-work {active ? '-open' : '-not-open'}" href="mailto:hello@lisasundberg.com">
	{#snippet iconLeft()}
		<span class="indicator" role="presentation"></span>
	{/snippet}
	{#if active}
		Open to work
	{:else}
		Not open to work
	{/if}
</Button>

<style>
	:global(.open-to-work) {
		--_color-active: var(--theme-color-active, var(--color-green));
		--_color-inactive: var(--theme-color-inactive, var(--color-red));
		--_color-current: var(--_color-active);
		--_box-shadow-size: 0 0 0.375em 0.09375em;

		.indicator {
			width: 1em;
			height: 1em;
			display: grid;
			place-content: center;
		}

		.indicator::before {
			content: '';
			grid-area: dot;
			display: block;
			width: 0.375em;
			height: 0.375em;
			border-radius: 50%;
			background-color: var(--_color-current);
			box-shadow: var(--_box-shadow-size) var(--_color-current);
			transition: box-shadow 0.3s ease-in-out;
		}

		&:hover {
			--_box-shadow-size: 0 0 0.5em 0.2em;
		}

		&.-open {
			--_color-current: var(--_color-active);
		}

		&.-not-open {
			--_color-current: var(--_color-inactive);
		}
	}
</style>
