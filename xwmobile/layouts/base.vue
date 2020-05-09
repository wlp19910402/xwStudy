<template>
  <v-app drak>
    <v-container>
      <div class="icon">
        <img class="logo" alt="Logo" src="../assets/images/logo.png" />
      </div>
      <nuxt />
    </v-container>
  </v-app>
</template>

<style>
.icon {
  width: 6rem;
  height: 6rem;
  margin: 3rem auto 0;
  position: relative;
}
.logo {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
