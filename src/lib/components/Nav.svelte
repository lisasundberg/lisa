<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { page } from '$app/stores';
	import { prefersReducedMotion } from '$lib/stores/motion';
	import { EASE_REVEAL } from '$lib/gsap/eases';
	import TextLogo from './TextLogo.svelte';

	const SCROLL_REVEAL_OFFSET = 20;

	const links = [
		{
			id: 'work',
			label: 'Work',
			slug: '/work'
		},
		{
			id: 'about',
			label: 'About',
			slug: '/about'
		}
	];

	let nav: HTMLElement;
	let ctx: gsap.Context;
	let scrollTrigger: ScrollTrigger;

	const isHome = $derived($page.url.pathname === '/');

	function reveal() {
		gsap.to(nav, {
			autoAlpha: 1,
			yPercent: 0,
			duration: $prefersReducedMotion ? 0 : 0.8,
			ease: EASE_REVEAL
		});
	}

	function hide() {
		gsap.to(nav, {
			autoAlpha: 0,
			yPercent: $prefersReducedMotion ? 0 : -100,
			duration: $prefersReducedMotion ? 0 : 0.5,
			ease: EASE_REVEAL
		});
	}

	function syncVisibility() {
		if (!scrollTrigger) return;

		if (isHome) {
			scrollTrigger.enable();
		} else {
			scrollTrigger.disable();
			gsap.set(nav, { autoAlpha: 1, yPercent: 0 });
		}
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		ctx = gsap.context(() => {
			gsap.set(nav, { autoAlpha: 0, yPercent: $prefersReducedMotion ? 0 : -100 });

			scrollTrigger = ScrollTrigger.create({
				start: SCROLL_REVEAL_OFFSET,
				onEnter: reveal,
				onLeaveBack: hide
			});

			syncVisibility();
		}, nav);
	});

	$effect(() => {
		syncVisibility();
	});

	onDestroy(() => ctx?.revert());
</script>

<nav class="nav" bind:this={nav}>
	<a class="logo -plain" href="/">
		<TextLogo />
	</a>
	<ul class="list">
		{#each links as { id, label, slug }}
			<li>
				<a class="link -plain" class:active={$page.url.pathname === `/${id}`} href={slug}>
					<div class="link-content">
						<span class="link-label">{label}</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		display: flex;
		justify-content: space-between;
		gap: var(--content-gap);
		padding: 1.5rem var(--content-margin);
		color: var(--_theme-color-primary);
		visibility: hidden;
		opacity: 0;
	}

	.list {
		margin-left: auto;
	}

	.link {
		&.active,
		&:hover,
		&:focus-visible {
			.link-content::before {
				scale: 1;
			}
		}
	}

	.link-content {
		display: inline-grid;
		grid-template-columns: 0.375em 1fr;
		grid-template-areas: 'dot label';
		align-items: center;
		gap: 0.5em;

		&::before {
			content: '';
			grid-area: dot;
			display: block;
			width: 0.375em;
			height: 0.375em;
			border-radius: 50%;
			background-color: var(--_theme-color-primary);
			scale: 0;
			transition: scale 0.09s linear;
		}
	}

	.link-label {
		font-family: var(--font-display);
		font-size: var(--font-size-h2);
		grid-area: label;
		line-height: 1;
		text-align: right;

		.active & {
			font-family: var(--font-display-italic);
		}
	}

	.logo {
		font-family: var(--font-display);
		font-weight: 100;
		font-size: 1.5rem;
		flex-grow: 0;
	}
</style>
