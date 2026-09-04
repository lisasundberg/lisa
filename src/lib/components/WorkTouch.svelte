<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { workCases as cases } from '$lib/data/work-cases';
</script>

<section class="work-touch">
	<h3 class="title label">Selected work</h3>

	<ul class="cases">
		{#each cases as { src, title, slug }}
			<li class="case">
				<a class="link -plain" href={`/work/${slug}`}>
					<enhanced:img {src} alt="" class="image" />
					<span class="case-title">{title}</span>
				</a>
			</li>
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
</section>

<style>
	.work-touch {
		grid-column: main;
		display: grid;
		gap: var(--content-margin);
	}

	.title {
		text-align: center;
	}

	.cases {
		display: grid;
		gap: 1.75em;
	}

	.link {
		display: grid;
		gap: 0.5em;
	}

	.image {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center;
	}

	.case-title {
		font-family: var(--font-display);
		font-size: var(--font-size-h2);
	}

	.cta {
		place-self: center;
	}
</style>
