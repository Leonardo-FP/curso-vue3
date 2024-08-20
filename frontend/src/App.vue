<template>
  
  <Header />

  <button v-on:click="add">Add {{ count }}</button>

  <h2>App</h2>

  <Footer/>

</template>

<script setup>

  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { ref } from 'vue';

  const count = ref(0);

  function add() {
    count.value++;
  }

</script>


<style scoped>
  
</style>
