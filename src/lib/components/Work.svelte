<script lang="ts">
	import WorkItem from '$lib/components/WorkItem.svelte';
	import Button from '$lib/components/Button.svelte';

	import Homage4 from '$lib/assets/homage/homage-mockup-1.jpg?enhanced';
	import AH2 from '$lib/assets/akademiskahus/ah-mockup-1.jpg?enhanced';
	import Envolve from '$lib/assets/envolve/envolve-mockup-1.jpg?enhanced';
</script>

<section class="section work" id="work">
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
	<Button href="/work">See all work</Button>
</section>

<style>
	.work {
		grid-column: main;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
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
