<script lang="ts">
	import { headingHeight } from '$lib/stores/app';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
</script>

<footer class="footer section" id="contact" style="--heading-height: {$headingHeight}">
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
	<small>© {new Date().getFullYear()}</small>
</footer>

<style>
	.footer {
		grid-column: main;
		display: grid;
		grid-template-columns: subgrid;
		align-content: center;
		box-sizing: border-box;
		position: relative;
		height: calc(100dvh - var(--heading-height) * 1px);
		padding-block: 2em;
		color: var(--_theme-color-primary);
		order: 4;
		z-index: 10;

		@media (width >= 768px) {
			padding-block: 4em;
		}
	}

	section {
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		width: 100%;
		margin: auto;
		padding-block: 10dvh;
		margin-bottom: 2rem;
	}

	li {
		margin-top: 0.25em;
		padding-top: 0.25em;
	}

	p {
		margin-top: 0.25em;
	}

	small {
		position: absolute;
		bottom: 2rem;
		right: 0;
	}
</style>
