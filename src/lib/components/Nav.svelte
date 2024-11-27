<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let sections: NodeListOf<HTMLElement>;
	let currentSection: string;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		sections = document.querySelectorAll('.section');

		sections.forEach((section) => {
			ScrollTrigger.create({
				trigger: section,
				start: 'top center',
				end: 'bottom center',
				toggleClass: 'active',
				markers: true,
				onEnter: () => {
					currentSection = section.id;
				},
				onEnterBack: () => {
					currentSection = section.id;
				}
			});
		});
	});
</script>

<nav>
	<a class="logo -plain" href="/">Logo</a>
	<ul>
		{#each sections as section}
			{#if section.id !== 'intro'}
				<li>
					<a
						class="label-bold"
						class:active={currentSection === section.id}
						href={`#${section.id}`}
					>
						{section.id}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		gap: var(--content-gap);
		padding: var(--content-margin);
		color: var(--theme-color-primary);
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		margin: 0;
		padding-inline: 0;
	}

	li {
		list-style: none;
		display: grid;
		grid-template-columns: 0.375em 1fr;
		grid-template-areas: 'dot label';
		align-items: center;
		gap: 0.5em;

		& a {
			grid-area: label;
		}

		&::before {
			content: '';
			grid-area: dot;
			display: block;
			width: 0.375em;
			height: 0.375em;
			border-radius: 50%;
			background-color: var(--theme-color-primary);
			scale: 0;
			transition: scale 0.09s linear;
		}

		&:has(.active) {
			&::before {
				scale: 1;
			}
		}
	}

	.logo {
		font-family: var(--font-heading);
		font-weight: 100;
		font-size: 1.5rem;
		color: var(--theme-color-primary);
		flex-grow: 0;
	}
</style>
