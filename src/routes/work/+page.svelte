<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	import AH from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Homage from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve.png?enhanced';

	const featuredWork = [
		{
			heading: 'Akademiska Hus',
			label: 'Optimizely, Stimulus.js',
			link: '/work/akademiskahus',
			image: AH
		},
		{
			heading: 'Homage',
			label: 'SvelteKit, GSAP',
			link: '/work/homage',
			image: Homage
		},
		{
			heading: 'Envolve',
			label: 'React, GSAP',
			link: '/work/envolve',
			image: Envolve
		}
	];

	const experiences = [
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
			client: 'Webbdagarna / Storybook',
			description: 'Conference fair activation – "Hole in the wall" body tracking game',
			tech: 'Three.js, Mediapipe'
		},
		{
			year: '2023',
			client: 'Homage',
			description: 'Website (Awwwards Honorable Mention)',
			tech: 'SvelteKit, GSAP',
			link: 'https://homage.se/'
		},
		{
			year: '2023',
			client: 'Alster',
			description: 'Website (Awwwards honorable mention, CSSDA special kudos)',
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
			description: 'Website (Awwwards honorable mention + mobile excellence)',
			tech: 'React',
			link: 'https://www.awwwards.com/sites/homage'
		},
		{
			year: '2019',
			client: 'Envolve',
			description: 'Website',
			tech: 'React, GSAP'
		},

		{
			year: '2019',
			client: 'Unicef / H&M Foundation',
			description: '“Babytalk for Parents” activation/game',
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
			tech: 'Craft, Stimulus.js'
		}
	];
</script>

<h1 class="title">Work</h1>

<section class="featured">
	<h2 class="label-bold">Selected projects</h2>
	<div class="cases">
		{#each featuredWork as { heading, label, link, image }}
			<Card {heading} {label} {link} {image} />
		{/each}
	</div>
</section>

<section class="archive">
	<h2 class="label-bold">Archive / index</h2>
	<p class="p-small">Pretty much all the projects I've worked on, big and small</p>
	<table class="work-index">
		<tbody>
			{#each experiences as { year, client, description, link, tech }}
				<tr>
					<td class="year">{year}<span class="client -mobile">, {client}</span></td>
					<td class="client -desktop">{client}</td>

					{#if link}
						<td class="description">
							<a class="-plain" href={link} target="_blank" rel="noopener noreferrer">
								{description} <span class="external-indicator">↗</span>
							</a>
						</td>
					{:else}
						<td class="description">{description}</td>
					{/if}
					<td class="tech -mobile label">{tech}</td>
					<td class="tech -desktop">{tech}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	.title {
		font-family: var(--font-display);
		grid-column: main;
	}

	.featured {
		margin-top: 2em;
	}

	.archive {
		margin-top: 5em;

		p {
			margin-top: 0.5em;
		}
	}

	.cases {
		margin-top: 2em;
	}

	.work-index {
		grid-column: main;
		display: grid;
		grid-template-columns: auto auto;
		gap: 0 1em;

		width: 100%;
		border: none;
		margin-top: 2em;

		@media (width >= 768px) {
			grid-template-columns: min-content auto 1fr auto;
			gap: 0;
		}
	}

	tbody {
		display: contents;
	}

	tr {
		display: grid;
		grid-column: 1 / -1;
		grid-template-columns: subgrid;
		border-bottom: 1px solid var(--_theme-color-primary);
		padding-inline: 0.5em;
		transition:
			color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
	}

	@media (hover: hover) {
		:global(tr:has(a:hover)),
		:global(tr:has(a:focus)) {
			background-color: var(--_theme-color-primary);
			color: var(--_theme-color-bg);
		}
	}

	td {
		text-align: left;
		padding: 0.75em 0;

		&:not(&.label) {
			font-size: var(--font-size-body-xsmall);
		}

		@media (width < 768px) {
			&.year {
				grid-column: 1;
				grid-row: 1;
			}

			&.client {
				grid-column: 1;
				grid-row: 2;
			}

			&.description {
				grid-column: 2;
				grid-row: 1 / span 2;
			}

			&.tech {
				grid-column: 1;
				grid-row: 2;
			}
		}

		@media (width >= 768px) {
			padding: 0.375em;
		}
	}

	.-mobile {
		@media (width >= 768px) {
			display: none;
		}
	}
	.-desktop {
		@media (width < 768px) {
			display: none;
		}
	}

	a {
		font-weight: inherit;
		font-size: inherit;
	}
</style>
