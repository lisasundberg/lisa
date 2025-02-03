<!-- <script lang="ts">
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY } from '$lib/actions/animations';
</script> -->

<section class="section intro" id="intro">
	<header>
		<h2 class="label-bold">Hi, I'm Lisa</h2>
		<!-- <h2 use:bodyMaskY data-delay="0.2" class="label-bold">Hi, I'm Lisa</h2> -->
		<!-- <p use:bodyMaskY data-delay="0.4"> -->
		<p>
			Frontend developer with a passion for beautiful and brand building user experiences, based in
			Stockholm, Sweden.
		</p>
	</header>
</section>

<style>
	.intro {
		grid-column: main;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100dvh;
		z-index: 10;
	}

	p {
		max-width: 25ch;
		margin-top: 0.5em;
	}
</style>
