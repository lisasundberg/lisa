<script lang="ts">
	import Intro from '$lib/components/Intro.svelte';
	import Work from '$lib/components/Work.svelte';
	import About from '$lib/components/About.svelte';
	import Background from '$lib/components/Background.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import ThemeNav from '$lib/components/ThemeNav.svelte';
	import '$lib/styles/index.css';
</script>

<Background />
<ThemeNav />

<Heading />
<Intro />
<Work />
<About />
