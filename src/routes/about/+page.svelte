<script lang="ts">
	import CV from '$lib/components/CV.svelte';
</script>

<section class="about">
	<div class="intro">
		<h1 class="title">About</h1>
		<p class="p-small">
			I am a frontend developer who loves beautiful things. My passion lies in creating user
			friendly and visually appealing web experiences.
		</p>
		<p class="p-small">
			After over five years at digital agencies, I have a wide experience of working with different
			brands and tech stacks. Having a background in the creative field, I am a true digital
			multitasker, and I love to get my hands dirty in all things visual. Especially when you can
			click on it!
		</p>
		<p class="p-small">
			Outside of coding I love to explore my creativity through knitting, gardening, DJ:ing and
			trying to build things out of wood in my home. I also do plenty of yoga. At the moment I am
			studying a course in immersive media at Stockholm University of the Arts.
		</p>
		<p class="p-small">
			I am currently on the hunt for a new full/part time position, so if you're interested in
			collaborating – <a href="mailto:hello@lisasundberg.com" class="-simple">drop me a line</a>!
		</p>
	</div>

	<div class="image">
		<img src="images/lisa-bw.jpeg" alt="Lisa" />
	</div>
</section>
<section class="cv">
	<CV />
</section>

<style>
	.about {
		grid-column: main;
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		align-items: center;
		z-index: 0;
	}

	.cv {
		grid-column: main;
		margin-top: clamp(4rem, 10vw, 16rem);
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
	}
</style>
