<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import CV from '$lib/components/CV.svelte';

	import profilePic from '$lib/assets/about/lisa-bw.jpeg?enhanced';

	let title: HTMLElement | null;
	let splitTitle: SplitText;

	// onMount(() => {
	// 	if ((pageRevealFinished && !title) || $prefersReducedMotion) return;

	// 	document.fonts.ready.then(() => {
	// 		const splitParams = {
	// 			type: 'chars, lines',
	// 			smartWrap: true,
	// 			mask: 'lines' as 'lines'
	// 		};

	// 		splitTitle = SplitText.create(title, splitParams);

	// 		const tl = gsap.timeline();

	// 		tl.from(splitTitle.chars, {
	// 			yPercent: 70,
	// 			autoAlpha: 0,
	// 			stagger: 0.04,
	// 			duration: 1,
	// 			ease: 'power4.out'
	// 		}).from(
	// 			'.body',
	// 			{
	// 				opacity: 0,
	// 				y: 20,
	// 				stagger: 0.05,
	// 				ease: 'power2.out',
	// 				duration: 0.7
	// 			},
	// 			'-=0.8'
	// 		);
	// 	});
	// });
</script>

<section class="about">
	<div class="intro">
		<h1 class="title" bind:this={title}>About</h1>

		<p class="body p-small">
			I have 5+ years of experience in frontend development and a background in art direction. I
			bridge design and code to create visually engaging, high-performing and accessible digital
			experiences.
		</p>
		<p class="body p-small">
			I'm currently open to work, so if you're interested in collaborating – <a
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
