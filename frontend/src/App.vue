<template>
  <!-- <Nav /> -->

  <router-view></router-view>

</template>

<script>
  
  import Nav from '@/components/Nav.vue';
  import CountChild from './components/CountChild.vue';
  import _ from 'lodash';

  export default {
    
    components:{Nav, CountChild},
    data(){
      return {
        count:0,
        items:[]
      }
    },

    mounted(){
      console.log(this.$refs.item)
    },

    methods:{
      add(value){
        this.count+=value
      },

      addItem(){
        this.items.push(Date.now())
      },

      remove(index){
        console.log(index)

        this.items.splice(index, 1)
      },

      search: _.debounce(() => {
        console.log('search')
      }, 1000)
    }
  }

</script>

<style scoped>
  
</style>