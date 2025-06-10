<template>
  <div>
      <header class="h-[10vh] bg-amber-100 flex items-center justify-end px-6 shadow-md">
        <button @click="handleLeve" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition">
          Покинуть чат
        </button>
      </header>

      <div class="container h-[70vh] overflow-y-auto px-4 py-6 space-y-4 bg-white">
        <div v-for="message in messages" :key="message.id">
          <div v-if="message.user === currentUser" class="chats flex flex-col items-end mr-2">
            <p class="text-sm text-gray-500 mb-1">Вы</p>
            <div class="logo bg-amber-200 px-4 py-2 rounded-xl max-w-xs text-right shadow">
              <p>{{ message.text }}</p>
            </div>
          </div>

          <div v-else class="chats flex flex-col items-start">
            <p class="text-sm text-gray-500 mb-1">{{ message.user }}</p>
            <div class="recipient bg-green-600 px-4 py-2 rounded-xl max-w-xs text-right shadow text-white">
              <p>{{ message.text }}</p>
            </div>
          </div>
        </div>
 
 
</div>

  </div>
</template>

<script setup>
import router from '../router'
const props = defineProps({
  messages: Array
})
const currentUser = localStorage.getItem('user')

const handleLeve = () => {
  localStorage.removeItem('user')
  router.push('/')
}
</script>

<style lang="scss" scoped>



</style>