<script lang="ts" type="module">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// gsap.fromTo(
		// 	'.item',
		// 	{
		// 		opacity: 0
		// 	},
		// 	{
		// 		stagger: 1,
		// 		opacity: 1,
		// 		y: 0,
		// 		duration: 1,
		// 		scrollTrigger: {
		// 			trigger: '.cv',
		// 			start: 'top center',
		// 			end: 'bottom bottom',
		// 			markers: true
		// 		}
		// 	}
		// );

		const tl = gsap.timeline();

		tl.fromTo('.header', { scale: 0 }, { scale: 1 });
		tl.fromTo('.activity', { y: 100 }, { y: 0 });
		tl.from('.year', { opacity: 0 });
		
	});

	const work = [
		{
			place: 'Alster, Stockholm',
			activity: 'Frontend developer',
			year: '2022—'
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
		},
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
</script>

<section class="cv">
	<div class="column">
		<h3>Work experience</h3>
		<ol class="list">
			{#each work as { place, activity, year }}
				<li class="item">
					<div class="header">
						<!-- <hr /> -->
						<h4 class="place label">{place}</h4>
						<time class="year">{year}</time>
					</div>
					<div class="wrapper">
						<p class="activity">{activity}</p>
					</div>
				</li>
				{/each}
			</ol>
		</div>
		<div class="column">
			<h3>Education</h3>
			<ol class="list">
				{#each education as { place, activity, year }}
				<li class="item">
					<hr />
					<h4 class="place label">{place}</h4>
					<p class="activity">{activity}</p>
					<time class="year">{year}</time>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.cv {
		min-height: 100dvh;
		display: grid;
		grid-template-columns: var(--two-cols);
		grid-template-rows: 1fr auto 1fr;
		justify-content: flex-start;
		gap: var(--content-gap);
	}

	.column {
		height: 100%;
		grid-row: 2 / 3;
	}

	.list {
		list-style: none;
		padding-inline-start: 0;
	}

	.item {

		/* gap: 0.25em; */
		/* justify-content: space-between; */
		margin-top: 2em;
		padding-top: 1em;
		position: relative;
	}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		border-top: 1px solid var(--color-text-primary);
		overflow: hidden;
		transform-origin: left;
	}

	.wrapper {
		overflow: hidden;
		display: inline-block;
	}

 	hr {
		/* position: absolute;
		top: 0;
		right: 0; */
		border: none;
		background: var(--color-text-primary);
		width: 100%;
		height: 1px;
		transform-origin: left;
	}

	.place {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.activity {
		margin-top: 0.125em;
	}

	.year {
		display: block;
	}


	/* .column {
		height: 100%;
		grid-row: 2 / 3;
	}

	.list {
		list-style: none;
    padding-inline-start: 0;
	}

	.item {
		display: grid;
		gap: 0.25em;
		justify-content: space-between;
		margin-top: 2em;
		padding-top: 1em;
		border-top: 1px solid var(--color-text-primary);
	}

	.place {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.activity {
		margin-top: 0.125em;
	}
	
	.year {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	} */
</style>
