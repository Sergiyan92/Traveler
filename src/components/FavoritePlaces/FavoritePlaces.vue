<script setup>
import { useModal } from '@/composables/useModal'
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [String, null]
  }
})

const emit = defineEmits(['place-clicked', 'create'])
const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-gray mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <div v-if="items.length === 0">Список порожній</div>
      <FavoritPlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
        @edit="openEditModal"
      />
      <EditPlaceModal :is-open="isEditOpen" @close="closeEditModal" />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IBotton>
  </div>
</template>
