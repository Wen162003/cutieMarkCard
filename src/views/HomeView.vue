
<template>
 <div class="bg-purple-100  h-screen overflow-hidden ">
  <nav-component />

  <main class="flex w-full h-screen justify-center items-center">
    <div class="bg-blue-300 w-1/3 h-96 flex justify-center items-end py-6">
      <router-link to="/tablero">
        <button-component >
          Iniciar Partida
        </button-component>
      </router-link>
    </div>
  </main>
 </div>

</template>

<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue"
import navComponent from "../components/navComponent.vue"
</script>
