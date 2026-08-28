import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export const EASE_REVEAL = CustomEase.create(
	'reveal',
	'M0,0 C0.141,0.143 0.172,0.381 0.19,0.591 0.211,0.836 0.388,1 1,1 '
);
