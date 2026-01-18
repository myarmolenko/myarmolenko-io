export type NavigationLink = Readonly<{
	name: string;
	href: string;
	rel?: string;
	target?: '_self' | '_blank';
}>;

export const defaultNavigationLinks: readonly NavigationLink[] = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contact', href: '/contact' }
];
