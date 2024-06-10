<script setup>
import IBotton from '@/components/IButton/IBotton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import mapPin from '../assets/img/map-pin.svg'
</script>

<template>
  <BaseLayout>
    <div class="text-center p-4 sm:p-6 md:p-10">
      <img class="inline mb-6 w-16 md:w-24 lg:w-32" :src="mapPin" alt="Map Pin" />
      <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-7">IT traveler</h1>
      <p class="leading-6 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-11">
        {{ $t('text greeting') }}
      </p>
      <IBotton to="/auth/registration">{{ $('greeting button') }}</IBotton>
    </div>
  </BaseLayout>
</template>

<style scoped>
/* Додаткові стилі при потребі */
</style>
