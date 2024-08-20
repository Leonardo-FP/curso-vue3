<template>

  {{ count }}

  <button v-on:click="count++">Add</button>
  
  <h2>App</h2>

  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>

  <router-view></router-view>

</template>

<script setup>
  import { onMounted, onUpdated, ref } from 'vue';

  const count = ref(0);

  onMounted(() => {
    console.log('mounted')
  })

  onUpdated(() => {
    console.log('updated')
  })
</script>


<style scoped>
  
</style>
