<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const items = gsap.utils.toArray('.item');
	// 	const mainTimeline = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '.cv',
	// 			start: 'top center+=20%',
	// 			end: 'center center'
	// 		}
	// 	});

	// 	items.forEach((item) => {
	// 		const itemTimeline = gsap.timeline();
	// 		const hr = item.querySelector('hr');
	// 		const place = item.querySelector('.place');
	// 		const activity = item.querySelector('.activity');
	// 		const year = item.querySelector('.year');

	// 		itemTimeline.fromTo(hr, { scale: 0 }, { scale: 1, duration: 0.7 });
	// 		itemTimeline.from(place, { opacity: 0 }, '<');
	// 		itemTimeline.fromTo(
	// 			activity,
	// 			{
	// 				y: 200
	// 			},
	// 			{
	// 				y: 0,
	// 				duration: 1,
	// 				ease: 'power2.out'
	// 			},
	// 			'<'
	// 		);

	// 		itemTimeline.fromTo(
	// 			activity,
	// 			{
	// 				opacity: 0
	// 			},
	// 			{
	// 				duration: 1,
	// 				opacity: 1,
	// 				ease: 'none'
	// 			},
	// 			'<'
	// 		);
	// 		itemTimeline.from(year, { opacity: 0 }, '<)');

	// 		mainTimeline.add(itemTimeline, '<+0.09'); // Add the item timeline to the main timeline
	// 	});
	// });

	const competences = [
		{
			name: 'HTML + CSS + JavaScript / TypeScript'
		},
		{
			name: 'Svelte'
		},
		{
			name: 'React'
		},
		{
			name: 'GSAP'
		},
		{
			name: 'Three.js'
		},
		{
			name: 'Accessibility'
		},
		{
			name: 'Team development'
		}
	];

	const work = [
		{
			place: 'Alster, Stockholm',
			activity: 'Frontend developer',
			year: '2022—2025'
		},
		{
			place: 'Another State, Stockholm',
			activity: 'Frontend developer',
			year: '2019—2022'
		},
		{
			place: 'Another State, Stockholm',
			activity: 'Frontend developer intern',
			year: '2018—2019'
		},
		{
			place: 'Ogilvy & Mather, Amsterdam',
			activity: 'Creative / art director',
			year: '2015-2016'
		}
	];

	const education = [
		{
			place: 'Medieinstitutet, Stockholm',
			activity: 'Frontend developer',
			year: '2017-2019'
		},
		{
			place: 'Hyper Island, Karlskrona',
			activity: 'Digital media creative',
			year: '2013-2015'
		},
		{
			place: 'Södertörn University, Stockholm',
			activity: 'Media technology',
			year: '2012-2013'
		}
	];

	const awards = [
		{
			award: 'Awwwards Honorable Mention',
			project: 'Homage (new web)',
			year: '2023',
			link: 'https://www.awwwards.com/sites/homage-2',
			agency: 'Alster'
		},
		{
			award: 'Awwwards Honorable Mention',
			project: 'Alster web',
			year: '2023',
			link: 'https://www.awwwards.com/sites/alster',
			agency: 'Alster'
		},
		{
			award: 'CSSDA Special Kudos',
			project: 'Alster web',
			year: '2023',
			link: 'https://www.cssdesignawards.com/sites/alster/42896/',
			agency: 'Alster'
		},
		{
			award: 'Awwwards Honorable Mention',
			project: 'Homage',
			year: '2020',
			link: 'https://www.awwwards.com/sites/homage',
			agency: 'Another State'
		},
		{
			award: 'Awwwards Mobile Excellence',
			project: 'Homage',
			year: '2020',
			link: 'https://www.awwwards.com/sites/homage',
			agency: 'Another State'
		}
	];
</script>

<div class="cv">
	<div class="competences column">
		<h3 class="label-bold">Competences</h3>
		<ol class="list -small">
			{#each competences as { name }}
				<li class="item">
					<hr />
					<div class="mask">
						<p class="activity p-small">{name}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
	<div class="work column">
		<h3 class="label-bold">Work experience</h3>
		<ol class="list">
			{#each work as { place, activity, year }}
				<li class="item">
					<hr />
					<article>
						<div class="info">
							<h4 class="place label">{place}</h4>
							<time class="year label">{year}</time>
						</div>
						<div class="mask">
							<p class="activity">{activity}</p>
						</div>
					</article>
				</li>
			{/each}
		</ol>
	</div>
	<div class="education column">
		<h3 class="label-bold">Education</h3>
		<ol class="list">
			{#each education as { place, activity, year }}
				<li class="item">
					<hr />
					<article>
						<div class="info">
							<h4 class="place label">{place}</h4>
							<time class="year label">{year}</time>
						</div>
						<div class="mask">
							<p class="activity">{activity}</p>
						</div>
					</article>
				</li>
			{/each}
		</ol>
	</div>
	<div class="awards column">
		<h3 class="label-bold">Awards</h3>
		<ol class="list -small">
			{#each awards as { award, project, agency, year, link }}
				<li class="item">
					<hr />
					<article>
						<a class="-simple mask" href={link} target="_blank" rel="noopener">
							<p class="activity p-small">{award} — {project}</p>
						</a>
						<div class="info">
							<h4 class="place label">{agency}</h4>
							<time class="year label">{year}</time>
						</div>
					</article>
				</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.cv {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--content-gap);
		color: var(--_theme-color-primary);
		grid-template-areas:
			'work'
			'education'
			'competences'
			'awards';

		@media (width >= 768px) {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'work education'
				'competences awards';
		}
	}

	.column {
		height: 100%;

		&.competences {
			grid-area: competences;
		}

		&.work {
			grid-area: work;
		}

		&.education {
			grid-area: education;
		}

		&.awards {
			grid-area: awards;
		}
	}

	.list {
		list-style: none;
		padding-inline-start: 0;
	}

	.item {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.info {
		display: flex;
		justify-content: space-between;
		gap: var(--gutter);
	}

	.activity {
		margin-block: 0.25em;

		.-small & {
			margin-block: 0.125em;
		}
	}

	.mask {
		overflow: hidden;
		display: inline-block;
	}

	hr {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
		border: none;
		background: var(--_theme-color-primary);
		width: 100%;
		height: 1px;
		transform-origin: left;
	}

	.year {
		display: block;
		white-space: nowrap;
	}
</style>
