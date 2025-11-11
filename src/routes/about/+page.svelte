<script lang="ts">
	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import CV from '$lib/components/CV.svelte';

	import profilePic from '$lib/assets/about/lisa-bw.jpeg?enhanced';
</script>

<section class="about">
	<div class="intro">
		<h1 class="title">About</h1>
		<p class="p-small">
			I am a frontend developer who loves creating user friendly and visually engaging web
			experiences.
		</p>
		<p class="p-small">
			After over five years at digital agencies, I have extensive experience of working with
			different clients and tech stacks. Having a background in the creative field, I am a true
			digital multitasker, and I love to get my hands dirty in all things visual. Especially when
			you can click on it!
		</p>
		<p class="p-small">
			Outside of coding I love to explore my creativity through knitting, gardening, DJ:ing and
			trying to build things out of wood in my home. I also do plenty of yoga.
		</p>
		<p class="p-small">
			I am currently open to work, so if you're interested in collaborating – <a
				href="mailto:hello@lisasundberg.com">drop me a line</a
			>!
		</p>
	</div>

	<ImageScrollReveal>
		<Image src={profilePic} alt="Lisa" />
	</ImageScrollReveal>
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
</style>
