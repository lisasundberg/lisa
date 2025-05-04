<script lang="ts">
	interface Props {
		title: string;
		link: string;
		images?: any[];
		index: number;
		// mouseenter?: (index: number) => void;
		// mouseleave?: (index: number) => void;
	}

	let { title, link, images = [], index }: Props = $props();

	let active = $state(false);
</script>

<a
	class="work-item a{active ? ' active' : ''}"
	href={link}
	onmouseenter={() => {
		active = true;
		// mouseenter && mouseenter(index);
	}}
	onmouseleave={() => {
		active = false;
		// mouseleave && mouseleave(index);
	}}
	onfocus={() => (active = true)}
	onblur={() => (active = false)}
	data-workitem-index={index}
>
	<span class="title">
		{title}
	</span>

	<!-- <span class="images">
		{#each images as image, i}
			<enhanced:img
				src={image}
				alt={title}
				style="--index: {i}; --total: {images.length}"
				class="image image-{i}"
			/>
		{/each}
	</span> -->
</a>

<!-- <span class="work-item a{active ? ' active' : ''}">
	<button
		class="title"
		on:mouseover={() => (active = true)}
		on:mouseleave={() => (active = false)}
		on:focus={() => (active = true)}
		on:blur={() => (active = false)}>{title}
	</button>

	<span class="images">
		{#each images as image, i}
			<enhanced:img src={image} alt={title} style="--index: {i}; --total: {images.length}" class="image image-{i}" />
		{/each}
	</span>
</span> -->

<style>
	.work-item {
		display: inline-block;
		color: var(--_theme-color-primary);
		font-size: inherit;
		font-family: inherit;
		position: relative;
		line-height: 0.8;

		&::after {
			height: 0.005em;
		}
	}

	.title {
		all: unset;
		position: relative;
		font-family: var(--font-display-italic);
		text-transform: none;
		font-size: 1.25em;
		letter-spacing: 0;
		.active & {
			z-index: 2;
		}
	}

	/* .image {
		width: unset;
		height: unset;
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

		:global(& img) {
			width: 100%;
			height: auto;
		}

		@media (width >= 768px) {
			max-width: 45vw;
			max-height: 30vw;
		}
	} */
</style>
