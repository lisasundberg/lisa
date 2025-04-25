<script lang="ts">
	import envolve1 from '$lib/assets/envolve/envolve-mockup-1.jpg';
	import envolve2 from '$lib/assets/envolve/envolve-mockup-2.jpg';
	import envolve3 from '$lib/assets/envolve/envolve-mockup-3.jpg';
	import envolve4 from '$lib/assets/envolve/envolve-mockup-4.jpg';
	import envolve5 from '$lib/assets/envolve/envolve-mockup-5.jpg';
	import envolve6 from '$lib/assets/envolve/envolve-mockup-6.jpg';
	import envolve7 from '$lib/assets/envolve/envolve-6.jpg';
	import envolve8 from '$lib/assets/envolve/envolve-mockup-7.jpg';
	import envolve9 from '$lib/assets/envolve/envolve-mockup-8.jpg';
</script>

<article>
	<div class="text">
		<h1>Envolve</h1>
		<div class="info">
			<p class="label">Project at Another State 2019</p>
			<p class="label">My responsibility: co-ideation, all development</p>
			<p class="label">Technologies: React (Next.js), GSAP, Sass</p>
		</div>
		<div class="body">
			<p class="p-small">
				Web presence for media studio Envolve. The site features scroll-triggered animations and
				switches seamlessly between vertical- & horizontal orientation.
			</p>
			<p class="p-small">
				On this short project I collaborated closely with design from start to end.
			</p>
		</div>
	</div>

	<div class="images">
		<enhanced:img class="image" src={envolve1} alt="Envolve" />
		<enhanced:img class="image" src={envolve2} alt="Envolve" />
		<enhanced:img class="image" src={envolve3} alt="Envolve" />
		<enhanced:img class="image" src={envolve4} alt="Envolve" />
		<enhanced:img class="image" src={envolve5} alt="Envolve" />
		<enhanced:img class="image" src={envolve6} alt="Envolve" />
		<enhanced:img class="image" src={envolve7} alt="Envolve" />
		<enhanced:img class="image" src={envolve8} alt="Envolve" />
		<enhanced:img class="image" src={envolve9} alt="Envolve" />
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
