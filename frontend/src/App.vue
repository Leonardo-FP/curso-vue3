<template>

  <!-- Chama a função caso qualquer tecla tenha sido clicada -->
  <input type="text" placeholder="Digite algo" @keyup="anyKey">

  <!-- Chama a função caso o modificador especificado tenha sido clicado -->
  <input type="text" placeholder="Digite enter" @keyup.enter="specificKey">

</template>

<script>
  
  export default {
    data(){
      return {
        age:21,
      }
    },

    updated(){
      console.log('updated');
    },

    methods:{
      anyKey(){
        console.log('Pressionou qualquer tecla')
      },
      
      specificKey(){
        console.log('Pressionou a tecla enter')
      },
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