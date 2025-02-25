
<template>
  <div class="bg-purple-100 h-screen overflow-hidden">
    <!-- Imagen de fondo -->

    <nav-component class="relative z-10" />

    <main class="flex w-full h-screen relative justify-center items-center">
      <img
        src="https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg"
        alt="Fondo"
        class="absolute top-10 object-fill"
      />
      <div
        class="absolute bg-opacity-50 bg-blue-300 w-1/3 h-96 flex justify-center items-center py-6 rounded-lg"
      >
        <div
          class="bg-verde rounded-lg w-96 h-80 flex flex-col justify-center items-center relative"
        >
          <h3 class="text-white text-6xl font-bold italic leading-tight">Solitario</h3>
          <p class="text-white text-4xl font-serif italic">My Little Pony</p>
        </div>

        <router-link to="/tablero">
          <button
            type="button"
            class="absolute top-72 left-40 text-cafe  bg-customPinkclaro focus:ring-4 focus:outline-none focus:ring-pink-300  shadow-customPink font-medium rounded-lg text-md h-10 px-4 text-center"
          >
            Iniciar Partida
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>

import navComponent from '../components/navComponent.vue'
</script>
