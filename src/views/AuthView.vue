<script setup>
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl md:p-6 sm:p-4">
      <LanguageSwitcher />
      <div class="flex justify-center gap-10 mb-10 md:items-center md:gap-5 sm:gap-4">
        <router-link to="registration" class="text-gray" exact-active-class="text-primary">
          {{ $t('create account') }}
        </router-link>
        <router-link to="login" class="text-gray" exact-active-class="text-primary">
          {{ $t('signin') }}
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>

<style scoped>
@media (max-width: 768px) {
  .md\:p-6 {
    padding: 1.5rem;
  }
  .md\:flex-col {
    flex-direction: column;
  }
  .md\:items-center {
    align-items: center;
  }
  .md\:gap-5 {
    gap: 1.25rem;
  }
}

@media (max-width: 576px) {
  .sm\:p-4 {
    padding: 1rem;
  }
  .sm\:gap-4 {
    gap: 1rem;
  }
}
</style>
