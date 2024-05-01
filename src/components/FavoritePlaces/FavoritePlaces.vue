<script setup>
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>

    <slot name="label"></slot>
    <slot name="list">
      <FavoritPlace v-for="n in 4" :key="n" />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" variant="gradient">Додати маркер</IBotton>
  </div>
</template>
