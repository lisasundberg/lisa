import { writable } from 'svelte/store';
import { type Theme, type ThemeName } from '../types';

export const themes: Theme[] = [
	{
		name: 'one'
	},
	{
		name: 'two'
	},
	{
		name: 'three'
	},
	{
		name: 'four'
	},
	{
		name: 'five'
	}
];

export const currentTheme = writable<ThemeName>(themes[4].name);
export const headingHeight = writable<number>(undefined);
