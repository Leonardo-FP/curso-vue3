<template>
  <button @click="open = !open">Abrir Modal</button>
  
  <teleport to="#modal">
    <Modal v-if="open">
      Conteúdo do Modal
    </Modal>
  </teleport>
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  import Modal from '@/components/Modal.vue';
  
  const showElement = ref(false);
  const inputElement = ref(null);
  const open = ref(false);

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

<style>
  #app {
    color: tomato;
  }
</style>