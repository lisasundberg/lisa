<script lang="ts">
	import { onMount } from 'svelte';
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY } from '$lib/actions/animations';
	import gsap from 'gsap/dist/gsap';

	let heading: HTMLElement;
	let body: HTMLElement;

	onMount(() => {
		gsap.fromTo(
			'.reveal',
			{
				opacity: 0,
				y: 50
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power4.out',
				stagger: 0.008
			}
		);
	});
</script>

<section class="intro">
	<div class="content">
		<header>
			<h2 use:split use:bodyMaskY>Hi, I'm Lisa</h2>
			<p use:split use:bodyMaskY>
				Frontend developer based in Stockholm, Sweden, with a passion for beautiful and brand
				building user experiences.
			</p>
		</header>
	</div>
</section>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100dvh;
		z-index: 10;
	}

	.intro p {
		max-width: 29ch;
		text-wrap: pretty;
	}
</style>
