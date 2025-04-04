<template>
  <!-- <Nav /> -->
  <router-view></router-view> 
  <hr>
  <Counter />

</template>

<script setup>
  import Nav from '@/components/Nav.vue'
  import Counter from './components/Counter.vue';
</script>

<style scoped>
  
</style>
