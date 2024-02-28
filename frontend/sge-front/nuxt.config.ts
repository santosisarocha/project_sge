// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript:{
    typeCheck:true
  },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      include: ['Button', 'DataTable']
    }      
  },
  css:[
    'primeicons/primeicons.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    '~/assets/style/global-variables.scss',
    '~/assets/style/global-project.scss',
  ]
})
