<template>
  <button @click="increment">Add</button>
  {{ count }}

  <hr>

  <ul>
    <li v-for="(user, index) in usersData" :key="index">{{ user.firstName }}</li>
  </ul>

  <hr>

  {{ getTotalUsers }}

  <hr>

  {{ name }}
</template>

<script>
  
  import count from '@/mixins/count';
  import users from '@/mixins/users';

  export default {

    mixins:[count, users],

    data(){
      return{
        name:'Leo'
      }
    },

    mounted(){
      console.log('Chamou de dentro do Mounted do componente')
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