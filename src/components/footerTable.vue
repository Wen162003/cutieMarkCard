<template>
  <VistaOpciones :visible="fondos.show"
  @close="fondos.show = false" />

  <footer class="flex bg-opacity-50 bg-gray-400 w-full fixed bottom-0 px-32 h-12">
    <div class="flex gap-4 w-1/2">
      <button v-if="primerBoton" @click="modoOscuro">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <g transform="scale(8.53333,8.53333)">
              <path
                d="M14.98438,0.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM5.79688,4.79883c-0.40657,0.0009 -0.77213,0.24784 -0.92475,0.62467c-0.15262,0.37684 -0.06192,0.80856 0.22944,1.09212l2.12109,2.12109c0.25082,0.26123 0.62326,0.36646 0.9737,0.2751c0.35044,-0.09136 0.62411,-0.36503 0.71546,-0.71546c0.09136,-0.35044 -0.01387,-0.72288 -0.2751,-0.9737l-2.12109,-2.12109c-0.18874,-0.19402 -0.44807,-0.30325 -0.71875,-0.30273zM24.17188,4.79883c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36645,0.62326 -0.2751,0.9737c0.09136,0.35043 0.36503,0.6241 0.71546,0.71546c0.35043,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM15,8c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM2,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM25,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM7.91016,21.06055c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36646,0.62326 -0.2751,0.9737c0.09136,0.35044 0.36503,0.6241 0.71546,0.71546c0.35044,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM22.06055,21.06055c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80922 0.22907,1.09303l2.12109,2.12109c0.25082,0.26123 0.62326,0.36645 0.9737,0.27509c0.35043,-0.09136 0.6241,-0.36502 0.71546,-0.71546c0.09136,-0.35043 -0.01386,-0.72288 -0.27509,-0.9737l-2.12109,-2.12109c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273zM14.98438,23.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button v-else @click="modoOscuro">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-moon-star text-white"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
        </svg>
      </button>
      <div class="flex gap-4 items-center">
        <button
          class="border-2 border-cafe rounded-lg w-[70px] h-9 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg')] bg-cover bg-center"
        ></button>

        <button
          class="border-2 border-cafe rounded-lg w-[70px] h-9 bg-[url('https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg')] bg-cover bg-center"
        ></button>
        <button
          class="p-1.5 rounded-md bg-cafe text-white shadow-md shadow-cafe/50 border border-cafe/80 hover:bg-opacity-90 transition duration-200 flex items-center justify-center w-8 h-8"
          @click="fondos.show = true"
        >
          <span class="text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <div class="flex gap-4 items-center">
      <button
        class="p-1.5 rounded-md bg-cafe text-white shadow-md shadow-cafe/50 border border-cafe/80 hover:bg-opacity-90 transition duration-200 flex items-center justify-center w-8 h-8"
      >
        <span class="text-lg"> ❚❚ </span>
      </button>
      <p class="text-lg font-bold text-white tracking-wide">00:00</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import VistaOpciones from '../views/vistasImg/VistaOpciones.vue'
const primerBoton = ref(true)
const fondos = ref({ show: false })

const modoOscuro = () => {
  primerBoton.value = !primerBoton.value
}
</script>
