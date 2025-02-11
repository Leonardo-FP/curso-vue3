<template>

  <input type="text" name="" id="" placeholder="Search" v-model="userSearch" @keyup="search">

  <ul>
    <li v-for="(user, index) in users['users']">{{ user.firstName }} {{ user.lastName }}</li>
  </ul>

  <div v-html="userNotFound"></div>

</template>

<script setup>

  import http from '@/services/http.js';
  import { onMounted, ref, reactive, computed } from 'vue';
  import _ from 'lodash';

  const users = reactive({users:[]});
  const userSearch = ref();
  const loading = ref(true);
  const userNotFound = computed(() => {
    return (!loading.value && users['users'].length <= 0) ? '<span id="notFound">Nenhum user encontrado</span>' : ''
  })

  onMounted(async () => {
    try{

      const {data} = await http.get('/api/users');
      users['users'] = data;

    } catch(error) {

      console.log(error.response.data)

    }
  })

  const search = _.debounce(async () => {
    
    try{

      const {data} = await http.get('/api/users/search',{
        params:{
          user:userSearch.value
        }
      })

      users['users'] = data;
      loading.value = false;

    } catch(error) {
      console.log(error.response.data);
    }

  },1000)

</script>

<style>
  #notFound {
    color: red;
  }
</style>
