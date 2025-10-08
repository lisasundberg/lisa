<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let container: HTMLElement;
	let mask: HTMLElement;
	let inner: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: 'top top+=68%',
				end: 'top center',
				markers: true
			}
		});

		tl.fromTo(
			container,
			{ clipPath: 'inset(0% 0% 100%)' },
			{
				clipPath: 'inset(0% 0% 0%)',
				duration: 0.75,
				ease: 'power4.out'
			}
		).from(
			inner,
			{
				scale: 1.15,
				duration: 1.4,
				ease: 'power4.out'
			},
			'<'
		);

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<div bind:this={container} class="image-reveal">
	<div bind:this={inner} class="inner">
		{@render children?.()}
	</div>
</div>
