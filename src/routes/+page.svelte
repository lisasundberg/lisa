<script lang="ts">
	import Work3 from '$lib/components/Work3.svelte';
	import WorkTouch from '$lib/components/WorkTouch.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';
	import { isTouch } from '$lib/stores/device';

	import '$lib/styles/index.css';
</script>

<Hero />
<ScrollIndicator />
{#if $isTouch}
	<WorkTouch />
{:else}
	<Work3 />
{/if}
