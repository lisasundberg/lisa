export type ThemeName = 'plain' | 'shader' | 'donuts';
export type Theme = {
	name: ThemeName;
};

export type Section = 'intro' | 'work' | 'about' | 'contact';

export enum Sections {
	Intro = 'intro',
	Work = 'work',
	About = 'about',
	Contact = 'contact'
}
