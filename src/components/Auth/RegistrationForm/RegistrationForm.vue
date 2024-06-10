<script setup>
import IBotton from '@/components/IButton/IBotton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})
const emit = defineEmits(['submit'])
const userDate = reactive({
  name: '',
  password: '',
  email: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userDate))">
    <IInput class="mb-4" :label="$t('name')" v-model="userDate.name" />
    <IInput
      class="mb-4"
      :label="$t('email')"
      placeholder="test@test.com"
      v-model="userDate.email"
    />
    <IInput
      :label="$t('password')"
      type="password"
      v-model="userDate.password"
      :placeholder="$t('password')"
    />
    <IBotton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Створити аккаунт</IBotton
    >
  </form>
</template>
