import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'A mobile engineer focused on native iOS and Android development, with 8+ years of experience building user-centric mobile solutions.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/janzzend', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/janzzend', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://x.com/janzzendj', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:janzzen.dejesus@gmail.com', icon: 'i-carbon-at' },
		{ label: 'StackOverflow', href: 'https://stackoverflow.com/users/27356777/janzzend', icon: 'i-carbon-overflow-menu-horizontal' },
		{ label: 'YouTube', href: 'https://www.youtube.com/@janzzend', icon: 'i-carbon-logo-youtube' }
	]
};

const carousel: Array<Skill> = getSkills('swift', 'kotlin', 'objc', 'java', 'android', 'ios');

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
