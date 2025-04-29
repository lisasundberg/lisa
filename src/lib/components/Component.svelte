<script lang="ts">
	import { animate } from '$lib/animations/animate';
</script>

<section
	use:animate={{
		type: 'from',
		vars: {
			opacity: 0,
			y: 100,
			ease: 'power4.out'
		},
		scroll: {
			start: 'top center',
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
		padding: 10vh;
	}
</style>
