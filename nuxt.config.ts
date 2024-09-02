// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-06-01',
	devtools: { enabled: true },
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'DashMU NUXT 3'
		}
	},
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@/assets/styles/main.css',
		'@/assets/styles/plugins.css',
		'@/assets/styles/responsive.css',
		'@/assets/styles/effect.css',
		'@/assets/styles/tiptap.css'
	],
	plugins: [
		{ src:  '@/plugins/fontawesome.ts', mode: 'client' },
		{ src:  '@/plugins/chart.ts', mode: 'client' }
	],
	build: {
		transpile: [
			'@fortawesome/vue-fontawesome',
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-solid-svg-icons',
			'@vuepic/vue-datepicker'
		]
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['pieChart'].includes(tag)
		},
	},
	build: {
		transpile: ['chart.js']
	}
})
