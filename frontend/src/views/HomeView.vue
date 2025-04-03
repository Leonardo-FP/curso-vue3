<template>
  <button @click="increment">Add</button>
  {{ count }}

  <hr>

  <ul>
    <li v-for="(user, index) in users['users']" :key="index">{{ user.firstName  }}</li>
  </ul>
</template>

<script setup>
  import { onMounted } from 'vue';
  import {useCount} from '@/composables/count.js';
  import {useUsers} from '@/composables/users.js';
  
  const {count, increment} = useCount();
  const {users} = useUsers();
  
  onMounted(() => {
    console.log('onMounted no componente');
  })
</script>