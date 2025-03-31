<script lang="ts">
	interface Props {
		heading: string;
		label: string;
		link: string;
		image: any;
	}

	let { heading, label, link, image }: Props = $props();
</script>

<article>
	<a href={link} class="work-card">
		<enhanced:img src={image} alt={heading} class="image" />
		<h3>{heading}</h3>
		<p class="label">{label}</p>
	</a>
</article>

<style>
	.image {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
		object-fit: cover;
	}
</style>
