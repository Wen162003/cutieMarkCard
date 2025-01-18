<template>
  <div class="flex flex-col justify-between pt-24">
    <navComponent>
      <div class="flex justify-end gap-4">
        <button
          type="button"
          class="text-white bg-gradient-to-r bg-customPinkclaro via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          deshacer
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r bg-customPinkclaro via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Menu
        </button>
      </div>
    </navComponent>

    <div class="grid grid-rows-2 grid-cols-7 gap-3 pl-5 pr-80">
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl">
        <div
          v-for="(carta, index) in cartas"
          :key="index"
          v-show="index === 0"
          :draggable="true"
          @click="moverCarta(carta.id)"
          @dragstart="onDragStart(carta)"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div
        class="w-28 h-36 border-2 col-span-2 border-pink-300 rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor')"
      >
        <div
          v-for="(carta, index) in contenedorCartaOpciones"
          :key="index"
          :draggable="true"
          @dragstart="onDragStart(carta)"
          v-show="index == contenedorCartaOpciones.length - 1"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div
        class="w-28 h-36 border-2 border-pink-500 rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor1')"
      >
        <div
          v-for="(carta, index) in contenedorCarta"
          :key="index"
          v-show="index == contenedorCarta.length - 1"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div
        class="w-28 h-36 border-2 border-pink-500 rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor2')"
      >
        <div
          v-for="(carta, index) in contenedorCarta2"
          :key="index"
          v-show="index == contenedorCarta2.length - 1"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div
        class="w-28 h-36 border-2 border-pink-500 rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor3')"
      >
        <div
          v-for="(carta, index) in contenedorCarta3"
          :key="index"
          v-show="index == contenedorCarta3.length - 1"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div
        class="w-28 h-36 border-2 border-pink-500 rounded-xl"
        @dragover.prevent
        @drop="onDrop('contenedor4')"
      >
        <div
          v-for="(carta, index) in contenedorCarta4"
          :key="index"
          v-show="index == contenedorCarta4.length - 1"
          class="bg-blue-500 w-28 h-36 rounded-xl"
        >
          <p>{{ carta.numero }}</p>
          <p>{{ carta.forma }}</p>
          <p>{{ carta.color }}</p>
        </div>
      </div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
      <div class="w-28 h-36 border-2 border-pink-500 rounded-xl"></div>
    </div>
    <footerTable />
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import navComponent from '@/components/navComponent.vue'
import footerTable from '@/components/footerTable.vue'
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

const primeraCarta = ref({})

const contenedorCartaOpciones = ref([])
const contenedorCarta = ref([])
const contenedorCarta2 = ref([])
const contenedorCarta3 = ref([])
const contenedorCarta4 = ref([])

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

const moverCarta = (id) => {
  const carta = carta.value.find((c) => c.id === id)
  if (carta) {
    carta.value = carta.value.filter((c) => c.id !== id)
    contenedorCartaOpciones.value.push(carta)
  }
}

const onDragStart = (carta) => {
  // Guardar el elemento en el almacenamiento de datos arrastrados
  const cartaTexto = JSON.stringify(carta)
  localStorage.setItem('draggedItem', cartaTexto)
}

const onDrop = (contenedor) => {
  const item = localStorage.getItem('draggedItem')
  if (item) {
    const cartaJson = JSON.parse(item)

    localStorage.removeItem('draggedItem')
    const respuesta = validacion(cartaJson, contenedor)
    contenedorCartaOpciones.value.push(cartaJson)
    let posicion = cartas.value.findIndex((carta) => carta.id === cartaJson.id)
    cartas.value.splice(posicion, 1)

    switch (contenedor) {
      case 'contenedor1':
        if (respuesta) {
          contenedorCarta.value.push(cartaJson)
          let posicion = cartas.value.findIndex((carta) => carta.id === cartaJson.id)
          cartas.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor2':
        if (respuesta === true) {
          contenedorCarta2.value.push(cartaJson)
          let posicion = cartas.value.findIndex((carta) => carta.id === cartaJson.id)
          cartas.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor3':
        if (respuesta === true) {
          contenedorCarta3.value.push(cartaJson)
          let posicion = cartas.value.findIndex((carta) => carta.id === cartaJson.id)
          cartas.value.splice(posicion, 1)
        } else {
          console.log('No se guarda')
        }
        break
      case 'contenedor4':
        if (respuesta === true) {
          contenedorCarta4.value.push(cartaJson)
          let posicion = cartas.value.findIndex((carta) => carta.id === cartaJson.id)
          cartas.value.splice(posicion, 1)
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
