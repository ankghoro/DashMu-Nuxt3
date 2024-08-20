// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
	vue: {  
		compilerOptions: {
			isCustomElement: (tag) => ['font-awesome-icon'].includes(tag),
			isCustomElement: (tag) => ['pieChart'].includes(tag)
		},
	},
	build: {
		transpile: ['chart.js']
	}
})
