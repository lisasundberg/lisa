<footer>
	<h1 class="heading">Lisa Sundberg</h1>
	<section>
		<div>

	 <h2 class="label">Get in touch</h2>
	 <p><a href="mailto:hello@lisasundberg.com">hello@lisasundberg.com</a></p>
		</div>
	 <ul>
		 <li><a href="https://codepen.io/lisasundae/" target="_blank">Codepen</li>
		<li><a href="https://github.com/lisasundberg" target="_blank">Github</li>
		<li><a href="https://www.linkedin.com/in/lisasundberg/" target="_blank">Linkedin</li>
	 </ul>
	</section>
	<small>© Drawn & developed by me in {new Date().getFullYear()} :-)</small>

</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		position: sticky;
		bottom: calc(var(--footer-height) * -1 + 175px);
		height: var(--footer-height);
	}

	.heading {
		position: sticky;
		color: var(--color-text-primary);
	}

	section {
		display: grid;
		grid-template-columns: var(--two-cols);
		gap: var(--content-gap);	
		width: var(--content-width);
		margin: auto;
		padding-block: 10dvh;
	}

	ul {
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
	}
	
	li {
		list-style: none;
		margin-top: 0.25em;
		padding-top: 0.25em;
		font-size: var(--font-size-body);
		border-top: 1px solid var(--color-text-primary);
	}

	small {
		display: block;
		text-align: right;
		width: var(--content-width);
		margin: 2rem auto;
	}
</style>
