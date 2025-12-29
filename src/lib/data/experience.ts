import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'mobile-contractor',
		company: 'Independent Contractor',
		description: 'iOS and Android Developer working with multiple clients on diverse mobile projects. Specialized in native iOS and Android development using modern frameworks including SwiftUI and Jetpack Compose. Expertise in integrating third-party APIs, payment gateways, cloud services, and delivering scalable, user-centric mobile solutions.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2018, 0, 1) },
		skills: getSkills('android', 'ios', 'swift', 'swiftui', 'kotlin', 'compose', 'java', 'firebase', 'stripe', 'twilio', 'gainsight', 'strapi', 'figma', 'xd'),
		name: 'Mobile Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'iOS and Android developer working with multiple clients on diverse mobile projects.'
	},
	{
		slug: 'mobile-scsi',
		company: 'Security Communication Solutions International',
		description: 'Developed security panel management applications for iOS, Android and WearOS. Implemented arm/disarm functionality, real-time status monitoring, alarm reporting, and biometric authentication. Built CMS and DTU management tools with I/O port control, signal strength monitoring, and wearable emergency duress applications.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Clarkfield, Pampanga (Hybrid)',
		period: { from: new Date(2021, 7, 1), to: new Date(2024, 6, 1) },
		skills: getSkills('swift', 'kotlin', 'java', 'wearos', 'android', 'ios', 'firebase', 'bluetooth', 'nfc', 'wifi'),
		name: 'Mobile Engineer',
		color: 'blue',
		links: [],
		logo: Assets.SCSI,
		shortDescription: 'iOS, Android and Wearables Developer building security and safety applications.'
	},
	{
		slug: 'mobile-agile',
		company: '1080 Agile Pty Ltd',
		description: 'Developed mobile applications for workforce management platform. Built employee self-service solutions for timesheet submission, payroll management, and profile management. Integrated native Android applications with HCMevolve Platform backend systems.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Makati, NCR (On-site)',
		period: { from: new Date(2019, 5, 1), to: new Date(2021, 7, 1) },
		skills: getSkills('kotlin', 'java', 'android', 'room', 'firebase'),
		name: 'Mobile Engineer',
		color: 'blue',
		links: [],
		logo: Assets.TenEighty,
		shortDescription: 'Android Developer building workforce management mobile applications.'
	},
	{
		slug: 'mobile-cloudstaff',
		company: 'Cloudstaff Inc.',
		description: 'Developed internal productivity applications including task management, timekeeping, and rewards systems. Built AI-powered enterprise chatbot using Python and JavaScript with natural language processing. Developed CakePHP web portal and customized communication platforms with video conferencing integration.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Angeles, Pampanga (On-site)',
		period: { from: new Date(2016, 3, 1), to: new Date(2019, 4, 1) },
		skills: getSkills('android', 'ios', 'swift', 'kotlin', 'java', 'php', 'python', 'javascript', 'cake', 'html', 'css', 'mysql', 'realm', 'room', 'firebase'),
		name: 'Mobile, Web and ML Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Cloudstaff,
		shortDescription: 'iOS, Android, Chat bot, and Web Developer building productivity and communication platforms.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
