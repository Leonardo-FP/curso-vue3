<template>

  <!-- Ao invés de colocar o "v-on:click", basta um arroba para chamar os eventos possíveis -->
  <button @click="count++">Clique aqui {{ count }}</button>

  <br>

  <!-- É possível chamar uma função para casos mais complexos -->
  <button @click="add('teste')">Clique aqui {{ countFunc }}</button>
</template>

<script>
  
  export default {
    data(){
      return {
        count:0,
        countFunc:0
      }
    },

    updated(){
      console.log('updated');
    },

    methods:{
      add(teste){
        console.log(teste),
        this.countFunc++
      }
    }
  }

</script>

<style scoped>
  .my-class{
    border: solid 4px red;
  }

  .my-other-class{
    border: solid 4px blue;
  }
</style>