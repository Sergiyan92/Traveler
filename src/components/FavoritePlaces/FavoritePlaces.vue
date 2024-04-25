<script setup>
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritPlace v-for="n in 4" :key="n" />
    <IBotton class="w-full mt-10">Додати маркер</IBotton>
  </div>
</template>
