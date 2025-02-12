<template>

  <input type="text" name="" id="" placeholder="Search" v-model="userSearch" @keyup="search">

  <ul>
    <li v-for="(user, index) in users['users'].data">{{ user.firstName }} {{ user.lastName }}</li>
  </ul>

  <Bootstrap5Pagination 
    :data="users['users']"
    @pagination-change-page="getUsers" 
  />

  <div v-html="userNotFound"></div>

</template>

<script setup>

  import http from '@/services/http.js';
  import { onMounted, ref, reactive, computed } from 'vue';
  import _ from 'lodash';
  import { Bootstrap5Pagination } from 'laravel-vue-pagination';

  const users = reactive({users:[]});
  const userSearch = ref();
  const loading = ref(true);


  async function getUsers(page = 1) {
    try{

      const {data} = await http.get('/api/users?page='+Number(page));
      users['users'] = data;

    } catch(error) {

      console.log(error.response.data)

    }
  }

  const userNotFound = computed(() => {
    return (!loading.value && users['users'].length <= 0) ? '<span id="notFound">Nenhum user encontrado</span>' : ''
  })

  onMounted(() => {
    getUsers();
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
