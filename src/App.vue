<script setup>
import HomepageView from './views/HomePageView.vue'
const fruits = ['kiwi', 'banana', 'tomato']
const fruitsMap = {
  kiwi: 'Super kiwi',
  banana: 'Super banana',
  tomato: 'Super tomato'
}
</script>
<template>
  <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }}: {{ fruit }}</div>
  <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }}: {{ fruit }}</div>
  <div v-for="val in 5" :key="val">{{ val }}</div>
  <div v-for="char in 'qwerty'" :key="char">{{ char }}</div>
  <HomepageView />
</template>
