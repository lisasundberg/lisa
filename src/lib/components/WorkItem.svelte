<script lang="ts">
	export let title: string;
	export let images: string[] = [];
	let active = false;
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
			<img src={image} alt={title} style="--index: {i}; --total: {images.length}" class="img-{i}" />
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
	}

	.images {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
	}

	img {
		max-width: 45vw;
		max-height: 45dvh;
		object-fit: cover;
		position: fixed;
		opacity: 0;
		scale: 0.5;
		transition:
			opacity 0.375s calc(var(--index) * 0.05s) linear,
			scale 0.375s calc(var(--index) * 0.05s) ease-in-out;
		pointer-events: none;

		--transform-factor: 1;
		--top: translate(-50%, calc(var(--transform-factor) * -150%));
		--right: translate(calc(var(--transform-factor) * 50%), -50%);
		--bottom: translate(-50%, calc(var(--transform-factor) * 50%));
		--left: translate(calc(var(--transform-factor) * -150%), -50%);


		/* &.img-0 {
			transform: var(--top);
			transform-origin: bottom center;
		}
		&.img-1 {
			transform: var(--right);
			transform-origin: center left;
		}
		&.img-2 {
			transform: var(--bottom);
			transform-origin: top center;
		}
		&.img-3 {
			transform: var(--left);
			transform-origin: center right;
		} */

		&.img-0 {
			top: 0;
			left: 0;
			transform-origin: bottom center;
		}
		&.img-1 {
			top: 0;
			right: 0;
			transform-origin: center left;
		}
		&.img-2 {
			bottom: 0;
			right: 0;
			transform-origin: top center;
		}
		&.img-3 {
			bottom: 0;
			left: 0;
			transform-origin: center right;
		}

		.active & {
			opacity: 1;
			scale: 1;
		}
	}
</style>
