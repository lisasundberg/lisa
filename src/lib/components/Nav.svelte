<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import OpenToWork from './OpenToWork.svelte';

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
	<a class="logo -plain" href="/">LS</a>
	<ul>
		{#each sections as section}
			{#if section.id !== 'intro'}
				<li>
					<a
						class="link -plain"
						class:active={currentSection === section.id}
						href={`#${section.id}`}
					>
						<div class="link-content">
							<span class="label label-bold">{section.id}</span>
						</div>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
	<div class="open-to-work">
		<OpenToWork active />
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		gap: var(--content-gap);
		padding: 1.5rem var(--content-margin);
		color: var(--_theme-color-primary);
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
	}

	.link {
		padding: 1em 0;

		&:active,
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

	.label {
		grid-area: label;
	}

	.logo {
		font-family: var(--font-display);
		font-weight: 100;
		font-size: 1.5rem;
		color: var(--theme-color-primary);
		flex-grow: 0;
	}

	.open-to-work {
		flex-shrink: 0;

		@media (width < 768px) {
			display: none;
		}
	}
</style>
