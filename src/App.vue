<script setup lang="ts">
import { userUserStore } from "./store/user"
import { storeToRefs } from "pinia"
import { computed } from "vue"

// 初始化
const store = userUserStore()

// 解构  Pinia 中数据 
// 普通解构 
// const { name } = store;
// console.log(name)  // 得到普通的 字符串  "Yellow-sea" 不具有响应性

// 使用 storeToRefs 解构
const { name } = storeToRefs(store);  // 使用storeToRefs
console.log(name) // 得到 ObjectRefImpl 的对象 name  具备响应性

// 也可在vue中使用 计算属性访问 属性
const Uname = computed(() => store.name)



// 2. 修改数据
// store.name = '李四'  // 直接修改属性
// 但一般不建议这么做，建议通过 actions 去修改 state，action 里可以直接通过 this 访问。


</script>

<template>
  <h2>{{ store.name }}</h2>
  <h2>{{ store.age }}</h2>

  <h2>Getters 绑定方法 {{ store.firstName }}</h2>
  <h2>Getters 绑定方法 {{ store.lastName }}</h2>

  <h2>Action 绑定的方法</h2>
  <button @click="store.changeState">changeStore</button>
  <button @click="store.getProps('NewIndex')">changeStore</button>

  <h2>Vue计算属性： {{ Uname }}</h2>

  <hr>

  <h2>actions中方法相互调用</h2>
  <button @click="store.setData">setData</button>


  <h2>使用引入的文件的store</h2>
  <ul v-for="index in store.getTableList">
    <li>{{ index }}</li>
  </ul>
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
