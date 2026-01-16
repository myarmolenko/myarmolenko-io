<script lang="ts">
    type SocialLink = Readonly<{
        name: string;
        href: string;
        icon: string;
        label?: string;
    }>;

    export let year = 2026;
    export let owner = "Maksym Yarmolenko";

    export let socials: readonly SocialLink[] = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/your-handle",
            icon: "/lib/assets/icons/linkedin.svg",
        },
        {
            name: "GitHub",
            href: "https://github.com/your-handle",
            icon: "/lib/assets/icons/github.svg",
        },
        {
            name: "X",
            href: "https://x.com/your-handle",
            icon: "/lib/assets/icons/x.svg",
        },
        {
            name: "Email",
            href: "mailto:you@example.com",
            icon: "/lib/assets/icons/email.svg",
        },
    ];
</script>

<footer class={`footer ${$$props.class ?? ""}`} aria-label="Footer">
    <div class="footer__inner">
        <!-- Left -->
        <div class="footer__left">
            © {year}
            {owner}
        </div>

        <!-- Middle configurable space -->
        <div class="footer__middle">
            <slot name="middle" />
        </div>

        <!-- Right: icons -->
        <div class="footer__right" aria-label="Social links">
            {#each socials as s (s.href)}
                <a
                    class="footer__iconLink"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label ?? s.name}
                    title={s.label ?? s.name}
                >
                    <img
                        src={s.icon}
                        alt=""
                        class="footer__icon"
                        aria-hidden="true"
                    />
                </a>
            {/each}
        </div>
    </div>
</footer>

<style>
    .footer {
        position: fixed;
        bottom: 10px; /* 👈 height from bottom */
        left: 50%;
        transform: translateX(-50%);
        width: 75%;

        background: transparent;
        padding: 28px 0;
        color: var(--text-color);

        z-index: 10; /* keep above background, below modals */
    }

    .footer__inner {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 16px;
    }

    .footer__left {
        justify-self: start;
        font-size: 14px;
        letter-spacing: 0.2px;
        white-space: nowrap;
        opacity: 0.9;
    }

    .footer__middle {
        justify-self: center;
        min-width: 160px;
    }

    .footer__right {
        justify-self: end;
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
    }

    .footer__iconLink {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 12px;
        color: var(--color);
        text-decoration: none;
    }

    .footer__iconLink:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 4px;
    }

    .footer__icon {
        width: 20px;
        height: 20px;

        /* This is the key part */
        filter: none;
        color: var(--color);
    }

    /* Desktop-only */
    @media (max-width: 900px) {
        .footer {
            display: none;
        }
    }
</style>
