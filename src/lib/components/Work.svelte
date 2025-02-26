<script lang="ts">
	import WorkItem from './WorkItem.svelte';

	// import Homage1 from './work/homage/homage-mockup-1.jpg?enhanced';
	// import Homage2 from './work/homage/homage-mockup-2.jpg?enhanced';
	// import Homage3 from './work/homage/homage-mockup-3.jpg?enhanced';
	import Homage4 from './work/homage/homage-mockup-4.jpg?enhanced';
	
	// import AH1 from './work/akademiskahus/ah-mockup-1.jpg?enhanced';
	import AH2 from './work/akademiskahus/ah-mockup-2.jpg?enhanced';
	// import AH3 from './work/akademiskahus/ah-mockup-3.png?enhanced';
	// import AH4 from './work/akademiskahus/ah-mockup-6.jpg?enhanced';
	
	// import Babytalk1 from './work/babytalk/babytalk-mockup-1.png?enhanced';
	// import Babytalk2 from './work/babytalk/babytalk-mockup-2.png?enhanced';
	import Babytalk3 from './work/babytalk/babytalk-mockup-3.png?enhanced';
	// import Babytalk4 from './work/babytalk/babytalk-mockup-4.jpg?enhanced';
	
	// import Storyblok1 from './work/storyblok/storyblok-mockup-7.png?enhanced';
	// import Storyblok2 from './work/storyblok/storyblok-mockup-2.png?enhanced';
	// import Storyblok3 from './work/storyblok/storyblok-mockup-3.png?enhanced';
	// import Storyblok4 from './work/storyblok/storyblok-mockup-4.png?enhanced';
</script>

<section class="section work" id="work">
	<p class="heading display">
		I have worked on projects for a wide range of clients - such as  <WorkItem
		title="Akademiska Hus"
		images={[
			AH2,
		]}
		link="https://akademiskahus.se"
	/>, <WorkItem
			title="Homage"
			images={[
				Homage4,
			]}
			link="https://homage.se"
		/> and
		<span>
		<WorkItem
			title="Unicef"
			images={[
				Babytalk3,
			]}
		/> 
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
