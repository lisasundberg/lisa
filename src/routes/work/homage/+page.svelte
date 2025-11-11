<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/SplitText';

	import { pageRevealFinished } from '$lib/stores/app';

	import ImageScrollReveal from '$lib/reveals/ImageScrollReveal.svelte';
	import Image from '$lib/components/Image.svelte';
	import Button from '$lib/components/Button.svelte';
	import homage1 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import homage2 from '$lib/assets/homage/homage-mockup-2.jpg?enhanced';
	import homage3 from '$lib/assets/homage/homage-mockup-3.jpg?enhanced';
	import homage4 from '$lib/assets/homage/homage-mockup-4.jpg?enhanced';
	import homage5 from '$lib/assets/homage/homage-mockup-5.jpg?enhanced';

	let title: HTMLElement | null;
	let info: HTMLElement | null;
	let body: HTMLDivElement | null;
	let cta: HTMLDivElement | null;

	let splitTitle: SplitText;

	onMount(() => {
		if ((pageRevealFinished && !title) || !info || !body || !cta) return;

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
			stagger: 0.02,
			duration: 0.7,
			ease: 'power4.out'
		}).from([info, body, cta], {
			opacity: 0,
			y: 20,
			stagger: 0.2,
			ease: 'power2.out',
			duration: 1
		});
	});
</script>

<article>
	<div class="content">
		<div class="text">
			<h1 bind:this={title}>Homage</h1>
			<div class="info" bind:this={info}>
				<p class="label">Project at Alster 2023</p>
				<p class="label">My responsibility: co-ideation, all development</p>
				<p class="label">Technologies: SvelteKit, Sass, GSAP</p>
			</div>
			<div class="body" bind:this={body}>
				<p class="p-small">Web presence for Stockholm based brand experience agency Homage.</p>
				<p class="p-small">
					On this short and intense project I collaborated closely with design from start to end. We
					worked in total around two weeks to create an unconventional website with the purpose to
					showcase work and attract new clients as well as staff.
				</p>

				<p class="p-small">
					Was awarded an <a
						href="https://www.awwwards.com/sites/homage-2"
						target="_blank"
						rel="noopener">Awwwards Honorable Mention</a
					>.
				</p>
			</div>
			<div class="link" bind:this={cta}>
				<Button href="https://homage.se/" target="_blank">Visit page</Button>
			</div>
		</div>

		<div class="images">
			<Image src={homage1} alt="Homage" />
			<ImageScrollReveal><Image src={homage2} alt="Homage" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={homage3} alt="Homage" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={homage4} alt="Homage" /></ImageScrollReveal>
			<ImageScrollReveal><Image src={homage5} alt="Homage" /></ImageScrollReveal>
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
			<a href="/work/akademiskahus">
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
