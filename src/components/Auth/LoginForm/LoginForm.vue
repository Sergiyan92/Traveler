<script setup>
import { reactive, watch } from 'vue'
import FormContainer from '../FormContainer.vue'
import IInput from '@/components/IInput/IInput.vue'
import IBotton from '@/components/IButton/IBotton.vue'

const emit = defineEmits(['submit'])
const userDate = reactive({
  password: '',
  email: ''
})
watch(
  userDate,
  () => {
    console.log('changed')
  },
  { immediate: true }
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userDate)">
    <IInput
      class="mb-4"
      placeholder="test@test.com"
      v-model="userDate.email"
      label="Електронна пошта"
    />
    <IInput
      class="mb-4"
      type="password"
      placeholder="Пароль"
      v-model="userDate.password"
      label="Пароль"
    />
    <IBotton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IBotton>
  </FormContainer>
</template>
