<script setup>
import IButton from '../IButton/IBotton.vue'
import IModal from '../Imodal/IModal.vue'
import { defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('cancel')">
    <div class="mb-4 text-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <IButton @click="emit('cancel')">{{ $t('reject') }}</IButton>
      <IButton variant="gradient" :is-loading="isLoading" @click="emit('confirm')">
        {{ $t('confirm') }}
      </IButton>
    </div>
    <div v-if="hasError" class="text-red-500">{{ $t('wrong') }}</div>
  </IModal>
</template>
