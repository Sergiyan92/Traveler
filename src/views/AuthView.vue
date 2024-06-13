<script setup>
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl md:p-6 sm:p-4">
      <LanguageSwitcher />
      <div class="flex justify-center flex-col gap-10 mb-10 md:items-center md:gap-5 sm:gap-4">
        <router-link
          to="registration"
          class="text-gray text-center"
          exact-active-class="text-primary"
        >
          {{ $t('create account') }}
        </router-link>
        <router-link to="login" class="text-gray text-center" exact-active-class="text-primary">
          {{ $t('signin') }}
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>
