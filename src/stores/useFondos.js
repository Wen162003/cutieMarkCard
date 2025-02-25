import { defineStore } from 'pinia'

export const useFondos = defineStore('fondos', {
  state: () => ({
    fondoSeleccionado:
      'https://res.cloudinary.com/dpqutwvio/image/upload/v1740198851/fondo_kaqrqc.jpg',
    opciones: [
      'https://res.cloudinary.com/dpqutwvio/image/upload/v1740198851/fondo_kaqrqc.jpg',
      'https://res.cloudinary.com/dpqutwvio/image/upload/v1738980428/Fondo2_edhriw.jpg',
      'https://res.cloudinary.com/dpqutwvio/image/upload/v1738980654/Fondo_hfrrfu.webp',
      'https://res.cloudinary.com/dpqutwvio/image/upload/v1740198869/fondoss_t0q4gb.png',
    ],
  }),
  actions: {
    seleccionarFondo(index) {
      this.fondoSeleccionado = this.opciones[index]
    },
  },
  persist: true,
})
