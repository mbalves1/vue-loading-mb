import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { loading } from './loading/index'

loadFonts()

createApp(App)
  .use(loading, {
    options1: true
  })
  .use(vuetify)
  .mount('#app')
