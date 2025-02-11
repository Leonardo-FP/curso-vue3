<template>
  <Nav />

  <router-view></router-view> 

  <input type="text" placeholder="search" @keyup="search">
</template>

<script setup>
  import Nav from '@/components/Nav.vue'
  import _ from 'lodash';

  const search = _.debounce(() => {
    console.log('search');
  }, 1000)
</script>

<style scoped>
  
</style>
