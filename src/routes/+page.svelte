<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	// import { gsap } from 'gsap';
	// import { animate } from '$lib/actions/animate';
	import { INVERTED_CLASSNAME } from '$lib/stores/theme';

	import Intro from '$lib/components/Intro.svelte';
	// import Work from '$lib/components/Work.svelte';
	// import Background from '$lib/components/Background.svelte';
	import HeroHeading from '$lib/components/HeroHeading.svelte';
	// import ThemeNav from '$lib/components/ThemeNav.svelte';
	import '$lib/styles/index.css';

	// let timeline: gsap.core.Timeline;

	// onMount(() => {
	// 	timeline = gsap.timeline();
	// });
</script>

<!-- <Background /> -->
<!-- <ThemeNav /> -->
<!-- <div
	use:animate={{
		timeline,
		type: 'from',
		scrollTrigger: {
			trigger: '[data-work-section]',
			start: 'top -=6%',
			scrub: true,
			onEnter: () => (browser ? document.body.classList.add(INVERTED_CLASSNAME) : null), // Add class when entering the trigger
			onLeaveBack: () => (browser ? document.body.classList.remove(INVERTED_CLASSNAME) : null) // Remove class when scrolling back
		},
		animations: [
			{
				target: 'body',
				vars: {
					onStart: () => (browser ? document.body.classList.add(INVERTED_CLASSNAME) : null),
					onReverseComplete: () =>
						browser ? document.body.classList.remove(INVERTED_CLASSNAME) : null
				}
			}
		]
	}}
></div> -->
<HeroHeading />
<Intro />
<!-- <Work /> -->
