<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Button from '$lib/components/Button.svelte';

	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-cover.jpg?enhanced';
	import { onMount } from 'svelte';
	// import { onMount } from 'svelte';

	const images = [
		{
			src: Homage,
			alt: 'Homage'
		},
		{
			src: AH,
			alt: 'Akademiska Hus'
		},
		{
			src: Envolve,
			alt: 'Envolve'
		}
	];

	// let currentImageIndex: number | null = $state(null);
	// function handleMouseEnter(i: number) {
	// 	currentImageIndex = i;

	// 	gsap.to(`[data-work-image="${i}]"`, { opacity: 1 });

	// 	console.log('in', currentImageIndex);
	// }

	// function handleMouseLeave(i: number) {
	// 	currentImageIndex = null;

	// 	gsap.to(`[data-work-image="${i}"]`, { opacity: 0 });
	// 	console.log('out');
	// }

	// onMount(() => {
	// 	const links = document.querySelectorAll('[data-work-item]');

	// 	links.forEach((link, i) => {
	// 		link.addEventListener('mouseenter', () => handleMouseEnter(i));
	// 		link.addEventListener('mouseleave', () => handleMouseLeave(i));
	// 	});
	// });

	let workSection: HTMLElement;
	let heading: HTMLElement;
	let splitHeading: SplitText;
	let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.registerPlugin(SplitText);
		gsap.registerPlugin(ScrollTrigger);

		const splitParams = {
			type: 'chars',
			charsClass: 'work-char',
			smartWrap: true
		};

		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: workSection,
				start: 'top -=5%',
				end: '+=105%',
				pin: true,
				scrub: 4,
				once: true,
				markers: true
			},
			onComplete: () => {
				splitHeading.revert();
			}
		});

		document.fonts.ready.then(() => {
			splitHeading = SplitText.create(heading, splitParams);

			gsap.set('[data-work-item]', {
				pointerEvents: 'none'
			});

			timeline
				.from(splitHeading.chars, {
					filter: 'blur(10px)',
					opacity: 0,
					willChange: 'filter, opacity',
					duration: 0.5,
					stagger: 0.02
				})
				.from('[data-work-image]', {
					opacity: 0,
					stagger: 4,
					duration: 1,
					delay: 1
				})
				.to('[data-work-image]', {
					opacity: 0,
					duration: 1,
					delay: 2
				})
				.from('[data-work-body]', {
					opacity: 0,
					yPercent: 50,
					duration: 2,
					ease: 'power4.out'
				})
				.from(
					'[data-work-button]',
					{
						opacity: 0,
						yPercent: 50,
						duration: 2,
						ease: 'power4.out'
					},
					'-=1'
				)
				.from('[data-work-body]', {
					display: 'block',
					duration: 5
				});
		});
	});
</script>

<section class="section work" bind:this={workSection}>
	<div class="content">
		<p class="heading" bind:this={heading}>
			I have worked on projects for a wide range of clients - such as
			<a class="work-item" href="/work/akademiskahus" data-work-item="0">Akademiska Hus,</a>
			<a class="work-item" href="/work/homage" data-work-item="1">Homage</a> and
			<a class="work-item" href="/work/envolve" data-work-item="2">Envolve. </a>
			<!-- <WorkItem
				title="Akademiska Hus,"
				images={[AH]}
				link="/work/akademiskahus"
				index={0}
			/>
			<WorkItem title="Homage" images={[Homage]} link="/work/homage" index={1} /> and
			<WorkItem title="Envolve." images={[Envolve]} link="/work/envolve" index={2} /> -->
		</p>

		<p class="body p-xsmall" data-work-body>
			Other clients include but are not limited to:<br /> H&M, Previa, Länsförsäkringar, TV4, Red Bull,
			Urban deli, Storyblok, Bambora.
		</p>

		<div class="cta" data-work-button>
			<Button href="/work">
				See all work
				{#snippet iconRight()}
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
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
		place-items: center;
		z-index: 1;
	}

	.work-item {
		font-family: var(--font-display-italic);
		text-transform: none;
		font-size: 1.25em;
		letter-spacing: 0;
		transition: color 0.2s linear;
		line-height: 0.8;

		&::after {
			bottom: -0.125em !important;
			height: 1px !important;
		}
	}

	.images {
		grid-area: heading;
		grid-column: 1 / -1;
		display: grid;
		grid-template-areas: 'image';
		place-items: center;
		justify-self: center;
		width: min(50%, 32rem);
		z-index: 0;

		:global(picture) {
			grid-area: image;
		}
	}

	.image {
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center;
		filter: brightness(0.75);
	}

	.heading {
		grid-area: heading;
		width: min(100%, 36ch);
		text-align: center;
		text-wrap: pretty;
		font-family: var(--font-sansserif);
		text-transform: uppercase;
		font-size: clamp(2rem, 3.3vw, 3rem);
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
