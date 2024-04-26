<script setup>
import IBotton from '@/components/IButton/IBotton.vue'
import IInput from '@/components/IInput/IInput.vue'

const emit = defineEmits(['submit'])
</script>

<template>
  <form
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
    @submit.prevent="emit('submit', { name: 'Name' })"
  >
    <IInput class="mb-4" label="Повне ім'я" />
    <IInput class="mb-4" label="Електронна пошта" placeholder="test@test.com" />
    <IInput class="mb-4" label="Пароль" type="password" />
    <IBotton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IBotton>
  </form>
</template>
