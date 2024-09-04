<template>

  <button @click="add('composition api')">Clique aqui {{ count }}</button>

  <!-- Jeito incorreto de se trabalhar, chamando uma função para fazer a atualização -->
  <!-- <input type="text" @keyup="changeName" placeholder="Digite o nome"> -->

  <input type="text" v-model="userName" placeholder="Digite o nome">

  {{ userName }}

</template>

<script setup>

  import {ref} from "vue";

  let count = ref(0);
  let userName = ref('');

  function add(teste){
    console.log(teste)
    count.value++;
  }

  function changeName(event){
    userName.value = event.target.value;
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
