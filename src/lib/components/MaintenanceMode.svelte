<script lang="ts">
	import ExternalLink from './ExternalLink.svelte';
</script>

<main class="maintenance-mode">
	<div>
		<h1>Lisa Sundberg</h1>
		<h2 class="label">Frontend developer</h2>
	</div>
</main>
<footer>
	<div>
		<ul>
			<li><ExternalLink href="mailto:hello@lisasundberg.com" label="hello@lisasundberg.com" /></li>
			<li><ExternalLink href="https://codepen.io/lisasundae/" label="Codepen" /></li>
			<li><ExternalLink href="https://github.com/lisasundberg" label="Github" /></li>
			<li><ExternalLink href="https://www.linkedin.com/in/lisasundberg/" label="Linkedin" /></li>
		</ul>
	</div>
</footer>

<style>
	main,
	footer {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		overflow: hidden;
		color: var(--_theme-color-primary);
		padding-top: 10dvh;
		z-index: 1;
	}

	div {
		grid-column: main;

		h1 {
			font-family: var(--font-display);
		}
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

	p {
		margin-top: 0.25em;
	}
</style>
