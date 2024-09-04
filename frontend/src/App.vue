<template>

  <form action="http://google.com.br">
    <input type="text" placeholder="Buscar">
    <button @click.submit.prevent="search">Enviar</button>
  </form>

  <!-- Faz a função do Event.PreventDefault -->
  <a href="http://google.com.br" @click.prevent="search">Ir para o Google</a>
  {{ age }}
  <!-- Faz com que só seja executado uma vez -->
  <button @click.prevent.once="age++">Acrescentar idade</button>

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
      search(event){
        console.log('buscou')
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