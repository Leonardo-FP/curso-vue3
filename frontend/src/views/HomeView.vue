<template>
  <button @click="showSomething()">Show</button>

  <input type="text" ref="inputElement" v-if="showElement">
</template>

<script>
  export default {

    data(){
      return {
        showElement:false
      }
    },

    methods:{
      async showSomething(){
        this.showElement = true;

        // Permite acessar os elementos do DOM após carregados
        // Também é possível implementar o await nele, para esperar que seja carregado antes do que vêm antes
        await this.$nextTick(() => {
          this.$refs.inputElement.focus();
          console.log('focus')
        })

        console.log('carregou')
      }
    }

  }
</script>