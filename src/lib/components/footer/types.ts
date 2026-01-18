import linkedinIcon from '$lib/assets/icons/linkedin.svg';
import githubIcon from '$lib/assets/icons/github.svg';
import emailIcon from '$lib/assets/icons/email.svg';

export type SocialLink = Readonly<{
	name: string;
	href: string;
	icon: string;
	label?: string;
}>;

export const defaultSocials: readonly SocialLink[] = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/maksym-yarmolenko/',
		icon: linkedinIcon
	},
	{
		name: 'GitHub',
		href: 'https://github.com/myarmolenko',
		icon: githubIcon
	},
	{
		name: 'Email',
		href: 'mailto:maksymyarmolenk@gmail.com',
		icon: emailIcon
	}
];
