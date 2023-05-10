import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import gsap from "gsap"
import '@/assets/scss/main.scss';
import VueStatic from 'vue-static'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowsSpin, faCode, faLaptopCode, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App);

app.use(store);
app.use(gsap);
library.add(faBars, faGithub, faLinkedin, faArrowsSpin, faCode, faLaptopCode, faLaptop)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueStatic);
app.mount('#app');
