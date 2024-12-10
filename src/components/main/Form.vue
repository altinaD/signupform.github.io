<template>
  <div class="form-wrapper">
    <h1>Email address</h1>
    <form @submit.prevent="checkMail">
      <input
        v-model="emailStore.email"
        type="email"
        name="email"
        placeholder="email@company.com"
        id="email"
        required
      />
      <button :class="{ active: isActive }" type="submit" :disabled="!isActive">
        Subscribe for monthly newsletter
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEmailStore } from '@/stores/emailStore'

const emailStore = useEmailStore()

const isActive = computed(() => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(emailStore.email)
})

const router = useRouter()

function checkMail() {
  if (isActive.value) {
    router.push('/success')
  } else {
    console.log('Email Invalid')
  }
}
</script>

<style scoped lang="scss">
.form-wrapper {
  margin-top: 7%;
  h1 {
    font-size: 1rem;
    font-family: 'Roboto-Bold';
    font-weight: 700;
    margin-bottom: 7px;
    color: hsl(234, 29%, 20%);
  }
  input,
  button {
    box-shadow: none;
    width: 100%;
    border-radius: 5px;
    padding: 5%;
  }
  input {
    color: #9e9e9e;
    border-color: #ccc;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    &:focus {
      border: 1px solid hsl(234, 29%, 20%);
      outline: none;
      color: rgb(108, 107, 107);
    }
  }
  button {
    background-color: hsl(234, 29%, 20%);
    color: #fff;
    border: none;
    &.active {
      background-color: orange;
    }
  }
  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
  h1,
  input,
  button {
    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
  }
}
</style>
