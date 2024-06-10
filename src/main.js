import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import { router } from './router'
import { TOKEN_KEY, authService } from './api/authService'

import App from './App.vue'

const token = localStorage.getItem(TOKEN_KEY)

if (token) {
  authService.setToken(token)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
