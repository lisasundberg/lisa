<script lang="ts">
	import WorkCard from '$lib/components/WorkCard.svelte';

	import AH from './akademiskahus/assets/ah-mockup-1.jpg?enhanced';
	import Homage from './homage/assets/homage-mockup-1.jpg?enhanced';
	import Babytalk from './babytalk/assets/babytalk-1.png?enhanced';
	import Envolve from './envolve/assets/envolve.png?enhanced';

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
		// {
		// 	heading: 'Babytalk',
		// 	label: 'React',
		// 	link: 'https://babytalkforparents.org/',
		// 	image: Babytalk
		// },
		{
			heading: 'Envolve',
			label: 'React, GSAP',
			link: '/work/envolve',
			image: Envolve
		}
	];

	const experiences = [
		// { year: '2024', client: 'Akademiska Hus', description: 'Web platform', tech: 'Optimizely, Stimulus.js', link: 'https://www.akademiskahus.se/', image: '' },
		{
			year: '2023',
			client: 'Akademiska Hus',
			description: 'Landing pages for specific spaces',
			tech: 'SvelteKit, GSAP',
			link: 'https://nobelsvag3.se/',
			image: ''
		},
		{
			year: '2023',
			client: 'A Working Lab / Akademiska Hus',
			description: 'Website with booking system',
			tech: 'Optimizely, Svelte',
			link: 'https://www.aworkinglab.se/',
			image: ''
		},
		{
			year: '2023',
			client: 'Webbdagarna / Storybook',
			description: 'Conference fair activation, body tracking game',
			tech: 'Three.js, Mediapipe',
			link: '',
			image: ''
		},
		// { year: '2023', client: 'Homage', description: 'Website 2 (Awwwards Honorable Mention)', tech: 'SvelteKit, GSAP', link: 'https://homage.se/', image: '' },
		{
			year: '2023',
			client: 'Alster web 2',
			description: 'Website (Awwwards honorable mention, CSSDA special kudos)',
			tech: 'SvelteKit, GSAP',
			link: 'https://alster.se/',
			image: ''
		},
		{
			year: '2022',
			client: 'Alster web 1',
			description: 'Landing page',
			tech: 'Three.js',
			link: '',
			image: ''
		},
		{
			year: '2022',
			client: 'Previa',
			description: 'Design system rebranding',
			tech: 'Optimizely',
			link: '',
			image: ''
		},
		{
			year: '2021',
			client: 'Styrelseakademien',
			description: 'Web platform / shop',
			tech: 'React, Storyblok',
			link: '',
			image: ''
		},
		{
			year: '2021',
			client: 'Babybjörn',
			description: 'Web shop',
			tech: 'React (Gatsby), Storyblok',
			link: '',
			image: ''
		},
		{
			year: '2020',
			client: 'H&M',
			description: 'Brand experience website',
			tech: 'React',
			image: ''
		},
		{
			year: '2020',
			client: 'Chef & The Craftsman',
			description: 'Webshop',
			tech: 'Shopify',
			link: '',
			image: ''
		},
		{
			year: '2020',
			client: 'Urban Deli',
			description: 'Webshop',
			tech: 'Shopify',
			link: '',
			image: ''
		},
		{
			year: '2020',
			client: 'Red Bull',
			description: '"Secret gig" campaign site',
			tech: '',
			link: '',
			image: ''
		},
		{
			year: '',
			client: 'Utellus',
			description: '"Solvärdering" project',
			tech: 'React',
			link: '',
			image: ''
		},
		{
			year: '2020',
			client: 'Länsförsäkringar',
			description: 'Quiz for selecting health insurance',
			tech: 'React',
			link: '',
			image: ''
		},
		{
			year: '',
			client: 'H&M Foundation',
			description: '"Unfounded" project',
			tech: 'React, Contentful',
			link: '',
			image: ''
		},
		{
			year: '2019',
			client: 'TV4',
			description: 'Quiz at Way Out West festival',
			tech: 'React',
			image: ''
		},
		{
			year: '2019',
			client: 'Homage',
			description: 'Website 1 (Awwwards honorable mention + mobile excellence)',
			tech: 'React',
			link: 'https://www.awwwards.com/sites/homage',
			image: ''
		},
		{
			year: '2019',
			client: 'Envolve',
			description: 'Website',
			tech: 'React, GSAP',
			link: '',
			image: ''
		},
		{
			year: '2019',
			client: 'Red Bull',
			description: 'Snapchat activation',
			tech: '',
			link: '',
			image: ''
		},
		{
			year: '2018',
			client: 'Unicef / H&M Foundation',
			description: '“Babytalk for Parents” activation/game',
			tech: 'React',
			link: 'https://babytalkforparents.org/',
			image: ''
		}
	];
</script>

<h1>Work</h1>

<section class="featured">
	<h2 class="label-bold">Select work</h2>
	<div class="cases">
		{#each featuredWork as { heading, label, link, image }}
			<WorkCard {heading} {label} {link} {image} />
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
					<td>{year}</td>
					<td>{client}</td>

					{#if link}
						<td>
							<a href={link} target="_blank" rel="noopener noreferrer">
								{description} <span class="external-indicator">↗</span>
							</a>
						</td>
					{:else}
						<td>{description}</td>
					{/if}
					<td>{tech}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style>
	.featured {
		margin-top: 4em;
	}

	.archive {
		margin-top: 4em;

		p {
			margin-top: 1em;
		}
	}

	.cases {
		margin-top: 2em;

		@media (width >= 768px) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1rem;
		}
	}

	.work-index {
		grid-column: main;
		display: grid;
		grid-template-columns: min-content auto 1fr auto;

		width: 100%;
		border: none;
		margin-top: 2em;
	}

	tbody,
	tr {
		display: contents;
	}

	td {
		text-align: left;
		border-bottom: 1px solid var(--_theme-color-primary);
		padding: 0.375em;
	}

	a {
		font-weight: inherit;
		font-size: inherit;
	}

	/* @media (max-width: 768px) {
        table, thead { display: none; }
        tbody { display: flex; flex-direction: column; gap: 10px; }
        tr {
            display: flex;
            flex-direction: column;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        td {
            padding: 5px 0;
        }
    } */

	/* end mobile */

	section {
		& + & {
			margin-top: var(--content-gap);
		}
	}
</style>
