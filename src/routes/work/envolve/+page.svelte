<article>
	<div class="text">
		<h1>Envolve</h1>
		<div class="info">
			<p class="label">Project at Another State 2019</p>
			<p class="label">My responsibility: co-ideation, all development</p>
			<p class="label">Technologies: React (Next.js), GSAP, Sass</p>
		</div>
		<div class="body">
			<!-- <p class="p-small">Web presence for Stockholm based brand experience agency Homage.</p>
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
			</p> -->
		</div>
	</div>

	<div class="images">
		<enhanced:img class="image" src="./assets/envolve-mockup-1.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-2.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-3.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-4.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-5.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-6.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-6.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-7.jpg" alt="Envolve" />
		<enhanced:img class="image" src="./assets/envolve-mockup-8.jpg" alt="Envolve" />
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
</style>
