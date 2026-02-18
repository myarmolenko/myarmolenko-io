export type NavigationLink = Readonly<{
	name: string;
	href: string;
	rel?: string;
	target?: '_self' | '_blank';
}>;

export const defaultNavigationLinks: readonly NavigationLink[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'About', href: '/about' }
];
