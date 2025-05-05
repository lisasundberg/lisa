import { writable } from 'svelte/store';

export const pageRevealFinished = writable<boolean>(false);

export const headingHeight = writable<number>(undefined);
