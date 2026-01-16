<script lang="ts">
    type NavLink = Readonly<{
        name: string;
        href: string;
        rel?: string;
        target?: "_self" | "_blank";
    }>;

    export let links: readonly NavLink[] = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];
</script>

<nav class="nav {$$props.class}" aria-label="Primary navigation">
    <div class="nav__container">
        <ul class="nav__list">
            {#each links as link (link.href)}
                <li>
                    <a
                        href={link.href}
                        target={link.target}
                        rel={link.target === "_blank"
                            ? (link.rel ?? "noopener noreferrer")
                            : link.rel}
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
        position: sticky;
        top: 0;
        z-index: 50;
        background: transparent;
        padding: 16px 0;
    }

    .nav__container {
        width: min(75vw, 1100px);
        margin: 0 auto;
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
