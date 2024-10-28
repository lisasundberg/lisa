<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { headingHeight } from '$lib/stores/app';
</script>

<footer style="--heading-height: {$headingHeight}">
	<section>
		<div>
			<h2 class="label">Get in touch</h2>
			<p><a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a></p>
		</div>
		<ul>
			<li><ExternalLink href="https://codepen.io/lisasundae/" label="Codepen" /></li>
			<li><ExternalLink href="https://github.com/lisasundberg" label="Github" /></li>
			<li><ExternalLink href="https://www.linkedin.com/in/lisasundberg/" label="Linkedin" /></li>
		</ul>
	</section>
	<small>© Designed & developed by me in {new Date().getFullYear()} :-)</small>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		height: calc(100dvh - var(--heading-height) * 1px);
		order: 4;
		z-index: 10;
	}

	.heading {
		position: sticky;
		color: var(--color-text-primary);
	}

	section {
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		width: var(--content-width);
		margin: auto;
		padding-block: 10dvh;
	}

	ul {
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
	}

	li {
		list-style: none;
		margin-top: 0.25em;
		padding-top: 0.25em;
	}

	small {
		display: block;
		text-align: right;
		width: var(--content-width);
		margin: 2rem auto;
	}
</style>
