<script setup>
import { useModal } from '@/composables/useModal'
import FavoritPlace from '../FavoritPlace/FavoritPlace.vue'
import IBotton from '../IButton/IBotton.vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import { computed, ref } from 'vue'
import { useMutation } from '@/composables/useMutation'
import { updateFavoritePlace } from '@/api/favorite-places'

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

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData) => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  }
})

const selectedId = ref(null)
const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const handleSubmit = (formData) => {
  updatePlace(formData)
}
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
        @edit="handleEditPlace(place.id)"
      />
      <EditPlaceModal
        :is-open="isEditOpen"
        @close="closeEditModal"
        :is-loading="isLoading"
        :place="selectedItem"
        @submit="handleSubmit()"
      />
    </slot>
    <slot></slot>
    <IBotton class="w-full mt-10" variant="gradient" @click="emit('create')">
      Додати маркер
    </IBotton>
  </div>
</template>
