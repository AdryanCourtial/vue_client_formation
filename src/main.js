import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './/index.css'
import VWave from 'v-wave'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VWave, {
    color: 'red',
    initialOpacity: 0.5,
    easing: 'ease-in'
  })

app.mount('#app')
