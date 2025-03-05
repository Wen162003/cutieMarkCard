<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          ref="buttonRef"
          type="button"
          class="text-white flex gap-1 bg-gradient-to-r from-[#6b4226] via-[#6b4226] to-[#6b4226] hover:bg-gradient-to-br shadow-lg shadow-[#8b5a2b]/50 dark:shadow-lg dark:shadow-[#5a3e36]/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-justify"
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
            
          </svg>
          <p>Menu</p>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute -right-3 top-[50px] bg-opacity-50 bg-white text-cafe rounded-lg shadow-lg w-36"
          @click="handleClick"
        >
          <div class="px-1 py-1 space-y-1">
            <MenuItem>
              <router-link
                to="/"
                class="flex items-center space-x-2 px-5 py-1 cursor-pointer group transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house size-6 group-hover:scale-125 transition-transform duration-300"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path
                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  />
                </svg>
                <p class="text-lg group-hover:text-xl transition-all duration-300">Inicio</p>
              </router-link>
            </MenuItem>
            <MenuItem>
              <button
                class="flex items-center space-x-2 cursor-pointer px-5 py-1 group transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-scroll-text size-6 group-hover:scale-125 transition-transform duration-300"
                >
                  <path d="M15 12h-5" />
                  <path d="M15 8h-5" />
                  <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                  <path
                    d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
                  />
                </svg>
                <p class="text-lg group-hover:text-xl transition-all duration-300">Reglas</p>
              </button>
            </MenuItem>
            <MenuItem>
              <router-link
                to="/historia"
                class="flex items-center px-5 py-2 space-x-2 cursor-pointer group transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-heart size-6 group-hover:scale-125 transition-transform duration-300"
                >
                  <path
                    d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
                  />
                  <path
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  />
                </svg>
                <p class="text-lg group-hover:text-xl transition-all duration-300">Historia</p>
              </router-link>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
  
  <script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref } from 'vue'

const buttonRef = ref(null)

const handleClick = () => {
  setTimeout(() => {
    if (buttonRef.value) {
      buttonRef.value.blur()
    }
  }, 100)
}
</script>

