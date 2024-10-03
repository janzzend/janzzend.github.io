import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Science',
		description: '',
		location: 'Angeles, Philippines',
		logo: Assets.CCA,
		name: '',
		organization: 'City College of Angeles',
		period: { from: new Date(2012, 5, 1), to: new Date(2016, 5, 0) },
		shortDescription: '',
		slug: 'cca',
		subjects: ['Dean\'s Lister', 'Special Citation for Outstanding Research Output']
	}
];

export const title = 'Education';
