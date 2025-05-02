
import { writable } from 'svelte/store';
import { type Theme, type ThemeName } from '../types';

export const themeColor = writable<string>();
export const themeColorBg = writable<string>();
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