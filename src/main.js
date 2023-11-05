import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "@/lang/index.js"

import vant from "vant"
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)

app.use(vant)

app.use(createPinia())
app.use(router)

app.mount('#app')
