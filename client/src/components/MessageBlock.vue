<template>
     <div class=" p-2 bg-white shadow-inner">
      <form  @submit.prevent="handleSend" class="flex items-center gap-2">
        <input
          type="text"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Введите сообщение..."
          v-model="message"
       
        />
        <button
          type="submit"
          class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
        >
          Отправить
        </button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('');
import socket from '../socket';

const handleSend = () => {
  if (message.value.trim() && localStorage.getItem('user')) {
    socket.emit('message',
      {
        text: message.value,
        user: localStorage.getItem('user'),
        id: `${socket.id}`,
        socketId:socket.id
      }
    );
    console.log({
      user: localStorage.getItem('user'),
      message:message.value
    })
  }
}

</script>

<style lang="scss" scoped>

</style>