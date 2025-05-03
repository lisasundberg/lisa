<script lang="ts">
	import { gsap } from 'gsap';
	import { animate } from '$lib/actions/animate';
	import { split } from '$lib/actions/textSplitter';

	// import { themeColor, themeColorBg } from '$lib/stores/theme';

	import WorkItem from '$lib/components/WorkItem.svelte';
	import Button from '$lib/components/Button.svelte';

	import Homage4 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH2 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-mockup-1.jpg?enhanced';

	// $effect(() => {
	// 	console.log('themeColor in component', $themeColor);
	// 	console.log('themeColorBg in component', $themeColorBg);
	// });
	const timeline = gsap.timeline();
</script>

<section
	data-work-section
	class="section work"
	use:animate={{
		timeline,
		type: 'from',
		scrollTrigger: {
			trigger: '[data-work-section]',
			start: 'top top',
			end: 'top -=100%',
			scrub: true,
			pin: true,
			markers: true
		},
		animations: [
			{
				target: '[data-work-heading] .word',
				vars: {
					filter: 'blur(10px)',
					opacity: 0,
					willChange: 'filter, opacity',
					duration: 0.45,
					stagger: 0.05
				},
				position: 0
			},
			{
				target: '[data-work-body]',
				vars: { opacity: 0, yPercent: 50, duration: 0.5, ease: 'power4.out', scrub: false },
				position: '-=0.5'
			},
			{
				target: '[data-work-button]',
				vars: { opacity: 0, yPercent: 50, duration: 0.5, ease: 'power4.out', scrub: false },
				position: '-=0.3'
			}
		]
	}}
>
	<p class="heading display" data-work-heading use:split={{ type: 'word', className: 'word' }}>
		I have worked on projects for a wide range of clients - such as <WorkItem
			title="Akademiska Hus"
			images={[AH2]}
			link="/work/akademiskahus"
		/>, <WorkItem title="Homage" images={[Homage4]} link="/work/homage" /> and
		<span>
			<WorkItem title="Envolve." images={[Envolve]} link="/work/envolve" />
		</span>
	</p>
	<p class="body p-xsmall" data-work-body>
		Other clients include but are not limited to:<br /> H&M, Previa, Länsförsäkringar, TV4, Red Bull,
		Urban deli, Storyblok, Bambora.
	</p>
	<div data-work-button>
		<Button href="/work">
			See all work
			{#snippet iconRight()}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/snippet}
		</Button>
	</div>
</section>

<style>
	.work {
		grid-column: main;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--content-gap);
		height: 100dvh;
		z-index: 1;
	}

	.heading {
		width: min(100%, 32ch);
		text-align: center;
		text-wrap: pretty;
	}

	.body {
		text-align: center;
		width: 100%;
	}

	span {
		white-space: nowrap;
	}
</style>
