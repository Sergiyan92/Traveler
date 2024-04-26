<script setup>
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'

import { ref } from 'vue'
import IInput from '../IInput/IInput.vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <div class="py-5">
      <IInput label="Some label" />
    </div>
    <slot name="label"></slot>
    <slot name="list">
      <FavoritPlace v-for="n in 4" :key="n" />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant"
      >Додати маркер</IBotton
    >
  </div>
</template>
