<section class="contact">
	<p class="preamble label">
		Here's my email again very big very many times, so there's absolutely no risk you miss it! :-)
	</p>
	<div class="content">
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
		<p class="display">
			<a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a>
		</p>
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
	}

	.content {
		display: grid;
		gap: var(--content-gap);
		align-items: center;
		margin-block: 2em;

		@media (width >= 900px) {
			grid-template-columns: 1fr 1fr;
			margin-block: 4em;
		}
	}

	.preamble,
	.after {
		grid-column: main;
		margin: auto;
		text-align: center;
	}

	p {
		margin-top: 0;
		text-align: center;

		@media (width >= 900px) {
			text-align: left;
		}
	}
</style>
