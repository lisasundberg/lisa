<script lang="ts">
	interface Props {
		heading: string;
		label: string;
		link: string;
	}

	let { heading, label, link }: Props = $props();
</script>

<article class="featured">
	<a href={link} class="-plain link">
		<h3 class="heading h2">{heading}</h3>
		<p class="tech label">{label}</p>
	</a>
</article>

<style>
	.featured {
		border-top: 1px solid var(--_theme-color-primary);
		position: relative;
	}

	.link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5em;
		padding: 1em 0.5em;
		transition: color 0.2s linear;

		@media (width >= 768px) {
			padding: 2em 0;
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
				color: var(--_theme-color-bg);

				&::after {
					scale: 1;
					transform-origin: top;
				}
			}
		}
	}

	.tech {
		text-align: right;
		transition: translate 0.6s var(--ease-out-expo);

		@media (hover: hover) {
			.link:hover &,
			.link:focus-visible & {
				translate: -1rem 0;
			}
		}
	}

	.heading {
		font-family: var(--font-display);
		line-height: 1;
		transition: translate 0.6s var(--ease-out-expo);

		@media (hover: hover) {
			.link:hover &,
			.link:focus-visible & {
				translate: 1rem 0;
			}
		}
	}
</style>
