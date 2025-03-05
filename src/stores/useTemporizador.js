import { defineStore } from 'pinia'

export const useTemporizador = defineStore('temporizador', {
  state: () => ({
    time: 0,
    isRunning: false,
    interval: null,
    markCardMoved: false,
    zindez: true
  }),
  actions: {
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true
        this.interval = setInterval(() => {
          this.time++
        }, 1000)
      }
    },
    stopTimer() {
      if (this.isRunning) {
        clearInterval(this.interval)
        this.isRunning = false
      }
    },
    markCardMoved() {
      this.hasMovedCard = true; 
      this.startTimer(); 
    },
    hiddenCart() {
      this.zindez = !this.zindez;
    }
  },
})
