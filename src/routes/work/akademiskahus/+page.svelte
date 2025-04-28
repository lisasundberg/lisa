<script lang="ts">
	import ah1 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import ah2 from '$lib/assets/akademiskahus/ah-mockup-2.jpg?enhanced';
	import ah3 from '$lib/assets/akademiskahus/ah-mockup-3.png?enhanced';
	import ah4 from '$lib/assets/akademiskahus/ah-mockup-4.jpg?enhanced';
	import ah5 from '$lib/assets/akademiskahus/ah-mockup-5.jpg?enhanced';
	import ah6 from '$lib/assets/akademiskahus/ah-mockup-6.jpg?enhanced';
</script>

<article>
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
				In a team of five developers, design and project lead, I was responsible for translating the
				new design system from Figma into code, and ensuring a consistentent and scalable
				implementation.
			</p>
		</div>
		<a class="link button" href="https://akademiskahus.se/" target="_blank" rel="noopener"
			><span class="label-bold">Visit page ↗</span></a
		>
	</div>

	<div class="images">
		<enhanced:img class="image" src={ah1} alt="Akademiska Hus" />
		<enhanced:img class="image" src={ah2} alt="Akademiska Hus" />
		<enhanced:img class="image" src={ah3} alt="Akademiska Hus" />
		<enhanced:img class="image" src={ah4} alt="Akademiska Hus" />
		<enhanced:img class="image" src={ah5} alt="Akademiska Hus" />
		<enhanced:img class="image" src={ah6} alt="Akademiska Hus" />
	</div>
</article>

<style>
	article {
		grid-column: main;
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
	}

	.text {
		@media (width >=768px) {
			position: sticky;
			top: 6em;
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
</style>
