<script lang="ts">
	interface Props {
		left?: boolean;
		right?: boolean;
		down?: boolean;
		class?: string;
	}

	const { left = false, down = false, class: className = '' }: Props = $props();
</script>

<svg
	class={className}
	style={down ? 'rotate: 90deg' : undefined}
	width="16"
	height="16"
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	{#if left}
		<path
			d="M14.8457 8.5L1.61118 8.5M6.65285 14L1.15285 8.5L6.65285 3"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{:else}
		<path
			d="M1 7.5H14.5314M9.37663 2L15 7.5L9.37663 13"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	{/if}
</svg>
