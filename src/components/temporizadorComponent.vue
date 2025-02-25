<template>
  <div class="flex gap-4 items-center">
    <button @click="store.toggleTimer"
      class="p-1.5 rounded-md bg-cafe text-white shadow-md shadow-cafe/50 border border-cafe/80 hover:bg-opacity-90 transition duration-200 flex items-center justify-center w-8 h-8">
      <svg v-if="store.isRunning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"
        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause">
        <rect x="14" y="4" width="4" height="16" rx="1" />
        <rect x="6" y="4" width="4" height="16" rx="1" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"
        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    </button>
    <p class="text-lg font-bold text-white tracking-wide">{{ formatTime(store.time) }}</p>
  </div>
</template>

<script setup>
import { useTemporizador } from '@/stores/useTemporizador';

const store = useTemporizador()

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
};

</script>
