<template>
  <button @click="increment(10)">Add</button>

  {{ count }}
  <hr>
  {{ $store.getters.getCounter }}
</template>

<script>
  
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

  export default {
    
    computed:{
      ...mapState(['count']),
      ...mapGetters(['getCounter'])
    },

    methods:mapMutations(['increment'])
  }

</script>