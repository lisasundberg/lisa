import { writable } from 'svelte/store';

// Fonts have loaded and the page can start revealing. Set once, by the root layout.
export const pageReady = writable<boolean>(false);

export const pageRevealFinished = writable<boolean>(false);

export const headingHeight = writable<number>(undefined);
