<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import { headingHeight } from '$lib/stores/app';
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
			gsap
				.timeline({
					scrollTrigger: {
						trigger: footer,
						start: 'top bottom',
						end: 'top top+=50px',
						scrub: true,
						markers: true
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
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
	</section>
	<div class="sub">
		<small>© {new Date().getFullYear()}</small>
	</div>
</footer>

<!-- <footer class="footer section" id="contact" style="--heading-height: {$headingHeight}">
	<section>
		<h2 class="title label">Get in touch</h2>
		<p class="email"><a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a></p>

		<ul class="list">
			<li><ExternalLink href="https://github.com/lisasundberg" label="Github" /></li>
			<li><ExternalLink href="https://www.linkedin.com/in/lisasundberg/" label="Linkedin" /></li>
			<li><ExternalLink href="https://codepen.io/lisasundae" label="CodePen" /></li>
		</ul>
	</section>
	<div class="sub">
		<small>© {new Date().getFullYear()}</small>
	</div>
</footer> -->

<style>
	.content {
		grid-area: content;
		line-height: 0.8;
		margin: auto;
	}

	.title {
		font-family: var(--font-display-italic);
		font-size: var(--font-size-display);
	}

	.email {
		font-family: var(--font-display);
		font-size: var(--font-size-display);
		/* margin-left: 0.675em; */
	}

	.footer {
		grid-column: main;
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: 1fr auto 1fr;
		grid-template-areas: 'spacer' 'content' 'sub';
		align-content: center;
		box-sizing: border-box;
		position: relative;
		height: 100dvh;
		padding-block: 2em;
		color: var(--_theme-color-primary);
	}

	/* section {
		grid-area: content;
		display: grid;
		grid-template-columns: var(--two-cols);
		grid-template-rows: repeat(2, max-content);
		grid-template-areas:
			'title'
			'email'
			'list';
		gap: 0 var(--content-gap);
		width: 100%;
		margin: auto;
		padding-block: 10dvh;

		@media (width >= 768px) {
			grid-template-areas:
				'title .'
				'email list';
		}
	} */

	.title {
		grid-area: title;
	}

	.email {
		grid-area: email;
	}

	.list {
		grid-area: list;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		margin-top: 1.5em;

		@media (width >= 768px) {
			margin-top: 0;
		}
	}

	.sub {
		grid-area: sub;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		opacity: 0.5;
	}

	small {
		max-width: 27ch;
	}
</style>
