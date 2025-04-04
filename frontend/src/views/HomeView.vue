<template>
  <button @click="store.dispatch('increment')">Add</button>
  {{ store.state.count }}

  <hr>

  {{ store.getters.getCounter }}
</template>

<script setup>
  import {useStore} from 'vuex';

  const store = useStore();

  function increment(){
    store.dispatch('increment')
  }
</script>