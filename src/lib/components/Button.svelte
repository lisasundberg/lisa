<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		as?: 'button' | 'a';
		href?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		onClick?: () => void;
		className?: string;
	}
	const { children, as = 'a', href, target, onClick, className }: Props = $props();
</script>

{#if as === 'button'}
	<button class="button {className}" onclick={onClick}>
		<span class="label">
			{@render children?.()}
		</span>
	</button>
{:else}
	<a class="button {className}" {href} {target} rel={target === '_blank' ? 'noreferrer' : ''}>
		<span class="label">
			{@render children?.()}
		</span>
		<span class="arrow">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path stroke="currentColor" d="M0 7h15.5M10 1l6 6-6 6" stroke-width="1.25" />
			</svg>
		</span>
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
		line-height: 1;
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

	.arrow {
		grid-area: icon-right;
		display: flex;
		justify-content: right;
		align-items: center;
		overflow: hidden;

		& svg {
			flex-grow: 1;
			flex-shrink: 0;
			width: 1em;
		}
	}
</style>
