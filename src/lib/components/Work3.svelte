<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { pointerFollow } from '$lib/actions/pointerFollow';
	import { workCases as cases } from '$lib/data/work-cases';

	let activeIndex: number | null = $state(null);
	let sectionEl: HTMLElement = $state()!;

	function handleMouseEnter(index: number) {
		activeIndex = index;
	}

	function handleMouseLeave() {
		activeIndex = null;
	}

	function computeImagesFollow(event: PointerEvent) {
		return { x: event.clientX, y: event.clientY };
	}
</script>

<section class="work" class:hovered={activeIndex !== null} bind:this={sectionEl}>
	<div
		class="images"
		data-work-images
		use:pointerFollow={{
			zone: sectionEl,
			duration: 0.55,
			ease: 'power2.out',
			compute: computeImagesFollow
		}}
	>
		{#each cases as { src, title }, i}
			<enhanced:img
				{src}
				alt={title}
				style="--index: {i}; --total: {cases.length}"
				class="image image-{i}"
				class:active={activeIndex === i}
				data-work-image={i}
			/>
		{/each}
	</div>

	<div class="content">
		<h3 class="title label">Selected work</h3>

		<ul class="cases">
			{#each cases as { title, slug }, i}
				<div class="work-item">
					<a
						class="link -plain"
						href={`/work/${slug}`}
						class:active={activeIndex === i}
						onmouseenter={() => handleMouseEnter(i)}
						onkeydown={() => handleMouseEnter(0)}
						onmouseleave={handleMouseLeave}
						onkeyup={handleMouseLeave}
						data-work-item={i}
					>
						{title}
					</a>
				</div>
			{/each}
		</ul>
	</div>
	<div class="cta">
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
</section>

<style>
	.work {
		grid-column: main;
		display: grid;
		grid-template-rows: min-content max-content min-content;
		grid-template-areas:
			'preamble'
			'cases'
			'button';
		gap: var(--content-margin);
		min-height: 100dvh;
	}

	.content {
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		display: grid;
		grid-template-rows: subgrid;
	}

	.cases {
		grid-area: cases;
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		grid-area: preamble;
		grid-column: 1 / -1;
		text-align: center;

		@media (hover: hover) {
			.hovered & {
				z-index: -2;
			}
		}
	}

	.work-item {
		display: flex;
		align-items: center;
		gap: 0.35em;
		font-family: var(--font-display);
		font-size: 10vw;
		color: var(--theme-color-bg);
		mix-blend-mode: difference;

		@media (hover: hover) {
			.link {
				translate: 0 0;
				transition: translate 0.65s var(--ease-out-expo);
				&:hover,
				&:focus-within {
					translate: 0.1em 0;
				}
			}
		}
	}

	.label-wrapper {
		display: flex;
		flex-grow: 0;
	}

	.images {
		display: none;

		:global(picture) {
			grid-area: image;
		}

		@media (hover: hover) {
			display: grid;
			grid-template-areas: 'image';
			position: fixed;
			top: 0;
			left: 0;
			translate: -50% -50%;
			width: min(50%, 36rem);
			pointer-events: none;
			z-index: -1;
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
	}

	.cta {
		grid-area: button;
		grid-column: 1 / -1;
		place-self: center;

		@media (hover: hover) {
			.hovered & {
				z-index: -2;
			}
		}
	}
</style>
