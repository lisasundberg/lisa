import type { Picture } from 'vite-imagetools';

import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
import Envolve from '$lib/assets/envolve/envolve.png?enhanced';

export interface FeaturedProject {
	heading: string;
	label: string;
	link: string;
	image: Picture;
}

export const featuredWork: FeaturedProject[] = [
	{
		heading: 'Homage',
		label: 'SvelteKit, GSAP',
		link: '/work/homage',
		image: Homage
	},
	{
		heading: 'Akademiska Hus',
		label: 'Optimizely, Stimulus.js',
		link: '/work/akademiskahus',
		image: AH
	},
	{
		heading: 'Envolve',
		label: 'React, GSAP',
		link: '/work/envolve',
		image: Envolve
	}
];
