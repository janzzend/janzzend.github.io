import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	// Platforms
	Apple: asset('apple.png', 'apple-dark.png'),
	Android: asset('android.png'),
	WearOS: asset('wearos.png'),
	WatchOS: asset('watchos.png'),
	
	// Programming Languages
	Swift: asset('swift.svg'),
	SwiftUI: asset('swiftui.png'),
	ObjC: asset('objc.png'),
	Kotlin: asset('kotlin.svg'),
	Compose: asset('compose.png'),
	Java: asset('java.png'),
	Python: asset('python.png'),
	PHP: asset('php.svg'),
	Csharp: asset('csharp.svg'),
	VBNet: asset('vbnet.png'),
	JavaScript: asset('js.png'),
	TypeScript: asset('ts.png'),
	KMP: asset('kmp.png'),
	
	// Dev Tools
	Xcode: asset('xcode.png'),
	XcodeCloud: asset('xcode-cloud.png'),
	AndroidStudio: asset('android-studio.png'),
	Intellij: asset('intellij.png'),
	VSCode: asset('vscode.png'),
	
	// DevOps
	Azure: asset('azure.svg'),
	
	// Integrations
	Firebase: asset('firebase.png'),
	Stripe: asset('stripe.svg'),
	Judo: asset('judo.png'),
	Twilio: asset('twilio.png'),
	Zapier: asset('zapier.svg'),
	
	// Analytics
	Gainsight: asset('gainsight.png'),
	
	// Testing
	XCTest: asset('xctest.png'),
	Strikt: asset('strikt.png'),
	
	// Databases
	CoreData: asset('coredata.png'),
	Room: asset('room.svg'),
	Realm: asset('realm.png'),
	MSSQL: asset('mssql.png'),
	MySQL: asset('mysql.svg'),
	MongoDB: asset('mongodb.svg'),
	PostgreSQL: asset('postgres.png'),
	Redis: asset('redis.svg'),
	
	// Markup & Style
	XML: asset('xml.png'),
	HTML: asset('html.svg'),
	CSS: asset('css.svg'),
	
	// Design
	Figma: asset('figma.png'),
	XD: asset('xd.png'),
	
	// Frameworks
	ASP: asset('asp.png'),
	Cake: asset('cake.png'),
	Strapi: asset('strapi.png'),
	
	// Others
	AWS: asset('aws.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Svelte: asset('svelte.svg'),
	ReactJs: asset('react.svg'),
	VueJs: asset('vue.png'),
	Tailwind: asset('tailwind.svg'),
	Sass: asset('sass.png'),
	NodeJs: asset('node.png'),
	Unknown: asset('no-img.svg'),
	
	// Company Logos
	Cloudstaff: asset('cloudstaff.png'),
	FilAm: asset('filam.jpg'),
	TenEighty: asset('1080agile.jpeg'),
	Chairseven: asset('chairseven.png'),
	Peregrine: asset('peregrine.jpeg'),
	Chowis: asset('chowis.jpeg'),
	DailyPress: asset('dailypress.jpeg'),
	Aloware: asset('aloware.jpeg'),
	SCSI: asset('scsi.jpeg'),
	Sourcepass: asset('sourcepass.jpeg'),
	CCA: asset('cca.jpeg'),
	
	// Project Logos
	SpecialtyIQ: asset('specialtyiq.png'),
	Quest: asset('quest.webp'),
	SafeTTag: asset('safettag.webp'),
	Talk2: asset('aloware.webp'),
	TouchFooty: asset('touchfooty.webp'),
	CEX: asset('cex.webp'),
	Canterbury: asset('canterbury.webp'),
	Cronulla: asset('cronulla.webp'),
	DWSecurity: asset('dwsec.webp'),
	DWTech: asset('dwtech.webp'),
	DBHair: asset('dbhair.webp'),
	DBSkin: asset('dbskin.webp'),
	Portgrace: asset('portgrace.webp'),
	PortgraceLeader: asset('portgrace-leader.webp'),
	GoEC: asset('goec.jpeg'),
	Amore: asset('amore.webp'),
	Rewards: asset('rewards.webp'),
	StaffCentral: asset('staffcentral.webp'),
	Tap: asset('tap.webp'),
	Botley: asset('botley.webp'),
	Buzz: asset('buzz.webp'),
	Meetup: asset('meetup.webp'),
	Chat: asset('chat.webp'),
	TaskIt: asset('taskit.webp'),
	HCM: asset('hcm.webp')
};

export default Assets;
