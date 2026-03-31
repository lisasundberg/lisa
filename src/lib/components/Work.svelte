<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { INVERTED_CLASSNAME } from '$lib/stores/theme';
	import { prefersReducedMotion } from '$lib/stores/motion';

	import Button from '$lib/components/Button.svelte';

	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-cover.jpg?enhanced';
	import { onMount, onDestroy } from 'svelte';

	const images = [
		{
			src: AH,
			alt: 'Akademiska Hus'
		},
		{
			src: Homage,
			alt: 'Homage'
		},
		{
			src: Envolve,
			alt: 'Envolve'
		}
	];

	let workSection: HTMLElement;
	let heading: HTMLElement;
	let splitHeading: SplitText;
	let bodyText: HTMLElement;
	let button: HTMLDivElement;

	let headingTimeline: gsap.core.Timeline;
	let textTimeline: gsap.core.Timeline;
	let bgTimeline: gsap.core.Timeline;
	let context: gsap.Context;

	let activeIndex: number | null = $state(null);
	let imageItems: Element[] = [];

	let timelineDefaults: ScrollTrigger.Vars;

	function activeImageParams(i: number) {
		return {
			duration: 2,
			delay: 0.3,
			onStart: function () {
				activeIndex = i;
			},
			onComplete: function () {
				activeIndex = null;
			},
			onReverseComplete: function () {
				activeIndex = null;
			}
		};
	}

	function handleMouseEnter(index: number) {
		if (!textTimeline) return;
		activeIndex = index;
		textTimeline.pause();
	}

	function handleMouseLeave() {
		if (!textTimeline) return;
		activeIndex = null;
		textTimeline.play();
	}

	function content() {
		if (typeof window === 'undefined') return;

		const splitParams = {
			type: 'chars, lines',
			smartWrap: true,
			mask: 'lines' as 'lines'
		};

		splitHeading = SplitText.create(heading, splitParams);

		headingTimeline = gsap.timeline({
			scrollTrigger: {
				...timelineDefaults,
				scrub: false,
				toggleActions: 'play none none reverse'
			}
		});

		gsap.set('.content', { pointerEvents: 'none' });

		headingTimeline
			.from(splitHeading.chars, {
				yPercent: 100,
				autoAlpha: 0,
				stagger: 0.008,
				duration: 0.3
			})
			.to('.content', {
				pointerEvents: 'auto'
			});

		textTimeline = gsap.timeline({
			scrollTrigger: {
				...timelineDefaults,
				pin: true
			},
			onComplete: () => {
				if (textTimeline.scrollTrigger) {
					textTimeline.scrollTrigger.kill();
					textTimeline.kill();
				}
			}
		});

		textTimeline
			.to(imageItems[0], { ...activeImageParams(0), delay: 1 })
			.to(imageItems[1], activeImageParams(1))
			.to(imageItems[2], activeImageParams(2))
			.from(bodyText, {
				opacity: 0,
				yPercent: 50,
				duration: 1.5,
				ease: 'power4.out'
			})
			.from(
				button,
				{
					opacity: 0,
					yPercent: 50,
					duration: 1.5,
					ease: 'power4.out'
				},
				'-=1'
			)
			.from(bodyText, {
				display: 'block',
				duration: 4
			});

		return textTimeline;
	}

	function bg() {
		if (typeof window === 'undefined') return;

		bgTimeline = gsap.timeline({
			scrollTrigger: {
				...timelineDefaults,
				onEnter: () => document.body.classList.add(INVERTED_CLASSNAME), // Add class when entering the trigger
				onLeaveBack: () => document.body.classList.remove(INVERTED_CLASSNAME) // Remove class when scrolling back
			},
			onComplete: () => {
				if (bgTimeline.scrollTrigger) {
					bgTimeline.scrollTrigger.kill();
					bgTimeline.kill();
				}
			}
		});

		bgTimeline.from('body', {
			onStart: () => document.body.classList.add(INVERTED_CLASSNAME),
			onReverseComplete: () => document.body.classList.remove(INVERTED_CLASSNAME)
		});

		return bgTimeline;
	}

	onMount(() => {
		if (typeof window === 'undefined') return;

		gsap.registerPlugin(SplitText);
		gsap.registerPlugin(ScrollTrigger);

		imageItems = gsap.utils.toArray('[data-work-image]');

		timelineDefaults = {
			trigger: workSection,
			start: 'center center-=5%',
			end: '+=600%',
			scrub: 4
		};

		document.fonts.ready.then(() => {
			context = gsap.context(() => {
				content();
				bg();
			});
		});
	});

	onDestroy(() => {
		if (typeof window === 'undefined') return;

		if (context) context.revert();
	});
