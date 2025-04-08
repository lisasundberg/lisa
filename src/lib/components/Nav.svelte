<script lang="ts">
	import { page } from '$app/stores';
	import OpenToWork from './OpenToWork.svelte';

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
		},
		{
			id: 'contact',
			label: 'Contact',
			slug: '/contact'
		}
	];
</script>

<nav>
	<a class="logo -plain" href="/">LS</a>
	<ul>
		{#each links as { id, label, slug }}
			<li>
				<a class="link -plain" class:active={$page.url.pathname === `/${id}`} href={slug}>
					<div class="link-content">
						<span class="label label-bold">{label}</span>
					</div>
				</a>
			</li>
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
		z-index: 10;
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
