<template>
  <button @click="showSomething()">Show</button>

  <button @click="open = !open">Open Modal</button>

  <teleport to="#modal">
    <Modal v-if="open">
      Qualquer coisa
    </Modal>
  </teleport>

</template>

<script>
  import Modal from '@/components/Modal.vue';
  export default {

    data(){
      return {
        showElement:false,
        open:false,
      }
    },

    components:{
      Modal
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

<style>
  #app {
    color: tomato;
  }

  #lorem {
    color: blue;
  }
</style>