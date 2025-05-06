<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	// import { animate } from '$lib/actions/animate';
	import { split } from '$lib/actions/textSplitter';

	import WorkItem from '$lib/components/WorkItem.svelte';
	import Button from '$lib/components/Button.svelte';

	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve.png?enhanced';

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

	// function handleMouseEnter(index: number) {
	// 	gsap.to(`[data-work-image="${index}"]`, {
	// 		opacity: 1,
	// 		duration: 0.5
	// 	});

	// 	console.log('mouse enter', index);
	// }

	// function handleMouseLeave(index: number) {
	// 	gsap.to(`[data-work-image="${index}"]`, {
	// 		opacity: 0,
	// 		duration: 0.5
	// 	});
	// 	console.log('mouse out', index);
	// }

	let timeline: gsap.core.Timeline;

	onMount(() => {
		timeline = gsap.timeline();
	});

	// use:animate={{
	// 	timeline,
	// 	type: 'from',
	// 	scrollTrigger: {
	// 		trigger: '[data-work-section]',
	// 		start: 'top -=6%',
	// 		end: '+=100%',
	// 		scrub: 3,
	// 		pin: true,
	// 		once: true
	// 	},
	// 	animations: [
	// 		// {
	// 		// 	target: '[data-work-heading] .char',
	// 		// 	vars: {
	// 		// 		filter: 'blur(10px)',
	// 		// 		opacity: 0,
	// 		// 		willChange: 'filter, opacity',
	// 		// 		duration: 0.5,
	// 		// 		stagger: 0.01
	// 		// 	},
	// 		// 	position: '-=0.5'
	// 		// },
	// 		{
	// 			target: '[data-work-image]',
	// 			vars: {
	// 				opacity: 0,
	// 				stagger: 1,
	// 				duration: 1
	// 			}
	// 		},
	// 		{
	// 			target: '[data-work-image]',
	// 			type: 'to',
	// 			vars: {
	// 				opacity: 0,
	// 				duration: 0.5
	// 			}
	// 		},
	// 		{
	// 			target: '[data-work-body]',
	// 			vars: {
	// 				opacity: 0,
	// 				yPercent: 50,
	// 				duration: 1,
	// 				ease: 'power4.out'
	// 			},
	// 			position: '-=0.2'
	// 		},
	// 		{
	// 			target: '[data-work-button]',
	// 			vars: {
	// 				opacity: 0,
	// 				yPercent: 50,
	// 				duration: 1,
	// 				ease: 'power4.out'
	// 			},
	// 			position: '-=0.5'
	// 		}
	// 	]
	// }}
</script>

<section data-work-section class="section work">
	<div class="content">
		<p class="heading" data-work-heading use:split={{ type: 'char', className: 'char' }}>
			I have worked on projects for a wide range of clients - such as <WorkItem
				title="Akademiska Hus,"
				images={[AH]}
				link="/work/akademiskahus"
				index={0}
			/>
			<WorkItem title="Homage" images={[Homage]} link="/work/homage" index={1} /> and
			<span>
				<WorkItem title="Envolve." images={[Envolve]} link="/work/envolve" index={2} />
			</span>
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

	span {
		white-space: nowrap;
	}
</style>
