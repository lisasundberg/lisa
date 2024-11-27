<section class="section about" id="about">
	<div>
		<p class="p-small">
			With six years of experience at digital agencies, I have a wide experience of working with
			different brands and tech stacks. Having a background in the creative field, I am a true
			digital multitasker, and I love to get my hands dirty in all things visual. Especially when
			you can click on it!
		</p>
		<p class="p-small">
			I am currently on the hunt for a new full/part time position, so if you're interested in
			collaborating – <a href="mailto:hello@lisasundberg.com">drop me a line</a>!
		</p>
	</div>
	<img src="images/lisa-bw.jpeg" alt="Lisa" />
</section>

<style>
	.about {
		grid-column: main;
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		align-items: center;
		height: 100dvh;
		z-index: 0;
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
