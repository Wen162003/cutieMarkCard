<template>
  <div :style="{ backgroundImage: `url(${store.fondoSeleccionado})` }"
    class="relative flex flex-col justify-start pt-24 h-screen bg-cover bg-center overflow-hidden">
    <navComponent>
      <div class="flex justify-end gap-4">
        <button type="button"
          class="text-white bg-gradient-to-r flex gap-1 from-[#6b4226] via-[#6b4226] to-[#6b4226] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#8b5a2b] dark:focus:ring-[#5a3e36] shadow-lg shadow-[#8b5a2b]/50 dark:shadow-lg dark:shadow-[#5a3e36]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-undo-2">
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
          <p>deshacer</p>
        </button>
        <button type="button"
          class="text-white flex gap-1 bg-gradient-to-r from-[#6b4226] via-[#6b4226] to-[#6b4226] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#8b5a2b] dark:focus:ring-[#5a3e36] shadow-lg shadow-[#8b5a2b]/50 dark:shadow-lg dark:shadow-[#5a3e36]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-align-justify">
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
          <p>Menu</p>
        </button>
      </div>
    </navComponent>
    <menuView :visible="menu.show" />
    <div class="grid grid-rows-2 grid-cols-7 gap-3 pl-5 pr-80">
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in cartas"
          v-show="index === 0"
          @click="moverCarta(carta)"
          :key="index"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>

      <div class="w-28 h-36 col-span-2">
        <cartaComponent
          v-for="(carta, index) in contenedorCartaOpciones"
          style="user-select: none"
          :draggable="true"
          @dragstart="onDragStart(carta)"
          :key="index + '-0'"
          v-show="index == contenedorCartaOpciones.length - 1"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>

      <div
        class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor1')"
      >
        <cartaComponent
          v-for="(carta, index) in contenedorCarta"
          :key="index + '-1'"
          v-show="index == contenedorCarta.length - 1"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div
        class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor2')"
      >
        <cartaComponent
          v-for="(carta, index) in contenedorCarta2"
          :key="index + '-2'"
          v-show="index == contenedorCarta2.length - 1"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div
        class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor3')"
      >
        <cartaComponent
          v-for="(carta, index) in contenedorCarta3"
          :key="index + '-3'"
          v-show="index == contenedorCarta3.length - 1"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div
        class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor4')"
      >
        <cartaComponent
          v-for="(carta, index) in contenedorCarta4"
          :key="index + '-4'"
          v-show="index == contenedorCarta4.length - 1"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta5"
          :key="index + '-5'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta6"
          :key="index + '-6'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta7"
          :key="index + '-7'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta8"
          :key="index + '-8'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta9"
          :key="index + '-9'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta10"
          :key="index + '-10'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
      <div class="w-28 h-36 border-2 bg-opacity-50 bg-customPinkclaro border-customPink rounded-xl">
        <cartaComponent
          v-for="(carta, index) in contenedorCarta11"
          :key="index + '-11'"
          :style="claseCarta(index)"
          :numero="carta.numero"
          :forma="carta.forma"
          :color="carta.color"
        />
      </div>
    </div>
    <footerTable />
  </div>
</template>

<script setup>
import navComponent from '@/components/navComponent.vue'
import footerTable from '@/components/footerTable.vue'
import { useFondos } from '@/stores/useFondos'
import cartaComponent from '@/components/cartaComponent.vue'
import menuView from './menuView.vue'

import { ref } from 'vue'

const cartas = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 4,
    color: 'rosado',
    numero: 2,
    forma: 'mariposa',
  },
  {
    id: 5,
    color: 'rosado',
    numero: 1,
    forma: 'diamante',
  },
  {
    id: 6,
    color: 'rosado',
    numero: 1,
    forma: 'globo',
  },
  {
    id: 7,
    color: 'rosado',
    numero: 2,
    forma: 'globo',
  },
])

const tiposCartas = ref({
  manzana: false,
  mariposa: false,
  diamante: false,
  globo: false,
})

const contenedorCartaOpciones = ref([])
const contenedorCarta = ref([])
const contenedorCarta2 = ref([])
const contenedorCarta3 = ref([])
const contenedorCarta4 = ref([])
const store = useFondos()
const menu = ref({ show: false })

const contenedorCarta5 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
])

