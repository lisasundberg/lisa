<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { Picture } from 'vite-imagetools';

	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { prefersReducedMotion } from '$lib/stores/motion';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import Arrow from '$lib/components/Arrow.svelte';

	interface Props {
		title: Snippet;
		info: Snippet;
		body: Snippet;
		cta?: Snippet;
		images: Picture[];
		alt: string;
		backLink?: string;
		previousLink?: string;
		nextLink?: string;
	}

	let {
		title,
		info,
		body,
		cta,
		images,
		alt,
		backLink = '/work',
		previousLink,
		nextLink
	}: Props = $props();

	let titleEl: HTMLElement | null = null;
	let infoEl: HTMLDivElement | null = null;
	let bodyEl: HTMLDivElement | null = null;
	let ctaEl: HTMLDivElement | null = $state(null);

	let ctx: gsap.Context | undefined;
	let destroyed = false;

	onMount(() => {
		if (!titleEl || !infoEl || !bodyEl || $prefersReducedMotion) return;

		document.fonts.ready.then(() => {
			if (destroyed || !titleEl || !infoEl || !bodyEl) return;

			ctx = gsap.context(() => {
				const splitParams = {
					type: 'chars, lines',
					smartWrap: true,
					mask: 'lines' as const
				};

				const splitTitle = SplitText.create(titleEl, splitParams);

				gsap
					.timeline()
					.from(splitTitle.chars, {
						yPercent: 70,
						autoAlpha: 0,
						stagger: 0.04,
						duration: 1,
						ease: 'power4.out'
					})
					.from(
						[infoEl, bodyEl, ...(ctaEl ? [ctaEl] : [])],
						{
							opacity: 0,
							y: 20,
							stagger: 0.18,
							ease: 'power2.out',
							duration: 0.7
						},
						'-=0.8'
					);
			});
		});
	});

	onDestroy(() => {
		destroyed = true;
		ctx?.revert();
	});
</script>

<div class="content">
	<div class="text">
		<h1 bind:this={titleEl}>{@render title()}</h1>
		<div class="info" bind:this={infoEl}>
			{@render info()}
		</div>
		<div class="body" bind:this={bodyEl}>
			{@render body()}
		</div>
		{#if cta}
			<div class="link" bind:this={ctaEl}>
				{@render cta()}
			</div>
		{/if}
	</div>

	<div class="images">
		{#each images as image, i (i)}
			{#if i === 0}
				<Image src={image} {alt} />
			{:else}
				<ImageScrollReveal><Image src={image} {alt} /></ImageScrollReveal>
			{/if}
		{/each}
	</div>
</div>

{#snippet backArrow()}
	<Arrow left />
{/snippet}

{#snippet forwardArrow()}
	<Arrow right />
{/snippet}

<footer>
	<nav>
		<a href={backLink}>{@render backArrow()} Back to work</a>

		<div class="project-links">
			{#if previousLink}
				<a href={previousLink}>{@render backArrow()} Previous project</a>
			{/if}
			{#if nextLink}
				<a href={nextLink}>Next project {@render forwardArrow()}</a>
			{/if}
		</div>
	</nav>
</footer>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--content-margin);

		@media (width >= 768px) {
			flex-direction: row-reverse;
		}
	}

	.text {
		@media (width >= 768px) {
			position: sticky;
			top: 20dvh;
			width: 50%;
		}

		@media (height < 600px) {
			position: initial;
		}
	}

	.info {
		margin-top: 1em;
	}

	.body {
		margin-top: 2em;
	}

	.link {
		margin-top: 3em;
	}

	.images {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	footer {
		grid-column: main;
		margin-top: 4em;
		padding-block: 2em;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1em;
	}

	.project-links {
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
