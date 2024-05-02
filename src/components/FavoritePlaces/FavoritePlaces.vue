<script setup>
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [Number, null]
  }
})

const emit = defineEmits(['place-clicked'])
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <FavoritPlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
      />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" variant="gradient">Додати маркер</IBotton>
  </div>
</template>
