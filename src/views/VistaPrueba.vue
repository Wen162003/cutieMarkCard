<template>
  <div class="flex gap-4 p-4">
    <!-- Área de elementos arrastrables -->
    <div class="w-1/2 p-4 bg-gray-100 rounded shadow">
      <h2 class="text-lg font-bold mb-2">Elementos disponibles</h2>
      <div v-for="(item, index) in items" :key="index" :draggable="true" @dragstart="onDragStart(item)"
        class="p-4 mb-2 bg-blue-500 text-white text-center rounded cursor-pointer">
        {{ item }}
      </div>
    </div>

    <!-- Área de destino -->
    <div class="w-1/2 p-4 bg-gray-200 rounded shadow" @dragover.prevent @drop="onDrop">
      <h2 class="text-lg font-bold mb-2">Destino</h2>
      <div v-for="(item, index) in droppedItems" :key="index"
        class="p-4 mb-2 bg-green-500 text-white text-center rounded">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Elementos iniciales
const items = ref(['Elemento 1', 'Elemento 2', 'Elemento 3']);

// Elementos arrastrados
const droppedItems = ref([]);

// Manejar el inicio del arrastre
const onDragStart = (item) => {
  // Guardar el elemento en el almacenamiento de datos arrastrados
  localStorage.setItem('draggedItem', item);
};


// Manejar el soltar
const onDrop = () => {
  const item = localStorage.getItem('draggedItem');
  if (item) {
    droppedItems.value.push(item);
    localStorage.removeItem('draggedItem');
  }
};
</script>

<style scoped>
/* Estilo adicional si es necesario */
</style>
