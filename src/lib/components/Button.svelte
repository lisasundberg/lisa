<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		as?: 'button' | 'a';
		href?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		iconLeft?: import('svelte').Snippet;
		iconRight?: import('svelte').Snippet;
		onClick?: () => void;
		class?: string;
	}
	const {
		children,
		as = 'a',
		href,
		target,
		iconLeft,
		iconRight,
		onClick,
		class: className = ''
	}: Props = $props();
</script>

{#if as === 'button'}
	<button class="button {className}" onclick={onClick}>
		<span class="label">
			{@render children?.()}
		</span>
	</button>
{:else}
	<a class="button {className}" {href} {target} rel={target === '_blank' ? 'noreferrer' : ''}>
		{#if iconLeft}
			<span class="icon-left">
				<span class="icon">
					{@render iconLeft()}
				</span>
			</span>
		{/if}
		<span class="label">
			{@render children?.()}
		</span>
		{#if iconRight}
			<span class="icon-right">
				<span class="icon">
					{@render iconRight()}
				</span>
			</span>
		{/if}
	</a>
{/if}

<style>
	.button {
		display: inline-grid;
		grid-template-columns: min-content auto 0fr;
		grid-template-areas: 'icon-left label icon-right';
		gap: 0.5em;
		align-items: center;
		box-sizing: border-box;
		flex-shrink: 0;
		padding: 0.75em 1.125em;
		border: 0.075em solid var(--_theme-color-primary);
		border-radius: 1.5em;
		line-height: 1.1;
		transition:
			grid-template-columns 0.25s var(--ease-in-out-quart),
			color 0.2s linear,
			background-color 0.2s linear;

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				grid-template-columns: min-content auto 1fr;
				background-color: var(--_theme-color-primary);
				color: var(--_theme-color-bg);
			}
		}
	}

	.label {
		grid-area: label;
		white-space: nowrap;
		overflow: hidden;
		height: 1em;
	}

	.icon-left,
	.icon-right {
		display: flex;
		align-items: center;

		& .icon {
			display: inline-block;
			flex-grow: 1;
			flex-shrink: 0;
			width: 1em;
			height: 1em;
			color: currentColor;
		}
	}

	.icon-left {
		grid-area: icon-left;
	}

	.icon-right {
		overflow: hidden;
		grid-area: icon-right;
		justify-content: flex-end;
	}
</style>
