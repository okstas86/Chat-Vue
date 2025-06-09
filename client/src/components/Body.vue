<template>
  <div>
      <header class="h-[10vh] bg-amber-100 flex items-center justify-end px-6 shadow-md">
        <button  class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition">
          Покинуть чат
        </button>
      </header>

      <div class="container h-[70vh] overflow-y-auto px-4 py-6 space-y-4 bg-white">
        <!-- {messages?.map((element) => 
          element.name === localStorage.getItem('user') ? ( -->
          <div key={element.id} class="chats flex flex-col items-end mr-2">
          <p class="text-sm text-gray-500 mb-1">Вы</p>
          <div class="logo bg-amber-200 px-4 py-2  rounded-xl max-w-xs text-right shadow">
                <p>text</p>
          </div>
        </div>
         
          <div key={element.id} class="chats flex flex-col items-start">
                <p class="text-sm text-gray-500 mb-1">Stas</p>
            <div class="recipient bg-green-600 px-4 py-2 rounded-xl max-w-xs text-right shadow">
                  <p>text</p>
            </div>
        </div>
      
      
        <!-- <div class="flex justify-start mt-2">
          {status && (
            <div class="text-sm text-gray-400 mt-2 animate-pulse">{status}</div>
          )}
        </div> -->
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>