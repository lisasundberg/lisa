<script lang="ts">

	export let title: string;
	export let link: string = "";
	export let images: any[] = [];
	let active = true;
</script>

<span class="work-item a{active ? ' active' : ''}">
	<button
		class="title"
		on:mouseover={() => (active = true)}
		on:mouseleave={() => (active = false)}
		on:focus={() => (active = true)}
		on:blur={() => (active = false)}>{title}</button
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
		cursor: pointer;
		position: relative;
		
		.active & {
			z-index: 2;
		}
	}

	.image {
		max-width: 50vw;
		max-height: 50dvh;
		object-fit: cover;
		position: fixed;
		opacity: 0;
		scale: 0.5;
		transition:
			opacity 0.375s calc(var(--index) * 0.05s) linear,
			scale 0.375s calc(var(--index) * 0.05s) ease-in-out;
		pointer-events: none;
		z-index: 1;

		&.image-0 {
			top: 0;
			left: 0;
			transform-origin: bottom center;
		}

		&.image-1 {
			top: 0;
			right: 0;
			transform-origin: center left;
		}
		&.image-2 {
			bottom: 0;
			right: 0;
			transform-origin: top center;
		}
		&.image-3 {
			bottom: 0;
			left: 0;
			transform-origin: center right;
		}

		.active & {
			opacity: 1;
			scale: 1;
		}
		
		& img {
			width: 100%;
			height: 100%;
		}
	
	}

</style>
