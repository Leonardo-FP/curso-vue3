<template>

  <button @click="add('composition api')">Clique aqui {{ count }}</button>

</template>

<script setup>

  import {ref} from "vue";

  let count = ref(0);

  function add(teste){
    console.log(teste)
    count.value++;
  }

</script>


<style scoped>
  .my-class {
    border: solid 4px red;
  }

  .my-other-class {
    border: solid 4px blue;
  }
</style>
