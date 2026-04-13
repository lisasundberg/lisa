<script lang="ts">
	interface Props {
		heading: string;
		label: string;
		link: string;
	}

	let { heading, label, link }: Props = $props();
</script>

<article class="featured">
	<a href={link} class="-plain content">
		<h3 class="heading h2">{heading}</h3>
		<p class="p-small label">{label}</p>
	</a>
</article>

<style>
	.featured {
		border-top: 1px solid var(--_theme-color-primary);
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5em;
		padding-block: 1em;

		@media (width >= 768px) {
			padding-block: 2em;
		}
	}

	p {
		text-align: right;
	}

	.heading {
		font-family: var(--font-body);
		line-height: 1;
	}
</style>
