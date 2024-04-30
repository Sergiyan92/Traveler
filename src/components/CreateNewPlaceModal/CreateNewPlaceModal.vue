<script setup>
import { computed, reactive } from 'vue'
import IBotton from '../IButton/IBotton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../Imodal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const props = defineProps({
  isOpen: {
    defaul: false,
    type: Boolean
  }
})

const emit = defineEmits(['close', 'submit'])
const formData = reactive({
  title: '',
  descr: '',
  img: ''
})

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form class="min-w-[420px]" @submit.prevent="emit('submit', formData)">
      <div class="flex gap-1 justify-center font-bold text-center mb-10">
        <MarkerIcon /> Додати маркер
      </div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput label="Опис" type="textarea" class="mb-2" v-model="formData.descr" />
      <div class="flex gap-2 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="img" class="w-8 h-8 object-cover" />
        <InputImage class="" @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <IBotton class="w-full" variant="gradient">Додати</IBotton>
    </form>
  </IModal>
</template>
