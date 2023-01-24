import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core"
import { faHtml5, faCss3, faJs, faVuejs, faBootstrap, faGitAlt, faGithub, faLaravel, faTwitterSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faShare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHtml5, faCss3, faJs, faVuejs, faBootstrap, faGitAlt, faGithub, faLaravel, faShare, faTwitterSquare, faLinkedin, faWhatsappSquare, faEnvelope)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
