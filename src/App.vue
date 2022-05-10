<script setup lang="ts">
import { userUserStore } from "./store/user"

const store = userUserStore()
</script>

<template>
  <h2>{{ store.name }}</h2>
  <h2>{{ store.age }}</h2>

  <h2>Getters 绑定方法 {{ store.firstName }}</h2>
  <h2>Getters 绑定方法 {{ store.lastName }}</h2>

  <h2>Action 绑定的方法</h2>
  <button @click="store.changeState">changeStore</button>
  <button @click="store.getProps('NewIndex')">changeStore</button>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
