<script setup>
import IButton from '../IButton/IBotton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../Imodal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import fallbackImage from '../../assets/img/ukraine.png'
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  },
  isLoading: {
    default: false,
    type: Boolean
  },
  place: Object
})
const emit = defineEmits(['close', 'submit'])

const formData = ref({
  id: '',
  title: '',
  descr: '',
  img: '',
  coordinates: null
})

watch(
  () => props.place,
  (newPlace) => {
    if (newPlace) {
      formData.value = {
        id: newPlace.id || '',
        title: newPlace.title || '',
        descr: newPlace.descr || '',
        img: newPlace.img || '',
        coordinates: newPlace.coordinates || null
      }
    }
  },
  { immediate: true }
)

const handleChangeImg = (img) => {
  formData.value.img = img
}

const handleSubmit = () => {
  emit('submit', { ...formData.value })
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
        <span class="font-bold text-base">Редагувати маркер</span>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              class="w-full h-[276px] object-cover rounded-md"
              :src="formData.img || fallbackImage"
              alt="place img"
            />
          </div>

          <div class="w-7/12">
            <IInput label="Локація" v-model="formData.title" required />
            <div class="mt-4">
              <IInput label="Опис" type="textarea" v-model="formData.descr" />
            </div>
            <IButton class="mt-10 w-full" variant="gradient" :is-loading="props.isLoading">
              Зберегти
            </IButton>
          </div>
        </div>

        <InputImage class="mt-3" @uploaded="handleChangeImg">
          <span class="text-xs">Натисніть тут, щоб додати інше фото</span>
        </InputImage>
      </form>
    </div>
  </IModal>
</template>
