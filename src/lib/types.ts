export type ThemeName = 'one' | 'two' | 'three' | 'four';
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
