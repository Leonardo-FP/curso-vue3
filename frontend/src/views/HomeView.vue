<template>
  <h2>Home</h2>

  {{ fullName }}

  <h2>Admin</h2>
  <ul>
    <template v-for="(user, index) in users" :key="index">
      <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not admin</h2>
  <ul>
    <li v-for="(user, index) in usersIsNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

  {{ functionCount() }}
  <button @click="countFunction++">add function</button>
  
  <br>

  {{ computedCount }}
  <button @click="countComputed++">add computed</button>
</template>

<script>
  export default {
    data(){
      return {
        countComputed:0,
        countFunction:0,

        user:{
          firstName:'Leonardo',
          lastName:'Paulelli'
        },

        users:[
          {
            firstName:'Leonardo',
            is_admin:1
          },
          {
            firstName:'Lorenzzo',
            is_admin:0
          },
          {
            firstName:'Ana Beatriz',
            is_admin:1
          },
          {
            firstName:'Lucimara',
            is_admin:0
          },
        ]
      }
    },

    computed:{
      fullName(){
        return this.user.firstName + ' ' + this.user.lastName
      },

      usersIsNotAdmin(){
        return this.users.filter((user) => user.is_admin === 0)
      },

      computedCount(){
        console.log('called computed');
        return this.countComputed;
      }
    },

    methods:{
      functionCount(){
        console.log('called function');
        return this.countFunction;
      }
    }
  }
</script>


