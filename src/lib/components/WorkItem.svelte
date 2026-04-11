<script lang="ts">
	interface Props {
		title: string;
		link: string;
		images?: any[];
		index: number;
	}

	let { title, link, index }: Props = $props();

	let active = $state(false);
</script>

<a
	class="work-item -plain{active ? ' active' : ''}"
	href={link}
	onmouseenter={() => {
		active = true;
	}}
	onmouseleave={() => {
		active = false;
	}}
	onfocus={() => (active = true)}
	onblur={() => (active = false)}
	data-workitem-index={index}
>
	<span class="title">
		{title}
	</span>
</a>

<style>
	.work-item {
		display: inline-block;
		color: var(--_theme-color-primary);
		font-size: inherit;
		font-family: inherit;
		position: relative;
		line-height: 0.8;
		transition: color 0.2s linear;

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
		transition: color 0.2s linear;

		.active & {
			z-index: 2;
			/* color: white; */
			text-shadow: 0 0 0.5em #000;
		}
	}
</style>
