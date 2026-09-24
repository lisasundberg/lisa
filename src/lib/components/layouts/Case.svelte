<script lang="ts">
	import { onDestroy } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { Picture } from 'vite-imagetools';

	import gsap from 'gsap';

	import { prefersReducedMotion } from '$lib/stores/motion';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { EASE_REVEAL } from '$lib/gsap/eases';

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

	let textEl: HTMLDivElement | null = null;
	let titleEl: HTMLElement | null = null;
	let infoEl: HTMLDivElement | null = null;
	let bodyEl: HTMLDivElement | null = null;
	let ctaEl: HTMLDivElement | null = $state(null);

	let ctx: gsap.Context | undefined;
	let destroyed = false;
	let hidden = false;

	$effect(() => {
		if (!textEl || !titleEl || !infoEl || !bodyEl || destroyed || hidden) return;

		if ($prefersReducedMotion) {
			ctx = gsap.context(() => {
				gsap.set(textEl, { opacity: 1 });
			});
			return;
		}

		hidden = true;

		const infoParagraphs = infoEl.querySelectorAll('p');
		const bodyParagraphs = bodyEl.querySelectorAll('p');

		// Hide everything synchronously so nothing flashes before it animates in.
		ctx = gsap.context(() => {
			gsap.set(textEl, { opacity: 1 });
			gsap.set(titleEl, { yPercent: 100, autoAlpha: 0 });
			gsap.set(infoParagraphs, { y: 20, autoAlpha: 0 });
			gsap.set(bodyParagraphs, { y: 20, autoAlpha: 0 });
			if (ctaEl) gsap.set(ctaEl, { y: 20, autoAlpha: 0 });
		});

		document.fonts.ready.then(() => {
			if (destroyed) return;

			ctx?.add(() => {
				const tl = gsap
					.timeline({
						ease: 'Power3.easeOut',
						duration: 0.15
					})
					.to(titleEl, {
						yPercent: 0,
						autoAlpha: 1,
						duration: 1.2,
						ease: EASE_REVEAL
					})
					.to(
						infoParagraphs,
						{
							y: 0,
							autoAlpha: 1,
							stagger: 0.05
						},
						'-=0.9'
					)
					.to(
						bodyParagraphs,
						{
							y: 0,
							autoAlpha: 1,
							stagger: 0.05
						},
						'-=0.8'
					);

				if (ctaEl) {
					tl.to(
						ctaEl,
						{
							y: 0,
							autoAlpha: 1
						},
						'-=0.5'
					);
				}
			});
		});
	});

	onDestroy(() => {
		destroyed = true;
		ctx?.revert();
	});
</script>

<div class="content">
	<div class="featured-image">
		<ImageScrollReveal><Image src={images[0]} {alt} /></ImageScrollReveal>
	</div>
	<div class="text" bind:this={textEl}>
		<div class="mask">
			<h1 bind:this={titleEl}>{@render title()}</h1>
		</div>
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
			<div class="image">
				<ImageScrollReveal><Image src={image} {alt} /></ImageScrollReveal>
			</div>
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
		gap: 2em;

		@media (width >= 768px) {
			flex-direction: row-reverse;
			gap: var(--content-margin);
		}
	}

	.images {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1em;

		@media (width >= 768px) {
			margin-top: 0;
		}
	}

	.image {
		@media (width < 768px) {
			&:nth-child(1) {
				display: none;
			}
		}
	}

	.featured-image {
		@media (width >= 768px) {
			display: none;
		}
	}

	.text {
		opacity: 0;

		@media (width >= 768px) {
			position: sticky;
			top: 20dvh;
			width: 50%;
		}

		@media (height < 600px) {
			position: initial;
		}
	}

	.mask {
		display: inline-block;
		height: fit-content;
		overflow: hidden;
	}

	.info {
		margin-top: 1em;
	}

	.body {
		margin-top: 2em;
	}

	.link {
		margin-top: 1.5em;

		@media (width >= 768px) {
			margin-top: 3em;
		}
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
