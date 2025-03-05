<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white border-4 border-customPink rounded-lg shadow-lg w-[30%] p-6 flex flex-col items-center gap-4"
    >
      <img
        src="https://res.cloudinary.com/dpqutwvio/image/upload/v1741128739/Continuar_juego_inrtwf.png"
        alt="Juego pausado"
        class="w-40 h-auto"
      />

      <p class="text-lg font-semibold text-gray-700">Juego pausado</p>

      <button
        type="button"
        class="text-white bg-gradient-to-r from-[#6b4226] via-[#6b4226] to-[#6b4226] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#8b5a2b] dark:focus:ring-[#5a3e36] shadow-lg shadow-[#8b5a2b]/50 dark:shadow-lg dark:shadow-[#5a3e36]/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
        @click="
          close();
          if (store.hasMovedCard) store.startTimer()
        "
      >
        Continuar juego
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { useTemporizador } from '@/stores/useTemporizador'

defineProps({
  visible: Boolean,
})
const emit = defineEmits(['close'])

const store = useTemporizador()

const close = () =>{
 emit('close'),
 store.hiddenCart()
}
</script>
  