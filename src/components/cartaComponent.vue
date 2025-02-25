<template>
    <div>
        <div
          class="bg-blue-500 border-2 border-pink-950 w-28 h-36 rounded-xl"
        >
          <p>{{ numero }}</p>
          <p>{{ forma }}</p>
          <p>{{ color }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    numero: Number,
    forma:String,
    color: String
})
</script>