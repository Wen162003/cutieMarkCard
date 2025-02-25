<template>
  <VistaOpciones :visible="fondos.show" @close="fondos.show = false" />

  <footer class="flex bg-opacity-50 bg-gray-400 w-full fixed bottom-0 px-32 h-12">
    <div class="flex gap-4 w-1/2">
      <button v-if="primerBoton" @click="modoOscuro" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
      <button v-else @click="modoOscuro">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-moon-star text-white">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
        </svg>
      </button>
      <div class="flex gap-4 items-center">
        <button :style="{ backgroundImage: `url(${store.opciones[0]})` }" @click="store.seleccionarFondo(0)"
          class="border-2 border-cafe rounded-lg w-[70px] h-9  bg-cover bg-center"></button>

        <button :style="{ backgroundImage: `url(${store.opciones[1]})` }" @click="store.seleccionarFondo(1)"
          class="border-2 border-cafe rounded-lg w-[70px] h-9  bg-cover bg-center"></button>
        <button
          class="p-1.5 rounded-md bg-cafe text-white shadow-md shadow-cafe/50 border border-cafe/80 hover:bg-opacity-90 transition duration-200 flex items-center justify-center w-8 h-8"
          @click="fondos.show = true">
          <span class="text-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-plus">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <temporizadorComponent />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import VistaOpciones from '../views/vistasImg/VistaOpciones.vue'
import { useFondos } from '@/stores/useFondos'
import temporizadorComponent from './temporizadorComponent.vue'

const store = useFondos()
const primerBoton = ref(true)
const fondos = ref({ show: false })

const modoOscuro = () => {
  primerBoton.value = !primerBoton.value
}
</script>
