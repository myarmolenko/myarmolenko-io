<script lang="ts">
	import { page } from '$app/state';
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks, isActive } from './types';

	export let navigationLinks: readonly NavigationLink[] = defaultNavigationLinks;
</script>

<nav class="nav {$$props.class}" aria-label="Primary navigation">
	<div class="nav__container container">
		<ul class="nav__list">
			{#each navigationLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						target={link.target}
						rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
						class:active={isActive(link.href, page.url.pathname)}
						aria-current={isActive(link.href, page.url.pathname) ? 'page' : undefined}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d={link.icon} />
						</svg>
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		background: transparent;
		padding: 16px 0;
	}

	.nav__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav__list {
		display: flex;
		gap: 40px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	a {
		display: flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	svg {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
	}

	a:hover,
	a:focus-visible {
		text-decoration: underline;
		text-underline-offset: 6px;
	}

	a.active {
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}
</style>
