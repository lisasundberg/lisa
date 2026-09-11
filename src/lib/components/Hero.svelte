<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';

	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	let container: HTMLElement;
	let heroName: HTMLElement;
	let heroRole: HTMLElement;
	let preambleHello: HTMLElement;
	let preambleIntro: HTMLElement;
	let ctx: gsap.Context;

	onMount(() => {
		document.fonts.ready.then(() => {
			if ($prefersReducedMotion) {
				gsap.set(container.querySelectorAll('.text'), { yPercent: 0, autoAlpha: 1 });

				pageRevealFinished.set(true);

				return;
			}

			ctx = gsap.context(() => {
				gsap
					.timeline({
						defaults: { yPercent: 0, autoAlpha: 1, ease: EASE_REVEAL },
						onComplete: () => pageRevealFinished.set(true)
					})
					.set('.text', { yPercent: 100, autoAlpha: 0 })
					.to(heroName, { duration: 1 })
					.to(preambleHello, { duration: 1.2 }, '<')
					.to(heroRole, { duration: 1 }, '-=0.7')
					.to(preambleIntro, { duration: 1.2 }, '<');
			}, container);
		});
	});

	onDestroy(() => ctx?.revert());
</script>

<section class="hero">
	<div class="intro" bind:this={container}>
		<div class="row">
			<div class="mask -hello">
				<p class="text preamble" bind:this={preambleHello}>Hello, my name is</p>
			</div>
			<div class="mask -name">
				<h1 class="text heading" bind:this={heroName} data-flip-id="logo-name">Lisa Sundberg</h1>
			</div>
			<div class="mask -intro">
				<p class="text preamble" bind:this={preambleIntro}>and I'm a</p>
			</div>
		</div>

		<div class="row">
			<div class="mask -role">
				<h2 class="text heading" bind:this={heroRole} data-flip-id="logo-role">design engineer</h2>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		height: calc(100dvh - 100px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.row {
		display: flex;
		flex-direction: column;

		@media (width >= 768px) {
			flex-direction: row;
			gap: 0 0.8em;
		}

		& + & {
			margin-top: -3%;
		}
	}

	.text {
		margin: 0;
		visibility: hidden;
		opacity: 0;
	}

	.mask {
		display: inline-block;
		height: fit-content;
		overflow: hidden;
		text-wrap: nowrap;

		&.-hello {
			margin-top: 2%;
		}

		&.-intro {
			margin-top: auto;
			margin-bottom: 2%;
		}
	}

	.heading {
		font-size: 10vw;
		line-height: 1.15;
		margin: 0;

		.-role & {
			font-family: var(--font-display-italic);
		}
	}

	.preamble {
		font-size: var(--font-size-preamble);
		font-family: var(--font-display);
		margin: 0;
	}
</style>
