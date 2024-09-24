<template>
  <h2>Full name</h2>
  {{ fullName }}

  <h2>Admin</h2>
  <ul>
    <template v-for="(user, index) in users" :key="index">
        <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not admin</h2>
  <ul>
    <template v-for="(user, index) in usersNotAdmin" :key="index">
        <li>{{ user.firstName }}</li>
    </template>
  </ul>

  {{ countComputed }}
  <button @click="computedCount++">Add computed</button>
  <br>
  {{ countFunction() }}
  <button @click="functionCount++">Add function</button>
</template>

<script setup>
  import {computed, reactive, ref} from 'vue';

  const user = reactive({
    firstName:'Leonardo',
    lastName:'Paulelli'
  })

  const computedCount = ref(0);
  const functionCount = ref(0);

  const users = reactive([
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
      is_admin:0
    },
    {
      firstName:'Lucimara',
      is_admin:1
    }
  ])

  const fullName = computed(() => {
    return user.firstName + ' ' + user.lastName
  })

  const usersNotAdmin = computed(() => {
    return users.filter((user) => user.is_admin === 0);
  })

  const countComputed = computed(() => {
    console.log('called computed count');
    return computedCount.value;
  })

  function countFunction(){
    console.log('called function count');
    return functionCount.value;
  }
</script>
