<script lang="ts">
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY } from '$lib/actions/animations';
</script>

<section class="intro">
	<header>
		<h2 use:split use:bodyMaskY data-delay="0.2">Hi, I'm Lisa</h2>
		<p use:split use:bodyMaskY data-delay="0.4">
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
		margin-top: 1em;
		/* max-width: 29ch;
		font-family: 'RST Thermal (TRIAL)';
		font-weight: 100; */
	}
</style>
