<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let container: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const childElements = container.children;

		if (childElements.length === 0) return;

		gsap.set(childElements, { opacity: 0, scale: 0.9 });

		// Batch all images together
		ScrollTrigger.batch(childElements, {
			start: 'top 80%',
			once: true,
			onEnter: (elements) => {
				gsap.to(elements, {
					opacity: 1,
					scale: 1,
					transformOrigin: 'top left',
					duration: 1,
					stagger: 0.1,
					ease: 'power3.out'
				});
				// elements.forEach((el) => {
				// 	el.classList.add('in-view');
				// });
			}
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<div bind:this={container} class="scroll-reveal">
	{@render children?.()}
</div>

<style>
	.scroll-reveal {
		display: contents;
	}
</style>
