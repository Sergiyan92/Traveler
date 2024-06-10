<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}
</script>

<template>
  <div class="flex gap-2">
    <button
      @click="changeLanguage('en')"
      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
    >
      English
    </button>
    <button
      @click="changeLanguage('ua')"
      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
    >
      Українська
    </button>
  </div>
</template>
