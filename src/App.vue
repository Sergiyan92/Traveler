<script setup>
import IBotton from './components/IButton/IBotton.vue'

const classes = {
  'bg-red': true,
  'bg-black': false
}
</script>
<template>
  <span class="btn">Hellow span</span>
  Hellow Vue<IBotton :class="classes"></IBotton>
</template>

<style scoped>
.btn {
  color: green;
}
.btn-red {
  color: red;
}
.bg-black {
  background: #000;
}
</style>
