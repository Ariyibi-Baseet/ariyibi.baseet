import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// General styling
import "@/assets/css/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faBootstrap,
  faGitAlt,
  faGithub,
  faTwitterSquare,
  faLinkedin,
  faWhatsappSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShare,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faBootstrap,
  faGitAlt,
  faGithub,
  faShare,
  faTwitterSquare,
  faLinkedin,
  faWhatsappSquare,
  faEnvelope,
  faHeart,
  faReact
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
