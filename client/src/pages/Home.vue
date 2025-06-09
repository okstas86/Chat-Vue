<template>
  <div>
     <form
    class="w-full h-screen bg-gradient-to-br from-yellow-300 to-amber-500 flex flex-col gap-6 justify-center items-center px-4"
    @submit.prevent="handleSubmit"
  >
    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6">
      <h2 class="text-3xl font-bold text-center text-gray-800">Вход в чат</h2>

      <div class="flex flex-col">
        <label htmlFor="user" class="mb-1 text-gray-700 font-medium">
          Имя пользователя
        </label>
        <input
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          type="text"
          v-model="user"
          placeholder="Введите имя"
          required
          />
       
      </div>

      <button
        type="submit"
        class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition w-full"
      >
        Войти
      </button>
    </div>
  </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import router from '../router'

const user=ref('')
const handleSubmit = () => {
  localStorage.setItem('user', user.value)
  console.log(user.value)
  router.push('/chat')
}
</script>

<style lang="scss" scoped>

</style>