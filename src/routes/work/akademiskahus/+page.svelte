<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import Button from '$lib/components/Button.svelte';
	import ah1 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import ah2 from '$lib/assets/akademiskahus/ah-mockup-2.jpg?enhanced';
	import ah3 from '$lib/assets/akademiskahus/ah-mockup-3.png?enhanced';
	import ah4 from '$lib/assets/akademiskahus/ah-mockup-4.jpg?enhanced';
	import ah5 from '$lib/assets/akademiskahus/ah-mockup-5.jpg?enhanced';
	import ah6 from '$lib/assets/akademiskahus/ah-mockup-6.jpg?enhanced';

	let title: HTMLElement | null;
	let info: HTMLElement | null;
	let body: HTMLDivElement | null;
	let cta: HTMLDivElement | null;

	let splitTitle: SplitText;

	onMount(() => {
		if ((pageRevealFinished && !title) || !info || !body || !cta) return;

		document.fonts.ready.then(() => {
			const splitParams = {
				type: 'chars, lines',
				smartWrap: true,
				mask: 'lines' as 'lines'
			};

			splitTitle = SplitText.create(title, splitParams);

			const tl = gsap.timeline();

			tl.from(splitTitle.chars, {
				yPercent: 70,
				autoAlpha: 0,
				stagger: 0.04,
				duration: 1,
				ease: 'power4.out'
			}).from(
				[info, body, cta],
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
</script>

<article>
	<div class="content">
		<div class="text">
			<h1 bind:this={title}>Akademiska Hus</h1>
			<div class="info" bind:this={info}>
				<p class="label">Project at Alster 2024</p>
				<p class="label">My responsibility: design system development</p>
				<p class="label">Technologies: Optimizely, Stimulus.js, CSS</p>
			</div>
			<div class="body" bind:this={body}>
				<p class="p-small">
					Fully redesigned web ecosystem for Akademiska Hus, leading owner of university campuses in
					Sweden.
				</p>
				<p class="p-small">
					The CMS based platform includes multiple editorial formats, a system for error reporting,
					and a logged-in experience where users can track campus news and their submitted reports.
				</p>
				<p class="p-small">
					In a team of five developers, design and project lead, I was responsible for translating
					the new design system from Figma into code, and ensuring a consistentent and scalable
					implementation.
				</p>
			</div>
			<div class="link" bind:this={cta}>
				<Button href="https://akademiskahus.se/" target="_blank">Visit page</Button>
			</div>
		</div>

		<div class="images">
			<Image src={ah1} alt="Akademiska Hus" />
			<ImageScrollReveal><Image src={ah2} alt="Akademiska Hus" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={ah3} alt="Akademiska Hus" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={ah4} alt="Akademiska Hus" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={ah5} alt="Akademiska Hus" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={ah6} alt="Akademiska Hus" /></ImageScrollReveal>
		</div>
	</div>

	<footer>
		<nav>
			<a href="/work">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.8457 8.5L1.61118 8.5M6.65285 14L1.15285 8.5L6.65285 3"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Back to work
			</a>
			<a href="/work/envolve">
				Next project <svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</nav>
	</footer>
</article>

<style>
	article {
		grid-column: main;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--content-margin);

		@media (width >=768px) {
			flex-direction: row-reverse;
		}
	}

	h1 {
		font-family: var(--font-display);
	}

	.info {
		margin-top: 1em;
	}

	.text {
		@media (width >=768px) {
			position: sticky;
			top: 6em;
			width: 50%;
		}
	}

	.images {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.body {
		margin-top: 2em;
	}

	.link {
		margin-top: 3em;
	}

	footer {
		grid-column: main;
		margin-top: 4em;
		padding-block: 2em;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
