
<template>
  <div class="bg-purple-100 h-screen overflow-hidden">
    <nav-component />

    <main class="flex w-full h-screen justify-center items-center">
      <div class="bg-blue-300 w-1/3 h-96 flex justify-center items-end py-6">
        <router-link to="/tablero">
          <button-component
            type="button"
            class="text-white bg-gradient-to-r bg-customPinkclaro via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Iniciar Partida
          </button-component>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import navComponent from '../components/navComponent.vue'
</script>
