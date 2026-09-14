<script lang="ts">
	import { headingHeight } from '$lib/stores/app';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
</script>

<footer class="footer section" id="contact" style="--heading-height: {$headingHeight}">
	<section>
		<h2 class="title label">Get in touch</h2>
		<p class="email"><a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a></p>

		<ul class="list">
			<li><ExternalLink href="https://github.com/lisasundberg" label="Github" /></li>
			<li><ExternalLink href="https://www.linkedin.com/in/lisasundberg/" label="Linkedin" /></li>
			<li><ExternalLink href="https://codepen.io/lisasundae" label="CodePen" /></li>
		</ul>
	</section>
	<div class="sub">
		<small>© {new Date().getFullYear()}</small>
	</div>
</footer>

<style>
	.footer {
		grid-column: main;
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas: 'spacer' 'content' 'sub';
		align-content: center;
		box-sizing: border-box;
		position: relative;
		height: 100dvh;
		padding-block: 2em;
		color: var(--_theme-color-primary);
		order: 4;
		z-index: 10;
	}

	section {
		grid-area: content;
		display: grid;
		grid-template-columns: var(--two-cols);
		grid-template-rows: repeat(2, max-content);
		grid-template-areas:
			'title'
			'email'
			'list';
		gap: 0.5em var(--content-gap);
		width: 100%;
		margin: auto;
		padding-block: 10dvh;

		@media (width >= 768px) {
			grid-template-areas:
				'title .'
				'email list';
		}
	}

	.title {
		grid-area: title;
	}

	.email {
		grid-area: email;
	}

	.list {
		grid-area: list;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		margin-top: 1.5em;

		@media (width >= 768px) {
			margin-top: 0;
		}
	}

	.sub {
		grid-area: sub;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		opacity: 0.5;
	}

	small {
		max-width: 27ch;
	}
</style>
