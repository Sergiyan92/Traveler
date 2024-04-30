<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
// import HomepageView from './views/HomePageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
const isOpen = ref(true)
const closeleModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}
</script>
<template>
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <button @click="openModal">Click me</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal :is-open="isOpen" @close="closeleModal" @submit="console.log" />
</template>
