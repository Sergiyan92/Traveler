<script setup>
import { useI18n } from 'vue-i18n'
import EnglishIcon from './EnglishIcon.vue'
import UkraineIcon from './UkraineIcon.vue'
const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}
</script>

<template>
  <div class="flex gap-2 pl-2 justify-center">
    <button @click="changeLanguage('en')">
      <EnglishIcon style="width: 30px; height: 15px" />
    </button>
    <button @click="changeLanguage('ua')">
      <UkraineIcon style="width: 30px; height: 15px" />
    </button>
  </div>
</template>
