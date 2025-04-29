<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ah1 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import ah2 from '$lib/assets/akademiskahus/ah-mockup-2.jpg?enhanced';
	import ah3 from '$lib/assets/akademiskahus/ah-mockup-3.png?enhanced';
	import ah4 from '$lib/assets/akademiskahus/ah-mockup-4.jpg?enhanced';
	import ah5 from '$lib/assets/akademiskahus/ah-mockup-5.jpg?enhanced';
	import ah6 from '$lib/assets/akademiskahus/ah-mockup-6.jpg?enhanced';
</script>

<article>
	<div class="content">
		<div class="text">
			<h1>Akademiska Hus</h1>
			<div class="info">
				<p class="label">Project at Alster 2024</p>
				<p class="label">My responsibility: design system development</p>
				<p class="label">Technologies: Optimizely, Stimulus.js, CSS</p>
			</div>
			<div class="body">
				<p class="p-small">
					Fully redesigned web ecosystem for Akademiska Hus, leading owner of university campuses in
					Sweden.
				</p>
				<p class="p-small">
					The CMS based platform includes multiple editorial formats, a system for error reporting,
					and a logged-in experience where users can track campus news and their submitted reports.
				</p>
				<p class="p-small">
					In a team of five developers, design and project lead, I was responsible for translating
					the new design system from Figma into code, and ensuring a consistentent and scalable
					implementation.
				</p>
			</div>
			<div class="link">
				<Button href="https://akademiskahus.se/" target="_blank">Visit page</Button>
			</div>
		</div>

		<div class="images">
			<enhanced:img class="image" src={ah1} alt="Akademiska Hus" />
			<enhanced:img class="image" src={ah2} alt="Akademiska Hus" />
			<enhanced:img class="image" src={ah3} alt="Akademiska Hus" />
			<enhanced:img class="image" src={ah4} alt="Akademiska Hus" />
			<enhanced:img class="image" src={ah5} alt="Akademiska Hus" />
			<enhanced:img class="image" src={ah6} alt="Akademiska Hus" />
		</div>
	</div>

	<footer>
		<nav>
			<a href="/work">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.8457 8.5L1.61118 8.5M6.65285 14L1.15285 8.5L6.65285 3"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Back to work
			</a>
			<a href="/work/envolve">
				Next project <svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</nav>
	</footer>
</article>

<style>
	article {
		grid-column: main;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--content-margin);

		@media (width >=768px) {
			flex-direction: row-reverse;
		}
	}

	h1 {
		font-family: var(--font-display);
	}

	.info {
		margin-top: 1em;
		p {
			line-height: 1.8;
		}
	}

	.text {
		@media (width >=768px) {
			position: sticky;
			top: 6em;
			width: 50%;
		}
	}

	.images {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.image {
		width: 100%;
		height: auto;
	}

	.body {
		margin-top: 2em;
	}

	.link {
		margin-top: 3em;
	}

	footer {
		grid-column: main;
		margin-top: 4em;
		padding-block: 2em;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
