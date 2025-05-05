<script lang="ts">
	import { gsap } from 'gsap';
	import { animate } from '$lib/actions/animate';
	import { INVERTED_CLASSNAME } from '$lib/stores/theme';

	import Intro from '$lib/components/Intro.svelte';
	import Work from '$lib/components/Work.svelte';
	// import Background from '$lib/components/Background.svelte';
	import HeroHeading from '$lib/components/HeroHeading.svelte';
	// import ThemeNav from '$lib/components/ThemeNav.svelte';
	import '$lib/styles/index.css';

	const timeline = gsap.timeline();
</script>

<!-- <Background /> -->
<!-- <ThemeNav /> -->
<div
	use:animate={{
		timeline,
		type: 'from',
		scrollTrigger: {
			trigger: '[data-work-section]',
			start: 'top -=6%',
			scrub: true,
			onEnter: () => document.body.classList.add(INVERTED_CLASSNAME), // Add class when entering the trigger
			onLeaveBack: () => document.body.classList.remove(INVERTED_CLASSNAME) // Remove class when scrolling back
		},
		animations: [
			{
				target: 'body',
				vars: {
					onStart: () => document.body.classList.add(INVERTED_CLASSNAME),
					onReverseComplete: () => document.body.classList.remove(INVERTED_CLASSNAME)
				}
			}
		]
	}}
></div>
<HeroHeading />
<Intro />
<Work />
