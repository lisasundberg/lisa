<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Button from '$lib/components/Button.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import { workCases as cases } from '$lib/data/work-cases';
	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { prefersReducedMotion } from '$lib/stores/motion';

	let items: HTMLLIElement[] = $state([]);
	let headings: HTMLHeadingElement[] = $state([]);

	onMount(() => {
		if ($prefersReducedMotion) {
			gsap.set(headings, { yPercent: 0, autoAlpha: 1 });
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		gsap.set(headings, { yPercent: 100, autoAlpha: 0 });

		const timelines = items.map((item) =>
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: 'top bottom-=25%',
					end: 'top center',
					once: true
				}
			})
		);

		timelines.forEach((tl, i) => {
			tl.to(headings[i], {
				yPercent: 0,
				autoAlpha: 1,
				duration: 1,
				delay: 0.4,
				ease: EASE_REVEAL
			});
		});

		return () => {
			timelines.forEach((tl) => {
				tl.scrollTrigger?.kill();
				tl.kill();
			});
		};
	});
</script>

<section class="work-touch">
	<h3 class="title label">Selected work</h3>

	<ul class="cases">
		{#each cases as { src, title, slug }, i}
			<li class="case" bind:this={items[i]}>
				<a class="link -plain" href={`/work/${slug}`}>
					<ImageScrollReveal>
						<enhanced:img {src} alt="" class="image" />
					</ImageScrollReveal>
					<div class="mask">
						<h3 class="case-title" bind:this={headings[i]}>{title}</h3>
					</div>
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

	.mask {
		overflow: hidden;
	}

	.case-title {
		font-family: var(--font-display);
		font-size: var(--font-size-h2);
	}

	.cta {
		place-self: center;
	}
</style>
