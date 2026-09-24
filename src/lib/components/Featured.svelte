<script lang="ts">
	interface Props {
		heading: string;
		label: string;
		link: string;
	}

	let { heading, label, link }: Props = $props();
</script>

<article class="featured">
	<span class="line" aria-hidden="true"></span>
	<a href={link} class="-plain link">
		<div class="mask -heading">
			<h3 class="heading h2">{heading}</h3>
		</div>
		<div class="mask -tech">
			<p class="tech label">{label}</p>
		</div>
	</a>
</article>

<style>
	.featured {
		position: relative;
	}

	/* Drawn in by the parent, so it hides until then unless motion is reduced */
	.line {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: var(--_theme-color-primary);
		transform-origin: left;

		@media (prefers-reduced-motion: no-preference) {
			visibility: hidden;
		}
	}

	/* Clips the text while it slides up. Descender room is cancelled out to keep the layout. */
	.mask {
		overflow: hidden;
		transition: translate 0.6s var(--ease-out-expo);

		&:has(.heading) {
			padding-bottom: 0.1em;
		}
	}

	.link {
		display: grid;
		grid-template-columns: max-content min-content;
		justify-content: space-between;
		align-items: center;
		gap: 0.5em;
		padding: 1em 0.5em;
		transition: color 0.2s linear;

		@media (width >= 768px) {
			padding: 2em 0;
			grid-template-columns: max-content max-content;
		}

		&::after {
			content: '';
			display: inline-block;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: var(--_theme-color-primary);
			transition: scale 0.6s var(--ease-out-expo);
			scale: 1 0;
			transform-origin: bottom;
			z-index: -1;
		}

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				color: var(--color-light-yellow);

				&::after {
					scale: 1;
					transform-origin: top;
				}
			}
		}
	}

	/* The hover shift is on the masks so the clipping moves with the text */
	@media (hover: hover) {
		.link:hover .mask.-tech,
		.link:focus-visible .mask.-tech {
			translate: -1rem 0;
		}

		.link:hover .mask.-heading,
		.link:focus-visible .mask.-heading {
			translate: 1rem 0;
		}
	}

	.tech,
	.heading {
		@media (prefers-reduced-motion: no-preference) {
			visibility: hidden;
		}
	}

	.tech {
		text-align: right;
	}

	.heading {
		font-family: var(--font-display);
		line-height: 1;
	}
</style>
