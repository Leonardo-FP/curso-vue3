<template>

  <!-- <input type="text" @keyup="add" placeholder="Digite"> -->

  <!-- Digitando no input, o valor é atualizado, porém não é a melhor forma de se fazer -->
  <!-- <input type="text" @keyup="alterName" placeholder="Digite"> -->

  <!-- Usando o v-model, o valor reativo é atualizado -->
  <input type="text" v-model="userName" placeholder="Digite o nome">

  {{ userName }}

  <button @click="count++">{{ count }}</button>

</template>

<script>
  
  export default {
    data(){
      return {
        count:0,
        userName:''
      }
    },

    updated(){
      console.log('updated');
    },

    methods:{
      add(event){
        this.count+=Number(event.target.value);
      },

      alterName(event){
        this.userName=event.target.value;
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