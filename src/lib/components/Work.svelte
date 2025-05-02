<script lang="ts">
	import { animate } from '$lib/animations/animate';
	import { animate } from '$lib/actions/animate';

	import WorkItem from '$lib/components/WorkItem.svelte';
	import Button from '$lib/components/Button.svelte';

	import Homage4 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH2 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-mockup-1.jpg?enhanced';
</script>

<section
	class="section work"
	id="work"
	use:animate={{
		type: 'from',
		vars: {
			opacity: 0,
			ease: 'power4.out'
		},
		scroll: {
			start: 'top top',
			end: 'top -=100%',
			scrub: true,
			markers: true,
			pin: true
		}
	}}
>
	<p class="heading display">
		I have worked on projects for a wide range of clients - such as <WorkItem
			title="Akademiska Hus"
			images={[AH2]}
			link="/work/akademiskahus"
		/>, <WorkItem title="Homage" images={[Homage4]} link="/work/homage" /> and
		<span>
			<WorkItem title="Envolve" images={[Envolve]} link="/work/envolve" />
			.
		</span>
	</p>
	<p class="body p-xsmall">
		Other clients include but are not limited to:<br /> H&M, Previa, Länsförsäkringar, TV4, Red Bull,
		Urban deli, Storyblok, Bambora.
	</p>
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
