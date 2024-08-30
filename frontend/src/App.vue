<template>

  <!-- Condicional IF e ELSE -->
  <template v-if="showHeader">
    <Header />
  </template>
  <template v-else>
    Sem Header
  </template>

  <hr>

  <!-- Condicional SHOW -->
  <span v-show="showHeader">
    <Header />
  </span>

  <hr>

  <h2>Lista de Usuários</h2>
  <ul>
    <li v-for="user in users" :key="user.id">
        {{ user.firstName }} 
        <button v-if="user.is_admin === 1">Change to not admin</button>
    </li>
  </ul>

</template>

<script>
  
  import http from '@/services/http.js';
  import Header from '@/components/Header.vue';

  export default {
    components:{Header},
    data(){
      return {
        users:[],
        showHeader: false
      }
    },

    async mounted(){
      try{
        
        const {data} = await http.get('api/users');
        this.users = data;

      } catch(error) {
        console.log(error)
      }
    },

    updated(){
      console.log('updated');
    }
  }

</script>
