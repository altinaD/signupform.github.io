<template>
  <div class="left-wrapper">
    <h1>Stay updated!</h1>
    <p>Join 60,000+ product managers receiving monthly updates on:</p>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img src="@/assets/images/icon-list.svg" alt="" />
        <p>{{ item }}</p>
      </li>
    </ul>
    <Form />
  </div>
</template>

<script setup lang="ts">
import Form from '@/components/main/Form.vue'
import { ref } from 'vue'

const list = ref<string[]>([
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
])
</script>

<style scoped lang="scss">
.left-wrapper {
  h1 {
    font-family: 'Roboto-Bold';
    font-weight: 700;
    font-size: 2.3rem;
    color: hsl(234, 29%, 20%);
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
    @media (max-width: 375px) {
      margin-top: 5%;
      font-size: 2rem;
    }
  }
  h1,
  p {
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      margin-bottom: 10px;
    }
  }
  p,
  li {
    font-size: 1rem;
    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
  }
  ul li {
    list-style: none;
    // white-space: nowrap;
    margin: 7px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    img,
    p {
      display: inline;
    }
    img {
      margin-right: 10px;
      @media (max-width: 1024px) {
        margin-right: 5px;
        transform: scale(0.75);
      }
    }
  }
}
</style>
