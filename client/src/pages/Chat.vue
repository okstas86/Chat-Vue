<template>
    <div class="chat-page flex h-screen bg-gray-100">
      <aside class="w-64 bg-white border-r shadow-md hidden sm:block">
        <Sidebar />
      </aside>

      <main class="flex-1 flex flex-col">
        <div class="p-4 bg-white shadow-md border-b">
          <Body :messages="messages" />
        </div>

        <div class="flex-1 overflow-y-auto p-4 bg-gray-50">
          <MessageBlock  />
        </div>
      </main>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Body from '@/components/Body.vue';
import MessageBlock from '@/components/MessageBlock.vue';
import socket from '../socket';
import { ref } from 'vue';


const messages = ref([])

socket.on('response', (data) => {
    console.log('Пришло сообщение от сервера:', data)
  messages.value.push(data)
})


</script>

<style lang="scss" scoped>

</style>