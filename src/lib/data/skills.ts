import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Platforms', slug: 'platform' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Architectures', slug: 'architecture' }),
	defineSkillCategory({ name: 'Design Patterns', slug: 'pattern' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'API', slug: 'api' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'Hardware Integration', slug: 'hardware' }),
	defineSkillCategory({ name: 'Integrations', slug: 'integration' }),
	defineSkillCategory({ name: 'Cloud Services', slug: 'cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Version Control', slug: 'version-control' }),
	defineSkillCategory({ name: 'Lint', slug: 'lint' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Project Management', slug: 'projman' }),
	defineSkillCategory({ name: 'Analytics', slug: 'analytics' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'In Progress...', slug: 'progress' })
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

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

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

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'kmp',
		color: 'orange',
		description: 'Kotlin Multi Platform (KMP) is a feature of Kotlin that allows developers to write code that runs on multiple platforms, including iOS, Android, and the web, sharing common business logic while maintaining platform-specific code for UI and APIs.',
		logo: Assets.KMP,
		name: 'Kotlin Multi Platform',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tca',
		color: 'purple',
		description: 'The Composable Architecture (TCA) is a library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind. It is commonly used in Swift/SwiftUI development for state management and side effects.',
		logo: Assets.Unknown,
		name: 'TCA',
		category: 'architecture'
	}),
	defineSkill({
		slug: 'ios',
		color: 'white',
		description: 'Apple\'s mobile operating system, powering iPhone and iPad devices. It is known for its strong security, smooth user experience, and tight integration with other Apple products.',
		logo: Assets.Apple,
		name: 'iOS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: 'Google\'s mobile operating system, used on a wide range of devices. Android is known for its flexibility, customization, and large user base.',
		logo: Assets.Android,
		name: 'Android',
		category: 'platform'
	}),
	defineSkill({
		slug: 'wearos',
		color: 'yellow',
		description: 'Google\'s operating system designed for wearable devices like smartwatches, offering app integration and fitness tracking features.',
		logo: Assets.WearOS,
		name: 'Wear OS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'watchos',
		color: 'yellow',
		description: 'Apple\'s operating system for the Apple Watch, offering fitness tracking, notifications, and seamless integration with iOS devices.',
		logo: Assets.WatchOS,
		name: 'Watch OS',
		category: 'platform'
	}),
	defineSkill({
		slug: 'objc',
		color: 'orange',
		description: 'Objective-C is a general-purpose, object-oriented programming language that was the main language used by Apple for macOS and iOS development before the introduction of Swift. It is known for its dynamic runtime and compatibility with C and C++.',
		logo: Assets.ObjC,
		name: 'Objective-C',
		category: 'pro-lang'
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
		slug: 'java',
		color: 'orange',
		description: 'A versatile, object-oriented programming language, widely used for Android app development and backend systems.',
		logo: Assets.Java,
		name: 'Java',
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
		slug: 'compose',
		color: 'green',
		description: 'A modern Android UI toolkit from Google for building native user interfaces in a declarative way, using Kotlin to create dynamic and responsive layouts.',
		logo: Assets.Compose,
		name: 'Jetpack Compose',
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
		color: 'yellow',
		description: 'A high-level, dynamic scripting language, primarily used for creating interactive web applications and front-end development.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'xcode',
		color: 'blue',
		description: 'Apple\'s integrated development environment (IDE) for macOS, used to develop software for iOS, macOS, watchOS, and tvOS.',
		logo: Assets.Xcode,
		name: 'Xcode',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'studio',
		color: 'green',
		description: 'Google\'s official IDE for Android app development, offering powerful tools and extensive integration for mobile developers.',
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
		slug: 'ghactions',
		color: 'gray',
		description: 'GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline directly from your GitHub repository.',
		logo: Assets.Unknown,
		name: 'GitHub Actions',
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
		slug: 'signalr',
		color: 'blue',
		description: 'A library for ASP.NET that makes it incredibly simple to add real-time web functionality to applications.',
		logo: Assets.Unknown,
		name: 'SignalR',
		category: 'integration'
	}),
	defineSkill({
		slug: 'actioncable',
		color: 'red',
		description: 'A Ruby on Rails framework for integrating WebSockets with Ruby on Rails applications.',
		logo: Assets.Unknown,
		name: 'Action Cable',
		category: 'integration'
	}),
	defineSkill({
		slug: 'pusher',
		color: 'blue',
		description: 'A hosted service that makes it easy to add real-time data and functionality to web and mobile applications.',
		logo: Assets.Unknown,
		name: 'Pusher',
		category: 'integration'
	}),
	defineSkill({
		slug: 'ganalytics',
		color: 'orange',
		description: 'A web analytics service offered by Google that tracks and reports website traffic.',
		logo: Assets.Unknown,
		name: 'Google Analytics',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'gainsight',
		color: 'blue',
		description: 'A customer success platform that helps businesses manage customer relationships, drive product adoption, and reduce churn by providing insights and automating customer engagement workflows.',
		logo: Assets.Gainsight,
		name: 'Gainsight',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'xctest',
		color: 'blue',
		description: 'A testing framework by Apple used for writing unit tests, performance tests, and UI tests for iOS, macOS, watchOS, and tvOS applications, integrated within Xcode.',
		logo: Assets.XCTest,
		name: 'XCTest',
		category: 'test'
	}),
	defineSkill({
		slug: 'strikt',
		color: 'blue',
		description: 'A fluent assertion library for Kotlin, designed to make writing assertions in tests more readable and maintainable.',
		logo: Assets.Strikt,
		name: 'Strikt',
		category: 'test'
	}),
	defineSkill({
		slug: 'swifttesting',
		color: 'orange',
		description: 'A modern testing framework by Apple for Swift, providing expressive APIs for writing unit tests with improved syntax and better integration with Swift language features.',
		logo: Assets.Unknown,
		name: 'Swift Testing',
		category: 'test'
	}),
	defineSkill({
		slug: 'snapshottesting',
		color: 'purple',
		description: 'A testing technique that captures the rendered output of UI components and compares them against stored reference images to detect visual regressions.',
		logo: Assets.Unknown,
		name: 'Snapshot Testing',
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
		slug: 'sqlite',
		color: 'blue',
		description: 'A lightweight, serverless, self-contained SQL database engine. SQLite is widely used in mobile applications for local data storage due to its simplicity and reliability.',
		logo: Assets.Unknown,
		name: 'SQLite',
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
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'A distributed version control system for tracking changes in source code during software development.',
		logo: Assets.Unknown,
		name: 'Git',
		category: 'version-control'
	}),
	defineSkill({
		slug: 'svn',
		color: 'blue',
		description: 'A centralized version control system for managing and tracking changes in source code.',
		logo: Assets.Unknown,
		name: 'Subversion',
		category: 'version-control'
	}),
	defineSkill({
		slug: 'mercurial',
		color: 'gray',
		description: 'A distributed version control system designed for efficient handling of projects of any size.',
		logo: Assets.Unknown,
		name: 'Mercurial',
		category: 'version-control'
	}),
	defineSkill({
		slug: 'mvc',
		color: 'blue',
		description: 'Model-View-Controller architecture pattern that separates application logic into three interconnected components.',
		logo: Assets.Unknown,
		name: 'MVC',
		category: 'pattern'
	}),
	defineSkill({
		slug: 'mvvm',
		color: 'purple',
		description: 'Model-View-ViewModel architecture pattern commonly used in mobile development to separate business logic from UI.',
		logo: Assets.Unknown,
		name: 'MVVM',
		category: 'pattern'
	}),
	defineSkill({
		slug: 'mvp',
		color: 'green',
		description: 'Model-View-Presenter architecture pattern that facilitates separation of concerns in application development.',
		logo: Assets.Unknown,
		name: 'MVP',
		category: 'pattern'
	}),
	defineSkill({
		slug: 'viper',
		color: 'orange',
		description: 'View-Interactor-Presenter-Entity-Router architecture pattern commonly used in iOS development for clean architecture.',
		logo: Assets.Unknown,
		name: 'VIPER',
		category: 'pattern'
	}),
	defineSkill({
		slug: 'wifi',
		color: 'blue',
		description: 'Wireless networking technology for connecting devices and enabling data communication.',
		logo: Assets.Unknown,
		name: 'WiFi',
		category: 'hardware'
	}),
	defineSkill({
		slug: 'bluetooth',
		color: 'blue',
		description: 'Wireless technology standard for exchanging data over short distances between devices.',
		logo: Assets.Unknown,
		name: 'Bluetooth',
		category: 'hardware'
	}),
	defineSkill({
		slug: 'gps',
		color: 'green',
		description: 'Global Positioning System for satellite-based navigation and location tracking.',
		logo: Assets.Unknown,
		name: 'GPS',
		category: 'hardware'
	}),
	defineSkill({
		slug: 'nfc',
		color: 'blue',
		description: 'Near Field Communication technology for short-range wireless communication between devices.',
		logo: Assets.Unknown,
		name: 'NFC',
		category: 'hardware'
	}),
	defineSkill({
		slug: 'audio',
		color: 'purple',
		description: 'Audio processing and integration in mobile applications.',
		logo: Assets.Unknown,
		name: 'Audio',
		category: 'hardware'
	}),
	defineSkill({
		slug: 'rest',
		color: 'green',
		description: 'Representational State Transfer architectural style for designing networked applications.',
		logo: Assets.Unknown,
		name: 'REST',
		category: 'api'
	}),
	defineSkill({
		slug: 'odata',
		color: 'blue',
		description: 'Open Data Protocol for building and consuming RESTful APIs.',
		logo: Assets.Unknown,
		name: 'OData',
		category: 'api'
	}),
	defineSkill({
		slug: 'soap',
		color: 'blue',
		description: 'Simple Object Access Protocol for exchanging structured information in web services.',
		logo: Assets.Unknown,
		name: 'SOAP',
		category: 'api'
	}),
	defineSkill({
		slug: 'graphql',
		color: 'pink',
		description: 'A query language for APIs and a runtime for executing those queries with your existing data.',
		logo: Assets.Unknown,
		name: 'GraphQL',
		category: 'api'
	}),
	defineSkill({
		slug: 'ktlint',
		color: 'purple',
		description: 'An anti-bikeshedding Kotlin linter with built-in formatter.',
		logo: Assets.Unknown,
		name: 'KTLint',
		category: 'lint'
	}),
	defineSkill({
		slug: 'swiftlint',
		color: 'orange',
		description: 'A tool to enforce Swift style and conventions.',
		logo: Assets.Unknown,
		name: 'SwiftLint',
		category: 'lint'
	}),
	defineSkill({
		slug: 'swiftformat',
		color: 'orange',
		description: 'A code formatting tool for Swift that automatically reformats Swift code to follow style guidelines.',
		logo: Assets.Unknown,
		name: 'SwiftFormat',
		category: 'lint'
	}),
	defineSkill({
		slug: 'spotless',
		color: 'green',
		description: 'A general-purpose code formatter for Kotlin, Java, and other languages. Commonly used in Android projects to enforce consistent code style.',
		logo: Assets.Unknown,
		name: 'Spotless',
		category: 'lint'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description: 'A project management tool for agile teams to plan, track, and manage work.',
		logo: Assets.Unknown,
		name: 'Jira',
		category: 'projman'
	}),
	defineSkill({
		slug: 'clickup',
		color: 'purple',
		description: 'A productivity platform for teams to manage projects, tasks, and workflow.',
		logo: Assets.Unknown,
		name: 'ClickUp',
		category: 'projman'
	}),
	defineSkill({
		slug: 'asana',
		color: 'coral',
		description: 'A web and mobile application designed to help teams organize, track, and manage their work.',
		logo: Assets.Unknown,
		name: 'Asana',
		category: 'projman'
	}),
	defineSkill({
		slug: 'trello',
		color: 'blue',
		description: 'A visual collaboration tool that creates a shared perspective on any project.',
		logo: Assets.Unknown,
		name: 'Trello',
		category: 'projman'
	}),
	defineSkill({
		slug: 'redmine',
		color: 'red',
		description: 'A flexible project management web application.',
		logo: Assets.Unknown,
		name: 'Redmine',
		category: 'projman'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: 'Microsoft\'s cloud computing service for building, testing, deploying, and managing applications.',
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'gcloud',
		color: 'blue',
		description: 'Google\'s suite of cloud computing services.',
		logo: Assets.Unknown,
		name: 'Google Cloud',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon\'s comprehensive cloud computing platform.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'heroku',
		color: 'purple',
		description: 'A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
		logo: Assets.Unknown,
		name: 'Heroku',
		category: 'cloud'
	}),
	defineSkill({
		slug: 'ghpages',
		color: 'gray',
		description: 'A static site hosting service from GitHub.',
		logo: Assets.Unknown,
		name: 'GitHub Pages',
		category: 'cloud'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
