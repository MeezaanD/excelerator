export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  components: true,
  alias: {
    '#components': '/components',
  },
  nitro: {
    preset: 'static',
  },
})