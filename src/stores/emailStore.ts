import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', {
  state: () => ({
    email: '',
  }),
  actions: {
    setEmail(newEmail: string) {
      this.email = newEmail
    },
  },
})
