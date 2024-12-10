<template>
  <div class="white-bg">
    <Signup />
  </div>
</template>

<script setup lang="ts">
import Signup from '@/components/main/Signup.vue'
</script>

<style scoped lang="scss">
.white-bg {
  overflow: hidden;
  max-width: 1440px;
  min-width: 60%;
  @media (max-width: 600px) {
    min-width: 90%;
  }
  @media (max-width: 375px) {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
}
</style>
