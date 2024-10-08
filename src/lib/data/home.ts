import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Janzzen Matthew';

export const lastName = 'De Jesus';

export const description =
	'A mobile engineer focused on native iOS and Android development.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/janzzend' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/janzzend'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/27356777/janzzend'
	},
	{
		platform: Platform.Email,
		link: 'janzzen.dejesus@gmail.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/janzzend'
	},
	{
		platform: Platform.Twitter,
		link: 'https://x.com/janzzendj'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@janzzend'
	},
];

export const skills = getSkills('swift', 'kotlin', 'objc', 'java', 'android', 'ios');
