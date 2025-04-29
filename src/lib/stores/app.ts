import { writable } from 'svelte/store';
import { type Theme, type ThemeName } from '../types';

export const pageRevealFinished = writable<boolean>(false);

export const themes: Theme[] = [
	// {
	// 	name: 'plain'
	// },
	{
		name: 'bokeh'
	},
	{
		name: 'shader'
	},
	{
		name: 'donuts'
	}
];

const DEFAULT_THEME = themes[0].name;
export const currentTheme = writable<ThemeName>(DEFAULT_THEME);
export const headingHeight = writable<number>(undefined);