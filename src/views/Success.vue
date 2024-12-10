<template>
  <div class="white-bg">
    <div class="wrapper">
      <img src="@/assets/images/icon-success.svg" alt="" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{{ emailStore.email }}</span
        >. Please open it and click the button inside to confirm your subscription.
      </p>
    </div>
    <button>Dismiss message</button>
  </div>
</template>

<script setup lang="ts">
import { useEmailStore } from '@/stores/emailStore'
const emailStore = useEmailStore()
</script>

<style scoped lang="scss">
.wrapper {
  @media (max-width: 375px) {
    position: absolute;
    top: 30%;
    transform: translateY(-30%);
    padding: 20px;
  }
}
.white-bg {
  padding: 5%;
  border-radius: 15px;
  @media (max-width: 600px) {
    width: 60%;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    border-radius: 0;
  }
  h1 {
    // font-size: 3vw;
    font-weight: 700;
    margin: 2vw 0;
    // @media (max-width: 600px) {
    //   font-size: 6vw;
    //   margin: 4vw 0;
    // }
    // @media (max-width: 375px) {
    //   font-size: 10vw;
    //   margin: 10vw 0;
    // }
    font-size: 2.3rem;
    color: hsl(234, 29%, 20%);
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
    @media (max-width: 600px) {
      margin: 4vw 0;
    }
    @media (max-width: 375px) {
      margin: 10vw 0;
      font-size: 2rem;
    }
  }
  img {
    width: 5vw;
    height: auto;
    @media (max-width: 600px) {
      width: 8vw;
    }
    @media (max-width: 375px) {
      width: 20%;
    }
  }
  p,
  button,
  span {
    font-size: 1rem;
    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
    // font-size: 1.5vw;
    // line-height: normal;
    // @media (max-width: 600px) {
    //   font-size: 3vw;
    //   line-height: 25px;
    // }
    // @media (max-width: 375px) {
    //   font-size: 5vw;
    //   line-height: 28px;
    // }
  }
  p {
    span {
      font-family: 'Roboto-Bold';
      font-weight: 700;
    }
  }
  button {
    width: 100%;
    border: none;
    background-image: linear-gradient(#fe5b63, #ff8754);
    margin-top: 2vw;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #fff;
    cursor: pointer;
    @media (max-width: 600px) {
      margin: 5vw 0;
    }
    @media (max-width: 375px) {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -90%);
      width: 90%;
    }
  }
}
p,
h1,
span {
  color: hsl(234, 29%, 20%);
}
</style>
