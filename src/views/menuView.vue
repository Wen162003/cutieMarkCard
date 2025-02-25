<template>
  <div
    v-if="visible"
    class="absolute right-6 top-16 border-4 border-customPink bg-white text-cafe p-2 rounded-lg shadow-lg w-36"
  >
    <div class="flex flex-col space-y-2 text-center">
      <p class="cursor-pointer hover:text-gray-300">Inicio</p>
      <p class="cursor-pointer hover:text-gray-300">Reglas</p>
      <p class="cursor-pointer hover:text-gray-300">Historia</p>
     
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
})
</script>
