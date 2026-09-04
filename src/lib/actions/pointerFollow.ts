import { gsap } from 'gsap';
import { get } from 'svelte/store';
import type { Action } from 'svelte/action';

import { prefersReducedMotion } from '$lib/stores/motion';

export interface PointerFollowOptions {
	/** Element that listens for pointer movement. Pass 'window' to track the whole viewport. Defaults to the animated node. */
	zone?: HTMLElement | 'window';
	/** Compute the tween target from the pointer event and the zone's bounding rect (undefined when zone is 'window'). */
	compute: (event: PointerEvent, rect: DOMRect | undefined) => { x: number; y: number };
	duration?: number;
	ease?: string;
	/** Ease x/y back to 0 when the pointer leaves the zone. */
	resetOnLeave?: boolean;
}

// Positioning math is left to `compute` so callers can do cursor-attached, offset-cursor, or clamped-parallax follow with the same mechanics.
export const pointerFollow: Action<HTMLElement, PointerFollowOptions> = (node, options) => {
	if (get(prefersReducedMotion)) return;

	const zone = options.zone === 'window' ? window : (options.zone ?? node);
	const tweenVars = { duration: options.duration ?? 0.6, ease: options.ease ?? 'power3' };
	const xTo = gsap.quickTo(node, 'x', tweenVars);
	const yTo = gsap.quickTo(node, 'y', tweenVars);

	const handlePointerMove = (event: Event) => {
		const rect = zone instanceof HTMLElement ? zone.getBoundingClientRect() : undefined;
		const { x, y } = options.compute(event as PointerEvent, rect);
		xTo(x);
		yTo(y);
	};

	// Snap straight to the pointer on entry so the follower doesn't visibly travel from its
	// last (or default) position across the screen — only in-zone movement should tween.
	const handlePointerEnter = (event: Event) => {
		const rect = zone instanceof HTMLElement ? zone.getBoundingClientRect() : undefined;
		const { x, y } = options.compute(event as PointerEvent, rect);
		gsap.set(node, { x, y });
	};

	const handlePointerLeave = () => {
		xTo(0);
		yTo(0);
	};

	zone.addEventListener('pointerenter', handlePointerEnter);
	zone.addEventListener('pointermove', handlePointerMove);
	if (options.resetOnLeave) {
		zone.addEventListener('pointerleave', handlePointerLeave);
	}

	return {
		destroy() {
			zone.removeEventListener('pointerenter', handlePointerEnter);
			zone.removeEventListener('pointermove', handlePointerMove);
			if (options.resetOnLeave) {
				zone.removeEventListener('pointerleave', handlePointerLeave);
			}
		}
	};
};
