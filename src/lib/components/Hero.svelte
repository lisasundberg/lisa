<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';

	let intro: HTMLElement;
	let context: gsap.Context;

	onMount(() => {
		const textReveal = {
			yPercent: 0,
			autoAlpha: 1,
			ease: 'power4.out',
			duration: 0.5
		};

		document.fonts.ready.then(() => {
			context = gsap.context(() => {
				const text = gsap.utils.toArray<HTMLElement>('.text');

				gsap
					.timeline()
					.set(text, {
						yPercent: 100,
						autoAlpha: 0
					})
					.to(['.-hello .text', '.-name .text'], textReveal)
					.to(['.-intro .text', '.-title .text'], textReveal);
			}, intro);
		});
	});

	onDestroy(() => context?.revert());
</script>

<section class="intro" bind:this={intro}>
	<div class="row">
		<div class="mask -hello"><p class="text preamble">Hello, my name is</p></div>
		<div class="mask -name"><h1 class="text heading">Lisa Sundberg</h1></div>
		<div class="mask -intro"><p class="text preamble">and I'm a</p></div>
	</div>

	<div class="row">
		<div class="mask -title"><h2 class="text heading">design engineer</h2></div>
	</div>
</section>

<style>
	.intro {
		margin-block: 25dvh;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8em;
	}

	.text {
		opacity: 0;
		margin-block: 0;
		text-box-trim: trim-both;
	}

	.mask {
		display: inline-block;
		overflow: hidden;
		height: fit-content;

		&.-hello {
			margin-top: 0.7em;
		}

		&.-intro {
			margin-top: auto;
			margin-bottom: 0.9em;
		}

		&.-title {
			margin-top: -1.75em;
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

		.-title & {
			font-family: var(--font-display-italic);
		}
	}
</style>
