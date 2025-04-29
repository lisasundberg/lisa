<script lang="ts">
	interface Props {
		heading: string;
		label: string;
		link: string;
		image: any;
	}

	let { heading, label, link, image }: Props = $props();
</script>

<article class="card">
	<a href={link} class="-plain content">
		<enhanced:img src={image} alt={heading} class="image" />
		<div class="text">
			<h3 class="heading h2">{heading}</h3>
			<p class="p-small label">{label}</p>
		</div>
	</a>
</article>

<style>
	.card {
		display: grid;
		padding-block: 1em;
		border-top: 1px solid var(--_theme-color-primary);

		/* &:has(a:hover, a:focus-visible) {
			background-color: var(--_theme-color-primary);
			color: var(--_theme-color-bg);
			} */

		@media (width >= 768px) {
			grid-template-columns: 4fr 1fr 50%;
			transition: grid-template-columns 0.6s var(--ease-in-out-cubic);
			padding-block: 2em;

			&:has(a:hover, a:focus-visible) {
				grid-template-columns: 5fr 0fr 50%;
			}
		}
	}

	.content {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-areas:
			'image'
			'space'
			'text';
		grid-column: 1 / -1;
		gap: 0.5em;

		@media (width >= 768px) {
			grid-template-areas: 'image space text';
			align-items: flex-start;
			gap: 2em;
		}
	}

	.image {
		grid-column: image;
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
		object-fit: cover;
	}

	.text {
		grid-column: text;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5em;

		@media (width >= 768px) {
			grid-column: text;
			flex-direction: row;
			justify-content: space-between;

			p {
				text-align: right;
			}
		}
	}

	.heading {
		line-height: 1;
	}
</style>
