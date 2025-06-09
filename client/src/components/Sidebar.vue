<template>
    <div class="sidebar h-full p-4 bg-white border-r shadow-md">
      <h4 class="text-xl font-semibold mb-4 text-gray-800">Пользователи</h4>
      <ul class="space-y-2">
        <li class="px-3 py-2 bg-gray-100 rounded-lg hover:bg-amber-100 cursor-pointer transition">
          user1
        </li>
        <li>
          user2
        </li>
       <!-- {users.map((el) =>
         el.user ? (
           
            <li key={el.socketId} className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-amber-100 cursor-pointer transition">
              {el.user} {el.socketId}
            </li>
          ) : null
        )} -->
      </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>