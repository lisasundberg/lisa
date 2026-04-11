import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const prefersReducedMotion = readable(false, (set) => {
	if (!browser) return;

	const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
	set(mq.matches);

	const handler = (e: MediaQueryListEvent) => set(e.matches);
	mq.addEventListener('change', handler);

	return () => mq.removeEventListener('change', handler);
});
