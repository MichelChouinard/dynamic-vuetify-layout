import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import fr from 'vuetify/lib/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#325d88',
        secondary: '#79858b',
        accent: '#009688',
        error: '#B71C1C',
        warning: '#f47c3c',
        info: '#00bcd4',
        success: '#1B5E20'
      }
    }
  },
  lang: {
    locales: { fr },
    current: 'fr'
  }
})
