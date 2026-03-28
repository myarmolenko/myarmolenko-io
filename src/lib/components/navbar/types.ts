export type NavigationLink = Readonly<{
	name: string;
	href: string;
	icon: string; // SVG path `d` attribute (24×24 viewBox)
	rel?: string;
	target?: '_self' | '_blank';
}>;

export function isActive(href: string, pathname: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname.startsWith(href);
}

export const defaultNavigationLinks: readonly NavigationLink[] = [
	{
		name: 'Home',
		href: '/',
		icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
	},
	{
		name: 'Projects',
		href: '/projects',
		icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
	},
	{
		name: 'About',
		href: '/about',
		icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
	}
];
