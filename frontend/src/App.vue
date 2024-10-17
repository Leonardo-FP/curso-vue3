<template>
  <Nav />

  <router-view></router-view>

  <ul>
    <li v-for="(item, index) in items" :key="index" ref="item">{{ item.name }}</li>
  </ul>

  <img src="https://picsum.photos/200" alt="" ref="img">
</template>

<script>
  
  import Nav from '@/components/Nav.vue';
  import CountChild from './components/CountChild.vue';

  export default {
    
    components:{Nav, CountChild},
    data(){
      return {
        count:0,
        items:[
          {
            name:'teste'
          },
          {
            name:'teste1'
          }
        ]
      }
    },

    mounted(){
      // console.log(document.querySelectorAll('#item'))
      // Trabalhar com refs substitui utilizar o querySelect do javascript
      console.log(this.$refs.item)
      console.log(this.$refs.img)
      console.log(this.$refs.img['src'])
    },

    methods:{
      add(value){
        this.count+=value
      }
    }
  }

</script>

<style scoped>
  
</style>