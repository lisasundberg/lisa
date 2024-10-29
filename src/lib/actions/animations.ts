import { gsap } from 'gsap';
import { wrapElements } from './splitting';
// TODO
// const { matches:motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
// if (motionOK) {}

export const maskY = (node: HTMLElement) =>
	gsap.fromTo(
		node.querySelectorAll('.char'),
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
			stagger: 0.008,
			delay: node.dataset.delay ? parseFloat(node.dataset.delay) : 0
		}
	);

export const bodyMaskY = (node: HTMLElement) => {
	const chars = node.querySelectorAll('.char');
	wrapElements(chars, 'span', 'char-wrap');

	gsap.fromTo(
		chars,
		{
			'will-change': 'transform',
			yPercent: 100
		},
		{
			yPercent: 0,
			duration: 0.8,
			ease: 'power4.out',
			stagger: 0.008,
			delay: node.dataset.delay ? parseFloat(node.dataset.delay) : 0
		}
	);
};

export const headingMaskY = (node: HTMLElement) => {
	const chars = node.querySelectorAll('.char');
	wrapElements(chars, 'span', 'char-wrap');

	gsap.fromTo(
		chars,
		{
			opacity: 0,
			y: 100
		},
		{
			opacity: 1,
			y: 0,
			duration: 1,
			willChange: 'transform',
			ease: 'cubic-bezier(.04,1,.08,1)',
			stagger: 0.07,
			delay: node.dataset.delay ? parseFloat(node.dataset.delay) : 0
		}
	);
};
