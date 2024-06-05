<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl md:p-6 sm:p-4">
      <div class="flex justify-center gap-10 mb-10 md:items-center md:gap-5 sm:gap-4">
        <router-link to="registration" class="text-gray" exact-active-class="text-primary">
          Створити аккаунт
        </router-link>
        <router-link to="login" class="text-gray" exact-active-class="text-primary">
          Увійти
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>

<style scoped>
@media (max-width: 768px) {
  /* Планшет */
  .md\:p-6 {
    padding: 1.5rem; /* 24px */
  }
  .md\:flex-col {
    flex-direction: column;
  }
  .md\:items-center {
    align-items: center;
  }
  .md\:gap-5 {
    gap: 1.25rem; /* 20px */
  }
}

@media (max-width: 576px) {
  /* Мобільний телефон */
  .sm\:p-4 {
    padding: 1rem; /* 16px */
  }
  .sm\:gap-4 {
    gap: 1rem; /* 16px */
  }
}
</style>
