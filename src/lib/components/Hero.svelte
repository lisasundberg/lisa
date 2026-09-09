<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Flip } from 'gsap/Flip';

	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';
	import { get } from 'svelte/store';

	let hero: HTMLElement;
	let heroSection: HTMLElement | null;
	let header: HTMLElement | null;
	let logo: HTMLElement | null;
	let context: gsap.Context;

	onMount(() => {
		heroSection = document.querySelector('section.hero');
		header = document.querySelector('header');
		logo = document.querySelector('.logo');

		// bryt ut
		const textReveal = {
			yPercent: 0,
			autoAlpha: 1,
			ease: EASE_REVEAL,
			duration: 1
		};

		gsap.registerPlugin(ScrollTrigger, Flip);

		document.fonts.ready.then(() => {
			context = gsap.context(() => {
				//////////
				gsap
					.timeline({
						defaults: { yPercent: 0, autoAlpha: 1, ease: EASE_REVEAL },
						onComplete: () => pageRevealFinished.set(true)
					})
					.set('.text', {
						yPercent: 100,
						autoAlpha: 0
					})
					.to(['.-hello .text', '.-name .text'], textReveal)
					.to(['.-intro .text', '.-role .text'], textReveal, '-=0.7');
				//////////////////
				// gsap
				// 	.timeline({
				// 		scrollTrigger: {
				// 			start: 'top top',
				// 			end: 'top+=300px',
				// 			scrub: true
				// 		}
				// 	})
				// 	.to(['.mask.-hello', '.mask.-intro'], { width: 0 })
				// 	.to('.preamble', { autoAlpha: 0, duration: 0.1 }, '<')
				// 	.to('.heading', { scale: 0.5, transformOrigin: 'left' }, '<')
				// 	.to('.row', { gap: 0 }, '<')
				// 	.to('.-role', { yPercent: -30 }, '<');
				///////////////
				// Shrink the hero into the header's logo slot, scrubbed by scroll.
				// The reparent + class toggle happen once, synchronously, up front:
				// Flip diffs the before/after rects and fakes the "jump" with transform
				// offsets, then a scrubbed tween unwinds those offsets as the user scrolls.
				if (!heroSection || !header || !logo || get(prefersReducedMotion)) return;

				const flipTargets = [
					hero,
					...hero.querySelectorAll<HTMLElement>('.mask, .heading, .preamble')
				];

				const state = Flip.getState(flipTargets, { props: 'fontSize, gap' });

				hero.classList.add('-in-header');

				logo.appendChild(hero);

				const flipTween = Flip.from(state, {
					targets: flipTargets,
					duration: 1,
					absolute: hero,
					nested: true
				});

				ScrollTrigger.create({
					start: 'top top',
					endTrigger: hero,
					end: 'bottom top',
					scrub: true,
					animation: flipTween,
					markers: true
				});
				///////////////
			}, hero);
		});
	});

	onDestroy(() => {
		context?.revert();
		// hero may have been reparented into the nav's .logo slot by the Flip
		// animation above; Svelte's own teardown can't reach it there, so it
		// has to be removed explicitly or it's left orphaned in the header.
		hero?.remove();
	});
</script>

<div class="hero" bind:this={hero}>
	<div class="row">
		<div class="mask -hello"><p class="text preamble">Hello, my name is</p></div>
		<div class="mask -name"><h1 class="text heading">Lisa Sundberg</h1></div>
		<div class="mask -intro"><p class="text preamble">and I'm a</p></div>
	</div>

	<div class="row">
		<div class="mask -role"><h2 class="text heading">design engineer</h2></div>
	</div>
</div>

<style>
	.hero {
		position: sticky;
		top: 0;
		height: fit-content;

		&:global(.-in-header) {
			position: static;
		}
	}

	.row {
		display: flex;
		flex-direction: column;

		@media (width >= 768px) {
			flex-direction: row;
			gap: 0 0.8em;
		}

		:global(.-in-header) & {
			gap: 0;
		}
	}

	.text {
		/* visibility: hidden; */
		margin-block: 0;
		text-box-trim: trim-both;
	}

	.mask {
		display: inline-block;
		overflow: hidden;
		text-wrap: nowrap;

		/* &.-hello {
			margin-top: 1em;
		}

		&.-intro {
			margin-top: auto;
			margin-bottom: 1.1em;
		}

		&.-role {
			margin-top: -1em;

			@media (width >= 768px) {
				margin-top: -1.75em;
			}
		} */
	}

	:global(.-in-header) .mask.-hello,
	:global(.-in-header) .mask.-intro {
		width: 0;
	}

	.preamble {
		font-family: var(--font-display);
		font-size: var(--font-size-body-small);
		margin: 0;
	}

	.heading {
		font-size: var(--font-size-display);
		line-height: 0.8;
		margin: 0;
		transform-origin: top left;

		.-role & {
			font-family: var(--font-display-italic);
		}
	}

	:global(.-in-header) .heading {
		font-size: var(--font-size-h2);
		line-height: 1;
	}
</style>
