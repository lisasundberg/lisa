<script lang="ts">
	import { gsap } from 'gsap';
	import { pageRevealFinished } from '$lib/stores/app';

	let heading: HTMLDivElement | null;
	let chars: Element[];
	let dot: Element | null;
	let tl: gsap.core.Timeline;
	let themeColor: string;

	function homeReveal(heading: HTMLDivElement) {
		chars = [...heading.querySelectorAll('.char')];
		dot = document.querySelector('.hero-heading');
		themeColor = getComputedStyle(document.documentElement).getPropertyValue(
			'--_theme-color-primary'
		);
		// Blink
		if (!dot) return;
		const dotTween = gsap.fromTo(
			dot,
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: 0.6,
				repeat: 2,
				yoyo: true,
				ease: 'linear'
			}
		);

		// Text
		if (!chars.length) return;
		const charTween = gsap.fromTo(
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

		tl.timeScale(1.2);
		tl.set(heading, { color: 'white' });
		tl.add(dotTween, '<');
		tl.to(dot, { opacity: 1, duration: 0.5 });
		tl.add(charTween, '<-0.1');

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
				color: themeColor,
				duration: 1,
				delay: 0.8
			},
			'<'
		);
	}

	function simpleReveal() {
		tl.to('.curtain', {
			duration: 0.75,
			opacity: 0,
			pointerEvents: 'none'
		});
	}

	$effect(() => {
		heading = document.querySelector('.hero-heading');
		tl = gsap.timeline({
			onComplete: () => {
				pageRevealFinished.set(true);
			}
		});

		heading ? homeReveal(heading) : simpleReveal();
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
		z-index: 9;
	}
</style>
