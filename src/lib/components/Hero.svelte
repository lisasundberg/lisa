<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { pageRevealFinished } from '$lib/stores/app';

	let intro: HTMLElement;
	let context: gsap.Context;

	onMount(() => {
		// bryt ut
		const textReveal = {
			yPercent: 0,
			autoAlpha: 1,
			ease: EASE_REVEAL,
			duration: 1
		};

		gsap.registerPlugin(ScrollTrigger);

		document.fonts.ready.then(() => {
			context = gsap.context(() => {
				gsap
					.timeline({
						onComplete: () => pageRevealFinished.set(true)
					})
					.set('.text', {
						yPercent: 100,
						autoAlpha: 0
					})
					.to(['.-hello .text', '.-name .text'], textReveal)
					.to(['.-intro .text', '.-role .text'], textReveal, '-=0.5');

				gsap
					.timeline({
						scrollTrigger: {
							start: 'top top',
							end: 'top+=300px',
							scrub: true
						}
					})
					.to(['.mask.-hello', '.mask.-intro'], { width: 0 })
					.to('.preamble', { autoAlpha: 0, duration: 0.1 }, '<')
					.to('.heading', { scale: 0.75, transformOrigin: 'left' }, '<')
					.to('.row', { gap: 0 }, '<')
					.to('.-role', { yPercent: -20 }, '<');
			}, intro);
		});
	});

	onDestroy(() => context?.revert());
</script>

<section class="hero">
	<div class="intro" bind:this={intro}>
		<div class="row">
			<div class="mask -hello"><p class="text preamble">Hello, my name is</p></div>
			<div class="mask -name"><h1 class="text heading">Lisa Sundberg</h1></div>
			<div class="mask -intro"><p class="text preamble">and I'm a</p></div>
		</div>

		<div class="row">
			<div class="mask -role"><h2 class="text heading">design engineer</h2></div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 75dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.intro {
		position: sticky;
		top: 0;
		height: fit-content;
	}

	.row {
		display: flex;
		flex-direction: column;

		@media (width > 768px) {
			flex-direction: row;
			gap: 0.8em;
		}
	}

	.text {
		visibility: hidden;
		margin-block: 0;
		text-box-trim: trim-both;
	}

	.mask {
		display: inline-block;
		overflow: hidden;
		height: fit-content;
		text-wrap: nowrap;

		&.-hello {
			margin-top: 1em;
		}

		&.-intro {
			margin-top: auto;
			margin-bottom: 1.1em;
		}

		&.-role {
			margin-top: -1em;

			@media (width>768px) {
				margin-top: -1.75em;
			}
		}
	}

	.preamble {
		font-family: var(--font-display);
		font-size: var(--font-size-body-small);
		margin: 0;
	}

	.heading {
		font-size: var(--font-size-display);
		line-height: 1.2;
		margin: 0;

		.-role & {
			font-family: var(--font-display-italic);
		}
	}
</style>
