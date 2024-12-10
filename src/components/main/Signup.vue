<template>
  <div class="signup-wrapper">
    <div class="left">
      <Left />
    </div>
    <div class="right">
      <div
        class="right-img-wrapper"
        :style="{
          backgroundImage: 'url(' + imgUrl + ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Left from '@/components/main/Left.vue'
import imgUrl from '../../assets/images/illustration-sign-up-desktop.svg'
</script>

<style scoped lang="scss">
.signup-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column;
  }
  div {
    position: relative;
  }
  .left,
  .right {
    position: relative;
    width: 50%;
    @media (max-width: 375px) {
      width: 100%;
    }
  }
  .left {
    padding: 4vw 3vw;
    @media (max-width: 600px) {
      padding: 4vw;
    }
    @media (max-width: 375px) {
      order: 2;
    }
  }
  .right {
    overflow: hidden;
    display: flex;
    justify-content: end;
    padding: 20px;
    @media (max-width: 375px) {
      order: 1;
      height: 45vh;
      padding: 0;
    }
    .right-img-wrapper {
      height: 100%;
      width: 100%;
      background-color: #000;
      border-radius: 25px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>
