<template>
 <form action="">
  <input type="text" v-model="user.firstName" id="" placeholder="First Name">
  <span class="error" v-if="errors['firstName']">{{  errors['firstName'][0] }}</span>

  <input type="text" v-model="user.lastName" id="" placeholder="Last Name">
  <span class="error" v-if="errors['lastName']">{{  errors['lastName'][0] }}</span>

  <input type="text" v-model="user.email" id="" placeholder="Email">
  <span class="error" v-if="errors['email']">{{  errors['email'][0] }}</span>

  <input type="text" v-model="user.password" id="" placeholder="Password">
  <span class="error" v-if="errors['password']">{{  errors['password'][0] }}</span>

  <button @click.submit.prevent="create">Cadastrar</button>
 </form>
</template>

<script>
  import http from '@/services/http.js';

  export default {
    name: "UserCreateView.vue",
    data(){
      return{
        user:{},
        errors:[]
      }
    },
    methods:{
      async create(){
        try{

          const {data} = await http.post('api/user', this.user);
          console.log(data);

        } catch(errors){
          if(errors.response?.data){
            this.errors = errors.response.data['errors'];
          }
          console.log(this.errors)
        }
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
