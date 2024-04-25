<script setup>
import HomepageView from './views/HomePageView.vue'
const isDesktop = window.innerWidth > 1024
const isTablet = window.innerWidth <= 1024 && window.innerWidth > 748
</script>
<template>
  <template v-if="isDesktop">
    <HomepageView />
  </template>
  <template v-else-if="isTablet">
    <div>This is tablet</div>
  </template>
  <template v-else>
    <div v-show="!isDesktop && !isTablet">This is mobile</div>
  </template>
  <div v-show="!isDesktop && !isTablet">This is mobile</div>
</template>
