<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { INVERTED_CLASSNAME } from '$lib/stores/theme';
	import { prefersReducedMotion } from '$lib/stores/motion';

	import Button from '$lib/components/Button.svelte';

	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-cover.jpg?enhanced';

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

	const SCROLL_START = 'center center-=5%';
	const SCROLL_END = '+=250%';
	const CATCH_UP_DURATION = 1.5;

	let workSection: HTMLElement;
	let content: HTMLDivElement;
	let heading: HTMLElement;
	let bodyText: HTMLElement;
	let button: HTMLDivElement;

	let hoverIndex: number | null = $state(null);
	let scrollActiveIndex: number | null = $state(null);
	let activeIndex = $derived(hoverIndex ?? scrollActiveIndex);

	function handleActivate(index: number) {
		hoverIndex = index;
	}

	function handleDeactivate() {
		hoverIndex = null;
	}

	function activeImageParams(i: number) {
		return {
			duration: 2,
			delay: 0.5,
			onStart: () => {
				scrollActiveIndex = i;
			},
			onComplete: () => {
				scrollActiveIndex = null;
			},
			onReverseComplete: () => {
				scrollActiveIndex = null;
			}
		};
	}

	function buildHeadingReveal() {
		const splitHeading = SplitText.create(heading, {
			type: 'chars, lines',
			smartWrap: true,
			mask: 'lines',
			// The heading contains nested links. SplitText's default aria handling
			// hides the split spans from screen readers, which also hides any
			// focusable descendant - an ARIA spec violation - so leave aria alone.
			aria: 'none'
		});

		gsap.set(content, { pointerEvents: 'none' });

		return gsap
			.timeline({
				scrollTrigger: {
					trigger: workSection,
					start: SCROLL_START,
					end: SCROLL_END,
					toggleActions: 'play none none none'
				}
			})
			.from(splitHeading.chars, {
				yPercent: 100,
				autoAlpha: 0,
				stagger: 0.008,
				duration: 0.3
			})
			.to(content, { pointerEvents: 'auto' });
	}

	function buildScrollSequence() {
		const timeline = gsap
			.timeline({ paused: true })
			.to({}, activeImageParams(0))
			.to({}, activeImageParams(1))
			.to({}, activeImageParams(2))
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
			.to({}, { duration: 4 }); // hold the final state briefly before the pin releases

		// Drive the timeline manually instead of GSAP's built-in `scrub`: built-in
		// scrub always chases the raw scroll-derived progress, forward or back, so
		// there's no way to make it hold on the way up. This mirrors what `scrub`
		// does internally (a single ongoing tween that's smoothly re-targeted via
		// resetTo, rather than restarted from scratch on every scroll tick - doing
		// the latter makes it crawl, since each tiny scroll delta would otherwise
		// reset the full catch-up duration) but only ever retargets forward -
		// scrolling back up just freezes it in place instead of chasing it down.
		const scrubTween = gsap.to(timeline, {
			progress: 1,
			duration: CATCH_UP_DURATION,
			ease: 'none',
			paused: true
		});

		let maxProgress = 0;

		ScrollTrigger.create({
			trigger: workSection,
			start: SCROLL_START,
			end: SCROLL_END,
			pin: true,
			// Stays inverted past `end` (through the footer) - only onEnter/onLeaveBack
			// toggle it, not onLeave/onEnterBack (which toggleClass would also react to).
			onEnter: () => document.body.classList.add(INVERTED_CLASSNAME),
			onLeaveBack: () => document.body.classList.remove(INVERTED_CLASSNAME),
			onUpdate: (self) => {
				if (self.progress <= maxProgress) return;
				maxProgress = self.progress;
				scrubTween.resetTo('progress', maxProgress, timeline.progress());
			}
		});

		return timeline;
	}

	onMount(() => {
		if (typeof window === 'undefined' || $prefersReducedMotion) return;

		gsap.registerPlugin(SplitText, ScrollTrigger);

		let cancelled = false;
		let context: gsap.Context | undefined;

		document.fonts.ready.then(() => {
			if (cancelled) return;

			context = gsap.context(() => {
				buildHeadingReveal();
				buildScrollSequence();
			}, workSection);
		});

		return () => {
			cancelled = true;
			context?.revert();
		};
	});
</script>

<section class="section work" bind:this={workSection}>
	<div class="content" bind:this={content}>
		<p class="heading" bind:this={heading}>
			I have worked on projects for a wide range of clients - such as
			<a
				class="work-item"
				href="/work/akademiskahus"
				class:active={activeIndex === 0}
				onmouseenter={() => handleActivate(0)}
				onmouseleave={handleDeactivate}
				onfocus={() => handleActivate(0)}
				onblur={handleDeactivate}
			>
				Akademiska Hus,
			</a>
			<a
				class="work-item"
				class:active={activeIndex === 1}
				href="/work/homage"
				onmouseenter={() => handleActivate(1)}
				onmouseleave={handleDeactivate}
				onfocus={() => handleActivate(1)}
				onblur={handleDeactivate}>Homage</a
			>
			and
			<a
				class="work-item"
				class:active={activeIndex === 2}
				href="/work/envolve"
				onmouseenter={() => handleActivate(2)}
				onmouseleave={handleDeactivate}
				onfocus={() => handleActivate(2)}
				onblur={handleDeactivate}
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

	<div class="images">
		{#each images as { src, alt }, i}
			<enhanced:img
				{src}
				{alt}
				style="--index: {i}; --total: {images.length}"
				class="image image-{i}"
				class:active={activeIndex === i}
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

		@media (prefers-reduced-motion: reduce) {
			transition: none;
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
		letter-spacing: 0.0125em;
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
