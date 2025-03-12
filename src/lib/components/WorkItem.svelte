<script lang="ts">
	interface Props {
		title: string;
		images?: any[];
	}

	let { title, images = [] }: Props = $props();
	let active = $state(false);
</script>

<span class="work-item a{active ? ' active' : ''}">
	<button
		class="title"
		onmouseover={() => (active = true)}
		onmouseleave={() => (active = false)}
		onfocus={() => (active = true)}
		onblur={() => (active = false)}>{title}</button
	>

	<span class="images">
		{#each images as image, i}
			<enhanced:img src={image} alt={title} style="--index: {i}; --total: {images.length}" class="image image-{i}" />
		{/each}
	</span>
</span>

<style>
	.work-item {
		display: inline-block;
		color: var(--_theme-color-primary);
		font-size: inherit;
		font-family: inherit;
		position: relative;

		&::after {
			height: 0.005em;
		}
	}

	.title {
		all: unset;
		position: relative;
		
		.active & {
			z-index: 2;
		}
	}

	.image {
		max-width: 80vw;
		max-height: 53vw;
		object-fit: cover;
		position: absolute;
		opacity: 0;
		scale: 0.5;
		transition:
			opacity 0.375s calc(var(--index) * 0.05s) linear,
			scale 0.375s calc(var(--index) * 0.05s) ease-in-out;
		pointer-events: none;
		z-index: 1;

		&.image-0 {
			top: 50%;
			left: 50%;
			translate: -50% -50%;
		}

		.active & {
			opacity: 1;
			scale: 1;
		}
		
		& img {
			width: 100%;
			height: auto;
		}

		@media (width >= 768px) {
			max-width: 45vw;
			max-height: 30vw;
		}
	
	}

</style>
