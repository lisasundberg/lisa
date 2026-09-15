<script lang="ts">
	// import { onMount } from 'svelte';
	// import gsap from 'gsap';
	// import { SplitText } from 'gsap/SplitText';

	// import { pageRevealFinished } from '$lib/stores/app';
	// import { prefersReducedMotion } from '$lib/stores/motion';

	// import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	// import Image from '$lib/components/Image.svelte';
	import CV from '$lib/components/CV.svelte';

	// import profilePic from '$lib/assets/about/lisa-bw.jpeg?enhanced';

	// let title: HTMLElement | null;
	// let splitTitle: SplitText;

	// onMount(() => {
	// if ((pageRevealFinished && !title) || $prefersReducedMotion) return;
	// const splitParams = {
	// 	type: 'chars, lines',
	// 	smartWrap: true,
	// 	mask: 'lines' as 'lines'
	// };
	// const tl = gsap.timeline();
	// const titleParams = {
	// 	yPercent: 70,
	// 	autoAlpha: 0,
	// 	stagger: 0.04,
	// 	duration: 1,
	// 	ease: 'power4.out'
	// };
	// const bodyParams = {
	// 	opacity: 0,
	// 	yPercent: 10,
	// 	stagger: 0.1,
	// 	ease: 'power2.out',
	// 	duration: 0.5
	// };
	// document.fonts.ready.then(() => {
	// 	splitTitle = SplitText.create(title, splitParams);
	// 	tl.from(splitTitle.chars, titleParams)
	// 		.from('.body', bodyParams, '<=0.2')
	// 		.from('.cv', { opacity: 0 }, '<0.2');
	// });
	// });
</script>

<section class="about">
	<!-- <h1 class="title" bind:this={title}>About</h1> -->
	<div class="intro">
		<p class="body p-small">
			I have six years of experience in frontend development and a background in art direction. I
			bridge design and code to create visually engaging, high-performing and accessible digital
			experiences.
		</p>
		<p class="body p-small">
			I'm currently open to work, so if you're interested in collaborating – <a
				href="mailto:hello@lisasundberg.com">drop me a line</a
			>!
		</p>
	</div>
	<!-- <div class="blob">
		<Image src={profilePic} alt="Lisa" />
	</div> -->
	<!-- <ImageScrollReveal delay={0.3}>
		<Image src={profilePic} alt="Lisa" />
	</ImageScrollReveal> -->
</section>
<section class="cv">
	<CV />
</section>

<style>
	/* .blob {
		width: 70%;
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		animation: blob-morph 10s ease-in-out infinite alternate;
		align-self: end;
		justify-self: end;
		overflow: hidden;

		:global(.img) {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@keyframes blob-morph {
		0% {
			border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		}
		100% {
			border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
		}
	}

	@media (prefers-reduced-motion) {
		:global(.blob) {
			animation: none;
		}
	} */

	.about {
		grid-column: main;
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		z-index: 0;
	}

	/* .title {
			grid-column: 2 / 3;
			font-size: var(--font-size-display);
			text-align: right;
		} */

	.intro {
		grid-column: 1 / 2;
	}

	.cv {
		grid-column: main;
		margin-top: clamp(4rem, 10vw, 16rem);
	}
</style>
