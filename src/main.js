import { createApp } from 'vue'
//import App from './App.vue'
import './assets/base.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { RiHome2Fill, HiSolidEmojiHappy, LaLessThanSolid, FaCalendarAlt } from 'oh-vue-icons/icons'

addIcons(RiHome2Fill, HiSolidEmojiHappy, LaLessThanSolid, FaCalendarAlt)

import router from './router'
//import TestApp from './TestApp.vue'
import App from './App.vue'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')
