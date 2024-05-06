<script setup>
import { reactive } from 'vue'
import IInput from '@/components/IInput/IInput.vue'
import IBotton from '@/components/IButton/IBotton.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})
const emit = defineEmits(['submit'])
const userDate = reactive({
  password: '',
  email: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', userDate)">
    <IInput
      class="mb-4"
      placeholder="test@test.com"
      v-model="userDate.email"
      label="Електронна пошта"
    />
    <IInput type="password" placeholder="Пароль" v-model="userDate.password" label="Пароль" />
    <IBotton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading">
      Увійти
    </IBotton>
  </form>
</template>
