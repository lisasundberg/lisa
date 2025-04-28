<script lang="ts">
	import homage1 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import homage2 from '$lib/assets/homage/homage-mockup-2.jpg?enhanced';
	import homage3 from '$lib/assets/homage/homage-mockup-3.jpg?enhanced';
	import homage4 from '$lib/assets/homage/homage-mockup-4.jpg?enhanced';
	import homage5 from '$lib/assets/homage/homage-mockup-5.jpg?enhanced';
</script>

<article>
	<div class="text">
		<h1>Homage</h1>
		<div class="info">
			<p class="label">Project at Alster 2023</p>
			<p class="label">My responsibility: co-ideation, all development</p>
			<p class="label">Technologies: SvelteKit, Sass, GSAP</p>
		</div>
		<div class="body">
			<p class="p-small">Web presence for Stockholm based brand experience agency Homage.</p>
			<p class="p-small">
				On this short and intense project I collaborated closely with design from start to end. We
				worked in total around two weeks to create an unconventional website with the purpose to
				showcase work and attract new clients as well as staff.
			</p>

			<p class="p-small">
				Was awarded an <a
					href="https://www.awwwards.com/sites/homage-2"
					target="_blank"
					rel="noopener">Awwwards Honorable Mention</a
				>.
			</p>
		</div>
		<a class="link button" href="https://homage.se/" target="_blank" rel="noopener"
			><span class="label-bold">Visit page ↗</span></a
		>
	</div>

	<div class="images">
		<enhanced:img class="image" src={homage1} alt="Homage" />
		<enhanced:img class="image" src={homage2} alt="Homage" />
		<enhanced:img class="image" src={homage3} alt="Homage" />
		<enhanced:img class="image" src={homage4} alt="Homage" />
		<enhanced:img class="image" src={homage5} alt="Homage" />
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
