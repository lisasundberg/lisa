<script lang="ts" type="module">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const cardTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.cv',
				start: 'top bottom',
				end: 'top center+=20%',
				scrub: true
			}
		});
		cardTimeline.from('.cv', {
			opacity: 0,
			y: 200,
			scale: 0.8,
			transformOrigin: 'bottom center'
		});

		const items = gsap.utils.toArray('.item');
		const mainTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.cv',
				start: 'top center+=20%',
				end: 'center center'
			}
		});

		items.forEach((item) => {
			const itemTimeline = gsap.timeline();
			const hr = item.querySelector('hr');
			const place = item.querySelector('.place');
			const activity = item.querySelector('.activity');
			const year = item.querySelector('.year');

			itemTimeline.fromTo(hr, { scale: 0 }, { scale: 1, duration: 0.7 });
			itemTimeline.from(place, { opacity: 0 }, '<');
			itemTimeline.fromTo(
				activity,
				{
					y: 200
				},
				{
					y: 0,
					duration: 1,
					ease: 'power2.out'
				},
				'<'
			);

			itemTimeline.fromTo(
				activity,
				{
					opacity: 0
				},
				{
					duration: 1,
					opacity: 1,
					ease: 'none'
				},
				'<'
			);
			itemTimeline.from(year, { opacity: 0 }, '<)');

			mainTimeline.add(itemTimeline, '<+0.09'); // Add the item timeline to the main timeline
		});

		// 	ScrollTrigger.create({
		// 		trigger: '.cv',
		// 		start: 'top top',
		// 		end: 'bottom bottom',
		// 		markers: true
		// 	});

		// const nested = gsap.timeline();
		// nested.fromTo(".item", {
		// 	opacity: 0
		// }, {
		// 	duration: 0.5,
		// 	opacity: 1,
		// 	stagger: 0.2
		// });

		// mainTimeline.add(nested);
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
</script>

<section class="cv">
	<!-- <h1>My experience</h1> -->
	<div class="column">
		<h3>Work experience</h3>
		<ol class="list">
			{#each work as { place, activity, year }}
				<li class="item">
					<hr />
					<div class="content">
						<div class="text">
							<h4 class="place label">{place}</h4>
							<div class="wrapper">
								<p class="activity">{activity}</p>
							</div>
						</div>
						<time class="year">{year}</time>
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
					<div class="content">
						<div class="text">
							<h4 class="place label">{place}</h4>
							<div class="wrapper">
								<p class="activity">{activity}</p>
							</div>
						</div>
						<time class="year">{year}</time>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.cv {
		display: grid;
		grid-template-columns: var(--two-cols);
		justify-content: flex-start;
		gap: var(--content-gap);
		background-color: white;
		padding: var(--card-padding);
		border-radius: 12px;
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
		display: flex;
		flex-direction: column;
		gap: var(--gutter);
		margin-top: 2em;
		padding-top: 1em;
		position: relative;
	}

	.content {
		display: flex;
		gap: 2em;
		justify-content: space-between;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	.wrapper {
		overflow: hidden;
		display: inline-block;
	}

	hr {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
		border: none;
		background: var(--color-text-primary);
		width: 100%;
		height: 1px;
		transform-origin: left;
	}

	.year {
		display: block;
	}
</style>
