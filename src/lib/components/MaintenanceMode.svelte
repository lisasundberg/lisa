<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
</script>

<main class="maintenance-mode">
	<div class="content">
		<div>
			<!-- <h1>Lisa Sundberg</h1> -->
			<h1 class="label-bold">Lisa Sundberg</h1>
			<h2 class="label">Frontend developer</h2>
		</div>

		<div class="email">
			<p class="label-bold">Get in touch</p>
			<a class="label" href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</div>
		<div class="links">
			<a class="label" href="https://codepen.io/lisasundae/">Codepen</a>
			<a class="label" href="https://github.com/lisasundberg">Github</a>
			<a class="label" href="https://www.linkedin.com/in/lisasundberg/">Linkedin</a>
		</div>
		<small>© {new Date().getFullYear()} :-)</small>
	</div>
</main>

<style>
	.maintenance-mode {
		align-self: flex-end;
		display: grid;
		grid-column: full;
		grid-template-columns: subgrid;
		background-color: white;
		color: var(--color-brown);
		z-index: 2;

		h1,
		h2,
		p,
		a {
			line-height: 1.8;
		}

		a {
			display: block;
		}
	}

	.content {
		grid-column: main;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
		padding: 2em 0;

		@media (width > 768px) {
			flex-direction: row;
			gap: 2em;
		}
	}
</style>
