<template>
  <button @click="$store.commit('increment')">Add</button>
  <!-- <button @click="increment">Add</button> -->
  {{ $store.state.count }}
  <hr>
  {{ $store.getters.getCounter }}
</template>

<script>
  
  export default {
    methods:{
      increment(){
        // this.$store.dispatch('increment')
        this.$store.commit('increment')
      }
    }
  }

</script>