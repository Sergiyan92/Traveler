<script setup>
import IBotton from '@/components/IButton/IBotton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])
const userDate = reactive({
  name: '',
  password: '',
  email: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userDate))">
    <IInput class="mb-4" label="Повне ім'я" v-model="userDate.name" />
    <IInput
      type="email"
      class="mb-4"
      label="Електронна пошта"
      placeholder="test@test.com"
      v-model="userDate.email"
    />
    <IInput label="Пароль" type="password" v-model="userDate.password" />
    <IBotton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IBotton>
  </form>
</template>
