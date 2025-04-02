<template>

  <input type="text" placeholder="Search" @keyup="search" v-model="searchInput">

  <ul>
    <li v-for="(user, index) in users.data" :key="index">{{ user.firstName }} {{ user.lastName }}</li>
  </ul>

  <Bootstrap5Pagination  
    :data="users" 
    @pagination-change-page="handlePagination" 
    :limit="5"
    align="center"
  />

  <div v-html="userNotFound"></div>

</template>

<script>
  import http from '@/services/http.js';
  import _ from 'lodash';
  import {Bootstrap5Pagination  } from 'laravel-vue-pagination';

  export default {

    components:{Bootstrap5Pagination },
    
    data(){
      return {
        users:[],
        loading:true,
        searchInput:'',
      }
    },

    computed:{
      userNotFound(){
        return (!this.loading && this.users.data.length <=0) ? '<span id="notFound">Nenhum user encontrado</span>' : ''
      }
    },
    
    mounted(){
      this.getUsers();
    },

    methods:{

      handlePagination(page){
        return this.searchInput ? this.searchUsers(page) : this.getUsers(page);
      },
      
      async getUsers(page = 1){
        try{
          const {data} = await http.get('/api/users?page='+Number(page));
          this.loading = false;
          this.users = data;
        }catch(error){
          console.log(error.response.data);
        }
      },

      async searchUsers(page = 1){
        try{
          const {data} = await http.get('/api/users/search?page='+Number(page),{
            params:{
              user: this.searchInput
            }
          })

          if(!this.searchInput){
            this.getUsers();
          }else{
            this.users = data;
          }

          this.users = data;
        }catch(error){
          console.log(error.response.data);
        }
      },
      
      search:_.debounce(async function (event) {
        this.searchUsers();
      }, 1000)
    }
  }
</script>

<style >
  #notFound {
    color: red;
  }
</style>

