<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import IBotton from '../IButton/IBotton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../Imodal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const props = defineProps({
  isOpen: {
    defaul: false,
    type: Boolean
  },
  isLoading: {
    defaul: false,
    type: Boolean
  },
  hasError: {
    defaul: false,
    type: Boolean
  }
})

const emit = defineEmits(['close', 'submit'])
const { t } = useI18n()
const formData = reactive({
  title: '',
  descr: '',
  img: ''
})

const handleUpload = (url) => {
  formData.img = url
}

const resetForm = () => {
  formData.descr = ''
  formData.img = ''
  formData.title = ''
}

const uploadText = computed(() => {
  return formData.img ? t('change photo') : t('add photo')
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form class="min-w-[420px]" @submit.prevent="emit('submit', formData, resetForm)">
      <div class="flex gap-1 justify-center font-bold text-center mb-10">
        <MarkerIcon /> {{ $t('add marker') }}
      </div>
      <IInput :label="$t('location')" class="mb-4" v-model="formData.title" />
      <IInput :label="$t('description')" type="textarea" class="mb-2" v-model="formData.descr" />
      <div class="flex gap-2 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="img" class="w-8 h-8 object-cover" />
        <InputImage class="" @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <IBotton class="w-full" variant="gradient" :is-loading="props.isLoading">
        {{ $t('add') }}
      </IBotton>
      <div v-if="props.hasError" class="text-red-500">{{ $t('wrong') }}</div>
    </form>
  </IModal>
</template>
