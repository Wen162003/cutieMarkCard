<template>
  <div v-if="visible" class="absolute right-6 top-16 bg-opacity-50 bg-white text-cafe  rounded-lg shadow-lg w-36">
    <div class="flex flex-col  space-y-2 text-lg  ">
      <router-link to="/"
        class="flex items-center space-x-2 px-5 py-1 cursor-pointer group transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-house size-6 group-hover:scale-125 transition-transform duration-300">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <p class="text-lg group-hover:text-xl transition-all duration-300">Inicio</p>
      </router-link>

      <span class="flex space-x-2 cursor-pointer px-5 py-1  group transition-all duration-300 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-scroll-text size-6 group-hover:scale-125 transition-transform duration-300">
          <path d="M15 12h-5" />
          <path d="M15 8h-5" />
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path
            d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
        <p class="text-lg group-hover:text-xl transition-all duration-300">Reglas</p>
      </span>

      <router-link to="/historia" class="flex px-5 py-2 space-x-2cursor-pointer group transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-book-heart size-6 group-hover:scale-125 transition-transform duration-300">
          <path
            d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" />
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        </svg>
        <p class="text-lg group-hover:text-xl transition-all duration-300">Historia</p>
      </router-link>


    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
})
</script>
