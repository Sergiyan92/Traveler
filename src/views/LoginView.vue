<script setup>
import { ref } from 'vue'
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { login } from '@/api/users'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()
const handleLogin = async (userData) => {
  isLoading.value = true
  try {
    await login(userData)
    router.replace('/map')
  } catch (error) {
    console.log(error.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
</template>
