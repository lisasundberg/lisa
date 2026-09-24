<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { workCases as cases } from '$lib/data/work-cases';
</script>

<section class="work-touch">
	<h3 class="title label">Selected work</h3>

	<ul class="cases">
		{#each cases as { src, title, slug }}
			<li class="case">
				<a class="link -plain" href={`/work/${slug}`}>
					<enhanced:img {src} alt="" class="image" />
					<h3 class="case-title">{title}</h3>
				</a>
			</li>
		{/each}
	</ul>

	<div class="cta">
		<Button href="/work">
			See all work
			{#snippet iconRight()}
				<Arrow right />
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
