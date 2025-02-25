<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Contenedor del modal -->
    <div class="bg-white border-4 border-customPink rounded-lg shadow-lg p-6 w-[80%] max-w-3xl">
      <!-- Contenido del modal con grid mejor organizado -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          v-for="(image, index) in store.opciones "
          :key="index"
          @click="store.seleccionarFondo(index)"
          class="border-2 border-cafe rounded-lg w-full h-24 bg-cover bg-center"
          :style="{ backgroundImage: `url(${image})` }"
        ></button>
      </div>

      <!-- Botón de cerrar con estilos personalizados -->
      <div class="mt-6 flex justify-end">
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
import { useFondos } from '@/stores/useFondos';

defineProps({
  visible: Boolean,
});

const store = useFondos()






</script>
