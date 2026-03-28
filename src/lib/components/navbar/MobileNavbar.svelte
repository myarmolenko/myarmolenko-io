<script lang="ts">
	import { page } from '$app/state';
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks, isActive } from './types';

	export let navigationLinks: readonly NavigationLink[] = defaultNavigationLinks;
</script>

<nav class={`nav ${$$props.class ?? ''}`} aria-label="Primary navigation">
	<ul class="nav__list" role="list">
		{#each navigationLinks as link (link.href)}
			{@const active = isActive(link.href, page.url.pathname)}
			<li>
				<a
					class="nav__link"
					class:nav__link--active={active}
					href={link.href}
					target={link.target}
					rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
					aria-current={active ? 'page' : undefined}
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
					{#if active}
						<span class="nav__label">{link.name}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		padding: 16px 0;
		background: transparent;
	}

	.nav__list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.nav__link {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 8px;
		border-radius: 999px;
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	.nav__link--active {
		text-decoration: underline;
		text-underline-offset: 6px;
		text-decoration-thickness: 2px;
	}

	svg {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
</style>
