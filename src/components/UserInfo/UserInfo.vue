<script setup>
import { onMounted } from 'vue'
import UserIcon from './UserIcon.vue'
import { useMutation } from '../../composables/useMutation'
import { getUserInfo, updateAvatar } from '../../api/users'

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
</script>

<template>
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
      <UserIcon v-else class="text-white" />
      <input
        type="file"
        @change="handleAvatarChange"
        class="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="userInfo && userInfo.data">{{ userInfo.data.name }}</span>
  </div>
</template>
