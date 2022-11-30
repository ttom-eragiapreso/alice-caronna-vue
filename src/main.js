import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMugHot, faT, faO, faM } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faYoutube, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faInstagram, faYoutube, faSpotify, faSoundcloud, faHeart, faMugHot, faT, faO, faM)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
