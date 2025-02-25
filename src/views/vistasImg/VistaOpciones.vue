<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
  <div class="bg-white border-4 border-customPink rounded-lg shadow-lg  w-[80%] max-w-3xl">
      <nav class="flex items-center bg-customYellow w-full h-16 border-b-4 border-customYellowDark pl-9 ">
        <p class=" text-cafe font-medium text-xl">Fondos</p>
      </nav>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        <button
          class="border-2 border-cafe rounded-lg w-full h-24 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980654/Fondo_hfrrfu.webp')] bg-cover bg-center"
        ></button>
        <button
          class="border-2 border-cafe rounded-lg w-full h-24 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg')] bg-cover bg-center"
        ></button>
        <button
          class="border-2 border-cafe rounded-lg w-full h-24 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg')] bg-cover bg-center"
        ></button>
        <button
          class="border-2 border-cafe rounded-lg w-full h-24 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg')] bg-cover bg-center"
        ></button>
      </div>

      <!-- Botón de cerrar con estilos personalizados -->
      <div class="mt-6 flex justify-end p-6">
        <button
          type="button"
          class="text-white bg-gradient-to-r flex gap-1 from-[#6b4226] via-[#6b4226] to-[#6b4226] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#8b5a2b] dark:focus:ring-[#5a3e36] shadow-lg shadow-[#8b5a2b]/50 dark:shadow-lg dark:shadow-[#5a3e36]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="$emit('close')"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

  <script setup>
defineProps({
  visible: Boolean,
})
</script>
