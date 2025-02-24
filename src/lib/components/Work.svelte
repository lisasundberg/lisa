<script lang="ts">
	import WorkItem from './WorkItem.svelte';

	import Homage4 from './work/homage/homage-mockup-4.jpg?enhanced';
	import AH2 from './work/akademiskahus/ah-mockup-2.jpg?enhanced';
	import Babytalk3 from './work/babytalk/babytalk-mockup-3.png?enhanced';
</script>

<section class="section work" id="work">
	<p>
		I have worked on projects for a wide range of clients - including  <WorkItem
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
		.
	</span>
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
		width: min(100%, 32ch);
		margin: auto;
		font-family: var(--font-display);
		font-size: var(--font-size-h1);
		font-weight: 100;
		text-align: center;
		text-wrap: pretty;
	}
	
	span {
		white-space: nowrap;
	}
</style>
