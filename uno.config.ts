import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'src/**/*.{js,ts}'
			]
		}
	},
	safelist: [
		// Nav bar icons
		'i-carbon-code',
		'i-carbon-assembly-cluster',
		'i-carbon-cube',
		'i-carbon-development',
		'i-carbon-education',
		'i-carbon-document',
		'i-carbon-search',
		'i-carbon-moon',
		'i-carbon-sun',
		'i-carbon-menu',
		// Home page social icons
		'i-carbon-logo-github',
		'i-carbon-logo-linkedin',
		'i-carbon-logo-twitter',
		'i-carbon-at',
		'i-carbon-overflow-menu-horizontal',
		'i-carbon-logo-youtube',
		// Card icons
		'i-carbon-time',
		'i-carbon-building',
		'i-carbon-hourglass',
		'i-carbon-calendar',
		'i-carbon-location',
		// Other commonly used icons
		'i-carbon-arrow-left',
		'i-carbon-arrow-right',
		'i-carbon-chevron-left',
		'i-carbon-chevron-right',
		'i-carbon-close',
		'i-carbon-link',
		'i-carbon-launch',
		'i-carbon-user',
		'i-carbon-email',
		'i-carbon-phone'
	],
	presets: [
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
					italic: true,
					provider: 'google'
				}
			}
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
				'font-size': '1em'
			}
		})
	]
});
