// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // app: {
    //     head: {
    //         link: [
    //             {
    //             rel: 'stylesheet',
    //             href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
    //             }
    //         ],
    //     }
    // },
    modules: [
        '@invictus.codes/nuxt-vuetify'
    ],
    ssr: false,
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
          // @TODO: list all vuetify options
        },
    
        moduleOptions: {
          /* nuxt-vuetify module options */
          treeshaking: true,
          useIconCDN: true,
    
          /* vite-plugin-vuetify options */
          styles: true,
          autoImport: true,
        }
    }
})