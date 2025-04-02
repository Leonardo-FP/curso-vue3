<template>
  <button @click="showSomething()">Show</button>
  
  <input type="text" v-if="showElement" ref="inputElement">
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  
  const showElement = ref(false);
  const inputElement = ref(null);

  async function showSomething(){
    showElement.value = true;

    // Serve para ter acesso ao DOM atualizado
    await nextTick(() => {
      inputElement.value.focus();
      console.log('focus')
    })

    console.log('carregou')
  }
</script>
