<script lang="ts">
	import WorkItem from './WorkItem.svelte';

	import Homage1 from './work/homage/homage-mockup-1.jpg?enhanced';
	import Homage2 from './work/homage/homage-mockup-2.jpg?enhanced';
	import Homage3 from './work/homage/homage-mockup-3.jpg?enhanced';
	import Homage4 from './work/homage/homage-mockup-4.jpg?enhanced';
	
	import AH1 from './work/akademiskahus/ah-mockup-1.jpg?enhanced';
	import AH2 from './work/akademiskahus/ah-mockup-2.jpg?enhanced';
	import AH3 from './work/akademiskahus/ah-mockup-3.png?enhanced';
	import AH4 from './work/akademiskahus/ah-mockup-4.jpg?enhanced';
</script>

<section class="section work" id="work">
	<p>
		I have worked on projects for a wide range of clients - including <WorkItem
			title="Homage"
			images={[
				Homage1,
				Homage2,
				Homage3,
				Homage4,
			]}
			link="https://homage.se"
		/>,
		 <WorkItem
			title="Akademiska Hus"
			images={[
				AH1,
				AH2,
				AH3,
				AH4
			]}
			link="https://akademiskahus.se"
		/>, 
	<!--	<WorkItem
			title="H&M Foundation"
			images={[
				'/work/babytalk/mobile-2.png',
				'/work/babytalk/mobile-2.png',
				'/work/babytalk/mobile-2.png',
				'/work/babytalk/mobile-2.png'
			]}
		/> and <WorkItem
			title="Storyblok"
			images={[
				'/work/webbdagarna/webbdagarna-mockup-1.png',
				'/work/webbdagarna/webbdagarna-mockup-2.png',
				'/work/webbdagarna/webbdagarna-mockup-3.png',
			]}
		/>. -->
	</p>
</section>

<style>
	.work {
		grid-column: main;
		display: flex;
		justify-content: flex-start;
		gap: var(--content-gap);
		height: 100dvh;
		z-index: 1;
	}

	p {
		width: 100%;
		width: min(100%, 36ch);
		margin: auto;
		font-family: var(--font-display);
		font-size: var(--font-size-h1);
		font-weight: 100;
		text-align: center;
	}
</style>
