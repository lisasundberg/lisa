<script lang="ts">
	import CV from '$lib/components/CV.svelte';
</script>

<section class="section about" id="about">
	<div class="intro">
		<p class="p-small">
			After over five years at digital agencies, I have a wide experience of working with
			different brands and tech stacks. Having a background in the creative field, I am a true
			digital multitasker, and I love to get my hands dirty in all things visual. Especially when
			you can click on it!
		</p>
		<p class="p-small">
			I am currently on the hunt for a new full/part time position, so if you're interested in
			collaborating – <a href="mailto:hello@lisasundberg.com" class="-simple">drop me a line</a>!
		</p>
	</div>

	<div class="cv">
		<CV />
	</div>

	<div class="image">
		<img src="images/lisa-bw.jpeg" alt="Lisa" />
	</div>
</section>

<style>
	.about {
		grid-column: main;
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		align-items: center;
		min-height: 100dvh;
		z-index: 0;
	}

	.intro {
		grid-column: 1 / -1;

		@media (width >= 768px) {
			grid-column: 1 / 2;
		}
	}

	.cv {
		grid-column: 1 / -1;
		margin: clamp(4rem, 6vw, 12rem) 0 clamp(2rem, 3vw, 6rem);
	}

	.image {
		grid-column: 1 / -1;

		@media (width >= 768px) {
			grid-column: 2 / 3;
		}
	}

	p {
		line-height: 1.3;
	}

	p + p {
		margin-top: 0.75em;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
	}
</style>
