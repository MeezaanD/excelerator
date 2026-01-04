export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/icon', '@nuxtjs/color-mode'],
	css: ['~/assets/css/main.css'],
	colorMode: {
		preference: 'light',
		fallback: 'light',
		classSuffix: '',
	},
	components: true,
	alias: {
		'#components': '/components',
	},
	nitro: {
		preset: 'static',
	},
})