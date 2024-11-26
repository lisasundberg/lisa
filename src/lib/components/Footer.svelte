<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { headingHeight } from '$lib/stores/app';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY, maskY } from '$lib/actions/animations';

	let footer: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// bodyMaskY(footer, scrollTrigger);
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: footer,
				start: 'top center',
				end: 'bottom bottom',
				scrub: true,
				// markers: true,
				toggleActions: 'play play play play'
			}
		});

		timeline.fromTo(
			footer.querySelectorAll('.char'),
			{
				'will-change': 'transform',
				yPercent: 100,
				autoAlpha: 0
			},
			{
				autoAlpha: 1,
				yPercent: 0,
				duration: 0.8,
				ease: 'power4.out',
				stagger: 0.008
			}
		);
	});
</script>

<footer
	class="footer section"
	id="contact"
	style="--heading-height: {$headingHeight}"
	bind:this={footer}
>
	<section>
		<div>
			<h2 class="label">Get in touch</h2>
			<p><a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a></p>
		</div>
		<ul>
			<li><ExternalLink href="https://codepen.io/lisasundae/" label="Codepen" /></li>
			<li><ExternalLink href="https://github.com/lisasundberg" label="Github" /></li>
			<li><ExternalLink href="https://www.linkedin.com/in/lisasundberg/" label="Linkedin" /></li>
		</ul>
	</section>
	<small>© Designed & developed by me in {new Date().getFullYear()} :-)</small>
</footer>

<style>
	.footer {
		grid-column: main;
		display: grid;
		grid-template-columns: subgrid;
		align-content: center;
		box-sizing: border-box;
		position: relative;
		height: calc(100dvh - var(--heading-height) * 1px);
		padding-block: 2rem;
		color: var(--color-cream);
		order: 4;
		z-index: 10;
	}

	section {
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);
		width: 100%;
		margin: auto;
		padding-block: 10dvh;
		margin-bottom: 2rem;
	}

	ul {
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
	}

	li {
		list-style: none;
		margin-top: 0.25em;
		padding-top: 0.25em;
	}

	p {
		margin-top: 0.25em;
	}

	small {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
	}
</style>
