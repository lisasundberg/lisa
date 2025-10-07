<script lang="ts">
	interface Props {
		className?: string;
		src: any;
		alt: string;
	}

	let { className, src, alt }: Props = $props();
	let imgElement = $state<HTMLImageElement | null>(null);
	let loading = $state(true);
	let error = $state(false);
	let container: HTMLElement;

	function handleLoad() {
		loading = false;
	}
	function handleError() {
		error = true;
	}
</script>

<div class={`image ${className || ''}`} bind:this={container}>
	<enhanced:img
		class="img"
		class:loading
		class:error
		{src}
		{alt}
		draggable="false"
		onload={handleLoad}
		onerror={handleError}
		loading="lazy"
		bind:this={imgElement}
	/>
</div>

<style>
	.loading {
		opacity: 0;
	}

	.img {
		transition: opacity 0.2s linear;
	}
</style>
