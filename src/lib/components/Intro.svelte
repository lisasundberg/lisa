<script lang="ts">
	import { split } from '$lib/actions/splitting';
	import { bodyMaskY } from '$lib/actions/animations';
</script>

<section class="intro">
	<header>
		<h2 use:split use:bodyMaskY data-delay="3">Hi, I'm Lisa</h2>
		<p use:split use:bodyMaskY data-delay="3.5">
			Frontend developer based in Stockholm, Sweden, with a passion for beautiful and brand building
			user experiences.
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
		pointer-events: none;
	}

	p {
		max-width: 26ch;
		/* text-wrap: pretty; */
		margin-top: 1em;
	}
</style>
