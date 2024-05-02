<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    defauld: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    }
  },
  to: String
})
const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})

const isLink = computed(() => !!props.to)
const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})
const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>
<template>
  <component
    :is="componentName"
    class="rounded-xl py-3 px-10 text-white font-bold -tracking-tighter"
    :class="bgStyles"
    :to="link"
  >
    <slot></slot>
  </component>
</template>
