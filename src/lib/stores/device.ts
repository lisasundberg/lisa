import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const isTouch = readable(false, (set) => {
	if (!browser) return;

	const mq = window.matchMedia('(hover: none)');
	set(mq.matches);

	const handler = (e: MediaQueryListEvent) => set(e.matches);
	mq.addEventListener('change', handler);

	return () => mq.removeEventListener('change', handler);
});
