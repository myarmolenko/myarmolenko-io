<script lang="ts">
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks } from './types';

	export let navigationLinks: readonly NavigationLink[] = defaultNavigationLinks;
</script>

<nav class="nav {$$props.class}" aria-label="Primary navigation">
	<div class="nav__container container-wide">
		<ul class="nav__list">
			{#each navigationLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						target={link.target}
						rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
					>
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
		gap: 28px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	a:hover,
	a:focus-visible {
		text-decoration: underline;
		text-underline-offset: 6px;
	}
</style>
