<script lang="ts">
	import { untrack } from 'svelte';
	import gsap from 'gsap';
	import type { Picture } from 'vite-imagetools';

	import { pageReady } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';
	import { pointerFollow } from '$lib/actions/pointerFollow';
	import { featuredWork } from '$lib/data/featured-work';
	import { experiences } from '$lib/data/experiences';

	import Featured from '$lib/components/Featured.svelte';
	import Pill from '$lib/components/Pill.svelte';

	let titleEl: HTMLElement = $state()!;
	let casesEl: HTMLElement = $state()!;
	let archiveEl: HTMLElement = $state()!;
	let imageEl: HTMLElement | null = $state(null);
	let activeImage: Picture | null = $state(null);

	$effect(() => {
		if (!$pageReady || $prefersReducedMotion) return;

		let ctx: gsap.Context;

		untrack(() => {
			ctx = gsap.context(() => {
				const items = gsap.utils.toArray<HTMLElement>('.featured-item');
				const bottomLine = casesEl.querySelector('.cases-line');
				const step = 0.1;
				const itemsStart = 0.3;

				const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

				// fromTo sets the start state immediately, so nothing flashes before it animates.
				// GSAP mutates the vars it is given, so every call gets its own copy.
				const maskFrom = { yPercent: 100, visibility: 'visible' };
				const maskTo = { yPercent: 0, visibility: 'visible', duration: 0.6 };
				const lineFrom = { scaleX: 0.25, autoAlpha: 0 };
				const lineTo = { scaleX: 1, autoAlpha: 1, duration: 0.8 };

				timeline.fromTo(titleEl, { ...maskFrom }, { ...maskTo }, 0);

				// One timeline per item (line, heading, label), staggered on the main timeline
				items.forEach((item, index) => {
					const line = item.querySelector('.line');
					const heading = item.querySelector('.heading');
					const label = item.querySelector('.tech');

					const itemTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
					itemTimeline.fromTo(line, { ...lineFrom }, { ...lineTo });
					itemTimeline.fromTo(heading, { ...maskFrom }, { ...maskTo }, '<0.2');
					itemTimeline.fromTo(label, { ...maskFrom }, { ...maskTo }, '<0.1');

					timeline.add(itemTimeline, itemsStart + index * step);
				});

				const bottomStart = itemsStart + items.length * step;
				timeline.fromTo(bottomLine, { ...lineFrom }, { ...lineTo }, bottomStart);

				// Overlaps the end of the bottom line
				timeline.to(archiveEl, { opacity: 1, duration: 0.3, ease: 'linear' }, '<=0.3');
			}, casesEl);
		});

		return () => ctx?.revert();
	});

	function onMouseEnter(image: Picture) {
		activeImage = image;
		gsap.to(imageEl, { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' });
	}

	function onMouseLeave() {
		gsap.to(imageEl, { opacity: 0, duration: 0.3, ease: 'power2.in' });
	}

	function computeCursorImageFollow(event: PointerEvent) {
		return { x: event.clientX + 20, y: event.clientY - 30 };
	}
</script>

<section class="featured">
	<div class="mask">
		<h2 class="title label" bind:this={titleEl}>Selected projects</h2>
	</div>
	<div class="cases" role="region" bind:this={casesEl} onmouseleave={onMouseLeave}>
		{#each featuredWork as { heading, label, link, image } (link)}
			<div class="featured-item">
				<Featured {heading} {label} {link} onmouseenter={() => onMouseEnter(image)} />
			</div>
		{/each}
		<span class="cases-line" aria-hidden="true"></span>
		<div
			class="cursor-image"
			bind:this={imageEl}
			use:pointerFollow={{
				zone: casesEl,
				duration: 0.55,
				ease: 'power2.out',
				compute: computeCursorImageFollow
			}}
		>
			{#if activeImage}
				<enhanced:img src={activeImage} alt="" />
			{/if}
		</div>
	</div>
</section>

<section class="archive" bind:this={archiveEl}>
	<h2 class="label">Archive / index</h2>
	<p class="p-xsmall">
		Pretty much all the projects I've worked on, big and small.<br /> Linked if still available online.
	</p>
	<table class="work-index">
		<tbody>
			{#each experiences as { year, client, description, awards, link, tech }}
				<tr>
					<td class="year">{year}<span class="client -mobile">, {client}</span></td>
					<td class="client -desktop">{client}</td>

					<td class="description">
						{#if link}
							<a class="project-name link -plain" href={link} target="_blank">
								{description} <span class="external-indicator" aria-hidden="true">↗</span>
								<span class="visually-hidden">(opens in new tab)</span>
							</a>
						{:else}
							<span class="project-name">{description}</span>
						{/if}
						{#if awards}
							<span class="awards">
								{#each awards as { name, link }}
									<Pill {link}>{name}</Pill>
								{/each}
							</span>
						{/if}
					</td>
					<td class="tech -mobile label">{tech}</td>
					<td class="tech -desktop">{tech}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	.featured {
		margin-top: 2em;
	}

	/* Clips the title while it slides up. Descender room is cancelled out to keep the layout. */
	.mask {
		overflow: hidden;
		padding-bottom: 0.1em;
		margin-bottom: -0.1em;
	}

	.title {
		@media (prefers-reduced-motion: no-preference) {
			visibility: hidden;
		}
	}

	.cursor-image {
		display: none;

		@media (hover: hover) {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			width: 33%;
			max-width: 500px;
			aspect-ratio: 4 / 3;
			pointer-events: none;
			z-index: 9999;
		}
	}

	.archive {
		margin-top: 5em;

		@media (prefers-reduced-motion: no-preference) {
			opacity: 0;
		}

		p {
			margin-top: 0.5em;
		}
	}

	.cases {
		margin-top: 2em;
	}

	/* Bottom border, drawn in after the lines inside Featured */
	.cases-line {
		display: block;
		height: 1px;
		background-color: var(--_theme-color-primary);
		transform-origin: left;

		@media (prefers-reduced-motion: no-preference) {
			visibility: hidden;
		}
	}

	.work-index {
		grid-column: main;
		display: grid;
		grid-template-columns: auto auto;
		gap: 0 1em;

		width: 100%;
		border: none;
		margin-top: 2em;

		@media (width >= 768px) {
			grid-template-columns: min-content auto 1fr auto;
			gap: 0;
		}
	}

	tbody {
		display: contents;
	}

	tr {
		position: relative;
		display: grid;
		grid-column: 1 / -1;
		grid-template-columns: subgrid;
		border-bottom: 1px solid var(--_theme-color-primary);
		padding-inline: 0.5em;
		transition:
			color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
	}

	@media (hover: hover) {
		:global(tr:has(.link:hover)),
		:global(tr:has(.link:focus)) {
			background-color: var(--_theme-color-accent);
			color: var(--_theme-color-bg);
		}
	}

	td {
		text-align: left;
		padding: 0.75em 0;

		&.tech {
			align-content: end;
		}

		&:not(&.label) {
			font-size: var(--font-size-body-xsmall);
		}

		@media (width < 768px) {
			&.year {
				grid-column: 1;
				grid-row: 1;
			}

			&.client {
				grid-column: 1;
				grid-row: 2;
			}

			&.description {
				grid-column: 2;
				grid-row: 1 / span 2;
			}

			&.tech {
				grid-column: 1;
				grid-row: 2;
			}
		}

		@media (width >= 768px) {
			padding: 0.375em;
		}
	}

	.project-name {
		position: static;
		margin-right: 1em;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
		}
	}

	.external-indicator {
		margin-left: 0.25em;
	}

	.awards {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		margin-top: 1em;

		@media (width >= 768px) {
			display: inline-flex;
			margin-top: 0;
		}
	}

	.-mobile {
		@media (width >= 768px) {
			display: none;
		}
	}
	.-desktop {
		@media (width < 768px) {
			display: none;
		}
	}
</style>
