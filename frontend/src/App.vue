<template>

  {{ count }}

  {{ userName }}

  <ul>
    <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
  </ul>

  <button v-on:click="count++">Add</button>
  
  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>

</template>

<script setup>
  import { onMounted, onUpdated, reactive, ref } from 'vue';

  const count = ref(0);
  const userName = ref("Leonardo");

  const users = reactive([
    {
      firstName:"Leonardo",
      age:21
    },
    {
      firstName:"Ana",
      age:23
    },
  ])

  onMounted(() => {
    console.log('mounted')
  })

  onUpdated(() => {
    console.log('updated')
  })
</script>


<style scoped>
  
</style>
