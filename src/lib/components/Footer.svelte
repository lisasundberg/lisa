<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	import { headingHeight } from '$lib/stores/app';
	import { EASE_REVEAL } from '$lib/gsap/eases';
	import { prefersReducedMotion } from '$lib/stores/motion';
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	let footer: HTMLElement;
	let title: HTMLElement;
	let email: HTMLElement;
	let ctx: gsap.Context;

	onMount(() => {
		if ($prefersReducedMotion) return;

		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			const linkReveal = gsap.from('.mask a, .mask .divider', {
				yPercent: 200,
				duration: 0.4,
				ease: EASE_REVEAL,
				paused: true
			});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: footer,
						start: 'top bottom',
						end: 'top top+=50px',
						scrub: true,
						once: true
					},
					onComplete: () => {
						linkReveal.play();
					},
					onReverseComplete: () => {
						linkReveal.reverse();
					}
				})
				.fromTo(
					title,
					{ xPercent: -50, filter: 'blur(50px)' },
					{ xPercent: 0, filter: 'blur(0px)' },
					0
				)
				.fromTo(
					email,
					{ xPercent: 50, filter: 'blur(50px)' },
					{ xPercent: 0, filter: 'blur(0px)' },
					0
				);
		}, footer);
	});

	onDestroy(() => ctx?.revert());
</script>

<footer class="footer section" style="--heading-height: {$headingHeight}" bind:this={footer}>
	<section class="content">
		<h2 class="title" bind:this={title}>get in touch</h2>
		<p class="email" bind:this={email}>
			<a class="-tight" href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>

		<ul class="list">
			<li class="mask">
				<a class="link" href="https://github.com/lisasundberg">Github</a>
				<span class="divider" aria-hidden="true">/</span>
			</li>

			<li class="mask">
				<a class="link" href="https://www.linkedin.com/in/lisasundberg/">Linkedin</a>
				<span class="divider" aria-hidden="true">/</span>
			</li>

			<li class="mask"><a class="link" href="https://codepen.io/lisasundae">Codepen</a></li>
		</ul>
	</section>
	<div class="sub">
		<small>© {new Date().getFullYear()}</small>
	</div>
</footer>

<style>
	.footer {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas: 'spacer' 'content' 'sub';
		align-content: center;
		position: relative;
		height: 100dvh;
		padding-block: 2em;
		overflow-x: clip;
		color: var(--_theme-color-primary);
	}

	.content {
		grid-column: main;
		grid-row: content;
		line-height: 0.8;
		margin: auto;
	}

	.title {
		grid-area: title;
		margin-left: -1ch;
		font-family: var(--font-display-italic);
		font-size: var(--font-size-h2);

		@media (width >= 768px) {
			font-size: var(--font-size-display);
		}
	}

	.email {
		grid-area: email;
		font-family: var(--font-display);
		font-size: var(--font-size-h2);

		@media (width >= 768px) {
			font-size: var(--font-size-display);
		}
	}

	.list {
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		margin-top: 1em;
		margin-left: 0.125em;
	}

	.mask {
		overflow: hidden;
		padding-bottom: 0.2em;
		display: flex;
		gap: 0.5em;
	}

	.sub {
		grid-column: full;
		grid-row: sub;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		opacity: 0.5;
		padding-inline: var(--content-margin);
	}
</style>
