import router from '@/router'
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import Toast, { type PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import '@/assets/base.css'

const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const toastOptions: PluginOptions = {}
app.use(pinia)
app.use(router)
app.use(head)
app.use(Toast, toastOptions)

app.mount('#app')
