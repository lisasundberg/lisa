<script lang="ts">
	import WorkItem from './WorkItem.svelte';
</script>

<section class="section work" id="work">
	<p>
		I have worked on projects for a wide range of clients - including <WorkItem
			title="Homage"
			images={[
				'/work/homage/homage-mockup-3.jpg',
				'/work/homage/homage-mockup-4.jpg',
				'/work/homage/homage-longscroll-mockup-2.jpg',
				'/work/homage/homage-mockup-5.jpg'
			]}
		/>,
		<WorkItem
			title="Akademiska Hus"
			images={[
				'/work/akademiskahus/ah-mockup-mobile-1.jpg',
				'/work/akademiskahus/ah-mockup-mobile-2.png',
				'/work/akademiskahus/ah-mockup-6.jpg',
				'/work/akademiskahus/ah-mockup-8.jpg'
			]}
		/>, <WorkItem
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
		/>.
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
