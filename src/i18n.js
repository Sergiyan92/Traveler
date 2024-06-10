import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

const messages = {
  en,
  ua
}

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages
})

export default i18n
