<script setup>
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'

// import HomepageView from './views/HomePageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>
<template>
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <RegistrationForm @submit="console.log" />
</template>
