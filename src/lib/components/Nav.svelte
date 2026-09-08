<script lang="ts">
	import { page } from '$app/stores';
	import TextLogo from './TextLogo.svelte';

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
</script>

<nav class="nav">
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
		font-size: var(--font-size-h1);
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
