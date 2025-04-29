<script lang="ts">
	import { animate } from '$lib/animations/animate';
</script>

<section
	use:animate={{
		type: 'from',
		vars: {
			opacity: 0,
			ease: 'power4.out'
		},
		scroll: {
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			markers: true,
			pin: true
		}
	}}
>
	<div class="image">
		<h1>Component</h1>
		<p>Component description</p>
		<p>Component description</p>
		<p>Component description</p>
	</div>
</section>

<style>
	section {
		grid-column: main;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100dvh;
		background-color: skyblue;
	}
</style>
