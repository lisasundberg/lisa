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
	<a href={link} class="content -plain">
		<enhanced:img src={image} alt={heading} class="image" />
		<div class="text">
			<h3 class="p-small">{heading}</h3>
			<p class="p-small label">{label}</p>
		</div>
	</a>
</article>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.image {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
		object-fit: cover;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		justify-content: space-between;
	}
</style>