</script>

<section class="section work" bind:this={workSection}>
	<div class="content">
		<p class="heading" bind:this={heading}>
			I have worked on projects for a wide range of clients - such as
			<a
				class="work-item"
				href="/work/akademiskahus"
				class:active={activeIndex === 0}
				onmouseenter={() => handleMouseEnter(0)}
				onkeydown={() => handleMouseEnter(0)}
				onmouseleave={handleMouseLeave}
				onkeyup={handleMouseLeave}
				data-work-item="0"
			>
				Akademiska Hus,
			</a>
			<a
				class="work-item"
				class:active={activeIndex === 1}
				href="/work/homage"
				onmouseenter={() => handleMouseEnter(1)}
				onkeydown={() => handleMouseEnter(1)}
				onmouseleave={handleMouseLeave}
				onkeyup={handleMouseLeave}
				data-work-item="1">Homage</a
			>
			and
			<a
				class="work-item"
				class:active={activeIndex === 2}
				href="/work/envolve"
				onmouseenter={() => handleMouseEnter(2)}
				onkeydown={() => handleMouseEnter(2)}
				onmouseleave={handleMouseLeave}
				onkeyup={handleMouseLeave}
				data-work-item="2"
				>Envolve.
			</a>
		</p>

		<p class="body p-xsmall" bind:this={bodyText}>
			Other clients include but are not limited to:<br /> H&M, Previa, Länsförsäkringar, TV4, Red Bull,
			Urban deli, Storyblok, Bambora.
		</p>

		<div class="cta" bind:this={button}>
			<Button href="/work">
				See all work
				{#snippet iconRight()}
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
							stroke="currentColor"
							stroke-width="1.2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/snippet}
			</Button>
		</div>
	</div>

	<div class="images" data-work-images>
		{#each images as { src, alt }, i}
			<enhanced:img
				{src}
				{alt}
				style="--index: {i}; --total: {images.length}"
				class="image image-{i}"
				class:active={activeIndex === i}
				data-work-image={i}
			/>
		{/each}
	</div>
</section>

<style>
	.work {
		grid-column: main;
		display: grid;
		grid-template-rows: max-content min-content min-content;
		grid-template-columns: 1fr;
		grid-template-areas:
			'heading'
			'body'
			'button';
		place-content: center;

		height: 100dvh;
		z-index: 1;
	}

	.content {
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		display: grid;
		grid-template-rows: subgrid;
		grid-template-columns: subgrid;
		place-items: center;
		z-index: 1;
	}

	.work-item {
		font-family: var(--font-display-italic);
		text-transform: none;
		font-size: 1.25em;
		letter-spacing: 0;
		line-height: 0.8;

		&::after {
			bottom: -0.125em;
			height: 1px;
		}

		&.active {
			transform: scaleX(1);
			transform-origin: left;
		}
	}

	.images {
		z-index: 0;

		grid-area: heading;
		grid-column: 1 / -1;
		display: grid;
		grid-template-areas: 'image';
		place-items: center;
		justify-self: center;

		:global(picture) {
			grid-area: image;
		}
		@media (width > 768px) {
			width: min(50%, 32rem);
		}
	}

	.image {
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center;
		filter: brightness(0.75);

		opacity: 0;
		transition: opacity 0.5s ease-in-out;

		&.active {
			opacity: 1;
		}

		@media (width < 768px) {
			position: fixed;

			&.image-0 {
				top: 5%;
				left: calc(var(--content-margin) * -1);
			}
			&.image-1 {
				right: calc(var(--content-margin) * -1);
			}
			&.image-2 {
				bottom: -5%;
				left: calc(var(--content-margin) * -1);
			}
		}
	}

	.heading {
		grid-area: heading;
		width: min(100%, 36ch);
		text-align: center;
		text-wrap: pretty;
		font-family: var(--font-sansserif);
		text-transform: uppercase;
		font-size: clamp(1.75rem, 3.3vw, 3rem);
		letter-spacing: 0;
		font-weight: 400;
	}

	.body {
		grid-area: body;
		text-align: center;
		width: 100%;
		z-index: 0;
		margin-top: 2em;

		@media (width >= 768px) {
			margin-top: -1em;
		}
	}

	.cta {
		grid-area: button;
		margin-top: var(--content-margin);
	}
</style>
