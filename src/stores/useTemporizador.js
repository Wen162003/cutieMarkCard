import { defineStore } from 'pinia'

export const useTemporizador = defineStore('temporizador', {
  state: () => ({
 time: 0,
 isRunning: false,
 interval: null


  }),
  actions: {
   toggleTimer  () {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => {
          this.time++;
        }, 1000);
      }
      this.isRunning = !this.isRunning;
    }
  },
})
