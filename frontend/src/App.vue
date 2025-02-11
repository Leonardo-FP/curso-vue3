<template>
  <Nav />

  <router-view></router-view> 

  <img src="https://picsum.photos/200" alt="" id="img" ref="img">

  <ul>
    <li v-for="(product, index) in products" :key="index" id="product" ref="product">{{ product.name }}</li>
  </ul>
</template>

<script setup>
  import Nav from '@/components/Nav.vue'
  import CountChild from './components/CountChild.vue';
  import {ref, onMounted, reactive} from 'vue';

  const count = ref(0);

  const img = ref(null);
  const product = ref([]);

  const products = reactive([
    {
      id:1,
      name:'Imac'
    },
    {
      id:2,
      name:'Iphone'
    }
  ])

  onMounted(() => {
    // console.log(document.querySelector('#img'));
    // console.log(document.querySelectorAll('#product'));
    console.log(product.value);
  })
</script>


<style scoped>
  
</style>
