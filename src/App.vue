<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
main {
  background-color: hsl(234, 29%, 20%);
  position: relative;
}

.white-bg {
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 60px;
}
</style>
