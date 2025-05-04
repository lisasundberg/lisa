
import { writable } from 'svelte/store';
import { type Theme, type ThemeName } from '../types';

export const themes: Theme[] = [
    {
        name: 'plain'
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

export const INVERTED_CLASSNAME = '-inverted';