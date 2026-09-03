<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-cover.jpg?enhanced';

	const cases = [
		{
			src: AH,
			title: 'Akademiska Hus',
			slug: 'akademiskahus'
		},
		{
			src: Homage,
			title: 'Homage',
			slug: 'homage'
		},
		{
			src: Envolve,
			title: 'Envolve',
			slug: 'envolve'
		}
	];

	let activeIndex: number | null = $state(null);

	function handleMouseEnter(index: number) {
		activeIndex = index;
	}

	function handleMouseLeave() {
		activeIndex = null;
	}
</script>

<section class="work">
	<div class="images" data-work-images>
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
				<a
					class="work-item"
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
			{/each}
		</ul>

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
		z-index: 1;
	}

	.content {
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		display: grid;
		grid-template-rows: subgrid;
		z-index: 1;
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
	}

	.work-item {
		font-family: var(--font-display);
		font-size: var(--font-size-display);
	}

	.images {
		z-index: 0;

		grid-area: cases;
		grid-column: 1 / -1;
		display: grid;
		grid-template-areas: 'image';
		place-items: center;
		justify-self: center;

		:global(picture) {
			grid-area: image;
		}
		@media (width >= 768px) {
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
	}

	.cta {
		grid-area: button;
		grid-column: 1 / -1;
		place-self: center;
	}
</style>
