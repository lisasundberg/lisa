import { get } from 'svelte/store';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { wrapElements } from '$lib/actions/splitting';
// TODO
// const { matches:motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
// if (motionOK) {}

export const maskX = (node: HTMLElement): any => {
	gsap.registerPlugin(ScrollTrigger);

	const chars = node.querySelectorAll('.char');
	wrapElements(chars, 'span', 'char-wrap');

	gsap.fromTo(
		chars,
		{
			'will-change': 'transform',
			transformOrigin: '0% 50%',
			xPercent: 105
		},
		{
			duration: 1,
			ease: 'expo',
			xPercent: 0,
			stagger: 0.02,
			scrollTrigger: {
				trigger: node,
				start: 'top bottom-=10%',
				end: 'top top+=10%',
				toggleActions: 'play resume resume reverse'
			}
		}
	);

	return () => {
		ScrollTrigger.killAll();
	};
};

export const maskY = (node: HTMLElement) => {
	gsap.registerPlugin(ScrollTrigger);
	const chars = node.querySelectorAll('.char');
	wrapElements(chars, 'span', 'char-wrap');

	gsap.fromTo(
		chars,
		{
			'will-change': 'transform',
			yPercent: 100
		},
		{
			duration: 1,
			ease: 'expo',
			yPercent: 0,
			stagger: 0.042,
			scrollTrigger: {
				trigger: node,
				start: 'top bottom-=30%',
				end: 'bottom top-=50%'
				// markers: true,
			}
		}
	);
};

export const fadeByLetter = (node: HTMLElement) => {
	gsap.registerPlugin(ScrollTrigger);
	const chars = node.querySelectorAll('.char');

	gsap.fromTo(
		chars,
		{
			opacity: 0.1
		},
		{
			opacity: 1,
			stagger: 0.05,
			scrollTrigger: {
				trigger: node,
				start: 'top bottom',
				end: 'center top+=50%',
				scrub: true
			}
		}
	);

	return () => {
		ScrollTrigger.killAll();
	};
};

export const maskTransparent = (node: HTMLElement) => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(
		node,
		{
			'clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
		},
		{
			'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			duration: 2,
			ease: 'expo.inOut',
			scrollTrigger: {
				trigger: node,
				start: 'top bottom',
				end: 'center top+=50%',
				once: true
			}
		}
	);

	return () => {
		ScrollTrigger.killAll();
	};
};

export const fade = (node: HTMLElement) => {
	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(
		node,
		{
			opacity: 0,
			y: 50
		},
		{
			opacity: 1,
			y: 0,
			delay: 1,
			duration: 1,
			scrollTrigger: {
				trigger: node,
				start: 'top bottom',
				end: 'center top+=50%'
				// scrub: true,
			}
		}
	);

	return () => {
		ScrollTrigger.killAll();
	};
};

export const mask = (node: HTMLElement, isLast: boolean = false): any => {
	gsap.registerPlugin(ScrollTrigger);

	node.classList.add('masked');

	var isMedium = get(medium);

	if (isLast) {
		gsap.fromTo(
			node,
			{
				'--clip': `polygon(
                0 0, 100% 0,
              100% 100%,
              0% 100%)`
			},
			{
				'--clip': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				scrollTrigger: {
					trigger: node,
					start: 'top bottom',
					end: 'top bottom+=100px',
					scrub: 1,
					once: true
				}
			}
		);
	} else {
		gsap.fromTo(
			node,
			{
				'--clip': `polygon(
                0 0, 100% 0,
              100% 100%,
              0% 100%)`
			},
			{
				'--clip': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				scrollTrigger: {
					trigger: node,
					start: isMedium ? 'top bottom-=25%' : 'top bottom-=5%',
					end: isMedium ? 'center top+=25%' : 'center center',
					scrub: 1,
					once: true
				}
			}
		);
	}

	return () => {
		ScrollTrigger.killAll();
	};
};

export const intro = (node: HTMLElement): any => {
	const logo = node.querySelector('.intro__logo');
	const layer1 = node.querySelector('.intro__layer--1');
	const layer2 = node.querySelector('.intro__layer--2');
	const body = document.querySelector('body');
	const curtain = document.querySelector('.curtain');

	const handleComplete = () => {
		introComplete.set(true);
		node.parentNode?.removeChild(node);
	};

	const tl = gsap.timeline({ onComplete: handleComplete });

	tl.to(body, { overflow: 'hidden' })
		.fromTo(
			logo,
			{
				scale: 0.1,
				opacity: 0,
				yPercent: 10
			},
			{
				opacity: 1,
				yPercent: 0,
				delay: 0.1,
				duration: 1,
				ease: 'expo.out'
			}
		)
		.to(logo, {
			scale: 1,
			duration: 1.2,
			ease: 'expo.out'
		})
		.fromTo(
			layer1,

			{
				'--clip': `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
			},
			{
				'--clip': `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
				duration: 1.9,
				ease: 'expo.inOut'
			},
			'-=0.6'
		)
		.fromTo(
			layer2,
			{
				'--clip': `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
			},
			{
				'--clip': `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
				duration: 2,
				ease: 'expo.inOut'
			},
			'-=1.72'
		)
		.fromTo(
			body,
			{
				'--curtain-x': 100 // start clip path from right side of screen
			},
			{
				'--curtain-x': 50, // and go to center
				duration: 1.2,
				ease: 'expo.inOut'
			},
			'-=1.5'
		)
		.fromTo(
			curtain,
			{
				'--scale': 0
			},
			{
				'--scale': 1,
				duration: 0.15
			},
			'-=0.29'
		)
		.to(body, { overflowY: 'auto' });

	return () => {
		// kill the entire animation
		tl.kill();
	};
};
