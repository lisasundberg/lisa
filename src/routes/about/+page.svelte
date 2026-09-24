<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import SplitText from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import { onDestroy } from 'svelte';

	import CV from '$lib/components/CV.svelte';

	import profilePic from '$lib/assets/about/lisa-bw.jpeg?enhanced';

	let title: HTMLElement | null;
	let splitTitle: SplitText;

	let intro: HTMLDivElement | null = null;
	let cv: HTMLElement | null = null;

	let ctx: gsap.Context | undefined;
	let destroyed = false;
	let hidden = false;

	$effect(() => {
		if (!intro || destroyed || hidden) return;

		if ($prefersReducedMotion) {
			ctx = gsap.context(() => {
				gsap.set(intro, { opacity: 1 });
			});
			return;
		}

		hidden = true;

		const paragraphs = intro.querySelectorAll('p');

		// Hide everything synchronously so nothing flashes before it animates in.
		ctx = gsap.context(() => {
			gsap.set(intro, { opacity: 1 });
			gsap.set(paragraphs, { y: 20, autoAlpha: 0 });
			gsap.set(cv, { autoAlpha: 0 });
		});

		document.fonts.ready.then(() => {
			if (destroyed) return;

			ctx?.add(() => {
				const tl = gsap.timeline();

				tl.to(
					paragraphs,
					{
						y: 0,
						stagger: 0.08,
						ease: 'expo.inOut',
						duration: 1
					},
					0
				)
					.to(
						paragraphs,
						{
							autoAlpha: 1,
							stagger: 0.08,
							ease: 'linear',
							duration: 0.5,
							delay: 0.4
						},
						0
					)
					.to(
						cv,
						{
							autoAlpha: 1
						},
						'<=+0.3'
					);
			});
		});
	});

	onDestroy(() => {
		destroyed = true;
		ctx?.revert();
	});
</script>

<section class="about">
	<!-- <h1 class="title" bind:this={title}>About</h1> -->
	<div class="intro" bind:this={intro}>
		<!-- <div class="intro"> -->
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
<section class="cv" bind:this={cv}>
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
		opacity: 0;
	}

	.cv {
		visibility: hidden;
		grid-column: main;
		margin-top: clamp(4rem, 10vw, 16rem);
	}
</style>
