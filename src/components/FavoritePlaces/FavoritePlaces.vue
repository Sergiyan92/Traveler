<script setup>
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'

import { ref, reactive } from 'vue'

const counter = ref(0) // {value:0}
const user = ref({ name: 'Tom', age: 20 })
const superUser = reactive({ name: 'Super Name', age: 1000 })

const increment = () => {
  counter.value += 1
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray">User name: {{ user.name }}</div>
    <div class="text-gray">Super User name: {{ superUser.name }}</div>
    <div class="text-gray mb-4">Додані маркери ({{ counter }})</div>
    <slot name="label"></slot>
    <slot name="list">
      <FavoritPlace v-for="n in 4" :key="n" />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" variant="gradient" @click="increment">Додати маркер</IBotton>
  </div>
</template>
