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

	const external = target === '_blank';
</script>

{#if as === 'button'}
	<button class="button {className}" onclick={onClick}>
		<span class="label">
			{@render children?.()}
		</span>
	</button>
{:else}
	<a
		class="button {className}{external ? ' -external' : ''}"
		{href}
		{target}
		rel={external ? 'noreferrer' : ''}
	>
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
		{#if iconRight && !external}
			<span class="icon-right">
				<span class="icon">
					{@render iconRight()}
				</span>
			</span>
		{/if}
		{#if external}
			<span class="icon-right">
				<span class="icon">
					<svg
						class="svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.88909 12.8891L12.2473 3.53087M4.79322 3.20678L12.5714 3.20678L12.5714 10.985"
							stroke="currentColor"
							stroke-width="1.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</span>
		{/if}
	</a>
{/if}

<style>
	.button {
		box-sizing: border-box;
		display: inline-grid;
		height: 2.625rem;
		grid-template-columns: min-content auto 0fr;
		grid-template-areas: 'icon-left label icon-right';
		gap: 0.5em;
		align-items: center;
		flex-shrink: 0;
		padding: 0.75em 1em;
		border: 0.075em solid var(--_theme-color-primary);
		border-radius: 1.5em;
		user-select: none;
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
		line-height: 1em;
	}

	.icon-left,
	.icon-right {
		display: flex;
		align-items: center;

		& .icon {
			display: inline-block;
			flex-grow: 1;
			flex-shrink: 0;
			width: 1rem;
			height: 1rem;
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

	.-external {
		& svg {
			transform: translate(-100%, 100%);
			transition: transform 0.15s var(--ease-in-out-sine);
		}

		&:hover {
			& svg {
				transform: translate(0, 0);
				transition-duration: 0.32s;
				transition-timing-function: var(--ease-out-expo);
				transition-delay: 0.08s;
			}
		}
	}
</style>