const contenedorCarta6 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
])
const contenedorCarta7 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
])
const contenedorCarta8 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },

  {
    id: 4,
    color: 'blue',
    numero: 4,
    forma: 'manzana',
  },
])
const contenedorCarta9 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 4,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 5,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
])
const contenedorCarta10 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 4,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 5,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 6,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
])
const contenedorCarta11 = ref([
  {
    id: 1,
    color: 'rosado',
    numero: 1,
    forma: 'mariposa',
  },
  {
    id: 2,
    color: 'morado',
    numero: 1,
    forma: 'manzana',
  },
  {
    id: 3,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 4,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 5,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 6,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
  {
    id: 7,
    color: 'blue',
    numero: 2,
    forma: 'manzana',
  },
])
const claseCarta = (index) => {
  if (index == 0) {
    return { marginTop: `0 px` }
  } else {
    let postion = index + 120
    return { marginTop: `-${postion}px` }
  }
}

const validarTipo = (forma) => {
  switch (forma) {
    case 'manzana':
      if (tiposCartas.value.manzana !== true) {
        tiposCartas.value.manzana = true
        return true
      } else {
        return false
      }
    case 'mariposa':
      if (tiposCartas.value.mariposa !== true) {
        tiposCartas.value.mariposa = true
        return true
      } else {
        return false
      }
    case 'diamante':
      if (tiposCartas.value.diamante !== true) {
        tiposCartas.value.diamante = true
        return true
      } else {
        return false
      }
    case 'globo':
      if (tiposCartas.value.globo !== true) {
        tiposCartas.value.globo = true
        return true
      } else {
        return false
      }
    default:
      break
  }
}

// esta funcion valida que los datos que se quieran guardar sean del mismo tipo que el primero que se guardo
const validacion = (dato, contenedor) => {
  let contador = 0
  switch (contenedor) {
    case 'contenedor1':
      contador = contenedorCarta.value.length
      if (contador !== 0) {
        const primeraCarta = contenedorCarta.value[0]
        let indexUltima = contenedorCarta.value.length - 1
        const ultimaCarta = contenedorCarta.value[indexUltima]
        if (primeraCarta.forma === dato.forma && ultimaCarta.numero + 1 == dato.numero) {
          return true
        } else {
          return false
        }
      } else {
        if (validarTipo(dato.forma) && dato.numero == 1) {
          return true
        } else {
          return false
        }
      }
    case 'contenedor2':
      contador = contenedorCarta2.value.length
      if (contador !== 0) {
        const primeraCarta = contenedorCarta2.value[0]
        let indexUltima = contenedorCarta2.value.length - 1
        const ultimaCarta = contenedorCarta2.value[indexUltima]
        if (primeraCarta.forma === dato.forma && ultimaCarta.numero + 1 == dato.numero) {
          return true
        } else {
          return false
        }
      } else {
        if (validarTipo(dato.forma) && dato.numero == 1) {
          return true
        } else {
          return false
        }
      }
    case 'contenedor3':
      contador = contenedorCarta3.value.length
      if (contador !== 0) {
        const primeraCarta = contenedorCarta3.value[0]
        let indexUltima = contenedorCarta3.value.length - 1
        const ultimaCarta = contenedorCarta3.value[indexUltima]
        if (primeraCarta.forma === dato.forma && ultimaCarta.numero + 1 == dato.numero) {
          return true
        } else {
          return false
        }
      } else {
        if (validarTipo(dato.forma) && dato.numero == 1) {
          return true
        } else {
          return false
        }
      }
    case 'contenedor4':
      contador = contenedorCarta4.value.length
      if (contador !== 0) {
        const primeraCarta = contenedorCarta4.value[0]
        let indexUltima = contenedorCarta4.value.length - 1
        const ultimaCarta = contenedorCarta4.value[indexUltima]
        if (primeraCarta.forma === dato.forma && ultimaCarta.numero + 1 == dato.numero) {
          return true
        } else {
          return false
        }
      } else {
        if (validarTipo(dato.forma) && dato.numero == 1) {
          return true
        } else {
          return false
        }
      }
    default:
      return false
  }
}

const onDragStart = (carta) => {
  // Guardar el elemento en el almacenamiento de datos arrastrados
  const cartaTexto = JSON.stringify(carta)
  localStorage.setItem('draggedItem', cartaTexto)
}

const moverCarta = (carta) => {
  contenedorCartaOpciones.value.push(carta)
  var posicion = cartas.value.findIndex((carta) => carta.id === carta.id)
  cartas.value.splice(posicion, 1)
}

const onDrop = (contenedor) => {
  const item = localStorage.getItem('draggedItem')
  if (item) {
    const cartaJson = JSON.parse(item)
    localStorage.removeItem('draggedItem')
    const respuesta = validacion(cartaJson, contenedor)

    switch (contenedor) {
      case 'contenedor1':
        if (respuesta) {
          contenedorCarta.value.push(cartaJson)
          let posicion = contenedorCartaOpciones.value.findIndex(
            (carta) => carta.id === cartaJson.id
          )
          contenedorCartaOpciones.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor2':
        if (respuesta === true) {
          contenedorCarta2.value.push(cartaJson)
          let posicion = contenedorCartaOpciones.value.findIndex(
            (carta) => carta.id === cartaJson.id
          )
          contenedorCartaOpciones.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor3':
        if (respuesta === true) {
          contenedorCarta3.value.push(cartaJson)
          let posicion = contenedorCartaOpciones.value.findIndex(
            (carta) => carta.id === cartaJson.id
          )
          contenedorCartaOpciones.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor4':
        if (respuesta === true) {
          contenedorCarta4.value.push(cartaJson)
          let posicion = contenedorCartaOpciones.value.findIndex(
            (carta) => carta.id === cartaJson.id
          )
          contenedorCartaOpciones.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      default:
        break
    }
  }
}
</script>
