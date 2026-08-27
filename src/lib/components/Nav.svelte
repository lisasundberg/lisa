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
		}
	];
</script>

<nav class="nav">
	<a class="logo -plain" href="/">
		<span class="visually-hidden">LS</span>
		<svg width="51" height="67" viewBox="0 0 51 67" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0.5 16.0684C5.7777 17.6153 19.1065 18.8211 23.6014 17.6153C28.0963 16.4095 31.5435 14.1531 31.5435 9.0453C31.5435 3.9375 28.0956 0.5 22.937 0.5C17.7784 0.5 14.3261 4.12309 14.3261 9.14358C14.3261 14.1641 17.7596 34.875 17.7596 39.9883C17.7596 45.1016 14.2757 48.6401 9.22669 48.6401C4.1777 48.6401 0.54222 45.1875 0.54222 40.002C0.54222 34.8165 5.05845 31.3502 10.0963 31.3502C15.1341 31.3502 35.6098 34.7877 40.8657 34.7877C46.1216 34.7877 50.5 31.4375 50.5 26.1331C50.5 20.8288 46.98 17.5878 41.7241 17.5878C36.4682 17.5878 33.2826 21.2887 33.2826 26.2342C33.2826 31.1797 36.7161 52.2289 36.7161 57.4309C36.7161 62.6328 33.0742 66.5 27.9246 66.5C22.7749 66.5 18.9837 62.4609 18.9837 57.2645C18.9837 52.068 22.7874 49.3743 26.9079 48.2689C31.0284 47.1635 45.1774 48.625 50.3705 50.3314"
				stroke="currentColor"
				stroke-linecap="round"
			/>
		</svg>
	</a>
	<ul>
		{#each links as { id, label, slug }}
			<li>
				<a class="link -plain" class:active={$page.url.pathname === `/${id}`} href={slug}>
					<div class="link-content">
						<span class="label">{label}</span>
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
	.nav {
		display: flex;
		align-items: center;
		gap: var(--content-gap);
		padding: 1.5rem var(--content-margin);
		color: var(--_theme-color-primary);
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
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
		flex-grow: 0;
	}

	.open-to-work {
		flex-shrink: 0;

		@media (width < 768px) {
			display: none;
		}
	}
</style>
