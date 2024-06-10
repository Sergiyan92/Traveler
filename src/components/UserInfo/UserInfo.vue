<script setup>
import { onMounted, ref } from 'vue'
import { useMutation } from '../../composables/useMutation'
import { getUserInfo, updateAvatar } from '../../api/users'
import LogoutButton from '../LogoutButton/LogoutButton.vue'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue'
const {
  data: userInfo,
  mutation: getUser,
  isLoading
} = useMutation({
  mutationFn: () => getUserInfo()
})

const handleAvatarChange = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('avatar', file)

  await updateAvatar(formData)
  getUser()
}

onMounted(() => {
  getUser()
})

const fileInput = ref(null)

const openFileDialog = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}
</script>

<template>
  <LanguageSwitcher />
  <div
    class="flex sticky top-0 items-center text-black gap-3 bg-[#ffe6dc] border-solid border-b-2 border-primary rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-10"
  >
    <div
      class="relative w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary"
    >
      <img
        v-if="userInfo?.data?.avatarUrl"
        :src="`https://travel-backend-3glj.onrender.com/${userInfo.data.avatarUrl.replace(/\\/g, '/')}`"
        class="w-full h-full rounded-full"
      />
      <input type="file" ref="fileInput" @change="handleAvatarChange" class="hidden" />
    </div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="userInfo && userInfo.data">{{ userInfo.data.name }}</span>
    <button @click="openFileDialog" class="ml-2 px-1 py-1 bg-primary text-white rounded text-xs">
      {{ $t('change avatar') }}
    </button>
    <LogoutButton class="ml-10" />
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
