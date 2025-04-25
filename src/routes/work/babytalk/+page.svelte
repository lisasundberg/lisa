<script lang="ts">
	import babytalk1 from '$lib/assets/babytalk/babytalk-1.png?enhanced';
	import babytalkMockup1 from '$lib/assets/babytalk/babytalk-mockup-1.png?enhanced';
	import babytalk2 from '$lib/assets/babytalk/babytalk-2.jpg?enhanced';
	import babytalk3 from '$lib/assets/babytalk/babytalk-3.jpg?enhanced';
	import babytalk4 from '$lib/assets/babytalk/babytalk-4.jpg?enhanced';
</script>

<article>
	<div class="text">
		<h1>Unicef & H&M Foundation – Baby Talk For Parents</h1>
		<div class="info">
			<p class="label">Project at Another State 2019</p>
			<p class="label">My responsibility:</p>
			<p class="label">Technologies:</p>
		</div>
		<div class="body">
			<p class="p-small">
				Updated version of the original project "Baby Talk for Dads" – an interactive audio based
				experience to practice talking "baby talk". In this version, we created a version aimed at
				not only dads but all parents.
			</p>
			<p class="p-small">
				In this version we added support for a points system to make it a gamified experience. My
				responsibility was — apart from updating the UI to reflect the new version — to build the
				points system by tapping in to the audio analysis, as well as the ability to share your
				result to social media.
			</p>
		</div>
		<a class="link button" href="https://babytalkforparents.org/" target="_blank" rel="noopener"
			><span class="label-bold">Visit page ↗</span></a
		>
	</div>

	<div class="images">
		<enhanced:img class="image" src={babytalk1} alt="Babytalk" />
		<!-- <enhanced:img class="image" src="$lib/assets/babytalk/babytalk-mockup-2.png" alt="Babytalk" /> -->
		<enhanced:img class="image" src={babytalkMockup1} alt="Babytalk" />
		<enhanced:img class="image" src={babytalk2} alt="Babytalk" />
		<enhanced:img class="image" src={babytalk3} alt="Babytalk" />
		<enhanced:img class="image" src={babytalk4} alt="Babytalk" />
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
		line-height: 1.1;
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
