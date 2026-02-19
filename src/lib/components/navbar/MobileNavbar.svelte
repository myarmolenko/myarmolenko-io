<script lang="ts">
	import type { NavigationLink } from './types';
	import { defaultNavigationLinks } from './types';

	export let navigationLinks: readonly NavigationLink[] = defaultNavigationLinks;

	let open = false;
	const menuId = 'mobile-nav-menu';

	const toggle = () => (open = !open);
	const close = () => (open = false);

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}

	function clickOutside(node: HTMLElement) {
		function onPointerDown(e: PointerEvent) {
			if (!open) return;
			if (!node.contains(e.target as Node)) close();
		}

		document.addEventListener('pointerdown', onPointerDown);
		return {
			destroy() {
				document.removeEventListener('pointerdown', onPointerDown);
			}
		};
	}
</script>

<svelte:window on:keydown={onKeydown} />

<nav class={`nav ${$$props.class ?? ''}`} aria-label="Primary navigation" use:clickOutside>
	<div class="nav__bar container">
		<button
			type="button"
			class="nav__burger"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			aria-controls={menuId}
			on:click|stopPropagation={toggle}
		>
			<span class="nav__burgerIcon" aria-hidden="true">
				<span class="nav__burgerLine"></span>
				<span class="nav__burgerLine"></span>
				<span class="nav__burgerLine"></span>
			</span>
		</button>
	</div>

	<div id={menuId} class="nav__dropdown" data-open={open}>
		<ul class="nav__list container" role="list">
			{#each navigationLinks as link (link.href)}
				<li>
					<a
						class="nav__link"
						href={link.href}
						target={link.target}
						rel={link.target === '_blank' ? link.rel ?? 'noopener noreferrer' : link.rel}
						on:click={close}
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
		padding: 16px 0;
		background: transparent;
	}

	.nav__bar {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.nav__burger {
		border: 0;
		background: transparent;
		padding: 10px;
		border-radius: 10px;
		cursor: pointer;
	}

	.nav__burger:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.nav__burgerIcon {
		display: inline-flex;
		flex-direction: column;
		gap: 6px;
	}

	.nav__burgerLine {
		width: 22px;
		height: 2px;
		background: currentColor;
		border-radius: 999px;
	}

	.nav__dropdown {
		width: 100%;
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-12px);
		transition:
			transform 160ms ease,
			opacity 160ms ease,
			max-height 200ms ease;
	}

	.nav__dropdown[data-open='true'] {
		max-height: 70vh;
		opacity: 1;
		pointer-events: auto;
		transform: translateY(0);
	}

	.nav__list {
		margin-top: 12px;
		padding: 14px;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: center;
		text-align: center;
		backdrop-filter: blur(10px);
		background: rgba(0, 0, 0, 0.06);
		border-radius: 14px;
	}

	.nav__link {
		display: inline-block;
		padding: 10px 14px;
		border-radius: 10px;
		text-decoration: none;
		color: inherit;
		font-weight: 500;
		letter-spacing: 0.2px;
	}

	.nav__link:hover,
	.nav__link:focus-visible {
		background: rgba(0, 0, 0, 0.06);
		outline: none;
	}
</style>
