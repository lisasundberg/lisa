<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';
	import { prefersReducedMotion } from '$lib/stores/motion';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import envolve1 from '$lib/assets/envolve/envolve-mockup-1.jpg?enhanced';
	import envolve2 from '$lib/assets/envolve/envolve-mockup-2.jpg?enhanced';
	import envolve3 from '$lib/assets/envolve/envolve-mockup-3.jpg?enhanced';
	import envolve4 from '$lib/assets/envolve/envolve-mockup-4.jpg?enhanced';
	import envolve5 from '$lib/assets/envolve/envolve-mockup-5.jpg?enhanced';
	import envolve6 from '$lib/assets/envolve/envolve-mockup-6.jpg?enhanced';
	import envolve7 from '$lib/assets/envolve/envolve-6.jpg?enhanced';
	import envolve8 from '$lib/assets/envolve/envolve-mockup-7.jpg?enhanced';
	import envolve9 from '$lib/assets/envolve/envolve-mockup-8.jpg?enhanced';

	let title: HTMLElement | null;
	let info: HTMLElement | null;
	let body: HTMLDivElement | null;

	let splitTitle: SplitText;

	onMount(() => {
		if ((pageRevealFinished && !title) || !info || !body || $prefersReducedMotion) return;

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
				[info, body],
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
			<h1 bind:this={title}>Envolve</h1>
			<div class="info" bind:this={info}>
				<p class="label">Project at Another State 2019</p>
				<p class="label">My responsibility: co-ideation, all development</p>
				<p class="label">Technologies: React (Next.js), GSAP, Sass</p>
			</div>
			<div class="body" bind:this={body}>
				<p class="p-small">
					Web presence for media studio Envolve. The site features scroll-triggered animations and
					switches seamlessly between vertical- & horizontal orientation.
				</p>
				<p class="p-small">
					On this project I collaborated closely with design from start to end, being part of
					ideation and collaborating on animation ideas throughout the development process.
				</p>
			</div>
		</div>

		<div class="images">
			<Image src={envolve1} alt="Envolve" />
			<ImageScrollReveal><Image src={envolve2} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve3} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve4} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve5} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve6} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve7} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve8} alt="Envolve" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={envolve9} alt="Envolve" /></ImageScrollReveal>
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
					aria-hidden="true"
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
