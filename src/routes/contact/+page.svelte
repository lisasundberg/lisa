<script lang="ts">
	// Clone with JS to prevent SEO issues
	let clonesContainer: HTMLDivElement;

	$effect(() => {
		const cloneCount = 9;
		const email = 'hello@lisasundberg.com';

		for (let i = 0; i < cloneCount; i++) {
			const link = document.createElement('a');
			link.setAttribute('href', `mailto:${email}`);
			link.textContent = email;
			link.className = 'email';
			clonesContainer.appendChild(link);
		}
	});
</script>

<section class="contact">
	<p class="preamble label">
		Here's my email again very big very many times, so there's absolutely no risk you miss it! :-)
	</p>
	<div class="content">
		<a href="mailto:hello@lisasundberg.com" class="email">hello@lisasundberg.com</a>
		<div class="clones" bind:this={clonesContainer} aria-hidden="true"></div>
	</div>
	<p class="after label">
		Hope to see you soon in my inbox {'<'}3
	</p>
</section>

<style>
	.contact {
		grid-column: main;
		z-index: 0;
		margin-bottom: 4em;

		:global(.email) {
			font-size: 7vw;
			margin-top: 0;
			text-align: center;
		}
	}

	.content {
		display: grid;
		gap: var(--content-gap);
		align-items: center;
		margin-block: 2em;

		@media (width >= 768px) {
			margin-block: 4em;
		}
	}

	.clones {
		display: contents;
	}

	.preamble,
	.after {
		grid-column: main;
		margin: auto;
		text-align: center;
	}
</style>
