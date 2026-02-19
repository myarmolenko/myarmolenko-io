<script lang="ts">
	import type { SocialLink } from './types';
	import { defaultSocials } from './types';

	export let year = 2026;
	export let owner = 'Maksym Yarmolenko';
	export let socials: readonly SocialLink[] = defaultSocials;
</script>

<footer class={`footer ${$$props.class ?? ''}`} aria-label="Footer">
	<div class="footer__inner container">
		<!-- First line: Social icons + middle slot -->
		<div class="footer__top">
			<div class="footer__socials" aria-label="Social links">
				{#each socials as s (s.href)}
					<a
						class="footer__iconLink"
						href={s.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.label ?? s.name}
						title={s.label ?? s.name}
					>
						<img src={s.icon} alt="" class="footer__icon" aria-hidden="true" />
					</a>
				{/each}
			</div>

			<div class="footer__middle">
				<slot name="middle" />
			</div>
		</div>

		<!-- Second line: Copyright -->
		<div class="footer__copyright">© {year} {owner}</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		background: transparent;
		padding: var(--space-4) 0;
		color: var(--text-color);
	}

	.footer__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		text-align: center;
	}

	.footer__top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-2);
	}

	.footer__socials {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer__iconLink {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: var(--border-radius-md);
		color: var(--text-color);
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.footer__iconLink:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.footer__iconLink:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.footer__icon {
		width: 20px;
		height: 20px;
		filter: none;
		color: var(--text-color);
	}

	.footer__copyright {
		font-size: var(--font-size-sm);
		letter-spacing: 0.2px;
		opacity: 0.9;
	}

	.footer__middle {
		min-height: 0;
	}
</style>
