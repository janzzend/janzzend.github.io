import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
//import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Platforms', slug: 'platform' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Integrations', slug: 'integration' }),
	defineSkillCategory({ name: 'Hardware', slug: 'hardware' }),
	defineSkillCategory({ name: 'Version Control', slug: 'version-control' }),
	defineSkillCategory({ name: 'Project Management', slug: 'projman' }),
	defineSkillCategory({ name: 'API', slug: 'api' }),
	defineSkillCategory({ name: 'Cloud Services', slug: 'cloud' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'ios',
		color: 'white',
		description: 'Apple’s mobile operating system, powering iPhone and iPad devices. It is known for its strong security, smooth user experience, and tight integration with other Apple products.',
		logo: Assets.Apple,
		name: 'iOS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: 'Google’s mobile operating system, used on a wide range of devices. Android is known for its flexibility, customization, and large user base.',
		logo: Assets.Android,
		name: 'Android',
		category: 'platform'
	}),
	defineSkill({
		slug: 'wearos',
		color: 'yellow',
		description: 'Google’s operating system designed for wearable devices like smartwatches, offering app integration and fitness tracking features.',
		logo: Assets.WearOS,
		name: 'Wear OS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'watchos',
		color: 'yellow',
		description: 'Apple’s operating system for the Apple Watch, offering fitness tracking, notifications, and seamless integration with iOS devices.',
		logo: Assets.WatchOS,
		name: 'Watch OS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'swift',
		color: 'orange',
		description: 'A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development, known for its safety features and performance.',
		logo: Assets.Swift,
		name: 'Swift',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'swiftui',
		color: 'blue',
		description: 'A declarative framework by Apple for building user interfaces across all Apple platforms with Swift.',
		logo: Assets.SwiftUI,
		name: 'Swift UI',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'blue',
		description: 'A modern, concise programming language for Android and JVM, known for its interoperability with Java and enhanced safety features.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: 'A versatile, object-oriented programming language, widely used for Android app development and backend systems.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'green',
		description: 'A popular high-level programming language, known for its simplicity, readability, and extensive library support.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: 'A server-side scripting language, primarily used for web development and creating dynamic web applications.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description: 'A modern, object-oriented programming language developed by Microsoft, widely used for Windows applications and game development.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'vbnet',
		color: 'blue',
		description: 'A simple, modern, object-oriented programming language developed by Microsoft, typically used for building Windows-based applications.',
		logo: Assets.VBNet,
		name: 'VB.NET',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'blue',
		description: 'A high-level, dynamic scripting language, primarily used for creating interactive web applications and front-end development.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'xcode',
		color: 'blue',
		description: 'Apple’s integrated development environment (IDE) for macOS, used to develop software for iOS, macOS, watchOS, and tvOS.',
		logo: Assets.Xcode,
		name: 'Xcode',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'studio',
		color: 'green',
		description: 'Google’s official IDE for Android app development, offering powerful tools and extensive integration for mobile developers.',
		logo: Assets.AndroidStudio,
		name: 'Android Studio',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'intellij',
		color: 'blue',
		description: 'A popular Java IDE by JetBrains, offering comprehensive tools and features for modern development, particularly for JVM-based languages.',
		logo: Assets.Intellij,
		name: 'Intellij',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: 'A lightweight but powerful code editor developed by Microsoft, widely used for front-end and back-end development.',
		logo: Assets.VSCode,
		name: 'Visual Studio Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'azure-devops',
		color: 'blue',
		description: 'A set of development tools from Microsoft for managing DevOps processes, including CI/CD pipelines, version control, and work tracking.',
		logo: Assets.Azure,
		name: 'Azure DevOps',
		category: 'devops'
	}),
	defineSkill({
		slug: 'xcode-cloud',
		color: 'blue',
		description: 'A continuous integration and delivery service, integrated within Xcode, used to build, test, and deliver iOS and macOS apps.',
		logo: Assets.XcodeCloud,
		name: 'Xcode Cloud',
		category: 'devops'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: 'A platform developed by Google for creating mobile and web applications, offering services such as database management, authentication, and analytics.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'integration'
	}),
	defineSkill({
		slug: 'stripe',
		color: 'purple',
		description: 'A popular platform for handling online payments and billing, offering a wide array of tools for managing financial transactions in web and mobile apps.',
		logo: Assets.Stripe,
		name: 'Stripe',
		category: 'integration'
	}),
	defineSkill({
		slug: 'judo',
		color: 'purple',
		description: 'A payment gateway designed to provide secure, streamlined in-app payment processing, primarily for mobile apps.',
		logo: Assets.Judo,
		name: 'Judo Pay',
		category: 'integration'
	}),
	defineSkill({
		slug: 'twilio',
		color: 'red',
		description: 'A cloud communications platform that allows developers to programmatically send and receive text messages, phone calls, and perform other communication tasks.',
		logo: Assets.Twilio,
		name: 'Twilio',
		category: 'integration'
	}),
	defineSkill({
		slug: 'zapier',
		color: 'orange',
		description: 'A tool that connects apps and automates workflows, allowing users to create automated actions between different services without needing to write code.',
		logo: Assets.Zapier,
		name: 'Zapier',
		category: 'integration'
	}),
	defineSkill({
		slug: 'gainsight',
		color: 'blue',
		description: 'A customer success platform that helps businesses manage customer relationships, drive product adoption, and reduce churn by providing insights and automating customer engagement workflows.',
		logo: Assets.Gainsight,
		name: 'Gainsight',
		category: 'integration'
	}),
	defineSkill({
		slug: 'xctest',
		color: 'blue',
		description: 'A customer success platform that helps businesses manage customer relationships, drive product adoption, and reduce churn by providing insights and automating customer engagement workflows.',
		logo: Assets.XCTest,
		name: 'XCTest',
		category: 'test'
	}),
	defineSkill({
		slug: 'strikt',
		color: 'blue',
		description: 'A customer success platform that helps businesses manage customer relationships, drive product adoption, and reduce churn by providing insights and automating customer engagement workflows.',
		logo: Assets.Strikt,
		name: 'Strikt',
		category: 'test'
	}),
	defineSkill({
		slug: 'coredata',
		color: 'blue',
		description: 'A persistence framework by Apple that allows developers to manage and store data locally in iOS, macOS, watchOS, and tvOS apps using an object graph management approach.',
		logo: Assets.CoreData,
		name: 'Core Data',
		category: 'db'
	}),
	defineSkill({
		slug: 'room',
		color: 'green',
		description: 'A persistence library for Android, part of the Android Jetpack, providing an abstraction layer over SQLite to allow more robust and easy database management.',
		logo: Assets.Room,
		name: 'Room',
		category: 'db'
	}),
	defineSkill({
		slug: 'realm',
		color: 'red',
		description: 'A mobile database solution that simplifies data handling for mobile apps, offering fast and easy-to-use data storage for iOS and Android apps.',
		logo: Assets.Realm,
		name: 'Realm',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: 'A relational database management system developed by Microsoft, designed to support a wide variety of data operations, including data analytics, transaction processing, and business intelligence.',
		logo: Assets.MSSQL,
		name: 'Microsoft SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'An open-source relational database management system (RDBMS), widely used for web applications, known for its speed, reliability, and ease of use.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'xml',
		color: 'orange',
		description: 'A markup language used to structure, store, and transport data, often used in web services and configuration files.',
		logo: Assets.XML,
		name: 'XML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'The standard markup language for creating web pages, forming the foundation of web content alongside CSS and JavaScript.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'A style sheet language used for describing the presentation of a document written in HTML, responsible for the visual layout and design of web pages.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'figma',
		color: 'red',
		description: 'A web-based design tool used for UI/UX design and prototyping, popular for its collaborative features and vector-based design interface.',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'xd',
		color: 'red',
		description: 'A UI/UX design tool developed by Adobe, used for designing and prototyping user interfaces for web and mobile apps.',
		logo: Assets.XD,
		name: 'Adobe XD',
		category: 'design'
	}),
	defineSkill({
		slug: 'aspnet',
		color: 'blue',
		description: 'A web application framework developed by Microsoft, used for building dynamic websites, applications, and services using .NET.',
		logo: Assets.ASP,
		name: 'ASP.NET',
		category: 'framework'
	}),
	defineSkill({
		slug: 'cake',
		color: 'red',
		description: 'A PHP framework for rapid development, providing a structured framework that enables developers to build robust web applications quickly.',
		logo: Assets.Cake,
		name: 'CakePHP',
		category: 'framework'
	}),
	defineSkill({
		slug: 'strapi',
		color: 'blue',
		description: 'An open-source headless CMS that provides a customizable API and allows for quick content management integration into various platforms.',
		logo: Assets.Strapi,
		name: 'Strapi',
		category: 'framework'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
