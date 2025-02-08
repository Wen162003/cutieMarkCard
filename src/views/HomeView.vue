
<template>
  <div class="bg-purple-100 h-screen overflow-hidden">
    <!-- Imagen de fondo -->

    <nav-component class="relative z-10" />

    <main class="flex w-full h-screen relative justify-center items-center">
      <img src="../assets/Fondo2.png" alt="Fondo" class="absolute top-10  object-fill" />
      <div
        class="absolute bg-opacity-50 bg-blue-300 w-1/3 h-96 flex justify-center items-center py-6 rounded-lg"
      >
        <div
          class="bg-verde rounded-lg w-96 h-80 flex justify-center items-center relative"
        ></div>

        <router-link to="/tablero">
          <button-component
            type="button"
            class="absolute top-72 left-40 text-white bg-gradient-to-r bg-customPinkclaro via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
