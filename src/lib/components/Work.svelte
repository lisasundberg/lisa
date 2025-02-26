<script lang="ts">
	import WorkItem from './WorkItem.svelte';

	import Homage4 from './work/homage/homage-mockup-4.jpg?enhanced';
	import AH2 from './work/akademiskahus/ah-mockup-2.jpg?enhanced';
	import Babytalk3 from './work/babytalk/babytalk-mockup-3.png?enhanced';
</script>

<section class="section work" id="work">
	<p class="heading display">
		I have worked on projects for a wide range of clients - such as  <WorkItem
		title="Akademiska Hus"
		images={[
			AH2
		]}
	/>, <WorkItem
			title="Homage"
			images={[
				Homage4,
			]}
		/> and
		<span>
		<WorkItem
			title="Unicef"
			images={[
				Babytalk3,
			]}
		/> 
		<!-- and <WorkItem
			title="Storyblok & Webbdagarna"
			images={[
				Storyblok1,
				Storyblok2,
				Storyblok3,
			]}
		/> -->
		.
	</span>
	</p>
	<p class="body p-xsmall">Other clients include but are not limited to:<br /> H&M, Previa, Länsförsäkringar, TV4, Red Bull,
		Urban deli, Storyblok, Bambora.</p>
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
