<script lang="ts">
	import { onMount } from 'svelte';
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY } from '$lib/actions/animations';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let heading: HTMLElement;
	let body: HTMLElement;
	let container: HTMLElement;
	let cards: HTMLElement;
	let st;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let sections = gsap.utils.toArray('.card');

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.work',
				pin: true,
				scrub: 1,
				// snap: 1 / (sections.length - 1),
				end: () => '+=' + cards.offsetWidth
			}
		});

		// st = ScrollTrigger.create({
		// 	trigger: container,
		// 	pin: true,
		// 	start: 'top center',
		// 	end: '+=500',
		// 	markers: true
		// });
	});

	const work = [
		{
			title: 'Homage',
			description: 'Website for event agency Homage'
		},
		{
			title: 'Akademiska Hus',
			description: 'Website for Akademiska Hus'
		},
		{
			title: 'Babytalk for dads',
			description: 'Website for Unicef'
		}
	];
</script>

<section class="work" bind:this={container}>
	<div class="cards" bind:this={cards}>
		{#each work as { title, description }}
			<article class="card">
				<h3>{title}</h3>
				<p>{description}</p>
			</article>
		{/each}
	</div>
</section>

<style>
	.work {
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
		height: 100dvh;
		align-items: center;
	}

	.cards {
		/* grid-column: full; */
		display: flex;
		gap: var(--content-gap);
		overflow-x: auto;
		position: relative;
	}

	.card {
		display: grid;
		grid-template-columns: var(--two-cols);
		justify-content: flex-start;
		gap: var(--content-gap);
		flex-grow: 1;
		flex-shrink: 0;
		background-color: white;
		padding: var(--card-padding);
		border-radius: var(--border-radius);
	}
</style>
