import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'mobile-sourcepass',
		company: 'Sourcepass Inc.',
		description: 'Developed cross-platform support management app using SwiftUI and Kotlin. Implemented ticket tracking system, integrated Stripe for payment processing, and built knowledge base with search functionality. Integrated Gainsight for customer success management.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Melville, New York (Remote)',
		period: { from: new Date(2023, 6, 1) },
		skills: getSkills('android', 'ios', 'swiftui', 'kotlin', 'firebase', 'gainsight', 'stripe', 'figma'),
		name: 'Lead Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Sourcepass,
		shortDescription: 'Developed cross-platform support management app using SwiftUI and Kotlin.'
	},
	{
		slug: 'mobile-scsi',
		company: 'Security Communication Solutions International',
		description: 'Developed security panel management applications for iOS/Android and WearOS. Implemented arm/disarm functionality, real-time status monitoring, alarm reporting, and biometric authentication. Built CMS and DTU management tools with I/O port control and signal strength monitoring.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Clark, Philippines (Hybrid)',
		period: { from: new Date(2021, 7, 1), to: new Date(2024, 7, 1) },
		skills: getSkills('swift', 'kotlin', 'java', 'wearos', 'watchos', 'android', 'ios', 'firebase', 'xd'),
		name: 'Android / iOS / WearOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.SCSI,
		shortDescription: 'Built security panel management and wearable applications.'
	},
	{
		slug: 'mobile-aloware',
		company: 'Aloware Inc.',
		description: 'Built business communication app enabling calls and texts via business line. Integrated Twilio API for voice and messaging services, implemented secure authentication and user management systems.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Los Angeles, California (Remote)',
		period: { from: new Date(2022, 7, 1), to: new Date(2024, 3, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'firebase', 'twilio', 'figma'),
		name: 'Android / iOS Developer',
		color: 'green',
		links: [],
		logo: Assets.Aloware,
		shortDescription: 'Built business communication app with Twilio integration.'
	},
	{
		slug: 'mobile-dailypress',
		company: 'Daily Press Group',
		description: 'Developed multiple hospitality applications using native iOS/Android. Implemented membership management systems, rewards programs, and event information features. Built Strapi-based CMS backend with RESTful APIs.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'New South Wales, Australia (Remote)',
		period: { from: new Date(2022, 6, 1), to: new Date(2023, 4, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'java', 'strapi', 'php', 'firebase', 'xd'),
		name: 'Android / iOS / Backend Developer',
		color: 'blue',
		links: [],
		logo: Assets.DailyPress,
		shortDescription: 'Developed hospitality apps with membership and rewards features.'
	},
	{
		slug: 'mobile-chowis',
		company: 'Chowis Co. Ltd.',
		description: 'Developed professional hair and skin analysis applications. Implemented health parameter measurement algorithms, customer management systems, and comprehensive reporting features for skincare professionals.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Gyeonggi-do, South Korea (Remote)',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 3, 1) },
		skills: getSkills('kotlin', 'java', 'android'),
		name: 'Android Developer',
		color: 'blue',
		links: [],
		logo: Assets.Chowis,
		shortDescription: 'Built professional hair and skin analysis applications.'
	},
	{
		slug: 'mobile-peregrine',
		company: 'Peregrine Consulting Group',
		description: 'Built church leadership platform for iOS/Android. Implemented real-time chat functionality, sermon management system, and community engagement features with synchronized content delivery.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Chicago, Illinois (Remote)',
		period: { from: new Date(2021, 7, 1), to: new Date(2022, 0, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'firebase', 'xd'),
		name: 'Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Peregrine,
		shortDescription: 'Built church leadership platform with real-time features.'
	},
	{
		slug: 'mobile-chairseven',
		company: 'Chairseven Companies',
		description: 'Developed travel planning and expense management application. Implemented document management system, mileage tracking with GPS integration, and Stripe payment processing.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'New York, New York (Remote)',
		period: { from: new Date(2020, 10, 1), to: new Date(2021, 5, 1) },
		skills: getSkills('swift', 'kotlin', 'android', 'ios', 'stripe', 'firebase', 'xd'),
		name: 'Android / iOS Developer',
		color: 'blue',
		links: [],
		logo: Assets.Chairseven,
		shortDescription: 'Built travel planning and expense management app.'
	},
	{
		slug: 'mobile-agile',
		company: '1080 Agile Pty Ltd',
		description: 'Developed mobile applications for workforce management platform. Built employee self-service solutions for timesheet submission, payroll management, and profile management. Integrated native Android applications with HCMevolve Platform backend systems.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Makati, Philippines (On-site)',
		period: { from: new Date(2019, 5, 1), to: new Date(2021, 7, 1) },
		skills: getSkills('kotlin', 'java', 'android', 'room', 'firebase', 'twilio', 'figma'),
		name: 'Android Developer',
		color: 'blue',
		links: [],
		logo: Assets.TenEighty,
		shortDescription: 'Developed workforce management mobile applications.'
	},
	{
		slug: 'mobile-cloudstaff',
		company: 'Cloudstaff Inc.',
		description: 'Developed internal productivity applications including task management, timekeeping, and rewards systems. Built AI-powered enterprise chatbot using Python and JavaScript. Developed CakePHP web portal and customized communication platforms.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2016, 7, 1), to: new Date(2019, 4, 1) },
		skills: getSkills('android', 'ios', 'swift', 'kotlin', 'java', 'php', 'python', 'javascript', 'cake', 'html', 'css', 'mysql', 'realm', 'room', 'xd', 'firebase'),
		name: 'Android / iOS / Web / AI Chat Bot Developer',
		color: 'blue',
		links: [],
		logo: Assets.Cloudstaff,
		shortDescription: 'Built productivity apps, chatbot, and communication platforms.'
	},
	{
		slug: 'dotnet-filam',
		company: 'FilAm Software Technology Inc.',
		description: 'Developed specialty drug management web application for streamlining drug prescription and validation processes.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2016, 2, 1), to: new Date(2016, 6, 1) },
		skills: getSkills('csharp', 'css', 'html', 'javascript', 'aspnet', 'mssql'),
		name: 'Full Stack ASP.NET Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.FilAm,
		shortDescription: 'Built specialty drug management web application.'
	},
	{
		slug: 'dotnet-cloudstaff',
		company: 'Cloudstaff Inc.',
		description: 'Developed web applications using ASP.NET framework and Microsoft SQL Server for database management.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Clark, Philippines (On-site)',
		period: { from: new Date(2015, 10, 1), to: new Date(2016, 2, 1) },
		skills: getSkills('csharp', 'css', 'html', 'javascript', 'aspnet', 'mssql'),
		name: 'Full Stack ASP.NET Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.Cloudstaff,
		shortDescription: 'Intern building web applications with ASP.NET.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
