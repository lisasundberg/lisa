<script lang="ts">
	import gsap from 'gsap/dist/gsap';
	import { pageRevealFinished } from '$lib/stores/app';

	let heading: HTMLDivElement | null;
	let chars: Element[];
	let tl: gsap.core.Timeline;
	let dotTl: gsap.core.Timeline;
	let charTl: gsap.core.Timeline;

	$effect(() => {
		tl = gsap.timeline({
			onComplete: () => {
				pageRevealFinished.set(true);
			}
		});

		// Blink
		const dotTween = gsap.fromTo(
			'.dot',
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: 0.6,
				repeat: 3,
				yoyo: true,
				ease: 'linear'
			}
		);

		// Text
		heading = document.querySelector('.hero-heading');

		if (!heading) return;
		chars = [...heading.querySelectorAll('.char')];

		charTl = gsap.timeline();

		if (!chars.length) return;
		charTl.fromTo(
			chars,
			{
				'will-change': 'opacity, transform',
				opacity: 0,
				rotationX: -90,
				yPercent: 50
			},
			{
				ease: 'cubic-bezier(.215,.61,.355,1)',
				opacity: 1,
				rotationX: 0,
				yPercent: 0,
				duration: 1,
				stagger: {
					each: 0.03,
					from: 0
				}
			}
		);

		// Timeline
		tl.to(heading, { color: 'white' });
		tl.add(dotTween, '<');
		tl.to('.dot', { opacity: 1, duration: 0.5 });
		tl.add(charTl, '<-0.1');
		tl.to(
			'.curtain',
			{
				duration: 1.8,
				scaleY: 0,
				transformOrigin: 'bottom',
				willChange: 'transform',
				ease: 'expo.inOut'
			},
			'-=0.5'
		);
		tl.to(
			heading,
			{
				color: 'blue',
				duration: 1,
				delay: 0.8
			},
			'<'
		);
	});
</script>

<div class="curtain" role="presentation"></div>

<style>
	.curtain {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--_theme-color-primary);
		z-index: 2;
	}
</style>
