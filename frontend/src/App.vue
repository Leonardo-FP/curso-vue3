<template>

  <!-- Forma simplificada -->
  <img :src="imageSrc" class="my-default-class" :class="classImage">

  <!-- Condicionais no v-bind -->
  <img :src="imageSrc" :class="{'my-class':showImage, 'my-other-class':!showImage}">

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
        showHeader: false,
        showImage:false,
        imageSrc:'https://picsum.photos/200',
        classImage:'my-class'
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

<style scoped>
  .my-class{
    border: solid 4px red;
  }

  .my-other-class{
    border: solid 4px blue;
  }
</style>