export interface Award {
	name: string;
	link: string;
}

export interface Experience {
	year: string;
	client: string;
	description: string;
	awards?: Award[];
	tech?: string;
	link?: string;
}

export const experiences: Experience[] = [
	{
		year: '2025',
		client: 'Personal project',
		description: 'Portfolio site, 2025 version',
		tech: 'SvelteKit, GSAP',
		link: 'https://2025.lisasundberg.com'
	},
	{
		year: '2024',
		client: 'Alster',
		description: 'AI chat bot for customer service',
		tech: 'React (Next.js), Open AI'
	},
	{
		year: '2024',
		client: 'Akademiska Hus',
		description: 'Web platform',
		tech: 'Optimizely, Stimulus.js',
		link: 'https://www.akademiskahus.se/'
	},
	{
		year: '2023',
		client: 'Akademiska Hus',
		description: 'Landing pages for specific spaces',
		tech: 'SvelteKit, GSAP',
		link: 'https://nobelsvag3.se/'
	},
	{
		year: '2023',
		client: 'A Working Lab / Akademiska Hus',
		description: 'Website / booking system',
		tech: 'Optimizely, Svelte',
		link: 'https://www.aworkinglab.se/'
	},
	{
		year: '2023',
		client: 'Webbdagarna / Storyblok',
		description: 'Conference fair activation – "Hole in the wall" body tracking game',
		tech: 'Three.js, Mediapipe'
	},
	{
		year: '2023',
		client: 'Homage',
		description: 'Website redesign',
		awards: [
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/homage-2'
			}
		],
		tech: 'SvelteKit, GSAP',
		link: 'https://homage.se/'
	},
	{
		year: '2023',
		client: 'Alster',
		description: 'Website',
		awards: [
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/alster'
			},
			{
				name: 'CSSDA Special Kudos',
				link: 'https://www.cssdesignawards.com/sites/alster/42896/'
			}
		],
		tech: 'SvelteKit, GSAP',
		link: 'https://alster.se/'
	},
	{
		year: '2022',
		client: 'Alster',
		description: 'Landing page',
		tech: 'Three.js'
	},
	{
		year: '2022',
		client: 'Previa / Falck',
		description: 'Reskin',
		tech: 'CSS'
	},
	{
		year: '2022',
		client: 'Styrelseakademien',
		description: 'Web platform / shop',
		tech: 'React (Next.js), Storyblok'
	},
	{
		year: '2021',
		client: 'Babybjörn',
		description: 'E-commerce site',
		tech: 'React (Gatsby), Material UI, Storyblok',
		link: 'https://www.babybjorn.se/'
	},
	{
		year: '2021',
		client: 'Trustly',
		description: 'Animations',
		tech: 'React'
	},
	{
		year: '2021',
		client: 'The Band Socks',
		description: 'E-commerce site',
		tech: 'Shopify'
	},
	{
		year: '2021',
		client: 'PBX',
		description: 'Landing page',
		tech: 'HTML, CSS'
	},
	{
		year: '2021',
		client: 'Amphi Produktion',
		description: '"Vän med virus" campaign site',
		tech: 'React, Framer motion',
		link: 'https://vmv.noaksark.org/'
	},
	{
		year: '2021',
		client: 'Wirepas',
		description: 'Website',
		awards: [
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/wirepas'
			}
		],
		tech: 'React (Gatsby), Hubspot',
		link: 'https://wirepas.com/'
	},
	{
		year: '2021',
		client: 'Neonode',
		description: 'Website',
		tech: 'React (Gatsby)',
		link: 'https://neonode.com/'
	},
	{
		year: '2021',
		client: 'H&M',
		description: 'Brand experience website',
		tech: 'React'
	},
	{
		year: '2020',
		client: 'Chef & The Craftsman',
		description: 'E-commerce site',
		tech: 'Shopify'
	},
	{
		year: '2020',
		client: 'Urban Deli',
		description: 'E-commerce site',
		tech: 'Shopify'
	},
	{
		year: '2020',
		client: 'SAS',
		description: 'Campaign site',
		tech: 'React'
	},
	{
		year: '2020',
		client: 'Länsförsäkringar',
		description: 'Quiz for selecting health insurance',
		tech: 'React'
	},
	{
		year: '2020',
		client: 'Mistr',
		description: 'E-commerce site',
		tech: 'Shopify (headless)'
	},
	{
		year: '2020',
		client: 'Red Bull',
		description: '"Secret gig" campaign site'
	},
	{
		year: '2020',
		client: 'Utellus',
		description: '"Solvärdering" project',
		tech: 'React'
	},
	{
		year: '2019',
		client: 'H&M Foundation',
		description: '"Unfounded" project',
		tech: 'React, Contentful'
	},
	{
		year: '2019',
		client: 'TV4',
		description: '"Så mycket bättre" activation/quiz at Way Out West festival',
		tech: 'React'
	},
	{
		year: '2019',
		client: 'Homage',
		description: 'Website',
		awards: [
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/homage'
			},
			{
				name: 'Awwwards Mobile Excellence',
				link: 'https://www.awwwards.com/sites/homage'
			},
			{
				name: 'CSSDA Special Kudos',
				link: 'https://www.cssdesignawards.com/sites/homage/36576/'
			}
		],
		tech: 'React',
		link: 'https://www.awwwards.com/sites/homage'
	},
	{
		year: '2019',
		client: 'Envolve',
		awards: [
			{
				name: 'CSSDA Special Kudos',
				link: 'https://www.cssdesignawards.com/sites/envolve/35817/'
			},
			{
				name: 'Awwwards Nominee',
				link: 'https://www.awwwards.com/sites/envolve'
			}
		],
		description: 'Website',
		tech: 'React, GSAP'
	},
	{
		year: '2019',
		client: 'Unicef / H&M Foundation',
		description: '“Babytalk for Parents” activation/game',
		awards: [
			{
				name: 'Webby nominee',
				link: 'https://winners.webbyawards.com/2020/apps-software/voice-features/best-writing/120793/baby-talk-for-parents'
			},
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/baby-talk-for-dads'
			}
		],
		tech: 'React',
		link: 'https://babytalkforparents.org/'
	},
	{
		year: '2019',
		client: 'Bores',
		description: 'Website (graduation project)',
		tech: 'Craft, Stimulus.js'
	},
	{
		year: '2018',
		client: 'Bambora',
		description: 'Website',
		awards: [
			{
				name: 'Awwwards Honorable Mention',
				link: 'https://www.awwwards.com/sites/bambora'
			},
			{
				name: 'CSSDA Special Kudos',
				link: 'https://www.cssdesignawards.com/sites/bambora/34723/'
			}
		],
		tech: 'Craft, Stimulus.js'
	}
];
