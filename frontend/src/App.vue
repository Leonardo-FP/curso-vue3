<template>

  <input type="text" name="" id="" v-model="userName">

  <template v-for="user in users">
    <input type="checkbox" @click="userName = user.firstName" :checked="userName === user.firstName"> {{ user.firstName }}
  </template>

  <select name="" v-model="userName">
    <option :value="user.firstName" v-for="user in users">{{ user.firstName }}</option>
  </select>

</template>

<script setup>
  import { reactive, ref } from 'vue';

  const users = reactive([
    {
      id:1,
      firstName:'Leo'
    },
    {
      id:2,
      firstName:'Ana'
    },
    {
      id:3,
      firstName:'Beatriz'
    }
  ])

  const userName = ref('Leo')

</script>


<style scoped>
  
</style>
