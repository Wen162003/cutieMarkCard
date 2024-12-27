<template>
  <div class="flex flex-col justify-between pt-32">
    <navComponent>
      <div class="flex  justify-end gap-4">
        <button-component>
          Deshacer
        </button-component>
        <button-component>
          Menu
        </button-component>
      </div>
    </navComponent>

    <div class="grid grid-rows-2 grid-cols-7 gap-11">
      <div class="bg-pink-500 w-40 h-52 col-span-3">
        <div v-for="carta, index in cartas" :key="index" v-show="index === 0" :draggable="true"
          @dragstart="onDragStart(carta)" class="bg-blue-500 w-40 h-52 ">
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div class="bg-pink-500 w-40 h-52" @dragover.prevent @drop="onDrop">
        <div v-for="carta, index in contenedorCarta" :key="index" v-show="index == contenedorCarta.length - 1" class="bg-blue-500 w-40 h-52 ">
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>
      <div class="bg-pink-500 w-40 h-52"></div>

    </div>
    <footerTable />
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
import navComponent from "@/components/navComponent.vue";
import footerTable from "@/components/footerTable.vue";
import { ref } from "vue";

const cartas = ref([
  {
    id: 1,
    color: "rosado",
    numero: 1,
    forma: "mariposa",
  },
  {
    id: 2,
    color: "morado",
    numero: 2,
    forma: "manzana",
  },
  {
    id: 3,
    color: "blue",
    numero: 3,
    forma: "diamante",
  },
  {
    id: 4,
    color: "rosado",
    numero: 2,
    forma: "mariposa",
  }
])

const contenedorCarta = ref([])

const onDragStart = (carta) => {
  // Guardar el elemento en el almacenamiento de datos arrastrados
  const cartaTexto = JSON.stringify(carta);
  localStorage.setItem('draggedItem', cartaTexto);

};

const onDrop = () => {
  const item = localStorage.getItem('draggedItem');
  if (item) {
    const cartaJson = JSON.parse(item)
    contenedorCarta.value.push(cartaJson);
    localStorage.removeItem('draggedItem');

    let posicion = cartas.value.findIndex(carta => carta.id === cartaJson.id)
    cartas.value.splice(posicion, 1)
    console.log(posicion);

  }

};
</script>
